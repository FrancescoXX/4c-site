import React, { useState } from "react"
import GetActivemembers from "components/GetActivemembers"
import Users from "components/Users"

// import contributors data
import activeMembers from "data/activemembers"
import Title from "components/Title"
import { FilterUsers } from "utils/filterUsers"

const ActiveMembers = () => {
  // state for currentUsers
  const [currentUsers, setCurrentUsers] = useState(activeMembers)

  // filter handler
  const searchHandler = (event) => {
    event.preventDefault()
    const filterdUsers = FilterUsers(
      activeMembers,
      event.target.value,
    )
    setCurrentUsers(filterdUsers)
  }
  const [tab] = useState("Active Members")
  return (
    <div className="mt-[3em] flex items-center justify-center">
      <section className="max-w-bodyContainer flex-1 text-center font-bold text-white">
        <Title heading="Active Members" />
        <div className="flex items-center justify-center ">
          <div className="break:w[500px] relative m-auto flex max-w-[800px] self-center mobile:mx-10 laptop:w-[600px] bigScreen:w-[800px]">
            <input
              placeholder="Search here"
              className="h-10 w-full border-slate-200 px-5 py-3 text-white outline-none placeholder:text-slate-700 contrast-more:border-slate-400 contrast-more:placeholder:text-slate-500 rounded-3xl  bg-white bg-opacity-[.2] p-8 shadow backdrop-blur-3xl"
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
        <div className="m-2 flex flex-wrap items-center justify-center overflow-y-auto pb-4">
          {tab === "Active Members"
            ? (
              <GetActivemembers users={currentUsers} />
              )
            : (
              <Users users={currentUsers} />
              )}
        </div>
      </section>
    </div>
  )
}

export default ActiveMembers
