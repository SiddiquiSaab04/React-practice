import React, { useState, useMemo } from "react";
import axios from "axios";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

  const searchApi = async (search) => {
    console.log("API called with:", search);
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = res.data;
    const filterData = data.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setUsers(filterData);
  };

  // 👇 debounceSearch ko stable rakhne ke liye
  const debounceSearch = useMemo(() => debounce(searchApi, 500), []);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debounceSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="border"
      />
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
