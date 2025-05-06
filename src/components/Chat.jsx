import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiOutlineSend } from "react-icons/ai";

function Chat() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [attendance, setAttendance] = useState('Hadir');


  // Ambil data dari localStorage saat pertama kali render
  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    console.log('Saved messages from localStorage:', savedMessages);  // Debug log
    setMessages(savedMessages);
  }, []);

  // Simpan ke localStorage setiap kali messages berubah
  useEffect(() => {
    if (messages.length > 0) {
      console.log('Saving messages to localStorage:', messages);  // Debug log
      localStorage.setItem('messages', JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newMessage = { sender: name.trim(), text: message.trim(), status: attendance };
    setMessages((prev) => [...prev, newMessage]);
    setMessage('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-5 text-pink border-pink font-casual2" data-aos="fade-up">
      {/* Form Input */}
      <div className="w-full max-w-lg mb-4">
        <form onSubmit={handleSubmit}>
          <fieldset className="border border-pink p-6 rounded-box">
            <legend className="text-lg font-semibold px-2">Kirim Ucapan</legend>
            <div className=''>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Nama</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full bg-transparent rounded-full border-pink"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Pesan</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full bg-transparent rounded-full border-pink"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <div className="p-4 flex gap-4 justify-center items-center">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="attendance"
                value="Hadir"
                checked={attendance === 'Hadir'}
                onChange={(e) => setAttendance(e.target.value)}
                className="radio bg-transparent border-main2 checked:text-main2"
              />
              Hadir
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="attendance"
                value="Tidak Hadir"
                checked={attendance === 'Tidak Hadir'}
                onChange={(e) => setAttendance(e.target.value)}
                className="radio bg-transparent border-main2 checked:text-main2"
              />
              Tidak Hadir
            </label>
          </div>

          <button type="submit" className="btn btn-ghost border hover:bg-pink border-pink w-full mt-2 rounded-full">
              Kirim Ucapan
              <div className='text-2xl'>
              <AiOutlineSend />
              </div>
              
            </button>

            </div>
          </fieldset>
        </form>
      </div>

      {/* Chat Messages */}
      {messages.length > 0 ? (
        <div className="w-full max-w-lg mx-auto bg-transparent border border-base-300 rounded-box p-4">
          <div className="space-y-4 max-h-60 overflow-y-auto text-pink">
            {messages.map((msg, index) => (
              <div key={index} className="chat chat-start text-pink ">
                <div className="chat-header">{msg.sender}
                <a className="text-xs opacity-50">{msg.status}</a>
                </div>
                <div className="chat-bubble bg-transparent border border-pink rounded-full text-base-content text-pink">{msg.text}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-lg mx-auto text-sm text-center py-8 text-pink">
          Kirimkan Pesan dan Konfirmasi Kehadiran
        </div>
      )}
    </div>
  );
}

export default Chat;
