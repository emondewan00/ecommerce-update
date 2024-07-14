import { redirect } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form
      action={async (formData) => {
        "use server";
        const q = formData.get("q");

        redirect(`/search?q=${q}`);
      }}
    >
      <div className={"relative hidden md:block"}>
        <input
          type="text"
          name="q"
          placeholder="Search..."
          className="w-auto md:w-96 py-2 pl-4 pr-12 md:pr-[50px] rounded-full text-sm relative"
        />
        <button
          type="submit"
          className="border-l border-gray-200 px-4 absolute right-0 py-2 top-1 "
        >
          <FaSearch className="text-gray-300" />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
