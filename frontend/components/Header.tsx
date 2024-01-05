import Image from 'next/image';
import Link from 'next/link';

export default function Header({ photo }: { photo?: string | undefined }) {
  return (
    <header className="flex justify-between items-center w-full mt-5  sm:px-4 px-2">
      <Link href="/" className="flex space-x-2">
        {/* <Image
          alt="header text"
          src="/imageIcon.png"
          className="sm:w-10 sm:h-10 w-7 h-7"
          width={20}
          height={20}
        /> */}
        <h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">
          Real or AI
        </h1>
      </Link>
   
    </header>
  );
}