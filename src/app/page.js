// import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";

// import { fetchCar } from "@/utils";
// import Image from "next/image";

// export default async function Home() {

//   const allCars = await fetchCar();

//   // console.log(allCars);

//   const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

//   return (
//     <>
//       <main className="overflow-hidden ">
//         <Hero />

//         <div className="mt-12 sm:px-16 px-6 py-4 max-width " id="discover">
//           <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100 lg:px-14">
//             <h1 className="text-2xl lg:text-4xl font-bold ">Car Catalogue</h1>
//             <p>Explore the cars you might like!</p>
//           </div>

//           {/* <div className="mt-6 w-full flex justify-between items-center flex-wrap gap-5 lg:px-14">
//             <SearchBar  />

//             <div className="flex justify-start flex-wrap items-center gap-2">
//               <CustomFilter title="fuel" />
//               <CustomFilter title="year" />
//             </div>
//           </div> */}

//           {
//             !isDataEmpty ?
//               (<section>
//                 <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14 lg:px-14">
//                   {
//                     allCars.map((car) => (
//                       <CarCard key={car.id} car={car} />
//                     ))
//                   }
//                 </div>
//               </section>)
//               : (
//                 <div className="mt-16 flex justify-center items-center flex-col gap-2">
//                   <h2 className="text-black text-xl font-bold">Oop!, no result</h2>
//                 </div>
//               )
//           }


//         </div>
//       </main>

//     </>
//   );
// }
"use client"
import { useState, useEffect } from "react";
import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { calculateCarRent, fetchCar } from "@/utils";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10; // Number of cars to display per page

  useEffect(() => {
    const fetchData = async () => {
      const cars = await fetchCar();
      setAllCars(cars);
      setFilteredCars(cars);
    };
    fetchData();
  }, []);

  useEffect(() => {

    let filtered = allCars;

    // Search Filter
    if (searchTerm) {
      filtered = filtered.filter(car =>
        car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOption === "price") {
      filtered = [...filtered].sort((a, b) => a.price - b.price); // Sort by price (ascending)
    } else if (sortOption === "year") {
      filtered = [...filtered].sort((a, b) => a.year - b.year); // Sort by year (ascending)
    } else if (sortOption === "rentalRate") {
      filtered = [...filtered].sort((a, b) => {
        const rentA = calculateCarRent(a.mileage, a.year);
        const rentB = calculateCarRent(b.mileage, b.year);
        return rentA - rentB; // Sort by rental rate (ascending)
      });
    }

    setFilteredCars(filtered);
  }, [searchTerm, sortOption, allCars]);


  // Pagination Logic
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  return (
    <>
      <main className="overflow-hidden ">
        <Hero />

        <div className="mt-12 sm:px-16 px-6 py-4 max-width " id="discover">
          <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100 lg:px-14">
            <h1 className="text-2xl lg:text-4xl font-bold ">Car Catalogue</h1>
            <p>Explore the cars you might like!</p>
          </div>

          <div className="mt-6 w-full flex justify-between items-center flex-wrap gap-5 lg:px-14">
            <SearchBar setSearchTerm={setSearchTerm} />

            <div className="flex justify-start flex-wrap items-center gap-2">
              <CustomFilter title="Sort by" setSortOption={setSortOption} />
              {/* Add more filters as needed */}
            </div>
          </div>

          {
            filteredCars.length > 0 ?
              (<section>
                <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14 lg:px-14">
                  {
                    currentCars.map((car) => (
                      <CarCard key={car.id} car={car} />
                    ))
                  }
                </div>
              </section>)
              : (
                <div className="mt-16 flex justify-center items-center flex-col gap-2">
                  <h2 className="text-black text-xl font-bold">Oop!, no result</h2>
                </div>
              )
          }


          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              className={`px-4 py-2 rounded-lg border-2 border-blue-600 text-blue-600 transition duration-300
      ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600 hover:text-white"}`}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="text-lg font-semibold">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className={`px-4 py-2 rounded-lg border-2 border-blue-600 text-blue-600 transition duration-300
      ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600 hover:text-white"}`}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>

        </div>
      </main>
    </>
  );
}