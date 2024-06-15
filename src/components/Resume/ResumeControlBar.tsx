"use client";
import { useEffect, useState } from "react";
import { useSetDefaultScale } from "@/components/Resume/hooks";
import {
  MagnifyingGlassIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { usePDF } from "@react-pdf/renderer";
import dynamic from "next/dynamic";

const ResumeControlBar = ({
  scale,
  setScale,
  documentSize,
  document,
  fileName,
  reg
}: {
  scale: number;
  setScale: (scale: number) => void;
  documentSize: string;
  document: JSX.Element;
  fileName: string;
  reg: string;
}) => {
  const { scaleOnResize, setScaleOnResize } = useSetDefaultScale({
    setScale,
    documentSize,
  });

  const [instance, update] = usePDF({ document });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!instance.blob) {
      setMessage("Please generate the PDF first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", instance.blob, `${fileName}.pdf`);
    formData.append('reg', reg)
    try {
      const res = await fetch(`/api/storeResume?reg=${reg}`, {
        method: "POST",
        body: formData,
      });

      if (res.status === 200) {
        setMessage("Resume Uploaded Successfully!");
      } else {
        setMessage("Something Went Wrong, Please try again later.");
      }
    } catch (error) {
      setMessage("Something Went Wrong, Please try again later.");
    }
  };

  // Hook to update pdf when document changes
  useEffect(() => {
    update(document);
  }, [update, document]);

  return (
    <div className="sticky bottom-0 left-0 right-0 flex h-[var(--resume-control-bar-height)] items-center justify-center px-[var(--resume-padding)] text-gray-600 lg:justify-between">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
        <input
          type="range"
          min={0.5}
          max={1.5}
          step={0.01}
          value={scale}
          onChange={(e) => {
            setScaleOnResize(false);
            setScale(Number(e.target.value));
          }}
        />
        <div className="w-10">{`${Math.round(scale * 100)}%`}</div>
        <label className="hidden items-center gap-1 lg:flex">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4"
            checked={scaleOnResize}
            onChange={() => setScaleOnResize((prev) => !prev)}
          />
          <span className="select-none">Autoscale</span>
        </label>
        <button
          type="submit"
          className="ml-1 flex items-center gap-1 rounded-md border border-gray-300 px-3 py-0.5 hover:bg-gray-100 lg:ml-8"
        >
          <ArrowDownTrayIcon className="h-4 w-4" />
          Upload To Profile
        </button>
      </form>
      <a
        className="ml-1 flex items-center gap-1 rounded-md border border-gray-300 px-3 py-0.5 hover:bg-gray-100 lg:ml-8"
        href={instance.url!}
        download={fileName}
      >
        <ArrowDownTrayIcon className="h-4 w-4" />
        <span className="whitespace-nowrap">Download Resume</span>
      </a>
      {message && <p className="text-gray-500 ml-5">{message}</p>}
    </div>
  );
};

/**
 * Load ResumeControlBar client side since it uses usePDF, which is a web specific API
 */
export const ResumeControlBarCSR = dynamic(
  () => Promise.resolve(ResumeControlBar),
  {
    ssr: false,
  }
);

export const ResumeControlBarBorder = () => (
  <div className="absolute bottom-[var(--resume-control-bar-height)] w-full border-t-2 bg-gray-50" />
);
