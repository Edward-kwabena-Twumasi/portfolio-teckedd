// Certificates.js
import React, { useState } from 'react';
import Modal from 'react-modal';

import { certificates } from "../data.js";

const Achievements = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(certificates[0].img);

  const openModal = (img) => {
    setSelectedCertificate(img);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    setModalIsOpen(false);
  };

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(34%, 30%)',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      border: 'none',
      padding: '0',
      width: '80%', // Adjust the width as needed
      maxWidth: '1100px',
    },
  };

  return (
    <div className='flex flex-col w-full'>
      <h1 className="title p-4 text-white font-bold m-3 text-center">Certificates and Achievements</h1>
      <div className="flex flex-wrap">
        {certificates.map((certificate, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4 relative m-3 rounded-sm" style={{ backgroundImage: `url(${certificate.img})`, backgroundSize: "cover" }}>
            <div
              className="w-full h-64 object-cover rounded cursor-pointer"
              onClick={() => openModal(certificate.img)}
            >
              {/* Display certificate information */}
              <div className="p-4 bg-white bg-opacity-80 rounded">
                <h3 className="text-xl font-bold">{certificate.name}</h3>
                <p className="text-gray-500">{certificate.date}</p>
                <p>{certificate.issuer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Certificate Modal"
        className="Modal"
        style={customStyles}
      >
        {selectedCertificate && (
          <div
            className="rounded overflow-hidden"
            style={{
              backgroundImage: `url(${selectedCertificate})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '700px',
            }}
          >
            <button className="absolute top-4 right-4 text-3xl text-white" onClick={closeModal}>&times;</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Achievements;
