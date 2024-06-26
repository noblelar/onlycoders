import Banner from "@/components/social/Banner";
import PostCard from "@/components/social/PostCard";
import Image from "next/image";
import Anime from "@/assets/images/anime.png";
import NewMembers from "@/components/social/NewMembers";
import PopularGroups from "@/components/social/PopularGroups";
import BadgesGroup from "@/components/social/BadgesGroup";
import Quests from "@/components/social/Quests";

export default function Home() {
  return (
    <section className="gap-4 relative lg:h-screen">
      <Banner />

      <div className="lg:grid lg:grid-col-12 lg:grid-rows-5 lg:grid-flow-row lg:gap-4">
        <section className="lg:col-span-6 lg:row-span-6">
          <div className="flex justify-between mt-6 lg:mt-0 lg:hidden">
            <select className="border-2 border-[#E2E8F0] py-3 px-2 rounded-md bg-transparent outline-none">
              <option value="">All Updates</option>
              <option value="">Newest Members</option>
              <option value="">Quests</option>
              <option value="">Popular Groups</option>
              <option value="">Badges</option>
            </select>

            <select className="border-2 border-[#E2E8F0] py-3 px-2 rounded-md bg-transparent outline-none">
              <option value="">Everything</option>
            </select>
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-between lg:py-5 lg:bg-white lg:px-5 lg:rounded-md">
            <div className="relative">
              <p className="text-[#475569] font-bold text-[14px]">
                All Updates
              </p>
              <div className="w-full h-[3px] bg-[#5fcedc] absolute -bottom-8"></div>
            </div>

            <div className="border border-[#E2E8F0] rounded-md relative py-3 px-3 text-[12px]">
              <p className="absolute font-medium text-[#94A3B8] -top-2 px-1 left-4 bg-white">
                Show
              </p>
              <select name="" id="" className="outline-none">
                <option value="">Everything</option>
              </select>
            </div>
          </div>

          <div className="mt-7 lg:mt-4 ">
            <PostCard
              user={{
                name: "Noble Ackor",
                image: "https://cdnstorage.sendbig.com/unreal/female.webp",
                level: "2",
                isPro: true,
              }}
              shareCount={2}
              commentCount={1}
            >
              <div className="mt-5">
                <p className="text-[#334155] font-semibold text-[12px]">
                  <span className="font-normal">replied to the topic</span>{" "}
                  Welcome to the CoursePlayersGroup Forum in the Forum of
                  CoursePlayers Group
                </p>

                <p className="text-[#64748B] text-[13px] mt-2">Yesterday</p>

                <p className="text-[#334155] mt-4 text-[16px]">
                  Hello Everyone!
                </p>
              </div>
            </PostCard>

            <PostCard
              user={{
                name: "Bismark Ajei",
                image:
                  "data:image/jpeg;base64,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",
                level: "2",
              }}
              shareCount={0}
              commentCount={0}
            >
              <div className="mt-5">
                <p className="text-[#6366F1] mt-4 text-[16px]">
                  www.checkthisout.com
                </p>
                <p className="text-[#64748B] text-[13px] mt-2">Yesterday</p>
                <div className="w-full h-[209px] mt-4">
                  <Image className="w-full h-full" src={Anime} alt="anime" />
                </div>
              </div>
            </PostCard>
          </div>
        </section>

        <NewMembers />

        <PopularGroups />

        <BadgesGroup />

        <Quests />
      </div>
    </section>
  );
}
