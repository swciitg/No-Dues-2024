import React from "react";
const Header=()=>{
    return(
        <React.Fragment>
            <div className="box-border w-full h-28  flex items-center justify-evenly">
                <div className="xsm:w-9/12 w-8/12 flex items-center ml-6">
                <img src='IIT_Guwahati_Logo 1.svg'></img>
                <h1 className="text=[#1E2532] ml-4 xsm:text-2xl text-xl font-semibold">No Dues Portal</h1>
                </div>

                <div className="xsm:w-3/12 w-4/12 flex xsm:mr-8 2xsm:mr-4 mr-2 justify-end">
                    <img src="Person.svg"></img>
                    <h4 className="text-[#2164E8]">Mona Kane</h4>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Header;