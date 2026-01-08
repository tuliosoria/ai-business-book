# California Management Review (CMR) Article Template

This folder contains a LaTeX template designed to match **California Management Review** submission requirements and best practices.

## What's Included

- `main.tex` – CMR-compliant article template with full formatting and structure guidance
- `build.ps1` – Automated build script to compile to PDF
- `frontmatter/introduction.tex` – Placeholder for intro content
- `backmatter/conclusion.tex` – Placeholder for conclusion content
- `chapters/` – Folder for additional sections

## CMR Submission Requirements This Template Meets

### Format
- ✅ **Font:** 12-point, double-spaced (using `setspace` package)
- ✅ **Margins:** 1 inch on all sides (standard)
- ✅ **Anonymous submission:** No author names in the template
- ✅ **Headings:** Three-level hierarchy (Level 1: centered bold uppercase; Level 2: left bold; Level 3: left bold italic run-in)

### Content & Structure
- ✅ **Word count:** Target 5,000–8,000 words (excluding tables/figures)
- ✅ **Abstract:** ~100 words + keywords section
- ✅ **Citations:** Chicago Manual of Style Notes format using endnotes (not footnotes)
- ✅ **Tables/Figures:** Separate file upload with insertion points marked in text

### Sections (Recommended CMR Structure)
1. **Title** (author-neutral)
2. **Abstract + Keywords**
3. **Introduction** (managerial hook)
4. **What We Know** (research foundation)
5. **Your Framework / Argument** (propositions & model)
6. **Evidence and Method**
7. **Findings and Insights**
8. **Implications for Managers** (actionable guidance)
9. **Conclusion**
10. **Endnotes** (Chicago style)

## How to Use This Template

