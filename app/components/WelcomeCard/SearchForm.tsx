"use-client";

import { FormEvent, useEffect, useState } from "react";

const SearchFrom = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [disableSearch, setDisableSearch] = useState<boolean>(false);
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.currentTarget.value);
  };

  useEffect(() => {
    if (searchValue.length > 0) setDisableSearch(false);
    else setDisableSearch(true);
  }, [searchValue]);

  return (
    <form>
      <input
        style={{ border: "none" }}
        placeholder="Where do you want to eat?"
        value={searchValue}
        onChange={handleChange}
      ></input>{" "}
      <span
        className="material-symbols-outlined"
        style={{
          color: disableSearch ? "darkgray" : "black",
          fontSize: "40px",
        }}
      >
        play_arrow
      </span>
    </form>
  );
};

export default SearchFrom;
