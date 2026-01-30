# CLAUDE.md

This file provides guidance to Claude Code and other AI agents when working with this repository.

## Project Overview

This repository contains the source materials for **"AI for Business Leaders"**, a practical guide to understanding and leveraging artificial intelligence for non-technical business professionals. The book uses LaTeX with the `memoir` class.

## Repository Structure

```
AI-Business-Leaders-Book/
├── book/                    # LaTeX source - main working directory
│   ├── main.tex            # Primary book source file
│   ├── chapters/           # Chapter source files (ch01-*.tex through ch13-*.tex)
│   ├── frontmatter/        # Preface and introduction
│   ├── backmatter/         # Conclusion
│   └── appendices/         # Reference materials (appendix-*.tex)
├── CLAUDE.md               # This file
└── README.md               # Repository documentation
```

## Working Guidelines

### Critical Constraints

**Content Guidelines:**
- Target audience is NON-TECHNICAL business leaders
- **DO NOT** include code examples (except simple prompt templates)
- **DO NOT** use technical jargon without explanation
- **DO** use business language and business examples
- **DO** focus on practical, actionable advice
- Examples should be from business contexts (not software development)

**LaTeX Guidelines:**
- The book uses the `memoir` document class - do not change this
- Custom environments are defined: `keyinsight`, `promptexample`, `exercise`, `casestudy`, `realexample`, `warning`, `tip`, `quickref`, `framework`, `roicalc`, `checklist`
- Chapter style is `madsen`
- **ALWAYS** compile after making changes to verify they work

**Writing Style:**
- Direct, practical tone - avoid marketing speak or hype
- Honest about AI limitations - never oversell capabilities
- Business-focused: ROI, cost-benefit, competitive advantage
- Use concrete examples from business contexts
- Each chapter should have exercises for the reader

### Build Commands

**Compiling the book:**
```bash
cd book
pdflatex -interaction=nonstopmode main.tex
pdflatex main.tex  # Second pass for TOC
```

**Verify compilation succeeded:**
- Check for "Output written on main.pdf" in output
- Warnings about missing references on first pass are normal
- Errors (lines starting with `!`) must be fixed

### Key Files

| File | Purpose | When to Edit |
|------|---------|--------------|
| `book/main.tex` | Primary book source | Structure changes |
| `book/chapters/*.tex` | Chapter content | Adding/editing content |
| `book/appendices/*.tex` | Reference materials | Updating templates/tools |

## Content Development Guidelines

### Chapter Structure

Each chapter should follow this pattern:

```latex
\chapter{Chapter Title}

\epigraph{Relevant quote here.}{Attribution}

\section{First Section}
% Opening that hooks the reader

\section{Main Content Sections}
% Core teaching material

\begin{keyinsight}
Most important takeaway from this section.
\end{keyinsight}

\section{Summary}
% Brief recap of key points

\begin{exercise}
Hands-on task for the reader.
\end{exercise}
```

### Custom LaTeX Environments

**Key Insight Box (blue):**
```latex
\begin{keyinsight}[Optional Title]
Important takeaway that should stand out visually.
\end{keyinsight}
```

**Prompt Example:**
```latex
\begin{promptexample}[Title]
Prompt template text here...
\end{promptexample}
```

**Warning Box (red):**
```latex
\begin{warning}[Title]
Caution or pitfall to avoid.
\end{warning}
```

**Tip Box (orange):**
```latex
\begin{tip}[Title]
Practical tip for the reader.
\end{tip}
```

**Framework Box (purple):**
```latex
\begin{framework}[Decision Framework Name]
Decision framework content.
\end{framework}
```

**Case Study (green):**
```latex
\begin{casestudy}{Title}
Case study content.
\end{casestudy}
```

**ROI Calculation (green):**
```latex
\begin{roicalc}[Title]
ROI calculation or formula.
\end{roicalc}
```

## Quality Checks Before Committing

- [ ] LaTeX compiles without errors
- [ ] Content is appropriate for non-technical audience
- [ ] No unexplained jargon
- [ ] New sections follow established chapter structure
- [ ] Key insights are highlighted appropriately
- [ ] Exercises are actionable for business professionals

## Tips for AI Agents

### When Editing Content

1. **Maintain business focus** - This is NOT a technical book
2. **Use business examples** - Not code, not algorithms
3. **Test compilation** - Always run pdflatex after changes
4. **Keep it practical** - Every section should answer "what do I DO with this?"

### When Adding New Content

1. Follow the chapter template structure above
2. Include at least one `keyinsight` box per major section
3. End chapters with actionable exercises
4. Use tables for comparisons and checklists

### Useful Commands

```bash
# Quick compile check
cd book && pdflatex -interaction=nonstopmode main.tex 2>&1 | grep -E "^!|Output written"

# Full compile with TOC
cd book && pdflatex main.tex && pdflatex main.tex
```
