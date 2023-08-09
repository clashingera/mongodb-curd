import Link from "next/link";
import {BiSolidEdit} from "react-icons/bi";
import RemoveButton from "./RemoveButton";

const getTopics = async () => {

  const app_url = process.env.APP_URL;

  try{
    const res = await fetch(`${app_url}/api/topics`, {
      cache : "no-store"
    });

    if(!res.ok){
      return new Error("Faield to fetch topics");
    }

    return res.json();

  }catch(err){
    console.log("Error Loading Topics", err);
  }

};



const Topic = async () => {

  const {topics : Topics} = await getTopics();

  return (
    <div className="m-auto max-w-2xl items-center ">
      <ul className="flex flex-col gap-2">
        {Topics.map((topic) => {
          return (
            <li key={topic._id} className="flex justify-between cursor-pointer bg-slate-900 hover:shadow-lg  text-white p-5 rounded-md">
              <h3>{topic.text}</h3>
              <div className="flex gap-1 text-xl ">
                <button>
                <Link href={`/NewTopic/${topic._id}`}>
                <BiSolidEdit className="cursor-pointer hover:text-blue-500 "/>
                </Link>
                </button>
                <RemoveButton id={topic._id}/>
              </div> 
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Topic;
