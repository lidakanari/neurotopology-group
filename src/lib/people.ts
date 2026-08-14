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


  /*
   * Example future member:
   *
   * {
   *   id: "member-name",
   *
   *   name: "Member Name",
   *
   *   role: "Postdoctoral Researcher",
   *
   *   institution: "University of Oxford",
   *
   *   description:
   *     "Short research description.",
   *
   *   photo:
   *     "/images/people/member-name.jpg",
   *
   *   cv:
   *     "/documents/cv/member-name.pdf",
   *
   *   current: true
   * }
   */

];