import {BiSolidEdit} from "react-icons/bi";
import {MdDelete} from "react-icons/md";
const Topic = (props) => {
  return (
    <div className="m-auto max-w-2xl items-center ">
      <ul className="flex flex-col gap-2">
        {props.Topics.map((topic) => {
          return (
            <li className="flex justify-between bg-slate-900 text-white p-5 rounded-md">
              <h3>{topic.text}</h3>
              <div className="flex gap-1 text-xl ">
                <BiSolidEdit className="cursor-pointer hover:text-blue-500 "/>
                <MdDelete className="cursor-pointer text-red-400 hover:text-red-700"/>
              </div> 
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Topic;
