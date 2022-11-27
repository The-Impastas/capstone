import React from "react";
import Navigation from "./Navigation";


const Header = (props) => {

  return (
    <>
      <div className="header" >
        <Navigation {...props} />
      </div>
      <br />
    </>
  )
}

export default Header