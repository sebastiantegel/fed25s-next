// Beskriv ett tema
export type Theme = {
  name: string;
  value: string;
};

// Beskriv vilka teman som finns i vår applikation
export const themes: Theme[] = [
  { name: "Day", value: "day" },
  { name: "Night", value: "night" },
  { name: "Pink", value: "pink" },
  { name: "Purple", value: "purple" },
];
