"use client";

import React, { createContext, useContext, useState } from "react";

interface PlanTripContextType {
  isOpen: boolean;
  selectedDestination: string;
  openPlanTrip: (initialDestination?: string) => void;
  closePlanTrip: () => void;
}

const PlanTripContext = createContext<PlanTripContextType | undefined>(undefined);

export function PlanTripProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");

  const openPlanTrip = (initialDestination?: string) => {
    if (initialDestination) {
      setSelectedDestination(initialDestination.toLowerCase());
    } else {
      setSelectedDestination("japan");
    }
    setIsOpen(true);
  };

  const closePlanTrip = () => {
    setIsOpen(false);
  };

  return (
    <PlanTripContext.Provider
      value={{
        isOpen,
        selectedDestination,
        openPlanTrip,
        closePlanTrip,
      }}
    >
      {children}
    </PlanTripContext.Provider>
  );
}

export function usePlanTrip() {
  const context = useContext(PlanTripContext);
  if (!context) {
    throw new Error("usePlanTrip must be used within a PlanTripProvider");
  }
  return context;
}
