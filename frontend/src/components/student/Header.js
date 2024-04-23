import React from "react";
import PersonIcon from "../../assets/Person.svg"
import IITGIcon from "../../assets/IIT_Guwahati_Logo 1.svg"
const Header=({data})=>{

    return(
        <React.Fragment>
            <div className="box-border w-full h-28  flex items-center justify-evenly">
                <div className="xsm:w-9/12 w-8/12 flex items-center ml-6">
                <img src={IITGIcon}></img>
                <h1 className="text=[#1E2532] ml-4 xsm:text-2xl text-xl font-semibold">No Dues Portal</h1>
                </div>

                <div className="xsm:w-3/12 w-4/12 flex gap-1 items-center xsm:mr-8 2xsm:mr-4 mr-2 justify-end">
                    <img src={PersonIcon}></img>
                    <h4 className="text-[#2164E8]">{data.email}</h4>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Header;