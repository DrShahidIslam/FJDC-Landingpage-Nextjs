import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
    const [selectedLink, setSelectedLink] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView();
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const links = [
    { href: '/Course-Outline#uses', text: 'Uses of AI in Healthcare' },
    { href: '/Course-Outline#details', text:'Course Fees and Duration'},
    { href: '/Course-Outline#designers', text: 'Course Designers' },
    { href: '/Course-Outline#outline', text: 'Course Outline' },
    // { href: '/Reference-Material', text: 'Reference Material' }
    
  ];

  return (
    <div className="md:sticky md:top-20 md:-ml-2 cursor-pointer bg-yellow-400 rounded-md lg:rounded-r-2xl flex md:h-auto md:w-64 md:overflow-auto">
      <nav className="md:py-4 md:px-5 flex">
        <ul>
          {links.map((link, index) => (
            <li key={index} className='border-black border-b-2'>
              <Link href={link.href} onClick={() => setSelectedLink(link.href)} className={`block py-1 md:py-2 pl-1 align-middle px-12 md:px-1 no-underline hover:scale-105 border-l-4 ${selectedLink === link.href ? 'bg-black text-white' : 'text-black hover:border-indigo-500'}`}>
                  <span className="pb-1 md:pb-0 text-sm">{link.text}</span>
            
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}