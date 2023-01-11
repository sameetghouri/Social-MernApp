import { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const Createpost = () => {
    const user = useSelector((state)=>state?.counter?.user)
    const [tweetbody, settweetbody]= useState("");
    const [tweetimage, settweetimage]= useState("");
   

    const handlesubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('tweetbody', tweetbody);
        formData.append('postpic', tweetimage);

        axios.post("api/tweet", {
            headers: {'content-type': 'multipart/form-data',
                      'authorization': `Bearer ${user?.token}`,},
            data:formData
            })
        .then((res)=>{console.log(res)})
        .catch((err)=>{console.log(err)});
        settweetbody("");
        settweetimage("");

    };
    

    return ( 
        <div className="col-span-4">
       <div className="h-screen grid grid-cols-5 md:grid-cols-8">
        <div className="col-span-5 md:col-span-6 flex items-center justify-center bg-gradient-to-t from-emerald-300 to-emerald-400 ">
                     
        <div className="w-4/5 shadow-lg bg-gray-200 p-10 m-4 rounded-lg flex flex-col items-center overflow-auto ">
            <h1 className="m-3 text-2xl">Create Tweet</h1>
            
            <form onSubmit={handlesubmit} className="flex flex-col items-center w-full">
            
            <textarea className="p-2 h-48 w-full rounded-lg shadow-lg" type="text" value={tweetbody} onChange = {(e) => settweetbody(e.target.value)}></textarea>
            <input type="file"
             accept=".png, .jpg, .jpeg"
             onChange={(e)=>settweetimage(e.target.files[0])} 
             className=" bg-zinc-400 mt-1 px-3 py-1 w-2/3 rounded-full"
             />
            <button type="submit" className="bg-zinc-400 mt-8 mx-4 w-24 px-4 py-2 rounded-r-full rounded-l-full cursor-pointer transform hover:scale-110 transition duration-100">Post</button>
            </form>
        </div>
        </div>
        <Footer/>
        </div>
        </div> 
     );
}
 
export default Createpost;