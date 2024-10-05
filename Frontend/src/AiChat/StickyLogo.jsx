import React from 'react';

const StickyLogo = ({ onClick }) => {
  return (
    <div className="fixed bottom-20 right-14 rounded-full cursor-pointer" onClick={onClick}>
      <img src="https://tse3.mm.bing.net/th?id=OIP.2gFReq1RWeSSPEs6uBxm2QHaGg&pid=Api&P=0&h=180" alt="Support" className="w-20 h-20 rounded-full z-50" />
      {/* <img src="https://img.freepik.com/premium-photo/ai-text-technology-smart-robot-science-artificial-intelligence-technology_995428-3664.jpg?size=626&ext=jpg&uid=R123706497&ga=GA1.1.716163241.1713455711&semt=ais" alt="Support" className="w-20 h-20 rounded-full z-50" /> */}
    </div>
  );
};

export default StickyLogo;
