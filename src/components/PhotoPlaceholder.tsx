"use client";

import React from "react";

interface PhotoPlaceholderProps {
  caption?: string;
  count?: number;
  images?: string | string[];
}

export function PhotoPlaceholder({
  caption,
  count = 1,
  images,
}: PhotoPlaceholderProps) {
  // Parse images prop to an array of URLs
  const imgArray = typeof images === "string"
    ? images.split(",").map((url) => url.trim())
    : Array.isArray(images)
    ? images
    : [];

  // Cap count between 1 and 4, or use imgArray length if it is greater
  const cardsCount = Math.min(Math.max(Number(count), imgArray.length, 1), 4);
  const cards = Array.from({ length: cardsCount });

  // Grid columns styling depending on the count
  let gridCols = "grid-cols-1";
  if (cardsCount === 2) {
    gridCols = "grid-cols-2";
  } else if (cardsCount === 3) {
    gridCols = "grid-cols-1 sm:grid-cols-3";
  } else if (cardsCount === 4) {
    gridCols = "grid-cols-2 sm:grid-cols-4";
  }

  return (
    <div className="my-8 space-y-3 not-prose">
      <div className={`grid gap-4 ${gridCols}`}>
        {cards.map((_, i) => {
          const imageUrl = imgArray[i];
          return (
            <div
              key={i}
              className="group relative flex aspect-video w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100/50 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md"
            >
              {imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={imageUrl}
                  alt={caption || `Uploaded Photo ${i + 1}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="p-6 flex flex-col items-center justify-center w-full h-full">
                  {/* Subtle decorative background pattern */}
                  <div className="absolute inset-0 opacity-[0.03] transition-opacity group-hover:opacity-[0.05] bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Soft glowing effect behind the icon */}
                  <div className="absolute h-24 w-24 rounded-full bg-neutral-200/40 blur-xl transition-all duration-500 group-hover:scale-125" />

                  <div className="relative flex flex-col items-center space-y-2 text-center">
                    {/* Animated camera icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6 text-neutral-400 transition-colors duration-300 group-hover:text-neutral-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-neutral-400 group-hover:text-neutral-600">
                      Photo {cardsCount > 1 ? i + 1 : ""}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {caption && (
        <p className="text-center text-xs italic text-neutral-400">
          {caption}
        </p>
      )}
    </div>
  );
}

