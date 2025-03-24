import { Post } from "./types";

export const blogPosts: Post[] = [
  {
    id: 1,
    slug: "tiger-tank",
    title: "The Tiger I: Germany's Fearsome Heavy Tank",
    excerpt:
      "A deep dive into the Tiger I tank and its impact on WWII armored warfare.",
    coverImage: "/blog/tiger-tank.jpg",
    country: "🇩🇪",
    date: "1942",
    content: {
      keyFeatures: ["88mm gun", "120mm frontal armor", "Top speed 45 km/h"],
      main: "The Tiger I was a formidable German heavy tank known for its powerful gun and thick armor.",
    },
  },
  {
    id: 2,
    slug: "spitfire",
    title: "The Spitfire: Britain's Iconic Fighter Plane",
    excerpt:
      "How the Spitfire helped win the Battle of Britain with its superior performance.",
    coverImage: "/blog/spitfire.jpg",
    country: "🇬🇧",
    date: "1936",
    content: {
      keyFeatures: [
        "Rolls-Royce Merlin engine",
        "Elliptical wing design",
        "Top speed 594 km/h",
      ],
      main: "The Spitfire was a critical British fighter plane that turned the tide in the Battle of Britain.",
    },
  },
  {
    id: 3,
    slug: "sherman",
    title: "The Sherman Tank: America's Workhorse",
    excerpt:
      "An exploration of the M4 Sherman tank and its vital role in Allied victories.",
    coverImage: "/blog/sherman.jpg",
    country: "🇺🇸",
    date: "1941",
    content: {
      keyFeatures: [
        "75mm M3 cannon",
        "Reliable performance",
        "Top speed 48 km/h",
      ],
      main: "The Sherman Tank was America's workhorse in WWII, valued for its reliability and ease of production.",
    },
  },
  {
    id: 4,
    slug: "bf109",
    title: "The Messerschmitt Bf 109: Germany's Deadly Fighter",
    excerpt:
      "Unraveling the story of the Bf 109 and its role as a mainstay in the Luftwaffe.",
    coverImage: "/blog/bf109.jpg",
    country: "🇩🇪",
    date: "1935",
    content: {
      keyFeatures: [
        "Daimler-Benz DB 605 engine",
        "Top speed 640 km/h",
        "Effective armament",
      ],
      main: "The Bf 109 was a key German fighter renowned for its speed and agility throughout the war.",
    },
  },
  {
    id: 5,
    slug: "uss-iowa",
    title: "The USS Iowa: America's Mighty Battleship",
    excerpt:
      "A look at the USS Iowa and its powerful impact on naval warfare during WWII.",
    coverImage: "/blog/uss-iowa.jpg",
    country: "🇺🇸",
    date: "1943",
    content: {
      keyFeatures: [
        "Nine 16-inch guns",
        "Displacement 45,000 tons",
        "Top speed 33 knots",
      ],
      main: "The USS Iowa was a mighty American battleship that delivered formidable naval firepower during WWII.",
    },
  },
  {
    id: 6,
    slug: "t34",
    title: "The T-34: The Soviet Tank That Changed the War",
    excerpt:
      "Discover how the T-34 revolutionized tank warfare with its innovative design.",
    coverImage: "/blog/t34.jpg",
    country: "🇷🇺",
    date: "1940",
    content: {
      keyFeatures: ["Sloped armor", "76.2mm or 85mm gun", "Top speed 55 km/h"],
      main: "The T-34 revolutionized tank warfare with its sloped armor and powerful gun, becoming a Soviet favorite.",
    },
  },
  {
    id: 7,
    slug: "stuka",
    title: "The Stuka Dive Bomber: Germany's Aerial Terror",
    excerpt:
      "Examining the Stuka dive bomber and its chilling impact during early WWII.",
    coverImage: "/blog/stuka.jpg",
    country: "🇩🇪",
    date: "1935",
    content: {
      keyFeatures: [
        "1400 kg bomb payload",
        "Inverted gull wings",
        "Jericho Trumpet siren",
      ],
      main: "The Stuka was a fearsome dive bomber known for its distinctive siren and precision bombing in early WWII.",
    },
  },
];
