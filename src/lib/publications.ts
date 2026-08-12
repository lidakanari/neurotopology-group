import fs from "node:fs";
import path from "node:path";
import bibtexParse from "bibtex-parse-js";
import latexToUnicode from "latex-to-unicode";

/**
 * A publication parsed from data/publications/publications.bib.
 */
export interface Publication {
  key: string;

  title: string;
  authors: string;

  journal: string;
  year: number;

  volume?: string;
  number?: string;
  pages?: string;

  doi?: string;
  url?: string;

  featured: boolean;
  homepage: boolean;

  status: "published" | "preprint";
  type: "journal" | "preprint";

  research: string[];
}

/**
 * Raw BibTeX structure returned by bibtex-parse-js.
 */
interface BibTeXEntry {
  citationKey?: string;
  entryType?: string;
  entryTags?: Record<string, string>;
}

/**
 * Location of the canonical publication database.
 */
const bibPath = path.join(
  process.cwd(),
  "data",
  "publications",
  "publications.bib"
);

/**
 * Read and parse BibTeX.
 */
const bibtex = fs.readFileSync(bibPath, "utf8");

const entries = bibtexParse.toJSON(bibtex) as BibTeXEntry[];


/**
 * Convert a BibTeX boolean field to a JavaScript boolean.
 */
function parseBoolean(value?: string): boolean {
  return value?.trim().toLowerCase() === "true";
}


/**
 * Convert the comma-separated research metadata into an array.
 *
 * Example:
 *
 * research = {
 *   topology-of-trees,
 *   topological-morphology-descriptor
 * }
 *
 * becomes:
 *
 * [
 *   "topology-of-trees",
 *   "topological-morphology-descriptor"
 * ]
 */
function parseResearch(value?: string): string[] {
  if (!value) {
    return [];
  }

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}


/**
 * Normalize a parsed BibTeX entry into the structure used
 * throughout the NeuroTopology website.
 */

function decodeLatex(value?: string): string {
  if (!value) return "";

  return latexToUnicode(value)
    .replace(/[{}]/g, "")
    .trim();
}

