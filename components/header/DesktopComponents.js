import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import classNames from "../../utils/classNames";

export const DesktopPopover = ({ text, dropdownItems = [], callsToAction = false }) => (
  <Popover className="relative">
    {({ open }) => (
      <>
        <Popover.Button
          className={classNames(
            open ? "text-gray-900" : "text-gray-500",
            "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          )}
        >
          <span>{text}</span>
          <ChevronDownIcon
            className={classNames(
              open ? "text-gray-600" : "text-gray-400",
              "ml-2 h-5 w-5 group-hover:text-gray-500"
            )}
            aria-hidden="true"
          />
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute z-50 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                {dropdownItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                  >
                    {item.icon && <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />}
                    <div className="ml-4">
                      <p className="text-base font-medium text-gray-900">{item.text}</p>
                      {item.description && <p className="mt-1 text-sm text-gray-500">{item.description}</p>}
                    </div>
                  </a>
                ))}
              </div>
              {callsToAction && <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                {callsToAction.map((item) => (
                  <div key={item.key} className="flow-root">
                    <a
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                      <span className="ml-3">{item.text}</span>
                    </a>
                  </div>
                ))}
              </div>}
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
);

export const DesktopLink = ({ text = "", href = "#" }) => (
  <a href={href} className="text-base font-medium text-gray-500 hover:text-gray-900">
    {text}
  </a>
);