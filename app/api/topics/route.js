import Topic from "@/app/models/TopicModel";
import connectMongoDB from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request){

    // console.log(request);
    const {text} = await request.json();
    await connectMongoDB();
    await Topic.create({text});
    return NextResponse.json({message : "Tpoic Created"}, {status : 201});
}

export async function GET(){

    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({topics});
    
}

// [<----NOTE---->]
// you cann't define multiple GET methods in single 'route.js'
// export async function GET(request){

//     const {searchParams} = new URL(request.url);
//     const id = searchParams.get('id');

//     await connectMongoDB();
//     const topic = await Topic.findOne({_id : id});
//     return NextResponse.json({topic});
// }

export async function DELETE(request){
    
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message : "Topic is Deleted"});

    // [<----NOTE---->]
    // DELETE method cann't accept 'params' as a parameter so following code is invalid
    // const {id} = params;
    // console.log(id);

}