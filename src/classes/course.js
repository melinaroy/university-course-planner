export class Course {
  constructor(name, code, prerequisites, schedule) {
    this.level = level;
    this.type = type;
    this.field = field;
    this.mandatorycourses = [];

    // labels
    this.levelLabel = Program.programLevels[level];
    this.typeLabel = Program.programTypes[level][type];
    this.fieldLabel = Program.programFields[field];

    this.id = `${field.toLowerCase()}-${type.toLowerCase()}`.replaceAll(
      ' ',
      '-',
    );
  }

  toString() {
    return ``;
  }
}
