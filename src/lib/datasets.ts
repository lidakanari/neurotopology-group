/* ==========================================================
   NeuroTopology Research Datasets
   ========================================================== */

export type DatasetCategory =
  | "topological-data-analysis"
  | "neuronal-morphology"
  | "classification"
  | "neuronal-morphology-synthesis"
  | "computational-neuroscience";


export interface ResearchDataset {
  id: string;

  name: string;

  year: number;

  authors: string[];

  description?: string;

  categories: DatasetCategory[];

  /*
   * BibTeX citation key from publications.bib.
   *
   * Example:
   * publication: "kanari2025mice"
   */
  publication?: string;

  /*
   * Dataset repository.
   *
   * Usually Zenodo, but this deliberately supports
   * other repositories too.
   */
  repository: string;

  url: string;

  doi?: string;

  version?: string;
}


/* ==========================================================
   Dataset Categories
   ========================================================== */

export const datasetCategories: {
  id: DatasetCategory;
  title: string;
  description: string;
}[] = [

  {
    id: "topological-data-analysis",

    title: "Topological Data Analysis",

    description:
      "Datasets supporting topological representations and analysis of neuronal structure."
  },

  {
    id: "neuronal-morphology",

    title: "Neuronal Morphology",

    description:
      "Curated neuronal morphology datasets used for structural analysis and comparison."
  },

  {
    id: "classification",

    title: "Classification",

    description:
      "Datasets supporting morphological classification and comparative analysis."
  },

  {
    id: "neuronal-morphology-synthesis",

    title: "Neuronal Morphology Synthesis",

    description:
      "Data supporting computational generation and validation of neuronal morphologies."
  },

  {
    id: "computational-neuroscience",

    title: "Computational Neuroscience",

    description:
      "Additional research datasets associated with the NeuroTopology research programme."
  }

];


/* ==========================================================
   Datasets
   ========================================================== */

