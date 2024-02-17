/* eslint-disable react/prop-types */
function Searchbar({ HandlingParam }) {
  return (
    <>
      <form className="max-w-md mx-auto z-10">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-black sr-only dark:text-black"
        >
          Search
        </label>
        <div className="relative ">
          <div className="absolute mt-auto mb-auto mr-auto ml-2  h-4 inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-black dark:text-black "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-balck border border-black rounded-lg bg-black focus:none outline-none"
            placeholder="Search food..."
            required
            onChange={(e) => {
              HandlingParam(e);
            }}
          />
          <button
           
            onClick={HandlingParam}
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
}

export default Searchbar;
