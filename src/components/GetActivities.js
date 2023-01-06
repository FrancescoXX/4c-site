import eventList from "../data/events.json"
import Title from "./Title"
import { FaTwitter, FaDiscord } from "react-icons/fa"

const events = eventList.events
const styles = "transition-all ease-in cursor-pointer"

const GetActivities = () => {
  return (
    <div className="flex flex-col items-center">
      <Title heading="Activities" />
      <section className="flex w-full flex-wrap items-center justify-center p-4 sm:p-10">
        {events.map((event, idx) => {
          return (
            event.isActive && (
              <div key={idx} className='hov-bg-theme m-5 h-[450px] rounded-xl bg-[#f1f5f9] p-5 text-black shadow-md transition-all ease-out xl:w-[380px]'>
                <div>
                  <h2 className="title mt-5 text-2xl">{event.name}</h2>
                  <h3 className="text-xl text-right font-light">By {event.organizer}</h3>
                  <h4 className="text-xl font-semibold">{event.date}</h4>
                  <img src={event?.image} alt={event.name} className='max-h-[20rem] rounded-md object-contain' />

                  <div className="flex justify-between text-2xl">
                    <a href={event.link} target='_blank' className="bg-theme my-4 flex h-14 w-full items-center justify-center bg-[#70b7e6] text-4xl text-white" rel="noreferrer">
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
      </section>
    </div>
  )
}

export default GetActivities