export const datasets: ResearchDataset[] = [

  /* ========================================================
     Temporal Topology
     ======================================================== */

  {
    id: "temporal-topology-neuronal-morphogenesis",

    name:
      "Temporal Topology Provides an Interpretable Framework for Neuronal Morphogenesis",

    year: 2026,

    authors: [
      "Killian Rigaux",
      "André Ferreira Castro",
      "Lida Kanari"
    ],

    description:
      "Drosophila neuronal morphology datasets and analysis code supporting the study of neuronal development using temporal topology.",

    categories: [
      "topological-data-analysis",
      "neuronal-morphology"
    ],

    publication:
      "rigaux2026temporal",

    repository: "Zenodo",

    url:
      "https://zenodo.org/records/20813267",

    doi:
      "10.5281/zenodo.20813267",

    version: "1"
  },


  /* ========================================================
     Human and Mouse Neuronal Morphologies
     ======================================================== */

  {
    id: "mice-men-neuronal-morphologies",

    name:
      "Of Mice and Men: Dendritic Architecture Differentiates Human from Mouse Neuronal Networks",

    year: 2025,

    authors: [
      "Lida Kanari",
      "Ying Shi",
      "Alexis Arnaudon",
      "Natali Barros Zulaica",
      "Ruth Benavides Piccione",
      "Jay S. Coggan",
      "Javier DeFelipe",
      "Kathryn Hess",
      "Huib Mansvelder",
      "Eline J. Mertens",
      "Julie Meystre",
      "Rodrigo de Campos Perin",
      "Maurizio Pezzoli",
      "Roy Thomas Daniel",
      "Ron Stoop",
      "Idan Segev",
      "Henry Markram",
      "Christiaan de Kock"
    ],

    description:
      "Raw and curated neuronal morphologies together with circuit data, morphometric analyses, network results and scripts used for comparison of human and mouse cortical architecture.",

    categories: [
      "neuronal-morphology",
      "classification"
    ],

    publication:
      "kanari2025mice",

    repository: "Zenodo",

    url:
      "https://zenodo.org/records/14258204",

    doi:
      "10.5281/zenodo.14258204",

    version: "1"
  },


  /* ========================================================
     Computational Dendritic Synthesis
     ======================================================== */

  {
    id: "computational-dendritic-synthesis",

    name:
      "Computational Synthesis of Cortical Dendritic Morphologies",

    year: 2022,

    authors: [
      "Lida Kanari",
      "Hugo Dictus",
      "Athanassia Chalimourda",
      "Alexis Arnaudon",
      "Werner Van Geit",
      "Benoit Coste",
      "Julian Shillcock",
      "Kathryn Hess",
      "Henry Markram"
    ],

    description:
      "Biological neuronal reconstructions, computationally synthesized morphologies and associated electrical and connectivity data used to develop and validate topology-guided dendritic synthesis.",

    categories: [
      "neuronal-morphology-synthesis"
    ],

    publication:
      "kanari2022computational",

    repository: "Zenodo",

    url:
      "https://zenodo.org/records/5909613",

    doi:
      "10.5281/zenodo.5909613"
  },


  /* ========================================================
     Long-range Axonal Morphologies
     ======================================================== */

  {
    id: "long-range-axonal-morphologies",

    name:
      "Computational Generation of Long-range Axonal Morphologies",

    year: 2024,

    authors: [
      "Adrien Berchet",
      "Remy Petkantchin",
      "Henry Markram",
      "Lida Kanari"
    ],

    description:
      "Research data associated with computational generation and analysis of long-range axonal morphologies.",

    categories: [
      "neuronal-morphology-synthesis"
    ],

    publication:
      "berchet2025axonal",

    repository: "Zenodo",

    url:
      "https://zenodo.org/records/14220754",

    doi:
      "10.5281/zenodo.14220754"
  },

  /* ========================================================
     TMD
     ======================================================== */

{
  id: "tmd-2-4-2",

  name:
    "A Topological Representation of Branching Neuronal Morphologies",

  year: 2024,

  authors: [
    "Lida Kanari",
    "Paweł Dłotko",
    "Martina Scolamiero",
    "Ran Levi",
    "Julian Shillcock",
    "Kathryn Hess",
    "Henry Markram",
    "Alexis Arnaudon"
  ],

  description:
    "Archived release of the Topological Morphology Descriptor (TMD), providing tools for encoding and analysing branching neuronal morphologies using topological signatures.",

  categories: [
    "topological-data-analysis",
    "neuronal-morphology",
    "classification"

  ],

  publication:
    "kanari2018topological",

  repository: "Zenodo",

  url:
    "https://zenodo.org/records/10679213",

  doi:
    "10.5281/zenodo.10679213",

  version:
    "2.4.2"
},

/* ==========================================================
   Emodels
   ========================================================== */

{
  id: "blue-brain-canonical-electrical-models",

  name:
    "Blue Brain Project Canonical Electrical Neuron Models",

  year: 2025,

  authors: [
    "Darshan Mandge",
    "Aurélien Tristan Jaquier",
    "Ilkan Fabrice Kilic",
    "Tanguy Damart",
    "Alexis Arnaudon",
    "Lida Kanari",
    "Werner Van Geit",
    "Henry Markram"
  ],

  description:
    "Canonical electrical neuron models based on somatosensory cortex and thalamus data, including detailed morphology-based and point-neuron model variants.",

  categories: [
    "computational-neuroscience"
  ],

  repository: "Zenodo",

  url:
    "https://zenodo.org/records/15006076",

  doi:
    "10.5281/zenodo.15006076",

  version: "1"
},

/* ==========================================================
   Rat model
   ========================================================== */

{
  id: "rat-non-barrel-somatosensory-cortex",

  name:
    "A Model of Rat Non-barrel Somatosensory Cortex Anatomy",

  year: 2023,

  authors: [
    // Add creators from the Zenodo citation metadata
  ],

  description:
    "Anatomical model of rat non-barrel somatosensory cortex, including circuit anatomy, voxel atlas data and examples for circuit exploration.",

  categories: [
    "neuronal-morphology"
  ],

  repository: "Zenodo",

  url:
    "https://zenodo.org/records/8155899",

  doi:
    "10.5281/zenodo.8155899"
},

/* ==========================================================
   Human model
   ========================================================== */

/* ==========================================================
   Morpho class
   ========================================================== */

];

/* ==========================================================
   Helpers
   ========================================================== */

export function getDatasetsByCategory(
  category: DatasetCategory
): ResearchDataset[] {

  return datasets
    .filter(
      dataset =>
        dataset.categories.includes(category)
    )
    .sort(
      (a, b) => b.year - a.year
    );
}


export function getDatasetById(
  id: string
): ResearchDataset | undefined {

  return datasets.find(
    dataset => dataset.id === id
  );
}


export function getDatasetsByPublication(
  publicationKey: string
): ResearchDataset[] {

  return datasets
    .filter(
      dataset =>
        dataset.publication === publicationKey
    )
    .sort(
      (a, b) => b.year - a.year
    );
}

export function getDatasetCategoryTitle(
  category: DatasetCategory
): string {

  return datasetCategories.find(
    (item) => item.id === category
  )?.title ?? category;

}