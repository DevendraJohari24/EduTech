import { RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine } from "react-icons/ri";

const Footer = () => {
    return (
        <>
        <footer className="bg-black">
      <div className="container max-w-6xl py-10 mx-auto">
        <div
          className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start"
        >
          <div
            className="flex flex-col items-center space-y-8 md:items-start md:space-y-4"
          >
            <div className=" w-28 h-28">
              <img src="/knacksack-logo.png" alt="" className=" w-full h-full object-cover" />
            </div>
            <div
              className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3"
            >
              <div className="h-10 group">
                <a href="#">About</a>
                <div
                  className="mx-2 group-hover:border-b group-hover:border-blue-50"
                ></div>
              </div>
              <div className="h-10 group">
                <a href="#">Careers</a>
                <div
                  className="mx-2 group-hover:border-b group-hover:border-blue-50"
                ></div>
              </div>
              <div className="h-10 group">
                <a href="#">Events</a>
                <div
                  className="mx-2 group-hover:border-b group-hover:border-blue-50"
                ></div>
              </div>
              <div className="h-10 group">
                <a href="#">Products</a>
                <div
                  className="mx-2 group-hover:border-b group-hover:border-blue-50"
                ></div>
              </div>
              <div className="h-10 group">
                <a href="#">Support</a>
                <div
                  className="mx-2 group-hover:border-b group-hover:border-blue-50"
                ></div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-start justify-between space-y-4 text-gray-500"
          >
            <div
              className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0"
            >
              <div className="h-8 group">
                <a href="#">
                    <RiFacebookLine className="w-full h-full" />
                </a>
              </div>
              <div className="h-8 group">
                <a href="#">
                    <RiInstagramLine className="w-full h-full" />
                </a>
              </div>
              <div className="h-8 group">
                <a href="#">
                    <RiPinterestLine className="w-full h-full" />
                </a>
              </div>
              <div className="h-8 group">
                <a href="#">
                    <RiDribbbleLine className="w-full h-full" />
                </a>
              </div>
            </div>
            <div className="font-bold">
              &copy; 2023 KnackSack. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
        </>
    );
}
export default Footer;