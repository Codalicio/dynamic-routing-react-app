import { Link, useNavigate } from "react-router";

const Home = ({ user, setUser }) => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log(user);
    navigate(`/${user}`);
    setUser("");
  };

  const emptyUser = () => {
    setUser("");
  };
  return (
    <div className="w-[90%] bg-red-700 mx-auto flex justify-center mt-10 p-8 rounded max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
      <input
        className="p-3 border-2 border-gray-500 w-[80%] rounded bg-gray-900 text-white max-sm:mb-5"
        type="text"
        name="username"
        id="username"
        placeholder="Enter your username : "
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white p-2 ml-5 rounded border-none cursor-pointer max-sm:w-[80%] max-sm:ml-0 max-sm:mb-5"
      >
        Submit Username
      </button>
      <a
        href={`/${user}`}
        className="bg-green-600 text-white p-2 ml-5 rounded border-none cursor-pointer text-center max-sm:w-[80%] max-sm:ml-0 max-sm:mb-5"
      >
        via a tag
      </a>
      <Link
        to={`/${user}`}
        onClick={emptyUser}
        className="bg-green-600 text-white p-2 ml-5 mx-7 rounded border-none cursor-pointer text-center max-sm:w-[80%] max-sm:ml-7"
      >
        via Link tag
      </Link>
    </div>
  );
};

export default Home;
