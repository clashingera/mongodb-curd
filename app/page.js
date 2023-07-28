
import NewTopic from "./componets/NewTopic";
import Topic from "./componets/Topic";


const TopicData = [
  {text : "Learn React"},
  {text : "Learn NextJs"},
  {text : "TypeScript is good"},
  {text : "C++ is for Game Dev"},
]

export default function Home() {
  return (
  <>
  <NewTopic/>
  <Topic Topics={TopicData}/>
  </>
  );
}
