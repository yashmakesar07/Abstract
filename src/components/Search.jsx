import { ArrowRightIcon } from "@heroicons/react/24/solid"; // Import the right arrow icon

const Search = () => {
  return (
    <>
      <div
        id="search"
        className="h-[60vh] w-full bg-[#dadbf1] flex justify-center items-center flex-col"
      >
        <h1 className="text-black text-[5rem]  font-medium max-sm:text-[2rem]">
          How Can We Help?
        </h1>
        <div className="relative flex justify-center items-center mt-4 w-full px-4 md:px-0">
          <input
            type="search"
            className="h-[8vh] w-50% md:w-[50vw] rounded-xl focus:border-2 border-black p-5 text-xl max-sm:w-[70vw] pr-12"
            placeholder="Search"
          />
          <button className="absolute h-8 w-8 ml-[45vw] flex items-center justify-center bg-white rounded-full">
            <ArrowRightIcon className="h-6 w-6 text-black" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
