import React from "react";
import Navigation from "./Navigation";


const Header = (props) => {

  return (
    <>
      <div className="header" >
        <>PASTA</>
        <Navigation {...props} />
      </div>
      <br />
    </>
  )
}

export default Header