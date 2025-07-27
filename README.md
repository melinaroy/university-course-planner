![WIP](https://img.shields.io/badge/status-WIP-yellow)

# University Course Planner

Course planning tool for Université Laval using JavaScript.

## 📖 Context

While planning my path for the computer science certificate at Université Laval, I realized it wasn’t easy to figure out the best order in which to take courses. Many courses have prerequisites, they're not offered every semester, and some have schedule conflicts.

Since I’m aiming for the multimedia and video game concentration, it gets even more complex. Before each semester, I’ve been planning everything manually with handwritten notes — so I figured, why not build a tool to automate all this?

### 🧪 Approach

To keep it simple at first, I’ll start by manually entering course data (program structure, completed courses, schedules, etc.) to develop the core logic for dependencies and time conflicts.

Once that’s working, I plan to fetch official data directly from ULaval’s course site to automate the planning process.

In the future, I’d also like to explore integrating AI to improve decision-making, generate personalized recommendations, and optimize academic paths based on multiple criteria like duration, preferences, and workload.

## 📁 Project structure

```
├── data/                    # Static or generated data files
├── docs/                    # Documentation for the project
├── src/                     # Main source code
│   ├── classes/             # Class definitions (e.g., Program, Course)
│   ├── fetchers/            # Data fetching or loading utilities
│   ├── utils/               # Reusable utility functions (DOM, formatting, etc.)
│   ├── index.html           # Main HTML file (entry point)
│   ├── main.js              # Application logic (entry script)
│   └── styles.css           # CSS styles
├── tests/                   # Unit tests (e.g., using Jest)
├── .gitignore
├── .prettierrc              # Prettier config – formatting rules (quotes, semicolons, tabs, etc.)
├── eslint.config.mjs        # ESLint config – rules and plugins for code quality and analysis
├── package.json             # Project metadata, dependencies, and npm scripts
├── package-lock.json        # Locked versions of installed packages (ensures consistent installs)
└── README.md                # Project overview and instructions
```

## 🚀 What’s next

- [x] Define project goals and requirements
- [x] Draft a object-oriented design plan
- [ ] Start learning and coding in Javascript
