import { MdSearch } from "react-icons/md";
import { useState, FormEvent } from "react";
import { Event } from "./Event.tsx";

interface SearchbarProps {
  onSearch: (data: Event[]) => void; // Define the callback type | should this be void or null?
}

export default function Searchbar({ onSearch }: SearchbarProps): JSX.Element {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchRadius, setSearchRadius] = useState("10");
  const [warning, setWarning] = useState("");

  const submitSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchKeyword) {
      console.log(searchKeyword);
      try {
        const response = await fetch(
          "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" +
            searchKeyword +
            "&latlong=" +
            searchLocation +
            "&radius=" +
            searchRadius +
            "&unit=km" +
            "&apikey=UGJxCPf0sNHYRAmC3mVw2puTLYY8Uf9Z",
        );
        const data = await response.json();

        if (data._embedded?.events) {
          const events: Event[] = data._embedded.events;
          console.log(events[0]?.name);
          onSearch(events); // Pass the events back to the parent
        } else {
          console.log("No events found.");
          onSearch([]); // Pass an empty array back to the parent
        }

        setWarning("");
      } catch (error) {
        console.error("There was an error with the fetch operation:", error);
        setWarning(
          "An error occurred while fetching events. Please try again.",
        );
      }
    } else {
      setWarning("Please enter a search term.");
    }
  };

  return (
    <div className={"wrapper py-4 pt-6 shadow-sm"}>
      <form onSubmit={submitSearch} className={"justify-items-center"}>
        <div className={"formContent  lg:flex lg:justify-around"}>
          <div className={"formLeft flex"}>
            <div className={"searchbox"}>
              <div
                  className={
                    "flex items-center w-min px-4 py-2 border-2 border-solid border-black rounded-2xl"
                  }
              >
                <label htmlFor={"hidden search"}></label>
                <MdSearch
                    size="20"
                    className={"flex justify-center align-bottom"}
                />
                <input
                    onChange={(event) => {
                      setSearchKeyword(event.target.value);
                    }}
                    id={"search"}
                    type={"text"}
                    className={""}
                    placeholder={"Search..."}
                />
              </div>
              {warning && (
                  <p className={"min-h-6 pl-10"} style={{color: "red"}}>
                    {warning}
                  </p>
              )}
            </div>
            <div className={"location px-2 pl-8 pt-3"}>
              <label htmlFor="city" className={" hidden w-fit h-fit"}>
                Choose Location
              </label>
              <select
                  onChange={(event) => {
                    setSearchLocation(event.target.value);
                  }}
                  name="city"
                  id="city"
                  className={
                    " px-3 mx-2 h-8 min-w-40  text-md font-medium border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  }
              >
                <option value="">Choose Location</option>
                <option value="47.3769,8.5417">Zürich</option>
                <option value="47.4245,9.3767">St. Gallen</option>
                <option value="46.9481,7.4474">Bern</option>
                <option value="52.5200,13.4050">Berlin</option>
                <option value="48.1351,11.5820">München</option>
                <option value="48.2082,16.3738">Wien</option>
                <option value="52.3676,4.9041">Amsterdam</option>
              </select>
            </div>
          </div>

          <div className={"formRight pt-4"}>
            <label
                htmlFor="radius"
                className="mb-2 pr-4 text-md font-medium text-gray-700"
            >
              Range: {searchRadius} km
            </label>
            <input
                id="radius"
                type="range"
                min="0"
                max="1000"
                step="200"
                value={searchRadius}
                onChange={(event) => {
                  setSearchRadius(event.target.value);
                }}
                className=" h-2 min-w-60 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <button
                className={"font-roboto px-4 py-1 mx-4 bg-teal-500 shadow-gray-600 shadow-md rounded-lg"}
                type={"submit"}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
