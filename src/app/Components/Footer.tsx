import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <main className="bg-gray-900 text-white px-12 py-6 pb-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
        <div><Link href="/">
          <h1 className='lg:text-lg my-2 text-md font-semibold'> FJDC.AI</h1></Link>
          <h2 className="lg:text-lg text-md font-extralight">Certified Generative AI Healthcare and Medicine Specialization</h2>
        </div>
        <div>
        <ul className="space-y-2 mt-2">
            <li>
              <Link className="text-white hover:underline" href="/Course-Outline#uses">
                Uses of AI in Healthcare
              </Link>
            </li>
            <li>
              <Link className="text-white hover:underline" href="/Course-Outline#details">
                Course Fees and Duration
              </Link>
            </li><li>
              <Link className="text-white hover:underline" href="/Course-Outline#designers">
                Program Designers
              </Link>
            </li><li>
              <Link className="text-white hover:underline" href="/Course-Outline#outline">
                Course Outline
              </Link>
            </li>
            </ul>
        </div>
        <div>
          <ul className="space-y-2 mt-2">
            <li>
              <Link className="text-white hover:underline" href="/Contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="text-white hover:underline" href="/Gallery">
                Gallery
              </Link>
            </li>
            <li>
            <Link className="text-white hover:underline" href="/Course-Outline">
                Course Details
              </Link>
              </li>
          </ul>
        </div>
        <div>
          <h2 className="md:text-lg text-md font-semibold">Follow Us</h2>
          <ul className="flex space-x-4 mt-2 mb-4">
            <li><Link href="https://www.facebook.com/joinFJDC/"><FaFacebook /></Link></li>
            <li><Link href="https://twitter.com/Official_FJDC"><FaTwitter /></Link></li>
            <li><Link href="https://www.instagram.com/fjdckhi/"><FaInstagram /></Link></li>
            <li><Link href="https://www.linkedin.com/company/fjdc/"><FaLinkedin/> </Link></li>
          </ul>
        </div>
      </div>
      <p className='text-center mt-6 -mb-6 text-md'>© FJDC.AI 2023</p>  
    </main>
    
  );
}