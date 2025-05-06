import React, { useState } from 'react';
import itemData from '../data/imageData';
import { BiPaste } from "react-icons/bi";

function Card() {
  const [copiedItemId, setCopiedItemId] = useState(null); // State to track the id of the copied item

  const copyToClipboard = (text, itemId) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedItemId(itemId); // Set the id of the copied item
        setTimeout(() => setCopiedItemId(null), 2000); // Reset copied status after 2 seconds
      })
      .catch(() => {
        setCopiedItemId(null); // Handle error and reset
      });
  };

  return (
    <div className="px-4 md:px-10 py-10 text-pink">
      <h2 className="text-2xl font-bold mb-6 text-center">Daftar Item</h2>
      <div className="grid grid-cols-1 gap-6 border border-gray-200 shadow-md p-6 rounded-xl">
        {itemData.map((item) => (
          <div key={item.id} className="card card-side shadow-sm">
            <figure className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
              <img
                src={item.img}
                className="w-full h-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <button
                  className={`btn btn-wide border-pink rounded-full bg-transparent text-pink ${copiedItemId === item.id ? 'scale-105' : ''} transition-all duration-300`}
                  onClick={() => copyToClipboard(item.description, item.id)}
                >
                  {copiedItemId === item.id ? 'Disalin!' : 'Salin'} <BiPaste />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
