import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import qs from "qs";
import { getStrapiURL } from "@/lib/utils";
import { StrapiImage } from "./StrapiImage";

interface FooterData {
  footer: {
    description: string;
    logo: {
      id: number;
      text: string;
      href: string;
      image: {
        id: number;
        url: string;
        alternativeText: string | null;
        name: string;
      };
    };
    colOneLinks: {
      id: number;
      href: string;
      text: string;
      external: boolean;
    }[];
    socialMedia: {
      id: number;
      heading: string;
      socialLink: SocialLink[];
    };
  };
}

interface SocialLink {
  id: number;
  href: string;
  text: string;
  external: boolean;
}

function iconSelect(link: SocialLink) {
  if (!link) return null;
  console.log("Error fetching bot response:", link.text);
  return (
    <SocialIcon
      network={link.text.toLocaleLowerCase()}
      url={link.href}
      target="_blank"
    />
  );
}

export const Footer = ({
  footerItems,
}: {
  footerItems: {
    logo: string;
    link: string;
    text: string;
    text2: string;
    text3: string;
  };
  className?: string;
}) => {
  return (
    <footer className="footer footer-center bg-[#ffdf00] text-black-content p-10">
      <aside>
        <Image
          src="/img/app-icon.png"
          alt=""
          width="50"
          height="50"
          className="inline-block fill-current"
        />

        <p className="font-bold">
          {/*footerItems.text*/}
          <br />
          {/*footerItems.text2*/}
        </p>
        <p>Copyright © {new Date().getFullYear()} - Niddo Real Estate 2024</p>
        <p> Designed by Oasis Creattiva</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/profile.php?id=61560702401400" target="_blank" rel="noopener noreferrer">
            
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              <path
                fill="#000000"
                fillRule="evenodd"
                d="M15.725 22v-7.745h2.6l.389-3.018h-2.99V9.31c0-.874.243-1.47 1.497-1.47h1.598v-2.7a21.391 21.391 0 0 0-2.33-.12c-2.304 0-3.881 1.407-3.881 3.99v2.227H10v3.018h2.607V22H3.104C2.494 22 2 21.506 2 20.896V3.104C2 2.494 2.494 2 3.104 2h17.792C21.506 2 22 2.494 22 3.104v17.792c0 .61-.494 1.104-1.104 1.104z"
              />
            </svg>
          </a>
          <a href="https://www.instagram.com/niddo.realestate/" target="_blank" rel="noopener noreferrer">
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              <g fill="#000000">
                <path
                  fillRule="evenodd"
                  d="M12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m-3 5a3 3 0 1 0 6 0a3 3 0 0 0-6 0"
                  clipRule="evenodd"
                />
                <path d="M18 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2" />
                <path
                  fillRule="evenodd"
                  d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm14 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"
                  clipRule="evenodd"
                />
              </g>
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/niddo-real-estate/" target="_blank" rel="noopener noreferrer">
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="24px"
              height="24px"
            >
              <path
                fill="#000000"
                d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32m-273.3 373.43h-64.18V205.88h64.18ZM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43c0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43m264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44c-17.74 0-28.24 12-32.91 23.69c-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44c42.13 0 74 27.77 74 87.64Z"
              />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};
const Backlink = () => {
  return (
    <a href="https://niddo.com" target="_blank" rel="noopener">
      <Image
        src="/img/app-icon.png"
        alt=""
        layout="fill"
        objectFit="cover"
        className="rounded-xl"
      />

      <span>Designed by Oasis Creativa</span>
    </a>
  );
};
