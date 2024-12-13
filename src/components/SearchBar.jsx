// "use client";

// import { useState } from "react";
// import { SearchManufacturer } from "./";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const SearchButton = ({ otherClasses }) => (
//     <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
//         <Image
//             src={"/magnifying-glass.svg"}
//             alt={"magnifying glass"}
//             width={40}
//             height={40}
//             className='object-contain'
//         />
//     </button>
// );

// const SearchBar = () => {
//     const [manufacturer, setManuFacturer] = useState("");
//     const [model, setModel] = useState("");
//     const router = useRouter();


//     const handleSearch = (e) => {
//         e.preventDefault();

//         if (manufacturer == "" && model == "") {
//             alert("Please enter a manufacturer or model detail to search");
//         }
//         // console.log(manufacturer,model);
//         updateSearchParams(manufacturer,model)
//     }   

//     const updateSearchParams = (manufacturer, model) => {
//         const searchParams = new URLSearchParams(window.location.search);

//         if (model) {
//             searchParams.set("model", model)
//         }
//         else {
//             searchParams.delete("model")
//         }

//         if (manufacturer) {
//             searchParams.set("manufacturer", manufacturer)
//         }
//         else {
//             searchParams.delete("manufacturer")
//         }

//         const newPathname = `${window.location.search}?${searchParams.toString()}`;
//         router.push(newPathname);
//     }
//     return (
//         <>
//             <form className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl' onSubmit={handleSearch}>

//                 <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
//                     <SearchManufacturer manufacturer={manufacturer} setManuFacturer={setManuFacturer} />

//                     <SearchButton otherClasses='sm:hidden' />
//                 </div>

//                 <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
//                     <Image
//                         src='/model-icon.png'
//                         width={25}
//                         height={25}
//                         className='absolute w-[20px] h-[20px] ml-4'
//                         alt='car model'
//                     />

//                     <input
//                         type="text"
//                         name="model"
//                         value={model}
//                         onChange={(e) => setModel(e.target.value)}
//                         className="w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"
//                     />
//                     <SearchButton otherClasses='sm:hidden' />
//                 </div>

//                 <SearchButton otherClasses='max-sm:hidden' />
//             </form>
//         </>
//     )
// }

// export default SearchBar
import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for a car..."
      onChange={handleSearchChange}
      className="border rounded p-2"
    />
  );
};

export default SearchBar;