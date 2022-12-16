function AvailabilityFilter({ setAvailability }) {
  const filterAvailable = () => {
    setAvailability((prev) => !prev);
  };

  return (
    <div>
      <label htmlFor="available">Show only Available</label>
      <input
        type="checkbox"
        className="available-checkbox"
        name="available"
        id="available"
        onChange={filterAvailable}
      />
    </div>
  );
}

export default AvailabilityFilter;
