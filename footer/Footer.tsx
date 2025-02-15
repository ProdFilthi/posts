import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 right-0 left-0 mx-auto py-4 rounded-t-lg border-t w-[700px] border-gray-800">
      <p className="text-center">
        {Date().slice(10, 16)} © all rights reserved by programmer Filthi
      </p>
    </footer>
  );
};

export default Footer;
