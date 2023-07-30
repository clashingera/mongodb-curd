"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import TopicLoading from "./TopicLoading";

const NewTopic = () => {

  const [isSubmmiting, setIsSubmmiting] = useState(false);
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();


    setIsSubmmiting(true);

    const data = {
      text: e.target.topic?.value,
    };
    // console.log(text);
    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // console.log(JSONdata);

    // API endpoint where we send form data.
    const endpoint = "/api/topics";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();

    if(result){
      setIsSubmmiting(false);
      router.push('/');
      router.refresh();
    }

    // alert(`${result.message}`);
  };

  return (
    <div className="">
    <form
      onSubmit={submitHandler}
      className="flex justify-between items-center bg-slate-900 text-white rounded m-auto max-w-xl p-4 my-2"
    >
      <label className="text-white" htmlFor="topic">
        Add Topic :{" "}
      </label>
      <div>
        <input
          // onChange={(e) => {setTopic(e.target.value)}}
          type="text"
          placeholder="Topic"
          className="p-2 mx-3 rounded border-none outline-none text-slate-900
          font-semibold tracking-wide"
          name="topic"
          id="topic"
          required
        />
        {/* 
[NOTE] '<Link></Link>' component is not working for submmiting a form  
<Link type="submit"  href="/NewTopic" className=" text-white bg-indigo-900 p-2 rounded"> 
</Link> 
*/}
        <button type="submit" className=" text-white bg-indigo-900 p-2 rounded"  disabled = {isSubmmiting}>
        {/* {isSubmmiting && <svg className="animate-spin h-5 w-5 mr-3 " viewBox="0 0 24 24"></svg>} */}
        {isSubmmiting ? 'Processing...' : 'Add Topic'}
        </button>
      </div>
      {/* <button type="submit">Demo Button</button> */}
    </form>
      {isSubmmiting && <TopicLoading/>}
    </div>
  );
};
export default NewTopic;
