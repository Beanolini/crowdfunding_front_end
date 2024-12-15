import halflingOne from "./images/halfling-one.jpg";
import halflingTwo from "./images/halfling-two.jpg";
import halflingThree from "./images/halfling-three.jpg";
import halflingFour from "./images/halfling-four.jpg";
import halflingFive from "./images/halfling-five.jpg";
import halflingSix from "./images/halfling-six.jpg";
import halflingSeven from "./images/halfling-seven.jpg";

export const allProjects = [
  {
    id: 1,
    title: "Gowrick Greatflower",
    description: "The first project.",
    goal: 150,
    image: halflingOne,
    is_open: true,
    date_created: "2024-12-15",
    owner: 1,
  },
  {
    id: 2,
    title: "Anyas Nightsun",
    description: "The second project.",
    goal: 150,
    image: halflingTwo,
    is_open: true,
    date_created: "2024-12-15",
    owner: 1,
  },
  {
    id: 3,
    title: "Kasumo Sunmeadow",
    description: "The third project.",
    goal: 150,
    image: halflingThree,
    is_open: true,
    date_created: "2024-12-15",
    owner: 1,
  },
  {
    id: 4,
    title: "Roslyse Nimbleflow",
    description: "The fourth project.",
    goal: 150,
    image: halflingFour,
    is_open: true,
    date_created: "2024-12-15",
    owner: 2,
  },
  {
    id: 5,
    title: "Hanys Teafoot",
    description: "The fifth project.",
    goal: 150,
    image: halflingFive,
    is_open: true,
    date_created: "2024-12-15",
    owner: 2,
  },
  {
    id: 6,
    title: "Antran Shadowspell",
    description: "The sixth project.",
    goal: 150,
    image: halflingSix,
    is_open: true,
    date_created: "2024-12-15",
    owner: 1,
  },
  {
    id: 7,
    title: "Zefara Bronzetopple",
    description: "The seventh project.",
    goal: 150,
    image: halflingSeven,
    is_open: true,
    date_created: "2024-12-15",
    owner: 2,
  },
];

export const oneProject = {
  id: 1,
  title: "Project One",
  description: "The first project.",
  goal: 150,
  image: "https://via.placeholder.com/300.jpg",
  is_open: true,
  date_created: "2024-12-15",
  owner: 1,
  pledges: [
    {
      id: 1,
      amount: 100,
      comment: "A comment for the pledge",
      anonymous: false,
      supporter: 3,
      project_id: 1,
    },
  ],
};
