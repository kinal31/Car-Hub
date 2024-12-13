export async function fetchCar() {
    try {
        const response = await fetch("https://www.freetestapi.com/api/v1/cars");
        const result = await response.json();
        return result;

    } catch (error) {
        console.error(error);
    }
}

  

export const calculateCarRent = (mileage, year) => {
    const currentYear = new Date().getFullYear();
    if (year > currentYear) {
        throw new Error("Year cannot be in the future.");
    }
    if (mileage < 0) {
        throw new Error("Mileage cannot be negative.");
    }

    // Default pricing factors
    const basePricePerDay =  50; // Base rental price per day in dollars
    const mileageFactor =  0.1; // Additional rate per mile driven
    const ageFactor =  0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = mileage * mileageFactor;
    const ageRate = (currentYear - year) * ageFactor;

    // Ensure ageRate is non-negative
    const rentalRatePerDay = basePricePerDay + mileageRate + Math.max(0, ageRate);

    // Return the rental rate rounded to the nearest dollar
    return Math.round(rentalRatePerDay);
};

export async function generateCarImageUrl(make, model) {
    const url = new URL("https://www.carimagery.com/api.asmx/GetImageUrl");
  
    // Append make and model to the searchTerm query parameter
    url.searchParams.append("searchTerm", `${make}+${model}`);
  
    try {
      // Fetch the response
      const response = await fetch(url);
  
      // Get the response text (XML string)
      const xmlText = await response.text();
  
      // Extract the content between <string> and </string> using regex
      const match = xmlText.match(/<string[^>]*>(.*?)<\/string>/);
      const imageUrl = match ? match[1] : "";
  
    //   console.log("Fetched Image URL:", imageUrl); // Log for debugging
      return imageUrl; // Return the extracted URL
    } catch (error) {
      console.error("Error fetching car image URL:", error);
      return ""; // Return an empty string in case of an error
    }
  }
  