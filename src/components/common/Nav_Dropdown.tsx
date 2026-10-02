import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'

export default function Nav_Dropdown({pagetitle,subcatagory}:any) {
  return (
    <div className="relative">
      <Menu as="div" className="relative">
        <div>
          <Menu.Button className="inline-flex items-center font-semibold outline-none  ">
            {pagetitle}
            <ChevronDownIcon className="h-4 w-4 text-black" />
          </Menu.Button>
        </div>

        <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl border border-gray-200 bg-white p-1 text-sm text-white shadow-lg focus:outline-none">
          {subcatagory.map((navitem:any, index:any) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <button
                  className={`group z-1 flex cursor-pointer w-full text-black items-center gap-2 rounded-lg px-3 py-2 text-left ${
                    active ? 'bg-blue-400/10' : 'hover:bg-white/5'
                  }`}
                >
                  
                  <span className="flex-1 truncate">{navitem}</span>
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  )
}
