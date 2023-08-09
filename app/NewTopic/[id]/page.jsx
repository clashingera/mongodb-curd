
import EditForm from "@/componets/EditForm";
// import { data } from "autoprefixer";

const getTopic = async (topicId) => {
    
    const app_url = process.env.APP_URL;

    // console.log(params);
    // console.log(id);

    const res = await fetch(`${app_url}/topics/${topicId}`, {cache : "no-store"});

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