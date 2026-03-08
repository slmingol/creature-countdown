# Creature Countdown - Copilot Agent Instructions

## Repository Overview

**Creature Countdown** is a fast-paced animal naming game built with pure vanilla JavaScript, HTML5, and CSS3. The game challenges players to type as many animal names as possible before time runs out, with each correct answer adding bonus time.

**Key Characteristics:**
- **Type**: Static web application (no build process required)
- **Size**: Small (~6 files)
- **Languages**: HTML5, CSS3, vanilla JavaScript
- **Runtime**: Client-side only (no server-side code)
- **Deployment**: Docker container using Caddy web server
- **Database**: 5,000+ animals embedded in `script.js` as a JavaScript array

**IMPORTANT**: This project has **NO build dependencies** (no npm, webpack, babel, etc.). Files are served directly to the browser.

## File Structure

### Root Directory Files
```
.
├── index.html           # Main game page with all UI structure
├── styles.css           # All styling (845 lines) including dark/light themes
├── script.js            # Game logic + 5,000-animal database (1,080 lines)
├── logo.png             # Game logo image
├── timer-demo.html      # Standalone timer animation demo page
├── VERSION              # Current version number (e.g., "1.0.2")
├── Dockerfile           # Caddy alpine-based container
├── Caddyfile            # Caddy web server configuration
├── docker-compose.yml   # Compose file for local deployment
├── README.md            # Comprehensive project documentation
├── .dockerignore        # Docker build exclusions
└── .gitignore           # Git exclusions
```

### Directory Structure
```
.github/
├── workflows/
│   ├── docker-publish.yml    # Builds and publishes Docker images to GHCR
│   └── version-bump.yml      # Auto-increments version on push to main
└── copilot-instructions.md   # This file
```

## Architecture & Key Components

### Frontend Structure
- **index.html**: Contains three main screens (menu, game, game-over) toggled via CSS classes
- **styles.css**: Uses CSS custom properties for theming, includes responsive @media queries for mobile
- **script.js**: 
  - Lines 1-~70: Animal database (5,000+ entries as a JavaScript array)
  - Lines ~70-end: Game logic, timer management, localStorage for stats/settings

### Key Features
- Theme toggle (system/light/dark mode)
- LocalStorage for game statistics and settings persistence
- Customizable timer settings (initial time, time increment)
- Overlap detection (prevents "bear" + "polar bear" in same game)
- Mobile-responsive design (breakpoint: 480px)

## Build & Deployment

### Local Development
**No build step required!** Simply open `index.html` in any modern web browser:
```bash
# Option 1: Direct file open
open index.html

# Option 2: Simple HTTP server (if needed)
python3 -m http.server 8000
# Then visit http://localhost:8000
```

**CRITICAL**: Changes to HTML/CSS/JS are immediately effective. Just refresh the browser.

### Docker Build & Run
**Build time**: ~30-45 seconds (depending on network/cache)

```bash
# Build the Docker image
docker build -t creature-countdown .

# Run locally (serves on port 3991)
docker-compose up -d

# Access at: http://localhost:3991

# Stop the container
docker-compose down
```

**Build validation**: Test that container serves correctly:
```bash
docker build -t creature-countdown-test .
docker run -d --rm -p 8888:80 --name creature-test creature-countdown-test
curl http://localhost:8888/  # Should return HTML
docker stop creature-test
```

**Docker Notes**:
- Base image: `caddy:alpine` (lightweight web server)
- Files copied to: `/usr/share/caddy/`
- Caddyfile enables gzip compression and sets cache headers for static assets
- Container exposes port 80, mapped to 3991 in docker-compose.yml

## CI/CD Pipeline & Workflows

### Automatic Triggers
Pushing to `main` branch triggers **TWO** GitHub Actions workflows:

#### 1. Version Bump Workflow (`.github/workflows/version-bump.yml`)
- **Trigger**: Every push to `main` (unless commit message contains `[skip version]`)
- **Actions**:
  1. Reads current version from `VERSION` file
  2. Auto-increments patch version (e.g., 1.0.2 → 1.0.3)
  3. Updates `VERSION`, `index.html` (version number display), and `README.md` (badge + footer)
  4. Commits changes with message: `"chore: bump version to X.Y.Z [skip version]"`
  5. Creates and pushes git tag `vX.Y.Z`
