import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { DesktopLink, DesktopPopover } from "./DesktopComponents";
import { MobileEntry, MobileLink } from "./MobileComponents";
import SearchBar from "../SearchBar";

const links = [
  {
    key: "home",
    text: "Home",
    href: "/"
  },
  {
    key: "about",
    text: "About",
    href: "/about"
  },
];

const Header = ({ showSearch = true, popularCourses = [], dataLoaded = false }) => (
  <Popover className="relative bg-white">
    {/* DESKTOP VIEW */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">Coursecrawler</span>
            {/* TODO: Logo */}
            <img className="h-8 w-auto sm:h-10" src='/logo-temp.png' alt="CourseScraper" /> {/* eslint-disable-line @next/next/no-img-element */}
          </a>
        </div>

        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        <Popover.Group as="nav" className="hidden md:flex space-x-10">
          {links.map((link) => <DesktopLink key={link.key} text={link.text} href={link.href} />)}
          {dataLoaded && <DesktopPopover text='Popular' dropdownItems={popularCourses}/>}
        </Popover.Group>


        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          {showSearch && <SearchBar />}
          {/* <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
            Sign in
          </a>
          <a
            href="#"
            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Sign up
          </a> */}
        </div>

      </div>
    </div>

    {/* MOBILE VIEW */}
    <Transition
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel focus className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">

          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div><img className="h-8 w-auto" src='/logo-temp.png' alt="CourseScraper" /></div> {/* eslint-disable-line @next/next/no-img-element */}
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>

            <div className="mt-6">
              <nav className="grid gap-y-8">
                {dataLoaded && popularCourses.map((item) => <MobileEntry key={item.key} text={item.text} href={item.href} />)}
              </nav>
            </div>
          </div>

          <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {links.map((link) => <MobileLink key={link.key} text={link.text} href={link.href} />)}
            </div>

            <SearchBar />

            {/* <div>
              <a
                href="#"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </a>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?{' '}
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Sign in
                </a>
              </p>
            </div> */}
          </div>

        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
);

export default Header;
