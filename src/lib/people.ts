export interface Person {
  id: string;

  name: string;
  role: string;
  institution?: string;

  description?: string;

  photo?: string;
  cv?: string;

  current: boolean;
  groupLead?: boolean;
}


export const people: Person[] = [

  {
    id: "lida-kanari",

    name: "Lida Kanari",
    role: "Group Leader",
    institution: "University of Oxford",

    description:
      "Mathematician and physicist working at the intersection of algebraic topology, computational modelling and neuroscience.",

    photo:
      "/images/people/lida-kanari.jpg",

    cv:
      "/documents/cv/lida-kanari.pdf",

    current: true,
    groupLead: true
  },

  {
    id: "nestor-timonidis",

    name: "Nestor Timonidis",
    role: "Postdoctoral researcher",
    institution: "University of Oxford",

    description:
      "Computational neuroscientist.",

    photo:
      "/images/people/nestor-timonidis.jpeg",

    cv:
      "/documents/cv/nestor-timonidis.pdf",

    current: true,
  },

  {
    id: "member-name",

    name: "Coming soon",
    role: "Doctoral student",
    institution: "University of Oxford",

    description:
      "Two incoming students in 2026.",

    photo:
      "/images/people/member-name.jpg",

    cv:
      "/documents/cv/",

    current: true,
  },

  /* ========================================================
     Alumni — Researchers & Engineers
     ======================================================== */

  {
    id: "adrien-berchet",
    name: "Adrien Berchet",
    role: "Postdoctoral Researcher",
    institution: "EPFL",
    project: "Axon synthesis",
    current: false,
    alumni: true
  },

  {
    id: "remy-petkantchin",
    name: "Remy Petkantchin",
    role: "Postdoctoral Researcher",
    institution: "EPFL",
    project: "Axon synthesis",
    current: false,
    alumni: true
  },

  {
    id: "ying-shi",
    name: "Ying Shi",
    role: "Reconstruction Specialist",
    institution: "EPFL",
    project: "Neuronal reconstructions",
    current: false,
    alumni: true
  },

  {
    id: "alexis-arnaudon",
    name: "Alexis Arnaudon",
    role: "Postdoctoral Researcher",
    institution: "EPFL",
    project: "Morpho-electrical properties of neurons",
    current: false,
    alumni: true
  },

  {
    id: "stanislav-schmidt",
    name: "Stanislav Schmidt",
    role: "Software Engineer",
    institution: "EPFL",
    project: "Machine learning of neuronal morphologies",
    current: false,
    alumni: true
  },


  /* ========================================================
     Alumni — Master's Theses
     ======================================================== */


  {
    id: "Adelie-garin",
    name: "Adelie Garin",
    role: "Doctoral student",
    institution: "EPFL",
    current: false,
    alumni: true
  },

  {
    id: "alexia-paratte",
    name: "Alexia Stéphanie Liviana Paratte",
    role: "Master's Thesis Student",
    institution: "EPFL",
    current: false,
    alumni: true
  },

  {
    id: "romane-cornali",
    name: "Romane Cornali",
    role: "Master's Thesis Student",
    institution: "EPFL",
    current: false,
    alumni: true
  },

  {
    id: "thomas-negrello-alain-walter",
    name: "Thomas Negrello Alain Walter",
    role: "Master's Thesis Student",
    institution: "EPFL",
    current: false,
    alumni: true
  },

  {
    id: "jelena-banjac",
    name: "Jelena Banjac",
    role: "Master's Thesis Student",
    institution: "EPFL",
    current: false,
    alumni: true
  },

  {
    id: "marc-fersztand",
    name: "Marc Fersztand",
    role: "Master's Thesis Student",
    institution: "EPFL",
    current: false,
    alumni: true
  },

  {
    id: "abel-adary",
    name: "Abel Adary",
    role: "Master's Thesis Student",
    institution: "EPFL",
    current: false,
    alumni: true
  },

  {
    id: "sebastien-morand",
    name: "Sébastien Morand",
    role: "Master's Thesis Student",
    institution: "EPFL",
    current: false,
    alumni: true
  },

  // Future member:
  //
  // {
  //   id: "member-name",
  //
  //   name: "Member Name",
  //   role: "Postdoctoral Researcher",
  //   institution: "University of Oxford",
  //
  //   description:
  //     "Research description.",
  //
  //   photo:
  //     "/images/people/member-name.jpg",
  //
  //   cv:
  //     "/documents/cv/member-name.pdf",
  //
  //   current: true
  // }

];