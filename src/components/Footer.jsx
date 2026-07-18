import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-12 bg-primary">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="bg-white/5 p-1 rounded-md">
            <img src="/projects/logomain.png" alt="logo" className="w-12 h-12 object-contain" />
          </div>
          <div className="text-white font-medium">Sulagna Ghosh</div>
        </div>
        <div className="text-secondary">© {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
