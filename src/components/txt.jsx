import { useState } from 'react';

function Hero() {
  const [guestName, setGuestName] = useState('');
  const [invitationLink, setInvitationLink] = useState('');
  const [showCard, setShowCard] = useState(false);

  const generateInvitationLink = () => {
    if (!guestName.trim()) {
      alert('Silakan masukkan nama tamu terlebih dahulu');
      return;
    }
    
    // Generate link unik berdasarkan nama tamu
    const baseUrl = window.location.href;
    const encodedName = encodeURIComponent(guestName.trim());
    const link = `${baseUrl}invitation?to=${encodedName}`;
    
    setInvitationLink(link);
    setShowCard(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(invitationLink)
      .then(() => alert('Link berhasil disalin!'))
      .catch(err => console.error('Gagal menyalin:', err));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center flex flex-col">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-10">Hello there</h1>
          
          <input 
            type="text" 
            className="input input-bordered w-full mb-4" 
            placeholder="Masukkan Nama Tamu"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
          />
          
          <button 
            className="btn btn-primary w-full"
            onClick={generateInvitationLink}
          >
            Buat Link Undangan
          </button>
        </div>

        {showCard && (
          <div className="card bg-base-100 shadow-xl w-full max-w-md mt-8">
            <div className="card-body">
              <h2 className="card-title">Link untuk tamu:</h2>
              <div className="bg-base-200 p-3 rounded-lg break-all mb-4">
                {invitationLink}
              </div>
              <p>Bagikan link ini kepada tamu</p>
              <div className="card-actions justify-center mt-4">
                <button 
                  className="btn btn-primary"
                  onClick={copyToClipboard}
                >
                  Salin Link
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;



// Fitur yang Ditambahkan:
// State Management:

// guestName: Menyimpan nama tamu yang diinput

// invitationLink: Menyimpan link yang dihasilkan

// showCard: Mengontrol tampilan card

// Fungsi Generate Link:

// Membuat link dengan parameter nama tamu

// Encode nama untuk URL yang aman

// Validasi input tidak kosong

// Fitur Copy Link:

// Menggunakan Clipboard API

// Notifikasi saat berhasil disalin

// Animasi dan UX:

// Card hanya muncul setelah tombol diklik

// Desain responsif dengan Tailwind

// Break-all untuk long URL

// Cara Kerja:
// User memasukkan nama tamu

// Klik "Buat Link Undangan"

// Sistem generate link dan tampilkan card

// Klik "Salin Link" untuk menyalin ke clipboard