import Featured from "../../Components/featured/featured";
import List from "../../Components/List/List";
import NavBar from "../../Components/navbar/NavBar";
import "./Home.scss"
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({type}) => {

    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {    
          try {
            const res = await axios.get(
              `lists${type ? "?type=" + type : ""}${
                genre ? "&genre=" + genre : ""
              }`,
              {
                headers: {
                  token:
                  "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
                },
              }
            );
            console.log(res.data)
            setLists(res.data);
            
          }
           catch (err) {
            console.log(err);
          }
      }
      getRandomLists();
    },[type,genre]);


    return (
        <h1>Move to Movies</h1>


    )
}

export default Home;