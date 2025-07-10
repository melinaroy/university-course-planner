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
├── data/                         # Static data for development
│   ├── courses-data.json
│   └── program-data.json
│
├── docs/                         # Documentation and design notes
│   ├── object-oriented-design.md
│   ├── requirements.md
│   └── use-cases.md
│
├── src/                          # Source code
│   ├── classes/                  # Domain classes (core logic)
│   ├── fetchers/                 # Fetching external data
│   ├── index.html                # Entry point for the interface
│   ├── main.js                   # Main logic and orchestration
│   └── styles.css                # App styles
└── README.md

```

## 🚀 What’s next

- [x] Write requirements
- [ ] Define high-level roadmap
- [ ] Breakdown the "how" - structure, inputs, outputs, classes and key logic
- [ ] Start learning and coding in Javascript
