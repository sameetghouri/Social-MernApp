import { useDispatch, useSelector} from "react-redux";
import {  delete_tweet } from "../redux/counter";
//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TweetDetails = ({tweet}) => {

  const dispatch = useDispatch(); 
  const user = useSelector((state)=>state?.counter?.user)
    
    // const handleclick = async ()=>{
    //     if(!user){
    //         return
    //     }
    //     const response = await fetch('/api/tweets/'+tweet._id,{
    //         method:'DELETE',
    //         headers:{
    //             'Authorization':`Bearer ${user.token}`}
    //     })
    //     const json = await response.json()

    //     if (response.ok){
    //         // dispatch({type:'DELETE_tweet', payload:json})
    //         dispatch(delete_tweet(json))
    //     }
    // }
    return ( 
        <div className="w-11/12 bg-white shadow-sm rounded-2xl py-4 mt-4 flex flex-col items-center" >
            <h3 className="">{tweet.tweetauthor}</h3>
            <p>{tweet.tweetbody}</p>
            {tweet.tweetimage && <img className="w-11/12 rounded-lg" src={`PostPics/${tweet.tweetimage}`} alt="tweetimage"/>}
            <p >{`Likes: ${tweet.likes.length}`}</p>
            {/* <p>{tweet.comments}</p> */}
            
            <p className="text-sm text-gray-600">{formatDistanceToNow(new Date(tweet.createdAt), {addSuffix:true})}</p>
            {/* <span className='material-symbols-outlined' onClick={handleclick}>Delete</span> */}
        </div>
     );
}
 
export default TweetDetails;