export const frontRoutes = {
  pages: {
    home: "/",
    projects: {
      base: "projects",
      item: ":id",
    },
    exhibitions: {
      base: "exhibitions",
      item: ":id",
    },
    about: "about",
    contact: "contact",
  },
  navigator: {
    home: "/",
    projects: {
      base: "/projects",
      item: (id: number | string) => `/projects/${id}`,
    },
    exhibitions: {
      base: "/exhibitions",
      item: (id: number | string) => `/exhibitions/${id}`,
    },
    about: "/about",
    contact: "/contact",
  },
};
