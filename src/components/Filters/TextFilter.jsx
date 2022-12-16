function TextFilter({ setSearchText }) {
  const filterByText = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <input
      type="text"
      name="search-input"
      id="search-input"
      onChange={filterByText}
    />
  );
}

export default TextFilter;
