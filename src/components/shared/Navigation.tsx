import { MdMail, MdPhone, MdVerifiedUser } from 'react-icons/md';
import logo from './../../assets/imgs/logo/logo.svg';
import img01 from './../../assets/imgs/safaris/about.jpeg';
import game01 from './../../assets/imgs/safaris/game.jpeg';
import game03 from './../../assets/imgs/safaris/game02.jpg';
function Navigation() {
  return (
    <div className="pb-18 bg-white">
      <header className="mx-auto flex bg-white w-full py-0 px-16 md:px-8 border-x-0 border-orange-500">
        <div className="container p-y-0 mx-auto flex flex-row justify-evenly gap-0">
          <div className=" p-[1rem]">
            <a href="#" className=" uppercase flex flex-row items-center">
              <img src={logo} alt="" width="50" className="mr-3" />
              <h2 className="font-extrabold text-4xl text-gray-500">
                Eastside Safaris
              </h2>
            </a>
          </div>
          <div className="border-x border-orange-500 flex flex-col justify-center px-[5rem]">
            <div className="flex flex-row">
              <MdPhone size="25" className="text-orange-500" />
              <p className="text-xl font-medium ml-4">+255 714 454 282 </p>
            </div>
            <span className="ml-5 text-gray-600">
              Speak to your travel professional
            </span>
          </div>
          <div className="px-3 flex flex-row items-center gap-5 text-[16px] text-gray-600">
            <div className="flex  flex-row items-center">
              <MdPhone size="25" className="text-orange-500" />
              <p className="ml-1">866 644 4319 </p>
            </div>
            <div className="flex  flex-row items-center">
              <MdMail size="25" className="text-orange-500" />
              <p className="ml-1">Contact Us </p>
            </div>
            <div className="flex  flex-row items-center">
              <MdVerifiedUser size="25" className="text-orange-500" />
              <p className="ml-1">Signin </p>
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto flex border-y bg-white w-full text-gray-600 md:px-8 border-x-0 border-orange-500">
        <div className="container mx-auto flex items-center justify-between">
          <nav className="hidden md:block">
            <ul className="flex items-center justify-center font-normal  text-[21px]">
              <li className="px-5 py-2 relative group">
                <button
                  className="hover:text-orange-600 cursor-default"
                  aria-haspopup="true"
                >
                  About Us
                </button>
                <div className="absolute lg:-left-2 top-6 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[580px] transform ">
                  <div className="relative top-6 p-8 bg-white rounded-xl shadow-xl w-full">
                    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                    <div className="relative z-10">
                      <div className="grid grid-cols-2 gap-5  text-[20px]">
                        <div>
                          <img src={img01} alt="" className="rounded-xl" />
                        </div>
                        <div>
                          <p className="uppercase tracking-wider text-gray-400 font-normal text-[18px]">
                            About Eastside Safaris
                          </p>
                          <ul className="mt-3">
                            <li>
                              <a
                                href="#"
                                className="bg-transparent font-normal py-2 block text-orange-600"
                              >
                                Our Mission
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="bg-transparent font-normal py-2 block text-orange-600"
                              >
                                Core Values
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="bg-transparent font-normal py-2 block text-orange-600"
                              >
                                Community Responsibility
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="bg-transparent font-normal py-2 block text-orange-600"
                              >
                                Our Guides
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="bg-transparent font-normal py-2 block text-orange-600"
                              >
                                Facilities
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="px-5 py-3 relative group">
                <button
                  className="hover:text-orange-600 cursor-default"
                  aria-haspopup="true"
                >
                  Destinations
                </button>
                <div className="absolute lg:-left-24 top-6 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[1080px] transform">
                  <div className="relative top-6 px-10 pb-10 pt-5 bg-white rounded-xl shadow-xl w-full">
                    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-[105px] duration-500 ease-in-out rounded-sm"></div>
                    <div className="relative z-10">
                      <div className="grid grid-cols-4 gap-10 mt-6  text-[19px] text-orange-500">
                        <div>
                          <div className="mb-5 py-2">
                            <h2 className="text-gray-500 font-medium mb-5 uppercase">
                              Southern Circuit
                            </h2>
                            <img src={game01} alt="" className="rounded-xl" />
                          </div>
                          <ul className="mt-3 font-normal">
                            <li>
                              <a
                                href="#"
                                className="hover:text-gray-500 py-1 block"
                              >
                                Libraries and SDKs
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:text-gray-500 py-2 block"
                              >
                                Plugins
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:text-orange-500 py-2 block"
                              >
                                Code samples
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="hover:text-gray-500 py-2 block"
                              >
                                Tutorials
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div>
                            <img src={img01} alt="" className="rounded-xl" />
                          </div>
                          <ul className="mt-3">
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Accept online payments
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Editing video like a pro
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Automation techniques
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Create stunning effects
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div>
                            <img src={game01} alt="" className="rounded-xl" />
                          </div>
                          <ul className="mt-3">
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Accept online payments
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Editing video like a pro
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Automation techniques
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Create stunning effects
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div>
                            <img src={game03} alt="" className="rounded-xl" />
                          </div>
                          <ul className="mt-3">
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Accept online payments
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Editing video like a pro
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Automation techniques
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Create stunning effects
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="px-5 py-2 relative group">
                <button
                  className="hover:text-orange-600 cursor-default "
                  aria-haspopup="true"
                >
                  Tailor Made Trips
                </button>
                <div className="absolute lg:-left-48 top-6 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                  <div className="relative top-6 p-10 bg-white rounded-xl shadow-xl w-full">
                    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                    <div className="relative z-10">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="uppercase tracking-wider text-gray-500 font-medium text-[18px]">
                            The Suite
                          </p>
                          <ul className="mt-3 text-[18px]">
                            <li>
                              <a
                                href="#"
                                className="block p-3 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Course Editor
                                <p className="text-gray-400 font-normal">
                                  All in one editor
                                </p>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Accept payments
                                <p className="text-gray-500 font-normal">
                                  Pre-build payments page
                                </p>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Close captioning
                                <p className="text-gray-500 font-normal">
                                  Use AI to generate captions
                                </p>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                            Extensions
                          </p>
                          <ul className="mt-4 text-[15px]">
                            <li>
                              <a
                                href="#"
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Plugins
                                <p className="text-gray-500 font-normal">
                                  Tweak existing functionality
                                </p>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Batch uploads
                                <p className="text-gray-500 font-normal">
                                  Get your time back
                                </p>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                              >
                                Social sharing
                                <p className="text-gray-500 font-normal">
                                  Generate content for socials
                                </p>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="px-5 py-2 relative group">
                <button
                  className="hover:text-orange-600 cursor-default"
                  aria-haspopup="true"
                >
                  Small Group Safaris
                </button>
                <div className="absolute lg:-left-2 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[220px] transform">
                  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                    <div className="relative z-10">
                      <ul className="text-[15px]">
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Get Support
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Blog
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Case Studies
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Guides
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            News &amp; Events
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <nav>
            <ul className="flex items-center justify-center  font-normal text-[21px]">
              <li className="relative group px-5 py-2">
                <button
                  className="hover:text-orange-600 cursor-default"
                  aria-haspopup="true"
                >
                  Language
                </button>
                <div className="absolute lg:-left-2 top-3 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                    <div className="relative z-10">
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Languages
                      </p>
                      <ul className="mt-3 text-[18px]">
                        <li>
                          <a href="#" className="py-2 block">
                            English (Default)
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 block">
                            German
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 block">
                            Espanol
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 block">
                            Dutch
                          </a>
                        </li>
                        <li>
                          <a href="#" className="py-2 block">
                            Italian
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="px-5 py-2 relative group">
                <a href="#" className="hover:text-orange-600 cursor-default">
                  Journey Finder
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
