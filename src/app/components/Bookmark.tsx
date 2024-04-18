import { memo, useEffect, useState } from "react"
import Modal from "react-modal"
import { useIssuesStore } from "../models/IssuesStore"
import { CardIssue } from "./CardIssue"

interface Props {
  onSeach: (tech: string) => void
}

export const Bookmark = memo(function Bookmark({ onSeach }: Props) {
  const { bookmarks, fetchBookmarks } = useIssuesStore()
  const data = Array.from(bookmarks.values())

  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleSearch = (tech: string) => {
    closeModal()
    onSeach(tech)
  }

  useEffect(() => {
    fetchBookmarks()
  }, [fetchBookmarks])

  const RenderList = () => {
    if (data?.length) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12 p-6 md:p-10">
          {data.map((item) => (
            <CardIssue key={item.node_id} item={item} onSeach={handleSearch} />
          ))}
        </div>
      )
    }
    return (
      <img
        src="/looking.svg"
        alt="looking"
        // width={219}
        // height={223}
        className="mx-auto max-w-10 max-h-10"
      />
    )
  }

  return (
    <>
      <div
        className="!fixed bottom-8 end-5 backdrop-blur-sm bg-slate-200/40 rounded-full p-3 transition duration-150 ease-in-out z-50 cursor-pointer hover:scale-110"
        onClick={openModal}
      >
        <img
        src='/icons/bookmark.svg'
        className='max-w-10 max-h-10'
        //  width={22} height={22} fill="#ffcc00"
          />
      </div>

      <Modal isOpen={isOpen} onRequestClose={closeModal} ariaHideApp={false}>
        <div className="flex flex-row justify-between items-center sticky top-0 z-0 bg-white px-6 md:px-10 py-3">
          <h1 className="font-heading text-xl font-bold text-slate-700">
            {`Bookmarks${data?.length > 0 ? ` (${data.length})` : ""}`}
          </h1>
          <div
            className="h-10 font-semibold text-sm cursor-pointer bg-slate-100 hover:bg-slate-200 py-1.5 px-4 rounded-md flex items-center justify-center"
            onClick={closeModal}
          >
            Close
          </div>
        </div>
        {RenderList()}
      </Modal>
    </>
  )
})
