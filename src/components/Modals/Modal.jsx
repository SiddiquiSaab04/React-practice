import React from 'react';

const Modal = ({ openModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">This is a Modal</h2>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => openModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
