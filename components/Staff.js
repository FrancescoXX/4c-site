import React, { useState } from "react";
import GetStaff from "./GetStaff";
import Users from "./Users";

// import staff data
import staff from "../content/staff.json";

const Staff = () => {
  const [tab] = useState("Staff");
  return (
    <div className="flex items-start justify-start mt-[3em]">
      <section className="flex-1 text-4xl font-bold text-center text-white">
        <h1 className="uppercase tracking-widest">{tab}</h1>
        <div className="flex flex-wrap items-center justify-center gap-[1.8rem] pb-4 m-2 overflow-y-auto">
          {tab === "Staff" ? (
            <GetStaff users={staff} />
          ) : (
            <Users users={staff.profiles} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Staff;