### 1. Edit in LaTeX
- Open `main.tex` in your LaTeX editor (Overleaf, TeXShop, MiKTeX, etc.)
- Replace placeholder text with your article content
- Use `\section{}`, `\subsection{}`, `\subsubsection{}` for headings
- Write in plain prose (minimize jargon for CMR's practitioner audience)

### 2. Add Citations (Chicago Notes Style)
Use endnotes for citations:

```latex
\endnote{John Smith, \textit{The Title of the Book} (Publisher, 2024), 45.}

% For subsequent references to the same source, use short form:
\endnote{Smith, \textit{Title}, 50.}

% For journal articles:
\endnote{Author, ``Article Title,'' \textit{Journal Name} vol., no. (Year): pages.}
```

### 3. Add Tables and Figures
In your text, mark insertion points:
```latex
[INSERT FIGURE 1 HERE]

[INSERT TABLE 2 HERE]
```

Save actual tables/figures as separate files (Excel, PNG, PowerPoint, native format) and upload during SAGE submission.

### 4. Compile to PDF
From PowerShell in this directory:
```powershell
.\build.ps1
```

Or manually:
```powershell
pdflatex -interaction=nonstopmode main.tex
pdflatex -interaction=nonstopmode main.tex  # Second pass for references
```

### 5. Convert to Word for Submission
Since CMR requires **.docx** format (not PDF):

**Option A: Use Pandoc (recommended)**
```powershell
pandoc main.tex -o article.docx
```

**Option B: Manual conversion**
- Open `main.pdf` in Word
- Save as `.docx`
- Clean up formatting as needed (especially endnotes)

**Option C: Rewrite in Word directly**
- Use this PDF template as a guide
- Create a new `.docx` file in Word
- Match the formatting: 12pt, double-spaced, same heading structure, endnotes
- Maintain the same section order and content flow

### 6. Before Submission to CMR

**Anonymous Review Checklist:**
- [ ] Remove author names from everywhere (manuscript, metadata, footnotes, author bio)
- [ ] Check figure captions and table titles—no identifying information
- [ ] Remove acknowledgments that reveal identity
- [ ] Clear PDF metadata (author fields)

**Formatting Checklist:**
- [ ] 12-point font throughout
- [ ] Double-spaced main text
- [ ] Endnotes (not footnotes) in Chicago style
- [ ] Three levels of headings, consistently used
- [ ] Abstract is ~100 words
- [ ] Keywords: 3+ terms
- [ ] Word count: 5,000–8,000 (excluding tables/figures)
- [ ] All tables/figures uploaded as separate files with insertion points marked

**Content Checklist:**
- [ ] Clear managerial problem in Introduction
- [ ] Research foundation in "What We Know" section
- [ ] Actionable implications for managers (not just academic insights)
- [ ] Practical takeaway in Conclusion
- [ ] Jargon minimized for practitioner audience

### 7. Submit to CMR

Go to: **https://cmr.berkeley.edu/resources/submit/**

Or use SAGE's submission portal directly:
1. Create account / log in
2. Start new submission
3. Upload manuscript (.docx)
4. Enter abstract and keywords in the portal fields (not just the document)
5. Upload tables/figures as separate files
6. Complete author info form (which will be blinded for review)
7. Submit

## Word Count Guidance

**Included in word count:**
- Main body (Introduction through Conclusion)
- Endnotes

**Excluded from word count:**
- Abstract
- Keywords
- Tables and figures
- Figure captions
- Submission notes (remove before final submission)

Aim for **5,000–8,000 words** in the main body.

## Customization

### Custom Callout Boxes

This template includes three custom callout styles for highlighting key insights:

```latex
\begin{practicalbox}[Your Box Title]
This is a practical insight or actionable guidance.
\end{practicalbox}

\begin{warningbox}[Your Warning Title]
This highlights a risk, limitation, or caveat.
\end{warningbox}

\begin{insightbox}[Your Insight Title]
This highlights a key research finding or concept.
\end{insightbox}
```

**Note:** For CMR submission, you may want to convert these to simple bold text or indented paragraphs, as some reviewers may prefer a more traditional academic format.

### Adding Sections

```latex
\section{Your Section Title}  % Level 1: centered, bold, uppercase

\subsection{Your Subsection}  % Level 2: left, bold

\subsubsection{Sub-subsection}.  % Level 3: left, bold italic, run-in
Content follows on the same line or next line.
```

## FAQ

**Q: Can I use color in my article?**
A: The template supports color, but CMR may print in grayscale. Use color sparingly and ensure figures are readable in black and white. When uploading tables/figures separately, use black and white or high-contrast color.

**Q: Should I include a bibliography?**
A: No. In Chicago Notes style with endnotes, all bibliographic information goes in the endnotes. There is no separate reference list.

**Q: How many endnotes is too many?**
A: Endnotes should support claims but not distract. Keep technical detail in notes when it's complex. CMR readers appreciate concise notes that add value without cluttering the prose.

**Q: Can I use footnotes instead of endnotes?**
A: CMR requires endnotes (not footnotes). This template uses the `endnotes` package, which automatically converts footnotes to endnotes.

**Q: What if I need a figure in the middle of a paragraph?**
A: Mark the insertion point clearly:
```latex
Text continues here [INSERT FIGURE 1 HERE] and here.
```
The editorial team will handle figure placement in the final layout.

## Resources

- **CMR Submission Guide:** https://cmr.berkeley.edu/resources/submit/
- **Chicago Manual of Style (18th ed.):** https://www.chicagomanualofstyle.org/ (Notes format)
- **SAGE Publishing:** https://sage.com/
- **LaTeX + Pandoc Conversion:** https://pandoc.org/

## Support

If you encounter LaTeX errors:
1. Check that all required packages are installed (pdflatex, setspace, tcolorbox, endnotes)
2. Ensure no author names are in the document
3. Verify file paths for included content

For CMR-specific questions, contact the editorial team at **cmr@berkeley.edu** or visit the submission portal.

---

**Template Version:** 1.0  
**Created for:** California Management Review  
**LaTeX Compilation:** pdflatex with two passes recommended
