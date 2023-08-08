
import EditForm from "@/app/componets/EditForm";
// import { data } from "autoprefixer";

const getTopic = async (topicId) => {
    

    // console.log(params);
    // console.log(id);

    const res = await fetch(`http://localhost:3000/api/topics/${topicId}`, {cache : "no-store"});

    // const data = await res.json(); 

    // const {text : topic} =  data;
    // console.log(data);
    return res.json();
}

const EditTopic = async ({params}) => {

    const {id : topicId} = params;

     const data = await getTopic(topicId);
     const topic =  data.resp.text;
    //  console.log(topic);
    // console.log(data);

    return (
        <EditForm id={topicId} text={topic}/>
    );
};
export default EditTopic;