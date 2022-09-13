import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import News from "../components/News";


function Home() {
  var styles = {
    position: "relative",
    top: "190px",
    left: "480px",
    borderRadius: "50%",
    width: "50%",
    height: "50%",
  };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="z-2">
      {loading ? (
        <div className="w-full h-full items-center offset-sm-3 absolute bg-blue-900">
          <img src="logo.png" alt="logos" style={styles} />
        </div>
      ) : (
        <div className="flex flex-col" >
          <Navbar />
          <News/>
          <Categories/>
          
        </div>
      )}
    </div>
  );
}

export default Home;
