import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => (
  <div className="bg-gray-800 py-4 text-white flex items-center justify-between border-t-4 border-gray-700">
    <p>2022 CompSearch all rights reserved</p>
    <p className="flex items-center">
      <AiFillInstagram className="mx-2 text-2xl" />
      <AiOutlineTwitter className="mx-2 text-2xl" />
    </p>
  </div>
);

export default Footer;
