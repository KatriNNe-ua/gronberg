export interface InfoSection {
  about: string[];
  information: {
    role: string;
    organization: string;
    period: string;
  }[];
  recognitions: {
    role: string;
    organization: string;
    period: string;
  }[];
}

export const infoData: InfoSection = {
  about: [
    "Massa vitae tortor condimentum lacinia quis vel eros donec. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Congue nisi vitae suscipit tellus mauris a diam maecenas. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet.",
    "Sit amet aliquam id diam maecenas ultricies mi eget. Tortor id aliquet lectus proin. Varius quam quisque id diam vel quam elementum pulvinar.",
    "Nisi porta lorem mollis aliquam ut. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Eget nullam non nisi est sit amet facilisis magna etiam. Et tortor at risus viverra adipiscing at in tellus integer. Mi sit amet mauris commodo quis imperdiet massa.",
  ],
  information: [
    {
      role: "Art Director",
      organization: "Art Studio",
      period: "Okt 2020 Currently",
    },
    { role: "Jury", organization: "Awwards", period: "June 2020" },
    {
      role: "Photographer & Art director",
      organization: "Freelance",
      period: "Okt 2019 Sep 2020",
    },
    { role: "Art Study", organization: "Harvard", period: "Jan 2016 Sep 2019" },
  ],
  recognitions: [
    {
      role: "Art Director",
      organization: "Art Studio",
      period: "Okt 2020 Currently",
    },
    { role: "Jury", organization: "Awwards", period: "June 2020" },
    {
      role: "Photographer & Art director",
      organization: "Freelance",
      period: "Okt 2019 Sep 2020",
    },
  ],
};
