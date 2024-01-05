import Link from 'next/link';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4  mt-5 flex items-center px-3  sm:mb-0 mb-3">
      <div>
        Built by {' '}
        <Link
          href="https://thisisrahmat.com/"
          target="_blank"
          className=" transition "
        >
        <Image
          alt="header text"
          src="/me_nobg.png"
          className="sm:w-10 sm:h-10 w-7 h-7"
          width={20}
          height={20}
        /> 
        </Link>
     
      </div>
    </footer>
  );
}