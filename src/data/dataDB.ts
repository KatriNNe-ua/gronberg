export interface Exhibition {
  id: number;
  title: string;
  titleRed: string;
  description: string;
  image: string;
  date: string;
  location: string;
  venue: string;
  ticketLink: string;
  isPast: boolean;
  about: string[];
  openingHours: string;
  place: string;
  directionsLink: string;
  address: string
}


export interface Project {
  id: number;
  title: string;
  titleRed: string;
  location: string;
  date: string;
  mainImage: string;
  image: string[];
  about: string[];
  details: {
    year: string;
    service: string;
    client: string;
  };
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "DANCING IN",
    titleRed: "BLACK & White",
    location: "New York",
    date: "October 2025",
    mainImage: "images/db/projects/project_01/main.webp",
    image: [
      "images/db/projects/project_01/1.webp",
      "images/db/projects/project_01/2.webp",
      "images/db/projects/project_01/3.webp",
      "images/db/projects/project_01/4.webp",
      "images/db/projects/project_01/5.webp",
    ],
    about: [
      "Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.",
      "Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.",
      "Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.",
    ],
    details: {
      year: "2025",
      service: "Photo Shooting",
      client: "Jonathan Åberg",
    },
  },
  {
    id: 2,
    title: "STYLE &",
    titleRed: "Fashion",
    location: "New York",
    date: "October 2025",
    mainImage: "images/db/projects/2.webp",
    image: [
      "images/db/projects/project_01/1.webp",
      "images/db/projects/project_01/2.webp",
      "images/db/projects/project_01/3.webp",
      "images/db/projects/project_01/4.webp",
      "images/db/projects/project_01/5.webp",
    ],
    about: [
      "Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.",
      "Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.",
      "Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.",
    ],
    details: {
      year: "2025",
      service: "Photo Shooting",
      client: "Jonathan Åberg",
    },
  },
  {
    id: 3,
    title: "ONE",
    titleRed: "Eye",
    location: "New York",
    date: "October 2025",
    mainImage: "images/db/projects/3.webp",
    image: [
      "images/db/projects/project_01/1.webp",
      "images/db/projects/project_01/2.webp",
      "images/db/projects/project_01/3.webp",
      "images/db/projects/project_01/4.webp",
      "images/db/projects/project_01/5.webp",
    ],
    about: [
      "Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.",
      "Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.",
      "Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.",
    ],
    details: {
      year: "2025",
      service: "Photo Shooting",
      client: "Jonathan Åberg",
    },
  },
  {
    id: 4,
    title: "WEEK",
    titleRed: "Fashion",
    location: "New York",
    date: "October 2025",
    mainImage: "images/db/projects/4.webp",
    image: [
      "images/db/projects/project_01/1.webp",
      "images/db/projects/project_01/2.webp",
      "images/db/projects/project_01/3.webp",
      "images/db/projects/project_01/4.webp",
      "images/db/projects/project_01/5.webp",
    ],
    about: [
      "Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.",
      "Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.",
      "Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.",
    ],
    details: {
      year: "2025",
      service: "Photo Shooting",
      client: "Jonathan Åberg",
    },
  },
  {
    id: 5,
    title: "BE",
    titleRed: "Silent",
    location: "New York",
    date: "October 2025",
    mainImage: "images/db/projects/5.webp",
    image: [
      "images/db/projects/project_01/1.webp",
      "images/db/projects/project_01/2.webp",
      "images/db/projects/project_01/3.webp",
      "images/db/projects/project_01/4.webp",
      "images/db/projects/project_01/5.webp",
    ],
    about: [
      "Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.",
      "Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.",
      "Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.",
    ],
    details: {
      year: "2025",
      service: "Photo Shooting",
      client: "Jonathan Åberg",
    },
  },
  {
    id: 6,
    title: "CIGARETTE &",
    titleRed: "Tobacco",
    location: "New York",
    date: "October 2025",
    mainImage: "images/db/projects/6.webp",
    image: [
      "images/db/projects/project_01/1.webp",
      "images/db/projects/project_01/2.webp",
      "images/db/projects/project_01/3.webp",
      "images/db/projects/project_01/4.webp",
      "images/db/projects/project_01/5.webp",
    ],
    about: [
      "Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.",
      "Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.",
      "Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.",
    ],
    details: {
      year: "2025",
      service: "Photo Shooting",
      client: "Jonathan Åberg",
    },
  },
  {
    id: 7,
    title: "WONDERFUL",
    titleRed: "Body",
    location: "New York",
    date: "October 2025",
    mainImage: "images/db/projects/7.webp",
    image: [
      "images/db/projects/project_01/1.webp",
      "images/db/projects/project_01/2.webp",
      "images/db/projects/project_01/3.webp",
      "images/db/projects/project_01/4.webp",
      "images/db/projects/project_01/5.webp",
    ],
    about: [
      "Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum.",
      "Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.",
      "Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.",
    ],
    details: {
      year: "2025",
      service: "Photo Shooting",
      client: "Jonathan Åberg",
    },
  },
];


