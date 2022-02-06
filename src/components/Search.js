export const Search = ({ place, handlePlaceChange, handleSubmit }) => {
  return (
    <div>
      <form className="flex py-6 max-w-xs lg:max-w-4xl items-center justify-center" onSubmit={(e) => handleSubmit(e)}>
        <label className="sr-only" htmlFor="searchLabel">Search Weather</label>
        <input
          id="searchLabel"
          type="text"
          placeholder="search weather for a place"
          value={place}
          onChange={e => handlePlaceChange(e)}
          className="border-2 w-56 lg:w-96 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mx-2 lg:mx-6"
        ></input>
        <input type="submit" className="cursor-pointer rounded-lg font-bold text-white bg-blue-700 text-center py-2 px-4" value="Submit"></input>
      </form>
    </div>
  );
};
