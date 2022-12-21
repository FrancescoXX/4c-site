import React, { useState } from "react";
import GetStaff from "./GetStaff";
import Users from "./Users";

// import staff data
import staff from "../content/staff.json";

const Staff = () => {
  const [tab] = useState("Staff");
  return (
    <div className="flex items-center justify-center">
      <div className="mt-[3em] flex max-w-bodyContainer items-start justify-start">
        <section className="flex-1 text-center  font-bold text-white">
          <h1 className="headTitle uppercase tracking-widest">{tab}</h1>
          <div className="m-2 flex flex-wrap items-center justify-center gap-[1.8rem] overflow-y-auto pt-5 pb-4">
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
