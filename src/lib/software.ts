/* ==========================================================
   NeuroTopology Scientific Software
   ========================================================== */

export type SoftwareCategory =
  | "topological-data-analysis"
  | "neuronal-morphology-analysis"
  | "classification-tools"
  | "neuronal-morphology-synthesis"
  | "other";


export type ResearchArea =
  | "topology-of-trees"
  | "topological-morphology-descriptor"
  | "neurons-to-networks";


export interface SoftwareTool {

  id: string;

  name: string;
  fullName?: string;

  description: string;

  categories: SoftwareCategory[];

  /*
   * People or contributor groups responsible for the software.
   *
   * Keep this separate from institutional attribution.
   */
  developers: string[];

  /*
   * Optional institutional/project context.
   */
  attribution?: string;

  /*
   * Links software to the main research directions.
   */
  research: ResearchArea[];

  /*
   * BibTeX citation keys from publications.bib.
   */
  publications?: string[];

  languages: string[];

  openSource: boolean;

  github: string;
  documentation?: string;

}


/* ==========================================================
   Software Categories
   ========================================================== */

export const softwareCategories: {
  id: SoftwareCategory;
  title: string;
  description: string;
}[] = [

  {
    id: "topological-data-analysis",

    title: "Topological Data Analysis",

    description:
      "Software for representing and analysing neuronal structure using topological methods."
  },

  {
    id: "neuronal-morphology-analysis",

    title: "Neuronal Morphology Analysis",

    description:
      "Tools for reading, processing, repairing and quantitatively analysing neuronal morphologies."
  },

  {
    id: "classification-tools",

    title: "Classification Tools",

    description:
      "Computational methods for identifying and comparing neuronal morphological classes."
  },

  {
    id: "neuronal-morphology-synthesis",

    title: "Neuronal Morphology Synthesis",

    description:
      "Software for computational generation of dendritic and axonal morphologies."
  },

  {
    id: "other",

    title: "Other",

    description:
      "Additional scientific software associated with the NeuroTopology research programme."
  }

];


/* ==========================================================
   Software
   ========================================================== */

