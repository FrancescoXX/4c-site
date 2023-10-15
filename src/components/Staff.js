import React, { useState } from "react"
import GetStaff from "components/GetStaff"
import Users from "components/Users"

// import staff data
import staff from "data/staff"
import Title from "components/Title"
import { FilterUsersByNameAndDesc } from "utils/filterUsers"

const Staff = () => {
  const [tab] = useState("Staff")
  // state for currentUsers
  const [currentUsers, setCurrentUsers] = useState(staff)

  // filter handler
  const searchHandler = (event) => {
    event.preventDefault()
    const filterdUsers = FilterUsersByNameAndDesc(staff, event.target.value)
    setCurrentUsers(filterdUsers)
  }
  return (
    <div className="flex items-center justify-center">
      <div className="mt-[3em] flex max-w-bodyContainer items-start justify-start">
        <section className="flex-1 text-center font-bold text-white">
          <Title heading="Staff" />
          <div className="flex items-center justify-center ">
            <div className="break:w[500px] relative m-auto flex max-w-[800px] self-center mobile:mx-10 laptop:w-[600px] bigScreen:w-[800px]">
              <input
                placeholder="Search here"
                className="h-10 w-full border-slate-200 px-5 py-3 text-white outline-none placeholder:text-slate-700 contrast-more:border-slate-400 contrast-more:placeholder:text-slate-500 bg-white bg-opacity-[.2] p-8 shadow backdrop-blur-3xl rounded-3xl"
                onInput={searchHandler}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 rotate-90 text-white sm:text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#000000"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          {currentUsers.length
            ? (
            <div className="m-2 flex flex-wrap items-center justify-center gap-[1.8rem] overflow-y-auto pt-5 pb-4">
              {tab === "Staff"
                ? (
                <GetStaff users={currentUsers} />
                  )
                : (
                <Users users={currentUsers} />
                  )}
            </div>
              )
            : (
            <p className="mt-3">User does not exist!</p>
              )}
        </section>
      </div>
    </div>
  )
}

export default Staff
