"use client"
import Link from "next/link"
import { observer } from "mobx-react-lite"
import Markdown from "react-markdown"
import parseFrontMatter from "front-matter"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { IItem } from "../models/Issues"
import { useIssuesStore } from "../models/IssuesStore"
import { IFrontMatter } from "../definitions"
import { EASY_APPLY_LABEL } from "../constants/labels"
// import {
//   IconBookmark,
//   IconLocation,
//   IconClock,
//   IconZap,
//   IconDollar,
//   IconRemote,
// } from "../../../public/icons/index"

dayjs.extend(relativeTime)

interface Props {
  item: IItem
  onSeach: (tech: string) => void
}

export const CardIssue = observer(({ item, onSeach }: Props) => {
  const { bookmarks, toggleBookmark } = useIssuesStore()

  const isBookmark = bookmarks?.has(item.node_id)
  const isEasyApply = !!item?.labels?.find(
    (label) => label.name === EASY_APPLY_LABEL,
  )
  const createdAt = dayjs(item.created_at).fromNow(true)
  const {
    company,
    logoCompany,
    shortDescription,
    location,
    salary,
    technologies,
    isRemoteJob,
  } = parseFrontMatter<IFrontMatter>(item.body)?.attributes || {}

  return (
    <article
      key={item.id}
      title={item.title}

      className="relative cursor-pointer pb-3 px-3 py-10 rounded-xl bg-white border-2 border-[#D9D9D9] hover:border-black shadow-[2px_2px_0px_#D9D9D9] hover:shadow-[4px_4px_0px_#7cc470] ease-in-out duration-300"
    >
      <Link href={item.html_url} target="_blank">
        <img
          src={logoCompany || "/apple-touch-icon.png"}
          alt="avatar"
          width={44}
          height={44}

          className="w-20 h-20 object-contain rounded absolute -top-[40px] left-0 right-0 mx-auto border-2 border-black shadow-[2px_2px_0px_#7cc470]"
        />
        <h1 className="mt-1 font-heading text-xl font-bold text-slate-700 hn-break-words truncate">
          {item.title}
        </h1>
        <div className="flex flex-row items-center">
          <span className="text-base font-medium text-slate-500 hn-break-words line-clamp-1">
            {company}
          </span>
          {isEasyApply && (
            <div className="flex flex-row items-center ml-5">
              <img
                src='/icons/zap.svg'
                className='max-w-7 max-h-7'
              />
              <span className="text-xs ml-1 text-emerald-400">
                {EASY_APPLY_LABEL}
              </span>
            </div>
          )}
          {Boolean(isRemoteJob) && (
            <div className="flex flex-row items-center ml-5">
              <img
                src='/icons/remote.svg'
                className='max-w-7 max-h-7'
              />
              <span className="text-xs ml-1 text-violet-600">Remote job</span>
            </div>
          )}
        </div>
        <div className="mt-2">

          {/* {shortDescription?.trim()?.length ? ( */}
            <div className="text-sm text-slate-500 line-clamp-5 min-h-[40rem]">
              {item.body}
            </div>
          {/* // ) : ( */}
            {/* <Markdown
              skipHtml
              allowedElements={["p"]}
              className="text-sm text-slate-500 line-clamp-4"
            >
              {item.body}

            </Markdown> */}
          {/* )} */}
        </div>
        <div className="flex flex-row mt-3 items-center justify-between">
          <div className="flex flex-row items-center">
            <img
              src='/icons/dollar.svg'
              className='max-w-7 max-h-7'
            />
            <p className="ml-1 text-sm text-slate-700">{salary || "?"}</p>
          </div>
          <div className="flex flex-row items-center">
            <img
              src='/icons/location.svg'
              className='max-w-7 max-h-7'
            />
            <p className="ml-1 text-sm text-slate-700">{location || "?"}</p>
          </div>
          <div className="flex flex-row items-center">
            <img
              src='/icons/clock.svg'
              className='max-w-7 max-h-7'
            />
            <p className="ml-1 text-sm text-slate-700">{createdAt}</p>
          </div>
        </div>
      </Link>
      <div className="grid grid-cols-6 gap-2 mt-3">
        <div className="flex flex-row flex-wrap col-span-5 gap-2">
          {technologies
            ?.split(",")
            ?.slice(0, 6)
            ?.map((tech) => (
              <div
                key={tech}
                className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-700 hover:bg-slate-200 ease-in-out duration-300"
                onClick={() => onSeach(tech?.trim())}
              >
                {tech?.trim()}
              </div>
            ))}
        </div>
        <div className="flex items-end justify-end">
          {/* <img
            src='/icons/bookmark.svg'
            className="hover:scale-125 ease-in-out duration-300 max-w-7 max-h-7"
            onClick={() => toggleBookmark(item)}
          /> */}
          {/* <svg viewBox="0 0 24 24"
            width={18} height={18}
            fill={isBookmark ? "#7cc470" : "#94a3b8"}
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => toggleBookmark(item)}
          >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 5v14a3 3 0 0 1-4.5 2.7l-3-1.8a1 1 0 0 0-1 0l-3 1.8A3 3 0 0 1 4 19V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3" />
          </svg> */}
        </div>
      </div>
    </article>
  )
})
