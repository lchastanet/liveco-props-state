function TypeFilter({ setType }) {
  const filterByType = (event) => {
    setType(event.target.value);
  };

  return (
    <select onChange={filterByType} name="select" id="select">
      <option value="All">All</option>
      <option value="Flat">Flat</option>
      <option value="House">House</option>
    </select>
  );
}

export default TypeFilter;