export const software: SoftwareTool[] = [

  /* --------------------------------------------------------
     TMD
     -------------------------------------------------------- */

  {
    id: "tmd",

    name: "TMD",

    fullName: "Topological Morphology Descriptor",

    description:
      "Topological analysis and representation of neuronal morphologies using persistence-based descriptors.",

    categories: [
      "topological-data-analysis",
      "neuronal-morphology-analysis",
      "classification-tools"
    ],

    developers: [
      "Lida Kanari",
      "TMD contributors"
    ],

    attribution:
      "Originally developed within the Blue Brain Project at EPFL.",

    research: [
      "topology-of-trees",
      "topological-morphology-descriptor"
    ],

    publications: [
      "kanari2018topological"
    ],

    languages: [
      "Python"
    ],

    openSource: true,

    github:
      "https://github.com/BlueBrain/TMD"
  },


  /* --------------------------------------------------------
     NeuroM
     -------------------------------------------------------- */

  {
    id: "neurom",

    name: "NeuroM",

    description:
      "Toolkit for the analysis and processing of neuronal morphologies.",

    categories: [
      "neuronal-morphology-analysis"
    ],

    developers: [
      "NeuroM contributors"
    ],

    attribution:
      "Developed within the Blue Brain Project at EPFL.",

    research: [
      "topological-morphology-descriptor"
    ],

    languages: [
      "Python"
    ],

    openSource: true,

    github:
      "https://github.com/BlueBrain/NeuroM",

    documentation:
      "https://neurom.readthedocs.io/"
  },


  /* --------------------------------------------------------
     morph-tool
     -------------------------------------------------------- */

  {
    id: "morph-tool",

    name: "morph-tool",

    description:
      "Utilities for processing and transforming neuronal morphology data.",

    categories: [
      "neuronal-morphology-analysis"
    ],

    developers: [
      "morph-tool contributors"
    ],

    attribution:
      "Part of the Blue Brain Project morphology software ecosystem.",

    research: [
      "topological-morphology-descriptor"
    ],

    languages: [
      "Python"
    ],

    openSource: true,

    github:
      "https://github.com/BlueBrain/morphology-suite#morph-tool"
  },


  /* --------------------------------------------------------
     MorphIO
     -------------------------------------------------------- */

  {
    id: "morphio",

    name: "MorphIO",

    description:
      "Library for reading, writing and manipulating neuronal morphology data.",

    categories: [
      "neuronal-morphology-analysis"
    ],

    developers: [
      "MorphIO contributors"
    ],

    attribution:
      "Developed within the Blue Brain Project at EPFL.",

    research: [
      "topological-morphology-descriptor"
    ],

    languages: [
      "C++",
      "Python"
    ],

    openSource: true,

    github:
      "https://github.com/BlueBrain/MorphIO"
  },


  /* --------------------------------------------------------
     NeuroR
     -------------------------------------------------------- */

  {
    id: "neuror",

    name: "NeuroR",

    description:
      "Software for repair and processing of neuronal morphology reconstructions.",

    categories: [
      "neuronal-morphology-analysis"
    ],

    developers: [
      "NeuroR contributors"
    ],

    attribution:
      "Developed within the Blue Brain Project at EPFL.",

    research: [
      "topological-morphology-descriptor"
    ],

    languages: [
      "Python"
    ],

    openSource: true,

    github:
      "https://github.com/BlueBrain/NeuroR"
  },


  /* --------------------------------------------------------
     Morphology Workflows
     -------------------------------------------------------- */

  {
    id: "morphology-workflows",

    name: "Morphology Workflows",

    description:
      "Computational workflows for neuronal morphology processing and analysis.",

    categories: [
      "neuronal-morphology-analysis"
    ],

    developers: [
      "Morphology Workflows contributors"
    ],

    attribution:
      "Developed within the Blue Brain Project morphology software ecosystem.",

    research: [
      "topological-morphology-descriptor"
    ],

    languages: [
      "Python"
    ],

    openSource: true,

    github:
      "https://github.com/BlueBrain/morphology-workflows"
  },


  /* --------------------------------------------------------
     MorphoClass
     -------------------------------------------------------- */

  {
    id: "morphoclass",

    name: "MorphoClass",

    description:
      "Machine-learning tools for classification of neuronal morphologies.",

    categories: [
      "classification-tools"
    ],

    developers: [
      "MorphoClass contributors"
    ],

    attribution:
      "Developed within the Blue Brain Project at EPFL.",

    research: [
      "topological-morphology-descriptor"
    ],

    publications: [
      "kanari2024deep"
    ],

    languages: [
      "Python"
    ],

    openSource: true,

    github:
      "https://github.com/BlueBrain/morphoclass"
  },


  /* --------------------------------------------------------
     NeuroTS
     -------------------------------------------------------- */

  {
    id: "neurots",

    name: "NeuroTS",

    description:
      "Software for computational synthesis of neuronal morphologies.",

    categories: [
      "neuronal-morphology-synthesis"
    ],

    developers: [
      "Lida Kanari and NeuroTS contributors"
    ],

    attribution:
      "Developed within the Blue Brain Project at EPFL.",

    research: [
      "topological-morphology-descriptor"
    ],

    publications: [
      "kanari2022computational"
    ],

    languages: [
      "Python"
    ],

    openSource: true,

    github:
      "https://github.com/BlueBrain/neuroTS"
  },


  /* --------------------------------------------------------
     Axon Synthesis
     -------------------------------------------------------- */

  {
    id: "axon-synthesis",

    name: "Axon Synthesis",

    description:
      "Computational tools for generating long-range neuronal axonal morphologies.",

    categories: [
      "neuronal-morphology-synthesis"
    ],

    developers: [
      "Adrien Berchet and Axon Synthesis contributors"
    ],

    attribution:
      "Developed within the Blue Brain Project at EPFL.",

    research: [
      "neurons-to-networks"
    ],

    publications: [
      "petkantchin2025connectome",
      "berchet2025axonal"
    ],

    languages: [
      "Python"
    ],

    openSource: true,

    github:
      "https://github.com/BlueBrain/axon-synthesis"
  },

{
  id: "axon-projection",

  name: "Axon Projection",

  description:
    "Analysis and classification of long-range axonal morphologies based on their projection patterns across brain regions.",

  categories: [
    "neuronal-morphology-synthesis"
  ],

  developers: [
    "Remy Petkantchin and Axon Projection contributors"
  ],

  attribution:
    "Originally developed within the Blue Brain Project.",

  research: [
    "neurons-to-networks"
  ],

  publications: [
      "petkantchin2025connectome",
    ],

  languages: [
    "Python"
  ],

  openSource: true,

  github:
    "https://github.com/openbraininstitute/axon-projection"
},

];


/* ==========================================================
   Helpers
   ========================================================== */

/*
 * Return all software belonging to a particular category.
 *
 * Example:
 *
 * getSoftwareByCategory("topological-data-analysis")
 */
export function getSoftwareByCategory(
  category: SoftwareCategory
): SoftwareTool[] {

  return software.filter(
    (tool) => tool.categories.includes(category)
  );

}


/*
 * Return software associated with a research direction.
 */
export function getSoftwareByResearch(
  research: ResearchArea
): SoftwareTool[] {

  return software.filter(
    (tool) => tool.research.includes(research)
  );

}


/*
 * Return software associated explicitly with a publication.
 */
export function getSoftwareByPublication(
  publicationKey: string
): SoftwareTool[] {

  return software.filter(
    (tool) =>
      tool.publications?.includes(publicationKey)
  );

}