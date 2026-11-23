"use client";

import { useEffect, useState } from "react";
import {
  X,
  Compass,
  Sparkles,
  Calendar,
  Users,
  CheckCircle2,
  MessageCircle,
  Loader2,
} from "lucide-react";
import { countries } from "@/data/destinations";
import { usePlanTrip } from "@/context/PlanTripContext";

const VIBES = [
  { id: "cultural", label: "Cultural Heritage", icon: "🏛️" },
  { id: "adventure", label: "Mountain & Adventure", icon: "🏔️" },
  { id: "relaxation", label: "Peaceful Island & Escape", icon: "🌊" },
];

const GROUP_SIZES = ["Solo (1)", "Couple (2)", "Family (3–5)", "Group (6+)"];

const SEASONS = ["Spring (Mar–May)", "Summer (Jun–Aug)", "Autumn (Sep–Nov)", "Winter (Dec–Feb)"];

export default function PlanTripModal() {
  const { isOpen, closePlanTrip, selectedDestination } = usePlanTrip();

  const [destination, setDestination] = useState("japan");
  const [prevSelected, setPrevSelected] = useState(selectedDestination);
  const [vibe, setVibe] = useState("cultural");
  const [travelers, setTravelers] = useState("Couple (2)");
  const [season, setSeason] = useState("Spring (Mar–May)");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"form" | "loading" | "success">("form");
  const [referenceId, setReferenceId] = useState("ODY-7824");

  // Synchronize destination state when initial selection changes during render
  if (selectedDestination !== prevSelected) {
    setPrevSelected(selectedDestination);
    setDestination(selectedDestination || "japan");
  }

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closePlanTrip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closePlanTrip]);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset status when closed after a short delay
      setTimeout(() => {
        setStatus("form");
      }, 300);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentCountry =
    countries.find((c) => c.slug === destination) || countries[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    setStatus("loading");
    const newId = `ODY-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceId(newId);

    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  const getWhatsAppMessage = () => {
    const text = `Salam / Hello Odysse! 🌍\nI would like to plan a bespoke trip with the following details:\n\n• Ref ID: #${referenceId}\n• Destination: ${currentCountry.name}\n• Travelers: ${travelers}\n• Vibe: ${VIBES.find((v) => v.id === vibe)?.label}\n• Preferred Season: ${season}\n• Traveler Name: ${fullName}\n\nPlease share your recommended itinerary!`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="plan-trip-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      {/* Dark Blurred Backdrop */}
      <div
        onClick={closePlanTrip}
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-2xl bg-warm-cream text-forest-green rounded-3xl shadow-2xl border border-sand/30 overflow-hidden my-auto animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-forest-green text-warm-cream px-6 py-5 flex items-center justify-between border-b border-forest-green/20">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-sand" />
            <h3 id="plan-trip-title" className="font-playfair text-xl tracking-wider">
              PLAN YOUR JOURNEY
            </h3>
          </div>
          <button
            type="button"
            onClick={closePlanTrip}
            className="w-8 h-8 rounded-full bg-warm-cream/10 hover:bg-warm-cream/20 text-warm-cream flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {/* STATE 1: FORM */}
          {status === "form" && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-sand font-semibold mb-1">
                  CURATED TRAVEL PLANNER
                </p>
                <h2 className="font-playfair text-2xl sm:text-3xl text-forest-green font-medium">
                  Craft Your Custom Escape
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 font-light mt-1">
                  Tell us about your dream adventure. We will tailor an
                  unforgettable itinerary just for you.
                </p>
              </div>

              {/* 1. Destination Selector */}
              <div>
                <label htmlFor="destination-select" className="block text-xs font-semibold tracking-wider uppercase text-forest-green mb-2">
                  1. Select Destination
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {countries.map((c) => (
                    <button
                      key={c.slug}
                      type="button"
                      onClick={() => setDestination(c.slug)}
                      className={`relative rounded-xl p-3 text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between h-24 overflow-hidden ${
                        destination === c.slug
                          ? "border-forest-green ring-2 ring-forest-green shadow-md bg-white"
                          : "border-sand/40 bg-white/70 hover:bg-white"
                      }`}
                    >
                      <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                        {c.continent}
                      </span>
                      <span className="font-playfair font-semibold text-base text-forest-green">
                        {c.name}
                      </span>
                      {destination === c.slug && (
                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-forest-green" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Travel Vibe */}
              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-forest-green mb-2">
                  2. Choose Your Travel Vibe
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {VIBES.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVibe(v.id)}
                      className={`px-3.5 py-3 rounded-xl border text-left flex items-center gap-2.5 text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                        vibe === v.id
                          ? "bg-forest-green text-warm-cream border-forest-green shadow-sm"
                          : "bg-white border-sand/40 text-forest-green hover:border-forest-green/60"
                      }`}
                    >
                      <span className="text-base">{v.icon}</span>
                      <span>{v.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Group Size & Season */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="travelers-select" className="block text-xs font-semibold tracking-wider uppercase text-forest-green mb-2">
                    3. Travelers
                  </label>
                  <select
                    id="travelers-select"
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full bg-white border border-sand/40 rounded-xl px-4 py-3 text-sm text-forest-green focus:outline-none focus:border-forest-green"
                  >
                    {GROUP_SIZES.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="season-select" className="block text-xs font-semibold tracking-wider uppercase text-forest-green mb-2">
                    4. Tentative Season
                  </label>
                  <select
                    id="season-select"
                    value={season}
                    onChange={(e) => setSeason(e.target.value)}
                    className="w-full bg-white border border-sand/40 rounded-xl px-4 py-3 text-sm text-forest-green focus:outline-none focus:border-forest-green"
                  >
                    {SEASONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 4. Traveler Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-forest-green/10">
                <div>
                  <label htmlFor="traveler-name-input" className="block text-xs font-semibold tracking-wider uppercase text-forest-green mb-2">
                    Your Name
                  </label>
                  <input
                    id="traveler-name-input"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Alif Danial"
                    className="w-full bg-white border border-sand/40 rounded-xl px-4 py-3 text-sm text-forest-green focus:outline-none focus:border-forest-green"
                  />
                </div>

                <div>
                  <label htmlFor="traveler-email-input" className="block text-xs font-semibold tracking-wider uppercase text-forest-green mb-2">
                    Email Address
                  </label>
                  <input
                    id="traveler-email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. you@example.com"
                    className="w-full bg-white border border-sand/40 rounded-xl px-4 py-3 text-sm text-forest-green focus:outline-none focus:border-forest-green"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-forest-green text-warm-cream py-4 rounded-xl font-medium text-xs sm:text-sm tracking-widest uppercase hover:bg-forest-green/90 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md mt-2"
              >
                <span>Curate My Custom Journey</span>
                <Sparkles className="w-4 h-4 text-sand" />
              </button>
            </form>
          )}

          {/* STATE 2: LOADING */}
          {status === "loading" && (
            <div className="py-16 flex flex-col items-center justify-center text-center">
              <Loader2 className="w-12 h-12 text-forest-green animate-spin mb-4" />
              <h3 className="font-playfair text-2xl text-forest-green font-medium mb-2">
                Curating Your Itinerary...
              </h3>
              <p className="text-gray-600 text-sm font-light max-w-sm">
                Pairing boutique accommodations and tailored experiences for{" "}
                <span className="font-semibold text-forest-green">
                  {currentCountry.name}
                </span>
                .
              </p>
            </div>
          )}

          {/* STATE 3: SUCCESS / ITINERARY SUMMARY CARD */}
          {status === "success" && (
            <div className="flex flex-col gap-6 animate-in fade-in duration-300">
              <div className="text-center">
                <div className="w-14 h-14 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-8 h-8 text-forest-green" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-sand">
                  INQUIRY CONFIRMED
                </span>
                <h3 className="font-playfair text-3xl font-medium text-forest-green mt-1">
                  Your Custom Journey Draft
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light mt-1">
                  Trip Reference Code:{" "}
                  <span className="font-mono font-bold text-forest-green">
                    #{referenceId}
                  </span>
                </p>
              </div>

              {/* Destination Summary Visual Card */}
              <div className="bg-white rounded-2xl overflow-hidden border border-sand/30 shadow-md">
                <div
                  className="relative h-44 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${currentCountry.image.hero})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-dark-green/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-warm-cream flex items-end justify-between">
                    <div>
                      <span className="text-[10px] tracking-widest uppercase text-sand block font-medium">
                        {currentCountry.continent}
                      </span>
                      <h4 className="font-playfair text-2xl font-medium">
                        {currentCountry.name}
                      </h4>
                    </div>
                    <span className="text-xs bg-warm-cream/20 backdrop-blur-md px-3 py-1 rounded-full text-warm-cream">
                      {VIBES.find((v) => v.id === vibe)?.label}
                    </span>
                  </div>
                </div>

                <div className="p-5 grid grid-cols-2 gap-4 text-xs border-b border-sand/15">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4 text-sand shrink-0" />
                    <span>Travelers: {travelers}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4 text-sand shrink-0" />
                    <span>Timing: {season.split(" ")[0]}</span>
                  </div>
                </div>

                <div className="p-5 bg-warm-cream/30 text-xs text-gray-600 leading-relaxed font-light">
                  <p>
                    Thank you, <strong className="text-forest-green">{fullName}</strong>! We have recorded your preferences for{" "}
                    <strong>{currentCountry.name}</strong>. A curated proposal with daily highlights has been prepared for{" "}
                    <strong className="text-forest-green">{email}</strong>.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white py-3.5 px-4 rounded-xl font-medium text-xs sm:text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-sm text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={closePlanTrip}
                  className="flex-1 bg-forest-green hover:bg-forest-green/90 text-warm-cream py-3.5 px-4 rounded-xl font-medium text-xs sm:text-sm tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
                >
                  Done & Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
