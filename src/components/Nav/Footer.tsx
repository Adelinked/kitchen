import Link from "../Link";
import siteMetadata from "data/siteMetadata";
import SocialIcon from "@/components/social-icons";
import Logo from "../Logo";
import { footerNavLinks, headerNavLinks } from "data/navLinks";
import dynamic from "next/dynamic";

const ScrollToTop = dynamic(() => import("../scrollToTop"), {
  loading: () => <></>,
});

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 py-8 px-20 mt-16 flex flex-col text-white">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-28 lg:gap-48 xl:gap-64 mb-16">
          <div className="flex flex-col  ">
            <div className="flex items-center pl-2 mb-3 mt-[-7px]">
              <Logo blackBg size={40} />
              <h2 className="ml-2 font-bold text-xl tracking-widest">
                {siteMetadata.brandName}
              </h2>
            </div>
            <span className="mb-4 font-light w-48">
              {siteMetadata.companyAdress}
            </span>
            <span className="font-light">{siteMetadata.email}</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className=" uppercase text-white text-lg mb-2">Categories</h3>
            {headerNavLinks
              .filter((link) => link.href !== "/")
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className=" font-medium uppercase text-gray-400 hover:text-white  "
                >
                  {link.title}
                </Link>
              ))}
          </div>
          <div className="flex flex-col gap-2 ml-[-48px] md:ml-0 ">
            <h3 className=" uppercase text-white text-lg mb-2 ">Company</h3>
            {footerNavLinks
              .filter((link) => link.href !== "/")
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className=" font-medium text-gray-400 hover:text-white  "
                >
                  {link.title}
                </Link>
              ))}
          </div>
        </div>
        <div className=" flex flex-col items-center  ">
          <div className="mb-3 flex space-x-4 transition-colors duration-700 ease-in-out">
            <SocialIcon
              kind="mail"
              href={`mailto:${siteMetadata.email}`}
              size={6}
            />
            <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
            <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          </div>
          <div className="mb-4 flex gap-1 md:gap-2 text-sm  text-gray-400">
            {/*<span>{siteMetadata.author}</span>
            <span>{` • `}</span>*/}
            <span className="">{`© ${new Date().getFullYear()}`}</span>
            <span className="">{` • `}</span>
            <Link href="/" className="hover:text-white">
              {siteMetadata.brandName}.
            </Link>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </>
  );
}
