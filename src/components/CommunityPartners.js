import Image from "next/image"
import Link from "next/link"
import React from "react"
import partnerCommunities from "../data/partnerCommunities.json"
function CommunityPartners() {
  return (
    <div className="container text-white flex items-center justify-center mt-20 mb-10">
      <div className="p-3 max-w-bodyContainer w-full">
        <header className="text-4xl font-semibold text-center">
          Community Partners
        </header>
        <p className="text-center text-sm mt-2 italic">
          Other great communities we collaborate with
        </p>
        <div className="flex items-center justify-center mt-8">
          {partnerCommunities.map((community) => (
            <div key={community.community_name} className="flex">
              <div>
                <Link href={community.website}>
                  <Image
                    src={community.logo}
                    alt={community.community_name}
                    width={100}
                    height={100}
                    className="object-contain transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                  />
                </Link>
              </div>
              <div className="flex items-center justify-center px-6 ">
                <div>
                  <h1 className="text-2xl">{community.community_name}</h1>
                  <h3>{community.sub_desc}</h3>
                  <p>{community.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommunityPartners
