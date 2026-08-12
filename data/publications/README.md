# NeuroTopology Publications

This directory contains the canonical publication database for the
NeuroTopology website.

The file:

`publications.bib`

is the **single source of truth** for publication data used across the site.

Publication information should not be duplicated manually in Astro components.

---

## How the publication data is used

The website reads `publications.bib` to generate:

- Featured publications
- Homepage publication highlights
- Published publications
- Preprints
- Publications grouped by year
- Publications associated with research projects

Future pages may also use the same database for related publications,
citation links, and publication-specific pages.

---

## Adding a new publication

When a new paper is published:

1. Obtain the BibTeX entry from the publisher, DOI record, or another
   authoritative bibliographic source.

2. Add the complete entry to:

   `publications.bib`

3. Preserve the complete author list whenever available.

4. Add the NeuroTopology website metadata described below.

5. Commit and push the updated file.

The website will then use the new entry automatically.

---

## Website metadata

In addition to normal BibTeX fields, publication entries may contain
the following NeuroTopology-specific fields.

### `featured`

Controls whether a publication appears in the Featured Publications
section.

Example:

```bibtex
featured = {true}