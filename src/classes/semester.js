export class Semester {
  static VALID_NAMES = [
    'Fall',
    'Winter',
    'Summer',
  ]

  constructor(name, year, startDate, endDate) {
    // validate name
    if (!Semester.VALID_NAMES.includes(name)) {
      throw new Error(`Invalid semester name: ${name}\nValid names are: ${Semester.VALID_NAMES.join(', ')}`);
    }
    this.name = name;

    // validate startDate and endDate
    const start = (startDate instanceof Date) ? startDate : new Date(startDate);
    const end = (endDate instanceof Date) ? endDate : new Date(endDate);
    if (isNaN(start) || isNaN(end)) {
      throw new Error('startDate and endDate must be valid dates.');
    }
    // validate both dates are the same year
    if (start.getFullYear() !== end.getFullYear()) {
      throw new Error('startDate and endDate must be in the same year.');
    }

    // Vérifier que l'année des dates correspond à l'attribut year
    if (start.getFullYear() !== year) {
      throw new Error('startDate and endDate year must match the semester year.');
    }

    this.startDate = start;
    this.endDate = end;

    // validate year
    if (typeof year !== 'number' || !Number.isInteger(year) || year < 2000) {
      throw new Error(`Invalid year: ${year}. Year must be an integer greater than 2000.`);
    }
    this.year = year;
  }
    this.startDate = startDate;
    this.endDate = endDate;

    this.id = `${name.toLowerCase()}-${year}`.replaceAll(
      ' ',
      '-',
    );
  }

  toString() {
    return `${this.name} ${this.year}`;
  }
}
