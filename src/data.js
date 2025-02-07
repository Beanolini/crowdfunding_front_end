export const allProjects = [
  {
    id: 1,
    title: "Gowrick Greatflower",
    description:
      "The Halfling World Record for Largest Soup Pot! Gowrick's goal is to create the world’s biggest soup pot, big enough to fit an entire village’s worth of ingredients, and then host the biggest soup party the world has ever seen. Help them create a world record-breaking pot for the biggest soup! We'll need gold, steel, and lots of carrots (and a very large cauldron). Together, we can feed hundreds of halflings — and maybe even a few elves!",
    goal: 5000,
    image: "/images/halfling-one.jpg",
    is_open: true,
    date_created: "2024-12-15",
    owner: 1,
  },
  {
    id: 2,
    title: "Anyas Nightsun",
    description: "The second project.",
    goal: 150,
    image: "/images/halfling-two.jpg",
    is_open: true,
    date_created: "2024-12-15",
    owner: 1,
  },
  {
    id: 3,
    title: "Kasumo Sunmeadow",
    description: "The third project.",
    goal: 150,
    image: "/images/halfling-three.jpg",
    is_open: true,
    date_created: "2024-12-15",
    owner: 1,
  },
  {
    id: 4,
    title: "Roslyse Nimbleflow",
    description: "The fourth project.",
    goal: 150,
    image: "/images/halfling-four.jpg",
    is_open: true,
    date_created: "2024-12-15",
    owner: 2,
  },
  {
    id: 5,
    title: "Hanys Teafoot",
    description: "The fifth project.",
    goal: 150,
    image: "/images/halfling-five.jpg",
    is_open: true,
    date_created: "2024-12-15",
    owner: 2,
  },
  {
    id: 6,
    title: "Zefara Bronzetopple",
    description: "The seventh project.",
    goal: 150,
    image: "/images/halfling-seven.jpg",
    is_open: true,
    date_created: "2024-12-15",
    owner: 2,
  },
];

export const oneProject = {
  id: 1,
  title: "Gowrick Greatflower",
  description: "The first project.",
  goal: 150,
  image: "/images/halfling-one.jpg",
  is_open: true,
  date_created: "2024-12-15",
  owner: 1,
  pledges: [
    {
      id: 1,
      amount: 100,
      comment: "A comment for the pledge.",
      anonymous: false,
      supporter: 3,
      project_id: 1,
    },
    {
      id: 2,
      amount: 50,
      comment: "Another pledge comment.",
      anonymous: true,
      supporter: 4,
      project_id: 1,
    },
  ],
};
