export class Program {
  static programLevels = {
    cycle1: '1er Cycle',
    cycle2: '2e Cycle',
    cycle3: '3e Cycle',
  };

  static programTypes = {
    cycle1: {
      certificate: 'Certificat',
      bachelor: 'Baccalauréat',
      microprogram: 'Microprogramme',
    },
    cycle2: {
      master: 'Maîtrise',
      microprogram: 'Microprogramme',
    },
    cycle3: {
      doctorate: 'Doctorat',
    },
  };
  static programFields = {
    'computer-science': 'Informatique',
  };

  constructor(level, type, field) {
    this.level = level;
    this.type = type;
    this.field = field;

    // labels
    this.levelLabel = Program.programLevels[level];
    this.typeLabel = Program.programTypes[level][type];
    this.fieldLabel = Program.programFields[field];

    this.id = `${field.toLowerCase()}-${type.toLowerCase()}`.replaceAll(
      ' ',
      '-',
    );

    // a program shouldn't change
    Object.freeze(this);
  }

  toString() {
    return `${this.typeLabel} en ${this.fieldLabel.toLowerCase()} (${this.levelLabel})`;
  }
}
