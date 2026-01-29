# Copilot Instructions for AI Business Book Repository

## Project Overview

This repository contains **multiple book projects** written in LaTeX using the `memoir` document class. It also includes a React/Vite web application for book reading/editing.

**Key Facts:**
- 3 LaTeX books: AI for Business Leaders (main), AI-Powered Product Management, The New Father's Field Manual
- 1 React/Vite frontend for book reading (src/)
- Target audience for books: **non-technical professionals**
- All books use the `memoir` document class with custom environments
- LaTeX compilation requires two passes for TOC/cross-references

## Tech Stack

| Component | Technology | Version |
|-----------|------------|---------|
| Document System | LaTeX (memoir class) | pdflatex |
| Frontend | React | ^18.2.0 |
| Build Tool | Vite | ^5.0.0 |
| Package Manager | npm | (lockfile v3) |
| Styling | PostCSS | config present |

## Directory Structure

```
ai-business-book/
├── pm-book/                    # AI-Powered Product Management book (PRIMARY)
│   ├── main.tex               # Primary book source
│   ├── chapters/              # 12 chapters (ch01-ch12)
│   ├── frontmatter/           # Introduction
│   ├── backmatter/            # Conclusion, appendices, references
│   └── figures/               # TikZ figure definitions
│
├── father-book/               # The New Father's Field Manual
│   ├── main.tex               # Book source
│   ├── chapters/              # 20 chapters organized in 6 parts
│   ├── frontmatter/           # Preface
│   └── backmatter/            # Conclusion
│
├── pm-article/                # PM article (condensed version)
│   ├── main.tex
│   └── figure1-framework.tex
│
├── src/                       # React/Vite web application
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point
│   ├── components/           # BookReader, ChapterEditor, ChapterList
│   └── data/                 # Data files
│
├── index.html                 # Vite entry HTML
├── package.json               # npm dependencies (React 18, Vite 5)
├── postcss.config.cjs         # PostCSS configuration
├── draft_manuscript.pdf       # Pre-compiled manuscript
├── CLAUDE.md                  # AI agent instructions (detailed)
└── README.md                  # Build instructions & overview
```

## Design Rationale and Key Decisions

### Why memoir document class?
The `memoir` class provides superior typography controls for book publishing, including custom chapter styles, epigraphs, and flexible page layouts. All books use it consistently.

### Why custom LaTeX environments?
Business/non-technical books benefit from visual callout boxes. Each book defines environments appropriate to its content:
- **pm-book**: `practicalbox`, `warningbox`, `insightbox`
- **father-book**: `keyinsight`, `realstory`, `warning`, `reflection`, `practicaltip`

### Why tcolorbox?
The `tcolorbox` package provides beautiful, customizable boxes with breakable support for long content spanning pages.

### Why chapter style variations?
- **pm-book**: Uses `madsen` style (professional, modern)
- **father-book**: Uses `veelo` style (personal, reflective tone)

### Why React frontend?
The web app allows reading/editing book content without LaTeX knowledge, lowering the barrier for content contributors.

## Common Pitfalls and Gotchas

### LaTeX Compilation

1. **Always run pdflatex TWICE** - First pass generates aux files; second pass resolves cross-references and TOC
2. **Compile from the book directory** - Run `cd pm-book && pdflatex main.tex`, not from root
3. **Missing packages** - MiKTeX auto-installs; TeX Live needs `tlmgr install <package>`
4. **Errors start with `!`** - Warnings are okay; lines starting with `!` are fatal

### Content Mistakes to Avoid

1. **NO CODE EXAMPLES** - These books target non-technical readers. Exception: simple prompt templates
2. **NO UNEXPLAINED JARGON** - Every technical term must be defined
3. **NO MARKETING HYPE** - Direct, honest tone; acknowledge AI limitations
4. **NO DEVELOPMENT EXAMPLES** - Use business contexts (sales, HR, operations), not software

### Environment Usage

