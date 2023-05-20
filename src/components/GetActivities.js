import eventList from "../data/events.json"
import navItems from "data/navbar"
import Title from "./Title"
import Link from "next/link"
import { FaTwitter, FaDiscord } from "react-icons/fa"

const events = eventList.events
const styles = "transition-all ease-in cursor-pointer"

const GetActivities = () => (

  <div style={{ marginTop: "50px" }} className="flex flex-col items-center" id="discover">
    <Title heading="Activities" />
    <section className="flex justify-center sm:w-[500px] xl:w-auto  p-4 sm:p-10 items-start">
      {events.map((event, idx) => {
        return (
          event.isActive && (
            <div
              key={idx}
              className="hov-bg-theme mx-5 h-full w-[330px] rounded-xl bg-[#f1f5f9] p-5 text-black shadow-md transition-all ease-out hover:-translate-y-1 xl:w-[380px]"
            >
              <div>
                <h2 className="title mt-5 text-2xl">{event.name}</h2>
                <div className="w-full">
                  <p className="text-md  text-[14px] text-gray-600 leading-[20px] mt-3">
                    By {event.organizer}{" "}
                    <span className="block sm:inline text-sm font-[600] text-black">
                      {event.date}
                    </span>{" "}
                  </p>
                </div>
                <img
                  src={event?.image}
                  alt={event.name}
                  className="w-full mb-4 rounded-md object-contain my-4"
                />

                <div className="flex justify-between text-2xl  bottom-1 w-[100%]">
                  <a
                    href={event.link}
                    target="_blank"
                    className="bg-theme my-4 rounded-md flex h-14 w-full items-center justify-center bg-[#70b7e6] text-4xl text-white"
                    rel="noreferrer"
                  >
                    {event.venue === "Twitter"
                      ? (
                      <FaTwitter className={styles} />
                        )
                      : (
                      <FaDiscord className={styles} />
                        )}
                  </a>
                </div>
              </div>
            </div>
          )
        )
      })}

      <div className="flex flex-col gap-3">
        <h2 className="text-lg text-white">Checkout these cool projects from our community</h2>
        <Link
          href={navItems[1].href}
          role="menuitem"
          tabIndex={0}
          className={"w-full rounded  px-4 py-2 font-bold transition-all ease-out hover:-translate-y-1 hover:cursor-pointer lg:w-auto text-center text-black w-8 bg-white"}
        >
          {navItems[1].pageName}
        </Link>
      </div>
    </section>
  </div>
)

export default GetActivities
