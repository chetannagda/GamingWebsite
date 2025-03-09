import { FaLinkedin, FaInstagram, FaGithub, FaGlobe, FaHeart  } from "react-icons/fa";

const socialLinks = [
    { href: "https://www.linkedin.com/in/chetannagdaa/", icon: <FaLinkedin /> },
    { href: "https://github.com/chetannagda", icon: <FaGithub /> },
    { href: "https://cyberportfolio-ivory.vercel.app/", icon: <FaGlobe /> },
    { href: "https://www.instagram.com/chetannagdaa", icon: <FaInstagram /> },
    
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©CN 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="https://www.linkedin.com/in/chetannagdaa/"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Created by Chetan Nagda
        </a>
      </div>
    </footer>
  );
};

export default Footer;