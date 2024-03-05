import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-md">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span>Books</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="px-3 py-2 text-sm text-purple-900">
                <ul>
                  <li className="mb-2">
                    <Link to={"/dashboard/books"}>All Books</Link>
                  </li>

                  <li className="mb-2">
                    <Link to={"/dashboard/books/create"}>Add Book</Link>
                  </li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span>Writers</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>

              <Disclosure.Panel className="px-3 py-2 text-sm text-purple-900">
                <ul >
                  <li className="mb-2">
                    <Link to={"/dashboard/book/create"}>All Writers</Link>
                  </li>

                  <li className="mb-2">
                    <Link to={"/dashboard/book/create"}>Add Writers</Link>
                  </li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default DashboardSidebar;
