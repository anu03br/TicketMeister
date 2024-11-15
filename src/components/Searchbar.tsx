import { MdSearch } from "react-icons/md";
import { useState, FormEvent } from "react";
import {Event} from "../components/Event";

interface SearchbarProps {
  onSearch: (data: Event[]) => void; // Define the callback type | should this be void or null?
}

export default function Searchbar({ onSearch }: SearchbarProps): JSX.Element {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [warning, setWarning] = useState("");


  // emit events maybe
  // can we just pass the json response (data) back to parent?
  // yes with a callback functioN (prop that is a function )

  const submitSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchKeyword) {
      console.log(searchKeyword);
      await fetch(
        "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" +
          searchKeyword +
          "&countryCode=CH&apikey=UGJxCPf0sNHYRAmC3mVw2puTLYY8Uf9Z",
      )
        .then((response) => response.json())
          .then(( data) => {
            console.log(data._embedded.events[0].name + data._embedded?.events[0].type);

            const events:Event[] = data._embedded?.events || []; // if events = empty/Null return empty array
            onSearch(events);  // Pass the events back to the parent

        })
        .catch((error) => {
          console.error("There was an error with the fetch operation:", error);
          // Handle the error.
        });
      setWarning("");
    } else {
      setWarning("Please enter a search term.");
    }
  };

  return (
    <div className={"w-full"}>
      <form
        onSubmit={submitSearch}
        className="flex flex-col items-center py-4 border-t border-b-2 border-black"
      >
        <div
          className={
            "flex items-center w-min px-4 py-2 border-2 border-solid border-black rounded-2xl"
          }
        >
          <label htmlFor={"search"}></label>
          <MdSearch size="20" className={"flex justify-center align-bottom"} />
          <input
            onChange={(event) => {
              setSearchKeyword(event.target.value);
            }}
            id={"search"}
            type={"text"}
            className={""}
            placeholder={"Search..."}
          />
          <button
            className={"px-2 bg-teal-500 shadow-black rounded-lg"}
            type={"submit"}
          >
            Search
          </button>
        </div>
        <div className={"min-h-6"}>
          {warning && <p style={{ color: "red" }}>{warning}</p>}
        </div>
      </form>
    </div>
  );
}
