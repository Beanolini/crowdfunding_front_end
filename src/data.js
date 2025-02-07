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
    description:
      "The Halfling Invention Fair! Our halfling inventor wants to host the very first Halfling Invention Fair. Think of it like a science fair, but with a focus on hilarious and impractical inventions—like the 'automatic self-peeling potato machine' or 'the horse-drawn coffee machine' that only works in the rain.",
    goal: 5000,
    image: "/images/halfling-two.jpg",
    is_open: true,
    date_created: "2024-12-15",
    owner: 1,
  },
  {
    id: 3,
    title: "Greebo Lightfoot",
    description:
      "The Halfling-Invented Self-Stirring Stew Pot! Our curious halfling inventor dreams of creating the world’s first self-stirring stew pot that magically keeps the soup at the perfect temperature and flavor. It would be the ultimate kitchen gadget, saving hours of stirring for other halflings so they can nap or annoy a friend instead.",
    goal: 2500,
    image: "/images/halfling-three.jpg",
    is_open: true,
    date_created: "2024-12-15",
    owner: 1,
  },
  {
    id: 4,
    title: "Roslyse Nimbleflow",
    description:
      "Halfling Historical Record of the Best Nap Spots! This halfling wants to create the definitive guide to the best nap spots in the kingdom, ranked by softness, quietness, and snack accessibility.",
    goal: 1000,
    image: "/images/halfling-four.jpg",
    is_open: true,
    date_created: "2024-12-15",
    owner: 2,
  },
  {
    id: 5,
    title: "Hanys Teafoot",
    description:
      "Help this Halfling and their Owl Friend Buy a Hot Air Balloon for Their Next Big Adventure! The halfling wants to travel the world with their trusty owl companion, but walking everywhere is taking too long (and the owl is tired of flying). They’ve decided that the best way to see the sights in style is with a hot air balloon, but they need some help making it happen!",
    goal: 1000,
    image: "/images/halfling-five.jpg",
    is_open: true,
    date_created: "2024-12-15",
    owner: 2,
  },
  {
    id: 6,
    title: "Zefara Bronzetopple",
    description:
      "The Frog and Halfling World Tour! This halfling dreams of going on a world tour with their frog friend, performing music in every village, forest, and city. Their act? The halfling plays a tiny lute or flute while the frog croaks melodically in perfect harmony, creating a unique sound that draws crowds wherever they go.",
    goal: 4000,
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