```latex
% WRONG - using curly braces for optional argument
\begin{keyinsight}{My Title}  % WRONG

% CORRECT - use square brackets for optional title
\begin{keyinsight}[My Title]  % CORRECT
```

### File Naming

- Chapter files: `ch##-descriptive-name.tex` (e.g., `ch03-ai-fundamentals.tex`)
- Use hyphens, not underscores
- Keep names lowercase

### React/Vite

- Run `npm install` before `npm run dev`
- Vite dev server runs on default port 5173
- No test framework configured currently

## Content Guidelines

### Writing Style

| Do | Don't |
|----|-------|
| Use business language | Use technical jargon |
| Give concrete ROI examples | Make vague claims |
| Acknowledge AI limitations | Oversell capabilities |
| Provide actionable frameworks | Give abstract theory |
| Include exercises | Leave readers passive |

### Chapter Structure Template

Every chapter should follow this pattern:

```latex
\chapter{Chapter Title}

\epigraph{Relevant quote}{Attribution}

\section{Opening Hook}
% Engage the reader immediately

\section{Core Content}
% Teaching material with examples

\begin{keyinsight}[Takeaway]
Main lesson from this section.
\end{keyinsight}

\section{Summary}
% Brief recap

% End with action item
\begin{practicaltip}[Try This Today]
Concrete exercise for the reader.
\end{practicaltip}
```

### Examples to Use

**Good** (business context):
- "A regional bank reduced loan processing time by 40%..."
- "Your marketing team can use AI to segment customers..."
- "Calculate ROI: (Time saved × hourly rate) - AI tool cost"

**Bad** (technical context):
- "The neural network uses backpropagation..."
- "Here's a Python script that..."
- "Configure the API endpoint..."

## Build Commands

### LaTeX Books

```bash
# Compile PM book (from root)
cd pm-book && pdflatex -interaction=nonstopmode main.tex && pdflatex main.tex

# Compile Father book
cd father-book && pdflatex -interaction=nonstopmode main.tex && pdflatex main.tex

# Quick error check
cd pm-book && pdflatex -interaction=nonstopmode main.tex 2>&1 | grep -E "^!|Output written"
```

### React App

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Quality Checklist

Before committing changes:

- [ ] LaTeX compiles without errors (warnings okay)
- [ ] Run pdflatex twice for cross-references
- [ ] Content appropriate for non-technical audience
- [ ] No unexplained jargon
- [ ] Key insights highlighted in appropriate boxes
- [ ] Exercises are actionable
- [ ] Tables used for comparisons/checklists
- [ ] React changes: `npm run build` succeeds

## File Reference

| File | Purpose | Edit When |
|------|---------|-----------|
| `pm-book/main.tex` | PM book structure | Adding chapters, changing parts |
| `pm-book/chapters/*.tex` | PM book content | Writing/editing content |
| `father-book/main.tex` | Father book structure | Adding chapters |
| `father-book/chapters/*.tex` | Father book content | Writing/editing content |
| `src/components/*.jsx` | React UI components | Changing web interface |
| `CLAUDE.md` | Detailed AI instructions | Updating conventions |

## Useful Patterns

### Adding a New Chapter

1. Create `chapters/ch##-name.tex` with chapter template
2. Add `\include{chapters/ch##-name}` to `main.tex`
3. Compile twice to update TOC
4. Verify no errors

### Creating a Callout Box

```latex
% Blue insight box
\begin{insightbox}[Key Takeaway]
Important point here.
\end{insightbox}

% Red warning box
\begin{warningbox}[Caution]
Risk or pitfall to avoid.
\end{warningbox}

% Green practical box
\begin{practicalbox}[Action Step]
What to do next.
\end{practicalbox}
```

### Adding TikZ Diagrams

Diagrams are defined in `pm-book/figures/figures.tex` and can be reused:

```latex
% In figures/figures.tex, define the diagram
% Then use in chapters:
\begin{center}
\aipmworkflow  % or other defined figure
\end{center}
```
