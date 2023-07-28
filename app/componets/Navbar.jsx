const Navbar = () => {
  return (
    <nav className="flex m-auto p-4 my-8 bg-slate-900 justify-between max-w-xl rounded items-center">
      <h4 className=" text-white">Topics</h4>
      <button className=" text-white bg-indigo-900 p-2 rounded">
        Add Topic
      </button>
    </nav>
  );
};
export default Navbar;
