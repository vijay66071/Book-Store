import React, { useState, useEffect, useRef } from 'react';
import ChatWithAi from './ChatWithAi';

const SupportDialogue = ({ onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const dialogueRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the dialogue
    const handleClickOutside = (event) => {
      if (dialogueRef.current && !dialogueRef.current.contains(event.target)) {
        onClose(); // Close the dialogue when clicked outside
      }
    };

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={dialogueRef} className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-md w-72">
      <div className="flex justify-between items-center p-2 border-b border-gray-300">
        <h2 className="text-lg font-semibold">Support Chat</h2>
        <button onClick={onClose} className="text-gray-300 bg-gray-500 rounded-full text-2xl">
          X
        </button>
      </div>
      <div className="p-2">
        <div className="overflow-y-auto max-h-40">
          {messages.map((msg, index) => (
            <div key={index} className="mb-1 ml-40 break-all">
              {msg}
            </div>
          ))}
        </div>
        <ChatWithAi/>
      </div>
    </div>
  );
};

export default SupportDialogue;
