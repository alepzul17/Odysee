export const countries = [
  {
    id: "japan",
    name: "Japan",
    slug: "japan",
    continent: "Asia",
    description:
      "Discover a beautiful blend of ancient traditions, modern cities and breathtaking natural landscapes.",
    bestTimeToVisit: "March – May",
    currency: "Japanese Yen (JPY)",
    language: "Japanese",
    places: ["Tokyo", "Kyoto", "Osaka", "Mount Fuji"],
    experiences: [
      "Visit ancient temples",
      "See cherry blossoms",
      "Explore traditional streets",
      "Enjoy Japanese cuisine",
    ],
    image: {
      hero: "/img/ExplorePage/fuji.jpg",
      kyoto:
        "https://images.pexels.com/photos/20892223/pexels-photo-20892223.jpeg",
      osaka:
        "https://images.pexels.com/photos/28608380/pexels-photo-28608380.jpeg",
      tokyo:
        "https://images.pexels.com/photos/33249531/pexels-photo-33249531.jpeg",
      mountFuji:
        "https://images.pexels.com/photos/33341920/pexels-photo-33341920.jpeg",
    },
  },
  {
    id: "egypt",
    name: "Egypt",
    slug: "egypt",
    continent: "Africa",
    description:
      "Explore the wonders of ancient civilizations, golden deserts and the timeless Nile River.",
    bestTimeToVisit: "October – April",
    currency: "Egyptian Pound (EGP)",
    language: "Arabic",
    places: ["Cairo", "Giza", "Luxor", "Aswan"],
    experiences: [
      "Explore the ancient pyramids",
      "Discover Egyptian temples",
      "Cruise along the Nile",
      "Experience desert adventures",
    ],
    image: {
      hero: "/img/ExplorePage/piramid.jpg",

      cairo:
        "https://images.pexels.com/photos/14529372/pexels-photo-14529372.jpeg",
      giza: "https://images.pexels.com/photos/18991556/pexels-photo-18991556.jpeg",
      Luxor:
        "https://images.pexels.com/photos/5572512/pexels-photo-5572512.jpeg",
      aswan:
        "https://images.pexels.com/photos/27730261/pexels-photo-27730261.jpeg",
    },
  },
  {
    id: "malaysia",
    name: "Malaysia",
    slug: "malaysia",
    continent: "Asia",
    description:
      "Experience tropical rainforests, vibrant cities, beautiful islands and diverse cultures.",
    bestTimeToVisit: "March – October",
    currency: "Malaysian Ringgit (MYR)",
    language: "Malay",
    places: ["Kuala Lumpur", "Terengganu", "Malacca", "Sabah"],
    experiences: [
      "Explore tropical rainforests",
      "Discover cultural heritage",
      "Relax on beautiful islands",
      "Enjoy local street food",
    ],
    image: {
      hero: "/img/ExplorePage/terengganu.jpg",
      kualaLumpur:
        "https://images.pexels.com/photos/4847110/pexels-photo-4847110.jpeg",
      terengganu:
        "https://images.pexels.com/photos/38170695/pexels-photo-38170695.jpeg",
      malacca:
        "https://images.pexels.com/photos/35905094/pexels-photo-35905094.jpeg",
      sabah:
        "https://images.pexels.com/photos/12438788/pexels-photo-12438788.jpeg",
    },
  },
  {
    id: "switzerland",
    name: "Switzerland",
    slug: "switzerland",
    continent: "Europe",
    description:
      "Discover magnificent alpine mountains, peaceful villages and spectacular lakes.",
    bestTimeToVisit: "June – September",
    currency: "Swiss Franc (CHF)",
    language: "German, French, Italian, Romansh",
    places: ["Interlaken", "Zermatt", "Lucerne", "Zurich"],
    experiences: [
      "Explore the Swiss Alps",
      "Ride scenic mountain trains",
      "Discover charming villages",
      "Enjoy alpine adventures",
    ],
    image: {
      hero: "/img/ExplorePage/switzerland.jpg",

      interlaken:
        "https://images.pexels.com/photos/2618992/pexels-photo-2618992.jpeg",
      zermatt:
        "https://images.pexels.com/photos/19244970/pexels-photo-19244970.jpeg",
      lucerne:
        "https://images.pexels.com/photos/5210659/pexels-photo-5210659.jpeg",
      zurich:
        "https://images.pexels.com/photos/32008398/pexels-photo-32008398.jpeg",
    },
  },
];

export const cities = [
  {
    id: "tokyo",
    name: "Tokyo",
    slug: "tokyo",
    type: "city",
    country: "Japan",
    countrySlug: "japan",
    description:
      "Experience the energy of a modern metropolis where futuristic attractions meet traditional culture.",
    image: "/img/destinations/japan1.jpg",
  },
  {
    id: "vestland",
    name: "Vestland",
    slug: "vestland",
    type: "region",
    country: "Norway",
    countrySlug: "norway",
    description:
      "Discover dramatic fjords, scenic mountains and peaceful coastal landscapes.",
    image: "/img/destinations/norway.jpg",
  },
  {
    id: "athens",
    name: "Athens",
    slug: "athens",
    type: "city",
    country: "Greece",
    countrySlug: "greece",
    description:
      "Step into the birthplace of democracy, surrounded by ancient landmarks and vibrant city life.",
    image: "/img/destinations/greece.jpg",
  },
];
