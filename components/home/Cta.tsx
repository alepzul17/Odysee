"use client";

import { usePlanTrip } from "@/context/PlanTripContext";

export default function Cta() {
  const { openPlanTrip } = usePlanTrip();

  return (
    <div className="w-full h-125 bg-forest-green flex flex-col justify-center items-center px-8 gap-2 text-warm-cream">
      <p className="text-center text-sm font-medium tracking-wide">
        YOUR NEXT JOURNEY STARTS HERE
      </p>
      <h1 className="font-playfair text-center text-4xl font-semibold">
        READY TO EXPLORE THE WORLD?
      </h1>
      <p className="text-center">
        Let us help you discover extraordinary places and create memories that
        last a lifetime.
      </p>
      <button
        type="button"
        onClick={() => openPlanTrip()}
        className="bg-warm-cream text-forest-green px-6 py-3 mt-3 hover:bg-sand transition-colors duration-300 cursor-pointer rounded-lg font-medium text-sm tracking-wider"
      >
        PLAN YOUR JOURNEY
      </button>
    </div>
  );
}