- **Manual trigger**: Can be manually run with version type choice (patch/minor/major)
- **IMPORTANT**: The `[skip version]` message prevents infinite loops

#### 2. Docker Publish Workflow (`.github/workflows/docker-publish.yml`)
- **Triggers**: 
  - Push to `main` branch
  - Push of tags matching `v*`
  - Pull requests to `main`
  - Merge group events
- **Actions**:
  1. Builds Docker image
  2. Publishes to GitHub Container Registry (GHCR) at `ghcr.io/slmingol/creature-countdown`
  3. Tags image with branch name, PR number, semver, and commit SHA
- **Permissions**: Requires `packages: write` for GHCR
- **Build time**: ~1-2 minutes in GitHub Actions

### Version Management
**CRITICAL**: When making code changes:
- Version is **automatically bumped** on every push to `main`
- To update multiple files in one version bump, include `[skip version]` in commits except the final one
- Version appears in three places: `VERSION`, `index.html` (`.version-number` div), `README.md`

## Making Changes Safely

### Code Modification Workflow
1. Edit `index.html`, `styles.css`, or `script.js` as needed
2. Test locally by opening `index.html` in browser (or via Docker)
3. Commit and push to `main`
4. **Automatic**: Version bump workflow updates version
5. **Automatic**: Docker workflow builds and publishes new container
6. Container is live at `ghcr.io/slmingol/creature-countdown:main`

### Common Modification Areas

**Adding/Modifying Animals**:
- Edit the `animals` array at the top of `script.js`
- Animals are lowercase strings separated by commas
- Database is loaded once at page load

**Styling Changes**:
- All CSS in `styles.css`
- Uses CSS custom properties (`:root` and `body.dark-mode`)
- Mobile breakpoint: `@media (max-width: 480px)`
- **CRITICAL**: Test on mobile - buttons have `min-width` that can cause issues on small screens

**UI/HTML Changes**:
- Three main sections in `index.html`: `#menu`, `#game`, `#gameOver`
- Toggled via `.hidden` class (display: none)
- Version displayed in `.version-number` div (auto-updated by workflow)

### Validation Steps

**Before Pushing**:
1. Open `index.html` in browser - verify no console errors
2. Test basic gameplay: start game, enter an animal, verify timer works
3. Test theme toggle (settings gear icon)
4. Test on mobile viewport (Chrome DevTools responsive mode)

**After Pushing**:
1. Check GitHub Actions tab - verify both workflows succeeded
2. Version should increment in `VERSION` file
3. New Docker image should appear at GHCR within 2 minutes
4. Pull and test new image:
   ```bash
   docker pull ghcr.io/slmingol/creature-countdown:main
   docker run -p 8888:80 ghcr.io/slmingol/creature-countdown:main
   ```

## Known Issues & Gotchas

1. **Mobile button squishing**: Buttons have `min-width: 160px` in desktop CSS. Always override with `min-width: auto` in mobile media query when changing button styles.

2. **Version synchronization**: Version appears in 3 files. The workflow handles this automatically, but manual edits should update all three or use the workflow.

3. **LocalStorage persistence**: Game settings and stats persist across sessions. To test "fresh" experience, clear localStorage or use incognito mode.

4. **Timer animation scaling**: Timer uses `transform: scale()` which can cause layout issues if container size changes. Located in `styles.css` around line 690.

5. **No automated tests**: This project has no unit tests. Validation is manual browser testing.

6. **Case-sensitive animals**: The game converts input to lowercase, but the database must store animals in lowercase only.

## Configuration Files

### Caddyfile
- Enables gzip compression
- Sets `Cache-Control: public, max-age=31536000` for static assets (css, js, png, etc.)
- JSON logging to stdout
- Serves from `/usr/share/caddy`

### .dockerignore
- Excludes `.git`, `README.md`, Docker files, and editor configs from image
- Keeps image size minimal

## Trust These Instructions

**For efficiency**: Trust this documentation first before searching the codebase. The repository is small and well-documented here. Only perform searches if:
- Information here is incomplete or contradictory
- You need specific line numbers or code snippets
- You're implementing a feature not described here

**Remember**: This is a simple static site. Most changes are straightforward edits to the three main files. There's no transpilation, bundling, or complex build chain to worry about.
