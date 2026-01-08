# LaTeX Build Script for PM Article
# Usage: .\build.ps1 or .\build.ps1 -clean

param(
    [switch]$clean
)

# Get script directory
$scriptPath = Split-Path -Parent -Path $MyInvocation.MyCommand.Definition
Push-Location $scriptPath

# Clean if requested
if ($clean) {
    Write-Host "Cleaning build artifacts..." -ForegroundColor Yellow
    Remove-Item *.aux -ErrorAction SilentlyContinue
    Remove-Item *.toc -ErrorAction SilentlyContinue
    Remove-Item *.idx -ErrorAction SilentlyContinue
    Remove-Item *.ind -ErrorAction SilentlyContinue
    Remove-Item *.ilg -ErrorAction SilentlyContinue
    Remove-Item *.out -ErrorAction SilentlyContinue
    Remove-Item *.log -ErrorAction SilentlyContinue
    Remove-Item *.pdf -ErrorAction SilentlyContinue
    Write-Host "Clean complete." -ForegroundColor Green
    Pop-Location
    exit 0
}

# First pass: compile
Write-Host "Building LaTeX (first pass)..." -ForegroundColor Cyan
pdflatex -interaction=nonstopmode main.tex

# Second pass: resolve references
Write-Host "Building LaTeX (second pass)..." -ForegroundColor Cyan
pdflatex -interaction=nonstopmode main.tex

Write-Host "Build complete!" -ForegroundColor Green

# Check if PDF was created
if (Test-Path "main.pdf") {
    $pdfSize = (Get-Item "main.pdf").Length
    Write-Host "PDF generated: main.pdf ($([Math]::Round($pdfSize/1KB))KB)" -ForegroundColor Green
} else {
    Write-Host "ERROR: PDF was not generated!" -ForegroundColor Red
}

Pop-Location
