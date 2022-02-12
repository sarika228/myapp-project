import {useState,UseEffect} from "react"
import {LoadImages,SearchImages} from "./component/api"
import "./App.css"
import Image from "./component/image"
function App(){
    const [query,setQuery]=useState()
    const [searchQ,setSearch]=useState()
    const data=LoadImages();
    console.log(query);
   
    const search=()=>{
        setSearch(query)
        // console.log(SearchImages(query))
    }
    const searchData=SearchImages(searchQ);
    console.log(searchData)
    return(
        <div className="App">
            <div>
                <input type="text" onChange={(event)=>setQuery(event.target.value)}/>
                <button onClick={search}>Search</button>
            </div>
        </div>
        // <div className="contain">
        // { searchQ ?searchData.map((img,key)=>(
        //     <Image src={img.urls.thumb} key={key}/>
        // )):data.map((img,key)=>(
        //     <Image src={img.urls.thumb} key={key}/>
        // ))}
        // </div>
        // // </div>
    );

}
export default App;