export const exhibitionsData: Exhibition[] = [
  {
    id: 1,
    title: "INDEPENDENT",
    titleRed: "BEAUTY",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
    image: "images/db/exhibitions/1.webp",
    date: "2026-06-16",
    location: "New York",
    venue: "Town Hall",
    ticketLink: "#",
    isPast: true,
    about: [
      "Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellusrutrum. Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.",
      "Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.",
      "Nisi porta lorem mollis aliquam ut. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Eget nullam non nisi est sit amet facilisis magna etiam. Et tortor at risus viverra adipiscing at in tellus integer. Mi sit amet mauris commodo quis imperdiet massa.",
    ],
    openingHours: "Monday to Saturday from 11 pm to 6 pm",
    place: "Art Studio",
    directionsLink: "#",
    address: "Main Street 2, 12101 Berlin",
  },
  {
    id: 2,
    title: "IN HUMANITY WE",
    titleRed: "TRUST",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.",
    image: "images/db/exhibitions/2.webp",
    date: "2026-03-02",
    location: "Berlin",
    venue: "Kunsthalle",
    ticketLink: "#",
    isPast: true,
    about: [
      "Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellusrutrum. Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.",
      "Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.",
      "Nisi porta lorem mollis aliquam ut. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Eget nullam non nisi est sit amet facilisis magna etiam. Et tortor at risus viverra adipiscing at in tellus integer. Mi sit amet mauris commodo quis imperdiet massa.",
    ],
    openingHours: "Monday to Saturday from 11 pm to 6 pm",
    place: "Art Studio",
    directionsLink: "#",
    address: "Main Street 2, 12101 Berlin",
  },
  {
    id: 3,
    title: "BERLIN AT",
    titleRed: "NIGHT",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",
    image: "images/db/exhibitions/3.webp",
    date: "2026-02-01",
    location: "Berlin",
    venue: "Kunsthalle",
    ticketLink: "#",
    isPast: true,
    about: [
      "Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellusrutrum. Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.",
      "Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.",
      "Nisi porta lorem mollis aliquam ut. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Eget nullam non nisi est sit amet facilisis magna etiam. Et tortor at risus viverra adipiscing at in tellus integer. Mi sit amet mauris commodo quis imperdiet massa.",
    ],
    openingHours: "Monday to Saturday from 11 pm to 6 pm",
    place: "Art Studio",
    directionsLink: "#",
    address: "Main Street 2, 12101 Berlin",
  },
  {
    id: 4,
    title: "URBAN",
    titleRed: "EXPRESSIONS",
    description:
      "Exploring the dynamics of city life through contemporary art installations.",
    image: "images/db/exhibitions/4.webp",
    date: "2025-03-02",
    location: "Paris",
    venue: "Grand Palais",
    ticketLink: "#",
    isPast: false,
    about: [
      "Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellusrutrum. Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.",
      "Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.",
      "Nisi porta lorem mollis aliquam ut. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Eget nullam non nisi est sit amet facilisis magna etiam. Et tortor at risus viverra adipiscing at in tellus integer. Mi sit amet mauris commodo quis imperdiet massa.",
    ],
    openingHours: "Monday to Saturday from 11 pm to 6 pm",
    place: "Art Studio",
    directionsLink: "#",
    address: "Main Street 2, 12101 Berlin",
  },
  {
    id: 5,
    title: "NATURE'S",
    titleRed: "VOICES",
    description: "A journey into the harmony between humans and nature.",
    image: "images/db/exhibitions/5.webp",
    date: "2025-01-09",
    location: "London",
    venue: "Tate Modern",
    ticketLink: "#",
    isPast: false,
    about: [
      "Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellusrutrum. Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.",
      "Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.",
      "Nisi porta lorem mollis aliquam ut. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Eget nullam non nisi est sit amet facilisis magna etiam. Et tortor at risus viverra adipiscing at in tellus integer. Mi sit amet mauris commodo quis imperdiet massa.",
    ],
    openingHours: "Monday to Saturday from 11 pm to 6 pm",
    place: "Art Studio",
    directionsLink: "#",
    address: "Main Street 2, 12101 Berlin",
  },
  {
    id: 6,
    title: "FUTURE",
    titleRed: "VISIONS",
    description:
      "Innovative perspectives on technology and society in modern art.",
    image: "images/db/exhibitions/6.webp",
    date: "2025-04-10",
    location: "Tokyo",
    venue: "National Art Center",
    ticketLink: "#",
    isPast: false,
    about: [
      "Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellusrutrum. Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.",
      "Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.",
      "Nisi porta lorem mollis aliquam ut. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Eget nullam non nisi est sit amet facilisis magna etiam. Et tortor at risus viverra adipiscing at in tellus integer. Mi sit amet mauris commodo quis imperdiet massa.",
    ],
    openingHours: "Monday to Saturday from 11 pm to 6 pm",
    place: "Art Studio",
    directionsLink: "#",
    address: "Main Street 2, 12101 Berlin",
  },
];




