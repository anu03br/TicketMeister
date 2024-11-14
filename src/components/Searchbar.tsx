import { MdSearch } from "react-icons/md";
import { useState, useEffect, FormEvent } from "react";

// const searchField = document.getElementById("search");
export default function Searchbar() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [warning, setWarning] = useState("");

  interface Event {
    id: string;
    name: string;
    imageUrl: string;
    url: string;
  }
  // const [events, setEvents] = useState<Event[]>([]);
  
  const submitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchKeyword) {
      console.log(searchKeyword);
      const response = fetch(
        "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + (searchKeyword) + "&countryCode=CH&apikey=UGJxCPf0sNHYRAmC3mVw2puTLYY8Uf9Z",
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Network response was not ok: ${response.statusText}`,
            );
          }
          return response.json();
        })
        .then((json) => {
          console.log(json);
// other things.
// eventData = json._embedded?.events.=> ({
// event.id,
// : event.name,
// eUrl: event.images.find(),
//  event.url,
//

        })
        .catch((error) => {
          console.error("There was an error with the fetch operation:", error);
          // Handle the error.
        });

      console.log(response._embedded.events[0].name);
      console.log(response._embedded.events[0].name);

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
            // required={true}
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
