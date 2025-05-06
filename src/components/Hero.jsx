import React, { useState } from "react";
import Calender from "./Calender";

function Hero() {
  const [guestName, setGuestName] = useState('');
  const [invitationLink, setInvitationLink] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('error');

  const showCustomAlert = (message, type = 'error') => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const generateInvitationLink = () => {
    if (!guestName.trim()) {
      showCustomAlert('Silakan masukkan nama tamu terlebih dahulu');
      return;
    }

    const baseUrl = window.location.origin;
    const encodedName = encodeURIComponent(guestName.trim());
    const link = `${baseUrl}/invitation?to=${encodedName}`;
    
    setInvitationLink(link);
    setShowCard(true);
    showCustomAlert('Link undangan berhasil dibuat!', 'success');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(invitationLink)
      .then(() => showCustomAlert('Link berhasil disalin!', 'success'))
      .catch(err => {
        console.error('Gagal menyalin:', err);
        showCustomAlert('Gagal menyalin link');
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      {/* Custom Alert Component */}
      {showAlert && (
        <div className="fixed top-4 right-4 z-50 w-full max-w-sm animate-fade-in">
          <div role="alert" className={`alert alert-${alertType} shadow-lg transition-all duration-300`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
              {alertType === 'success' ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              )}
            </svg>
            <span>{alertMessage}</span>
            <button 
              className="btn btn-sm btn-circle btn-ghost"
              onClick={() => setShowAlert(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="hero-content text-center flex flex-col">
        {/* <h1 className="text-xl font-bold">Tentukan Tanggal Mulai</h1>
        <Calender/>
        <button 
            className="btn btn-primary w-full"
          >
            Tentukan tanggal mulai
          </button> */}
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mt-10 mb-10">Undangan Pernikahan</h1>
          
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
          <div className="card bg-base-100 shadow-xl w-full max-w-md mt-8 animate-fade-in">
            <div className="card-body">
              <h2 className="card-title">Link Undangan Khusus:</h2>
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