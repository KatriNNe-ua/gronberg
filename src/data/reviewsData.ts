


export interface Review {
  id: number;
  photo: string;
  text: string[];
  author: string;
  role: string;
}

export const reviewsData: Review[] = [
  {
    id: 1,
    photo: "images/home/reviews/01.webp",
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Laoreet sit amet cursus sit amet dictum sit amet justo.",
    ],
    author: "Michelle Lindstrøm",
    role: "Photoshoot",
  },
  {
    id: 2,
    photo: "images/home/reviews/02.webp",
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    author: "Jannis Jackson",
    role: "Art Direction",
  },
  {
    id: 3,
    photo: "images/home/reviews/03.webp",
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.",
    ],
    author: "Daniela Berg",
    role: "Video Editing",
  },
];
