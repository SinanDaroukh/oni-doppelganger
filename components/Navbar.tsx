import Image from "next/image";
import OniLogo from "../public/oni-logo.png";

export default function Navbar() {
  return (
    <div className="grid grid-cols-7 my-8">
      <div className="flex items-center col-span-3 justify-self-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <div className="flex flex-col justify-self-center items-center">
        <Image src={OniLogo} alt="Website Logo" />
        <div className="flex flex-row gap-4 text-slate-50 mt-4">
          <p>Accueil</p>
          <p>Articles</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="flex items-center col-span-3 justify-self-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 19"
          width="18"
          height="19"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 4.5a3 3 0 116 0 3 3 0 01-6 0zm3-4a4 4 0 100 8 4 4 0 000-8zm5.58 12.15c1.12.82 1.83 2.24 1.91 4.85H1.51c.08-2.6.79-4.03 1.9-4.85C4.66 11.75 6.5 11.5 9 11.5s4.35.26 5.58 1.15zM9 10.5c-2.5 0-4.65.24-6.17 1.35C1.27 12.98.5 14.93.5 18v.5h17V18c0-3.07-.77-5.02-2.33-6.15-1.52-1.1-3.67-1.35-6.17-1.35z"
            fill="#FAFAFA"
          ></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          fill="none"
          width="44"
          height="44"
        >
          <path
            d="m15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z"
            fill="#FAFAFA"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
}
