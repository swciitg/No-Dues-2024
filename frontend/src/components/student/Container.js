import React from "react";

const StudentContainer = () => {
    return (
        <React.Fragment>
            <div className="w-full bg-[#eef1f4] h-full h-[calc(100%-7rem)]">
                <div className="bg-[#ffffff]  w-11/12 sm:w-7/12   mx-auto h-fit relative top-8">
                    <h1 className="text-[#1E2532] text-4xl ml-8 relative top-4 font-semibold">Kane Mona</h1>
                    <h1 className="text-[#1E2532] text-2xl ml-8 relative top-4 font-semibold">234567787</h1>
                    <div className="flex flex-col justify-between">
                        <form className="w-full flex  mt-16 mb-4">

                            <div className="w-1/2 mx-8">
                                <fieldset class="mb-4">
                                    <legend class="text-md font-semibold mb-2">Program</legend>
                                    <input type="text" class="w-11/12 border border-gray-300 rounded-md sm:px-3  py-2 focus:outline-none  focus:bg-[#E8E9EA]" />
                                </fieldset>

                                <fieldset class="mb-4">
                                    <legend class="text-md font-semibold mb-2">Email</legend>
                                    <input type="email" class="w-11/12 border border-gray-300 rounded-md px-3 py-2 focus:outline-none  focus:bg-[#E8E9EA]" />
                                </fieldset>

                                <fieldset class="mb-4">
                                    <legend class="text-md font-semibold mb-2">Hostel</legend>
                                    <select class="w-11/12 border border-gray-300 rounded-md px-3 py-2 focus:outline-none  focus:bg-[#E8E9EA]">
                                        <option value="">Select Hostel</option>
                                        <option value="1">Hostel 1</option>
                                        <option value="2">Hostel 2</option>
                                        <option value="3">Hostel 3</option>
                                    </select>
                                </fieldset>

                                <fieldset class="mb-4">
                                    <legend class="text-md font-semibold mb-2">A/C Number</legend>
                                    <input type="text" class="w-11/12 border border-gray-300 rounded-md px-3 py-2 focus:outline-none  focus:bg-[#E8E9EA]" />
                                </fieldset>
                            </div>

                            <div className="w-1/2 mx-8">
                                <fieldset class="mb-4">
                                    <legend class="text-md font-semibold mb-2">Department</legend>
                                    <select class="w-11/12 border border-gray-300 rounded-md px-3 py-2 focus:outline-none  focus:bg-[#E8E9EA]">
                                        <option value="">Select Department</option>
                                        <option value="1">Department 1</option>
                                        <option value="2">Department 2</option>
                                        <option value="3">Department 3</option>
                                    </select>
                                </fieldset>

                                <fieldset class="mb-4">
                                    <legend class="text-md font-semibold mb-2">Contact Number</legend>
                                    <input type="number" class="w-11/12 border border-gray-300 rounded-md px-3 py-2 focus:outline-none  focus:bg-[#E8E9EA]" />
                                </fieldset>

                                <fieldset class="mb-4">
                                    <legend class="text-md font-semibold mb-2">Room</legend>
                                    <input type="text" class="w-11/12 border border-gray-300 rounded-md px-3 py-2 focus:outline-none  focus:bg-[#E8E9EA]" />
                                </fieldset>
                                <fieldset class="mb-4">


                                    <legend class="text-md font-semibold mb-2">IFSC</legend>
                                    <input type="text" class="w-11/12 border border-gray-300 rounded-md px-3 py-2 focus:outline-none  focus:bg-[#E8E9EA]" />
                                </fieldset>
                            </div>



                        </form>
                        <div className="flex justify-center sm:justify-end ">
                            <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md sm:w-auto mb-10 mx-14">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default StudentContainer;