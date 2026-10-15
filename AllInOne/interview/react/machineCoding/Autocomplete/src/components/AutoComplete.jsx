/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const AutoComplete = (
  defaultData,
  placeholder = "",
  fetchSuggestions,
  dataKey = "",
  onSelect = () => {},
  onChange = () => {},
  onBlur = () => {},
  onFocus = () => {},
  custumStyles = {}
) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(suggestions);

  useEffect(() => {
    if (inputValue.length > 1) {
      getSuggestions(inputValue);
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  const getSuggestions = async (query) => {
    setError(null);
    setLoading(true);
    try {
      let result;
      if (defaultData) {
        result = defaultData.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase());
        });
      } else if (fetchSuggestions) {
        console.log("fetch suggestions called")

        result = await fetchSuggestions(query);
      }
      setSuggestions(result);
    } catch (err) {
      setError("Failed to fetch suggestions");
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        style={custumStyles}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default AutoComplete;
