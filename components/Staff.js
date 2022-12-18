import React, { useState } from "react";
import GetStaff from "./GetStaff";
import Users from "./Users";

// import staff data
import staff from "../content/staff.json";

const Staff = () => {
  const [tab] = useState("Staff");
  return (
    <div className="flex justify-center items-center">
      <div className="flex max-w-bodyContainer items-start justify-start mt-[3em]">
        <section className="flex-1 text-4xl font-bold text-center text-white">
          <h1 className="tracking-widest uppercase">{tab}</h1>
          <div className="flex flex-wrap items-center justify-center pb-4 m-2 overflow-y-auto gap-[1.8rem]">
            {tab === "Staff" ? (
              <GetStaff users={staff} />
            ) : (
              <Users users={staff.profiles} />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Staff;
