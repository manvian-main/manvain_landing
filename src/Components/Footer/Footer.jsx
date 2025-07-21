import React, { useState } from "react";
import { MdEmail, MdPhone } from 'react-icons/md';
import opptiverse from '../../assets/Logo/opptiverse.svg';
import Linked from '../../assets/Logo/linkedin.svg';
import Insta from '../../assets/Logo/insta.svg';
import Whatsapp from '../../assets/Logo/whatsapp.svg';
import fb from '../../assets/Logo/facebook.svg';
import MABS from '../../assets/Logo/MABS.png';
import { Link } from "react-router-dom";
import axios from 'axios';

const Footer = () => {
  const countries = [
    "Afghanistan", "Algeria", "Argentina", "Australia", "Austria", "Bangladesh", "Belgium", "Botswana",
    "Brazil", "Bulgaria", "Canada", "Chile", "China", "Colombia", "Croatia", "Czech Republic", "Denmark",
    "Egypt", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "India", "Indonesia",
    "Iran", "Iraq", "Ireland", "Israel", "Italy", "Japan", "Kenya", "Kuwait", "Latvia", "Lithuania",
    "Luxembourg", "Malaysia", "Mexico", "Morocco", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nigeria",
    "Norway", "Pakistan", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Saudi Arabia",
    "Serbia", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sweden",
    "Switzerland", "Thailand", "Tunisia", "Turkey", "UAE", "Ukraine", "United Kingdom", "United States",
    "Venezuela", "Vietnam", "Zambia", "Zimbabwe"
  ];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwKa_L9jPryBuC7gPg-rZqfPcTGHZcyHlCfiwlvtcpVsokJFRMOlOXR7Y60EsP7Opgzlg/exec",
      {
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    if (result.success) {
      alert('Thank you for contacting us! We’ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        message: ''
      });
    } else {
      alert('Something went wrong. Please try again later.');
    }
  } catch (error) {
    console.error('Error submitting footer form:', error);
    alert('Failed to submit the form. Please try again.');
  }
};


  return (
    <footer className="bg-[#1E1E1E] text-white py-10 px-5 md:px-20">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-3 mb-5">
            {/* Logo Image */}
            <img src={MABS} alt="MABS Logo" className="w-auto  h-10" />
          </div>
          <div className="mt-4 text-sm md:flex md:flex-col">
            <span>Empowering Businesses Through Design, Technology,</span>
            <span> and Strategic Solutions.</span>
          </div>

          <div className="mt-6 text-sm space-y-2">
            <p className="flex items-center gap-2 text-sm">
              <MdEmail /> operations@manvian.com
            </p>
            <p className="flex items-center gap-2 text-sm">
              <MdPhone /> +91 87783 59643
            </p>

            <div className="flex space-x-3 mt-4">
              <a href="https://opptiverse.com/" target="_blank" rel="noreferrer">
                <img className="w-[50px] h-[50px]" src={opptiverse} alt="Opptiverse" />
              </a>
              <a href="https://www.linkedin.com/company/manvian/" target="_blank" rel="noreferrer">
                <img className="w-[50px] h-[50px]" src={Linked} alt="LinkedIn" />
              </a>
              <a href="https://www.instagram.com/manviangroup?utm_source=ig_web_button_share_sheet&igsh=MW9xMXoxa3Nvejh5Mg==" target="_blank" rel="noreferrer">
                <img className="w-[50px] h-[50px]" src={Insta} alt="Instagram" />
              </a>
              <a href="https://wa.me/qr/V7WXT6GFCNQVG1" target="_blank" rel="noreferrer">
                <img className="w-[50px] h-[50px]" src={Whatsapp} alt="Whatsapp" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61565063135288" target="_blank" rel="noreferrer">
                <img className="w-[50px] h-[50px]" src={fb} alt="Facebook" />
              </a>

            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Reach Us to Grow Your Business</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="p-2 rounded bg-white text-black outline-none placeholder:text-xs md:placeholder:text-[16px]  "
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email ID"
                className="p-2 rounded bg-white text-black outline-none placeholder:text-xs md:placeholder:text-[16px] "
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="p-2 rounded bg-white text-black outline-none placeholder:text-xs md:placeholder:text-[16px] "
              />
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`bg-white p-2 w-full outline-none rounded text-xs md:text-[16px] appearance-none pr-8
    ${formData.country === "" ? "text-gray-400" : "text-black"}`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 20 20' fill='${formData.country === "" ? "gray" : "black"}' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M10 12a.75.75 0 0 1-.53-.22l-4-4a.75.75 0 1 1 1.06-1.06L10 10.19l3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4A.75.75 0 0 1 10 12z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.75rem center",
                  backgroundSize: "1rem 1rem",
                }}
              >

                <option value="" className="text-gray-300 " disabled hidden>-- Choose Country --</option>
                {countries.map((country, index) => (
                  <option key={index} value={country} className="text-black">
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="mt-4 w-full p-2 rounded bg-white text-black h-24 outline-none"
            ></textarea>
            <button type="submit" className="mt-4 px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition cursor-pointer text-xs md:text-lg">
              Reach Us
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="max-w-screen-xl mx-auto mt-10 border-b border-white pt-6 pb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="flex flex-col items-start">
          <h4 className="font-semibold mb-3 tracking-wide">What We Do</h4>
          <ul className="space-y-2 w-full">
            <li><Link to='/service/RAAS' className="hover:underline">RaaS</Link></li>
            <li><Link to='/service/Sales' className="hover:underline">Sales</Link></li>
            <li><Link to='/service/TechSolution' className="hover:underline">Technology</Link></li>
            <li><Link to='/service/DigitalMarketing' className="hover:underline">Digital Marketing</Link></li>
            <li><Link to='/service/multimedia' className="hover:underline">MultiMedia</Link></li>
            <li><Link to='/service/Business' className="hover:underline">Business</Link></li>
            <li><Link to='/service/SaaS' className="hover:underline">SaaS</Link></li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="font-semibold mb-3 tracking-wide">Who We Are</h4>
          <ul className="space-y-2 w-full">
            <li><Link to="/who#mission" className="hover:underline">Our Mission</Link></li>
            <li><Link to="/who#vision" className="hover:underline">Our Vision</Link></li>
            <li><Link to="/who#goal" className="hover:underline">Goal</Link></li>
            <li><Link to="/who#value" className="hover:underline">Value</Link></li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="font-semibold mb-3 tracking-wide">Quick Links</h4>
          <ul className="space-y-2 w-full">
            <li><Link to='/careers' className="hover:underline">Career</Link></li>
            <li><Link to='/insights' className="hover:underline">Insights</Link></li>
            <li><Link to='/product' className="hover:underline">Product</Link></li>
            <li><Link to='/contact' className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="font-semibold mb-3 tracking-wide">Resources</h4>
          <ul className="space-y-2 w-full">
            <li className="hover:underline">Blog</li>
            <li className="hover:underline">Newsletter</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-400 mt-8">
        © 2025 Manvian.Com. All Rights Reserved.
      </div>
    </footer >
  );
};

export default Footer;