function decodeBibTeX(value?: string): string {
  if (!value) return "";

  return value

    // -------------------------------------------------------
    // Acute accents
    // -------------------------------------------------------

    // Special BibTeX dotless-i forms MUST come first
    .replace(/\{\\'\\i\}/g, "í")
    .replace(/\\'\\i/g, "í")
    .replace(/\\'ı/g, "í")

    .replace(/\{\\'a\}/g, "á")
    .replace(/\{\\'e\}/g, "é")
    .replace(/\{\\'i\}/g, "í")
    .replace(/\{\\'o\}/g, "ó")
    .replace(/\{\\'u\}/g, "ú")

    .replace(/\{\\'A\}/g, "Á")
    .replace(/\{\\'E\}/g, "É")
    .replace(/\{\\'I\}/g, "Í")
    .replace(/\{\\'O\}/g, "Ó")
    .replace(/\{\\'U\}/g, "Ú")

    // -------------------------------------------------------
    // Grave accents
    // -------------------------------------------------------

    .replace(/\{\\`\\i\}/g, "ì")
    .replace(/\\`\\i/g, "ì")

    .replace(/\{\\`a\}/g, "à")
    .replace(/\{\\`e\}/g, "è")
    .replace(/\{\\`i\}/g, "ì")
    .replace(/\{\\`o\}/g, "ò")
    .replace(/\{\\`u\}/g, "ù")

    // -------------------------------------------------------
    // Circumflex
    // -------------------------------------------------------

    .replace(/\{\\\^\\i\}/g, "î")
    .replace(/\\\^\\i/g, "î")

    .replace(/\{\\\^a\}/g, "â")
    .replace(/\{\\\^e\}/g, "ê")
    .replace(/\{\\\^i\}/g, "î")
    .replace(/\{\\\^o\}/g, "ô")
    .replace(/\{\\\^u\}/g, "û")

    // -------------------------------------------------------
    // Umlaut
    // -------------------------------------------------------

    .replace(/\{\\"a\}/g, "ä")
    .replace(/\{\\"e\}/g, "ë")
    .replace(/\{\\"i\}/g, "ï")
    .replace(/\{\\"o\}/g, "ö")
    .replace(/\{\\"u\}/g, "ü")

    .replace(/\{\\"A\}/g, "Ä")
    .replace(/\{\\"E\}/g, "Ë")
    .replace(/\{\\"I\}/g, "Ï")
    .replace(/\{\\"O\}/g, "Ö")
    .replace(/\{\\"U\}/g, "Ü")

    // -------------------------------------------------------
    // Tilde
    // -------------------------------------------------------

    .replace(/\{\\~a\}/g, "ã")
    .replace(/\{\\~n\}/g, "ñ")
    .replace(/\{\\~o\}/g, "õ")

    .replace(/\{\\~A\}/g, "Ã")
    .replace(/\{\\~N\}/g, "Ñ")
    .replace(/\{\\~O\}/g, "Õ")

    // Parser may already have removed braces
    .replace(/\\~n/g, "ñ")
    .replace(/\\~N/g, "Ñ")

    // -------------------------------------------------------
    // Cedilla
    // -------------------------------------------------------

    .replace(/\{\\c\{c\}\}/g, "ç")
    .replace(/\{\\c\{C\}\}/g, "Ç")

    .replace(/\{\\c\{s\}\}/g, "ş")
    .replace(/\{\\c\{S\}\}/g, "Ş")

    .replace(/\\c\s*c/g, "ç")
    .replace(/\\c\s*C/g, "Ç")
    .replace(/\\c\s*s/g, "ş")
    .replace(/\\c\s*S/g, "Ş")

    // -------------------------------------------------------
    // Polish ł
    // -------------------------------------------------------

    .replace(/\{\\l\}/g, "ł")
    .replace(/\{\\L\}/g, "Ł")
    .replace(/\\l/g, "ł")
    .replace(/\\L/g, "Ł")

    // -------------------------------------------------------
    // Turkish dotted I
    // -------------------------------------------------------

    .replace(/\{\\\.I\}/g, "İ")
    .replace(/\\\.I/g, "İ")

    // -------------------------------------------------------
    // Plain BibTeX dotless i
    //
    // IMPORTANT: this must come AFTER all accented \i rules.
    // -------------------------------------------------------

    .replace(/\{\\i\}/g, "ı")
    .replace(/\\i/g, "ı")

    // -------------------------------------------------------
    // Remove remaining BibTeX grouping braces
    // -------------------------------------------------------

    .replace(/[{}]/g, "")

    .trim();
}

function formatAuthors(value?: string): string {
  if (!value) return "";

  const authors = value
    .split(/\s+and\s+/)
    .map((author) => author.trim())
    .filter(Boolean);

  const formatted = authors.map((author) => {

    if (author.toLowerCase() === "others") {
      return "et al.";
    }

    /*
     * Standard BibTeX:
     *
     * Kanari, Lida
     * Castro, André Ferreira
     */
    if (author.includes(",")) {

      const [surname, givenNames] = author
        .split(",", 2)
        .map((part) => part.trim());

      const initials = givenNames
        .split(/\s+/)
        .filter(Boolean)
        .map((name) => {

          const clean = name.replace(/\./g, "");

          return clean
            ? `${clean.charAt(0)}.`
            : "";

        })
        .filter(Boolean)
        .join(" ");

      return `${surname} ${initials}`;

    }

    /*
     * Leave unusual/non-standard names untouched.
     */
    return author;

  });

  if (formatted.length === 0) {
    return "";
  }

  if (formatted.at(-1) === "et al.") {
    return `${formatted.slice(0, -1).join(", ")} et al.`;
  }

  if (formatted.length === 1) {
    return formatted[0];
  }

  if (formatted.length === 2) {
    return `${formatted[0]} & ${formatted[1]}`;
  }

  return `${formatted.slice(0, -1).join(", ")} & ${
    formatted[formatted.length - 1]
  }`;
}

function formatAuthorName(author: string): string {
  const clean = decodeLatex(author.trim());

  /*
   * BibTeX format:
   * Kanari, Lida
   *
   * becomes:
   * Kanari L.
   */
  if (clean.includes(",")) {
    const [lastName, firstNames] = clean
      .split(",")
      .map((part) => part.trim());

    const initials = firstNames
      .split(/\s+/)
      .filter(Boolean)
      .map((name) => `${name.charAt(0)}.`)
      .join(" ");

    return `${lastName} ${initials}`;
  }

  /*
   * Fallback for:
   * Lida Kanari
   */
  const parts = clean.split(/\s+/);

  if (parts.length === 1) {
    return clean;
  }

  const lastName = parts.pop()!;

  const initials = parts
    .map((name) => `${name.charAt(0)}.`)
    .join(" ");

  return `${lastName} ${initials}`;
}


function formatAuthors(value?: string): string {
  if (!value) return "";

  const authors = value
    .split(/\s+and\s+/)
    .map((author) => author.trim())
    .filter(Boolean);

  const formatted = authors.map(formatAuthorName);

  if (formatted.length === 1) {
    return formatted[0];
  }

  if (formatted.length === 2) {
    return `${formatted[0]} & ${formatted[1]}`;
  }

  return `${formatted.slice(0, -1).join(", ")} & ${
    formatted[formatted.length - 1]
  }`;
}


function normalizePublication(
  entry: BibTeXEntry
): Publication {

  const tags = entry.entryTags ?? {};

  return {
    key: entry.citationKey ?? "",

    title: decodeLatex(tags.title),
    authors: formatAuthors(
  decodeBibTeX(tags.author)
),

    journal:
      decodeLatex(
  tags.journal ??
  tags.booktitle ??
  tags.howpublished ??
  ""
	),

    year: Number(tags.year) || 0,

    volume: tags.volume,
    number: tags.number,
    pages: tags.pages,

    doi: tags.doi,
    url: tags.url,

    featured: parseBoolean(tags.featured),
    homepage: parseBoolean(tags.homepage),

    status:
      tags.status === "preprint"
        ? "preprint"
        : "published",

    type:
      tags.type === "preprint"
        ? "preprint"
        : "journal",

    research: parseResearch(tags.research),
  };
}


/**
 * Complete publication database.
 *
 * Newest publications are returned first.
 */
export const publications: Publication[] = entries
  .map(normalizePublication)
  .filter((publication) => publication.title)
  .sort((a, b) => {

    if (b.year !== a.year) {
      return b.year - a.year;
    }

    return a.title.localeCompare(b.title);

  });


/**
 * Featured publications.
 */
export const featuredPublications =
  publications.filter(
    (publication) => publication.featured
  );


/**
 * Publications shown on the homepage.
 */
export const homepagePublications =
  publications.filter(
    (publication) => publication.homepage
  );


/**
 * Peer-reviewed publications.
 */
export const publishedPublications =
  publications.filter(
    (publication) =>
      publication.status === "published"
  );


/**
 * Current preprints.
 */
export const preprints =
  publications.filter(
    (publication) =>
      publication.status === "preprint"
  );


/**
 * Return publications associated with a research direction.
 *
 * Example:
 *
 * getPublicationsByResearch("topology-of-trees")
 */
export function getPublicationsByResearch(
  research: string
): Publication[] {

  return publications.filter(
    (publication) =>
      publication.research.includes(research)
  );

}