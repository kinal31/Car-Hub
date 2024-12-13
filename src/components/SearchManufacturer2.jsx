"use client"
import Image from "next/image";
import { Fragment, useState } from "react";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from "@headlessui/react";

import { manufacturers } from "@/constants";


const SearchManufacturer2 = ({ manufacturer, setManuFacturer }) => {
    const [query, setQuery] = useState("");

    const filteredManufacturers =
        query === ""
            ? manufacturers
            : manufacturers.filter((item) =>
                item
                    .toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, ""))
            );

    return (
        <div className='flex-1 max-sm:w-full flex justify-start items-center'>
            <Combobox value={manufacturer} onChange={setManuFacturer}>
                <div className='relative w-full'>
                    
                    <ComboboxButton className='absolute top-[14px]'>
                        <Image
                            src='/car-logo.svg'
                            width={20}
                            height={20}
                            className='ml-4'
                            alt='car logo'
                        />
                    </ComboboxButton>


                    <ComboboxInput
                        className='w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm'
                        displayValue={(manufacturer) => manufacturer}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder='Volkswagen...'
                    />

                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery("")}
                    >
                        <ComboboxOptions>
                            {
                                filteredManufacturers.map((item) => (
                                    <ComboboxOption
                                        key={item}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-[#2C5AFF] text-white" : "text-gray-900"
                                            }`
                                        }
                                        value={item}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                    {item}
                                                </span>

                                            </>
                                        )}
                                    </ComboboxOption>
                                ))
                            }
                        </ComboboxOptions>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
};

export default SearchManufacturer2;