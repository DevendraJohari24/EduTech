import { FaFacebook , FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <footer className="py-16 bg-veryDarkViolet">
      <div
        className="container flex flex-col items-center justify-around mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start"
      >
        <p className="text-white text-2xl font-bold">EduTech</p>

        <div
          className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0"
        >
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Features</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan"
                >Link shortening</a
              >
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan"
                >Branded links</a
              >
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan"
                >Analytics</a
              >
            </div>
          </div>

          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Resources</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan"
                >Blog</a
              >
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan"
                >Developers</a
              >
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan"
                >Support</a
              >
            </div>
          </div>

          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Company</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan"
                >About</a
              >
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan"
                >Our Team</a
              >
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan"
                >Careers</a
              >
              <a href="#" className="capitalize text-grayishViolet hover:text-cyan"
                >Contact</a
              >
            </div>
          </div>
        </div>

        <div className="flex space-x-6">
          <a href="#">
            <FaFacebook className="text-white w-8 h-8" />
          </a>
          <a href="#">
            <FaInstagram className="text-white w-8 h-8" />
          </a>
          <a href="#">
            <FaPinterest className="text-white w-8 h-8" />
          </a>
          <a href="#">
            <FaTwitter className="text-white w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
    </>
  )
}
