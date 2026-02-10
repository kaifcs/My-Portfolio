import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#33353F] text-white bg-black/100 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-center">
        <p className="text-slate-500 text-sm text-center">
          © {year} Kaif Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
