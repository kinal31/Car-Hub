"use client"

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from "@headlessui/react"
import Image from "next/image";
import { Fragment, useState } from "react";
import { manufacturers } from "@/constants";

const SearchManufacter = ({ manufacturer, setManufacturer }) => {
  const [query, setQuery] = useState('');

  const filteredManufacters = query === "" ? manufacturers : manufacturers.filter(manufacturer => manufacturer.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, "")));
  // console.log(fileredManufacters);


  return (
    <>
      <div className="flex-1 max-sm:w-full flex justify-start items-center">
        <Combobox>
          <div className="relative w-full">

            <ComboboxButton className="absolute top-[14px]">
              <Image src={"/car-logo.svg"} height={20} width={20} alt="Car-logo" className="ml-4" />
            </ComboboxButton>

            <ComboboxInput
              className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
              placeholder="Volkswagen"
              displayValue={(manufacturer) => manufacturer}
              onChange={(e) => setQuery(e.target.value)}
            />

            <Transition
              as={Fragment} //combobox option render in this transition
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
              afterLeave={() => setQuery("")} // Reset the search query after the transition completes
            >
              <ComboboxOptions  className="absolute z-10 mt-1 w-full max-h-100 overflow-y-auto bg-white shadow-lg rounded-md focus:outline-none">
                {
                  filteredManufacters.map((item, index) => (
                    <ComboboxOption key={index} value={item} className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-[#2C5AFF] text-white' : 'text-gray-900'}`}>
                      {item}
                    </ComboboxOption>
                  ))}
              </ComboboxOptions>
            </Transition>
          </div>
        </Combobox>
      </div>
    </>
  )
}

export default SearchManufacter
