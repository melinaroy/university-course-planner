export class Schedule {
  constructor(startDate, endDate) {
    // validate startDate and endDate
    const start = startDate instanceof Date ? startDate : new Date(startDate);
    const end = endDate instanceof Date ? endDate : new Date(endDate);
    if (isNaN(start) || isNaN(end)) {
      throw new Error('startDate and endDate must be valid dates.');
    }
    // validate both dates are the same year
    if (start.getFullYear() !== end.getFullYear()) {
      throw new Error('startDate and endDate must be in the same year.');
    }
    this.startDate = start;
    this.endDate = end;

    this.sessions = [];
  }
}
