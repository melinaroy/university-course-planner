# Requirements

## Functional

The app must ...

- [ ] generate valid academic paths (i.e. semester-by-semester course plans) that
  - [ ] avoid schedule conflict within each semester
  - [ ] respect course prerequisites
  - [ ] respect the user's chosen study load: part-time or full-time
- [ ] indicate a projected completion date based on the proposed paths
- [ ] allow the user to
  - [ ] input completed courses
  - [ ] choose between part-time and full-time study
  - [ ] choose a preferred concentraation if applicable
  - [ ] provide a preferred list of elective courses
  - [ ] select stric or flexible scenarios
- [ ] suggest multiple valid planning scenarios and allow comparison

In the future, the app must ...

- [ ] automatically retrieve program requirements from ULaval's official sources
- [ ] automatically retrieve course prerequisites and semester availability
- [ ] automatically retrieve course schedules (time blocks, days, etc.)
- [ ] update dynamically if input changes (e.g. new course taken or new data available)

## Non-functional

The app should ...

- [ ] run on all major platforms (Linux, Windows, macOS)
- [ ] be usable without installing anything (web-based or simple to run)
- [ ] handle authentification securely if required to access external data
- [ ] clearly inform the user when course schedule data is unavailable (e.g. future semesters)
- [ ] be designed to scale
  - [ ] other uLaval programs
  - [ ]other universities
- [ ] be easy to maintain and extend
