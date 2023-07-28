
const NewTopic = () => {

    return  (
        <form className="flex justify-between items-center bg-slate-900 text-white rounded m-auto max-w-xl p-4 my-2">
            <label className="text-white">Add Topic : </label>
            <div>
            <input type="text" placeholder="Topic" className="p-2 mx-3 rounded border-none outline-none text-slate-900"/>
            <button className=" text-white bg-indigo-900 p-2 rounded">Add Topic</button>
            </div>
        </form>
    );
};
export default NewTopic; 