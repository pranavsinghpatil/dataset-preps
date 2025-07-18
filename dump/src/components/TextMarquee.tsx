import React, { Fragment } from "react";
import Marquee from "react-fast-marquee";

export function TextMarquee() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-sm border-b border-gray-800">
      <div className="flex h-12 items-center px-3 py-3">
        <div className="relative w-full max-w-full overflow-hidden">
          <span className="flex gap-1 text-sm">
            <Marquee
              speed={30}
              style={{
                maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
                margin: "auto"
              }}
            >
              {Array(4).fill(0).map((_, index) => (
                <Fragment key={index}>
                  <span className="text-gray-400">COMPUTER ENGINEERING</span>{" "}
                  <b className="ml-1.5 text-white">STUDENT</b>{" "}
                  <svg 
                    viewBox="0 0 24 24" 
                    className="h-4 w-4 mx-4 text-blue-500 inline-block"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>{" "}
                  <span className="text-gray-400">AI/ML</span>{" "}
                  <b className="ml-1.5 text-white">ENTHUSIAST</b>{" "}
                </Fragment>
              ))}
            </Marquee>
          </span>
        </div>
      </div>
    </div>
  );
} 