import React from 'react';

const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com', icon: '🌐' },
  { name: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
  { name: 'Instagram', url: 'https://instagram.com', icon: '📸' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: '🔗' },
];

function SocialLinks() {
  return (
    <div className="social-links">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          {link.icon} {link.name}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
