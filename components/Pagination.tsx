"use client";

import { useState } from "react";

export default function Pagination() {
  const [activePage, setActivePage] = useState(0);

  return (
    <div className="flex items-center justify-center gap-2">
      {[0, 1, 2, 3].map((page) => (
        <button
          key={page}
          onClick={() => setActivePage(page)}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            activePage === page ? "w-6 bg-[#242820]" : "w-1.5 bg-[#B5A58A]"
          }`}
          aria-label={`Go to page ${page + 1}`}
          aria-current={activePage === page ? "page" : undefined}
        />
      ))}
    </div>
  );
}
