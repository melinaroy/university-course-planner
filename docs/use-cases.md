# Use Cases

## Use Case 1: Suggest Academic Path for Computer Sciences Certificate

**Actor**: Student

**Scenario**:

1. Student provides:
   - study load preferences (full-time/part-time or number of courses per semester)
   - preferred concentration. (e.g. Multimedia and Video Games)
   - completed courses
   - courses currently in progress
   - list of preferred elective courses
1. System retrieves program structure and required courses.
1. System generates an academic path that:
   - includes all required courses
   - respects prerequisites and available schedules
   - accounts for courses in progress (treated as completed for future planning)
   - tries to include preferred courses
   - provides the expected completion date for that scenario
   - aims to minimize the number of semesters required
1. System displays the suggested path to the student.

## Use Case 2: Compare Multiple Academic Paths

**Actor**: Student

**Scenario**:

1. Student provides:
   - study load preferences (full-time/part-time or number of courses per semester)
   - completed courses
   - courses currently in progress
   - list of must-have courses
   - list of preferred courses
1. System generates multiple valid academic paths based on these constraints.
1. System evaluates each path based on:
   - projected completion date
   - number of preferred courses included
1. System ranks or scores paths and presents them to the student.

## Use Case 3: Update Preferences or Course Status

**Actor:** Student

**Scenario:**

1. Student updates preferences or completed courses or courses currently in progress.
1. System recalculates valid academic paths and updates the comparison.

## Use Case 4: Handle unavailable schedule data

**Actor:** System

**Scenario:**

1. For future semesters, some courses have no available schedule or offering data.
1. System checks historic data identify typical offering patterns (e.g. Fall only).
1. System makes assumptions based on historic data to fill gaps.
1. System notifies the student about which courses rely on assumptions due to missing data.

## Use Case 5: Save a Preferred Academic Path

**Actor:** Student

**Scenario:**

1. Student selects one of the suggested academic paths.
1. System saves the selected path as the student's reference plan.
1. Student can access the saved plan later to track progress or update it if needed.

## Use Case 6: Lock a Course in a Specific Semester

**Actor**: Student

**Scenario**:

1. Student selects one or more specific courses they want to lock into a specific semester (e.g. XXX-1111 in Fall 2025).
1. System accepts locked courses as fixed constraints.
1. System generates academic paths that:
   - include the locked courses in the specified semesters
   - adjust remaining course placements accordingly
   - respect prerequisites, schedules, and program rules
1. System notifies the student if no valid path can be generated with the given constraints.

## Use Case 7: Explain Why Completion Date is Delayed

**Actor**: System

**Scenario**:

1. System generates an academic path that satisfies all user constraints.
1. The projected completion date is significantly delayed due to:
   - locked course constraints that push prerequisites earlier
   - limited course offerings (e.g. course only offered once per year)
   - maximum course load restrictions (e.g. part-time)
1. System identifies and highlights the main causes of the delay.
1. System displays a clear explanation to the student, such as:
   - "Course XXX-1111 is locked in Fall 2025 but requires YYY-1000, which is only available in Winter, pushing your completion back."
   - "You selected a maximum of 2 courses per semester, which extends the program duration."
1. System optionally suggests ways to reduce the timeline (e.g. unlock a course, increase course load, adjust preferences).
