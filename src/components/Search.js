export const Search = ({ place, handlePlaceChange, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label for="searchLabel">Search Weather</label>
        <input
          id="searchLabel"
          type="text"
          placeholder="search weather for a place"
          value={place}
          onChange={e => handlePlaceChange(e)}
        ></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};
