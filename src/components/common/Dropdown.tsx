"use client"
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState } from 'react'



export default function Dropdown({menuItems}:any) {
  const [selected, setSelected] = useState(menuItems[1])

  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected} >
        <ListboxButton
          className={clsx(
            'relative block flex whitespace-nowrap cursor-pointer font-inter text-[12px] w-full text-primary rounded-lg items-center  text-left text-sm/6 ',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
          )}
        >
          {selected.name}
          <ChevronDownIcon
            className="group pointer-events-none size-4 "
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            ' rounded-xl border w-70 border-gray-300 bg-white z-1 p-1 [--anchor-gap:--spacing(1)] focus:outline-none',
            'transition duration-100 ease-in data-leave:data-closed:opacity-0'
          )}
        >
          {menuItems.map((person:any) => (
            <ListboxOption
              key={person.name}
              value={person}
              className="group flex cursor-pointer border-b border-gray-200 hover:bg-blue-200/40 items-center gap-2 rounded-lg px-3 py-1.5 select-none"
            >
              <CheckIcon className="invisible size-4 fill-blue-400 group-data-selected:visible" />
              <div className="text-sm/6 text-gray-500">{person.name}</div>
              
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )
}
