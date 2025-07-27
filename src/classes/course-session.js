export class Schedule {
  constructor(day, type, startTime, endTime) {
    // validate day
    if (
      typeof day !== 'string' ||
      !day.toLowerCase().match(/^(monday|tuesday|wednesday|thursday|friday)$/)
    ) {
      throw new Error(`Invalid day: ${day}. Day must be a valid weekday.`);
    }
    // normalize day to first letter uppercase
    this.day = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();

    // validate type
    if (
      typeof type !== 'string' ||
      !['lecture', 'lab', 'tutorial'].includes(type.toLowerCase())
    ) {
      throw new Error(
        `Invalid type: ${type}. Type must be one of: Lecture, Lab, Tutorial.`,
      );
    }
    // normalize day to first letter uppercase
    this.type = type.charAt(0).toUpperCase() + day.slice(1).toLowerCase();

    // validate startTime and endTime
    const start = new Date(`1970-01-01T${startTime}:00`);
    const end = new Date(`1970-01-01T${endTime}:00`);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      throw new Error('startTime and endTime must be valid times.');
    }
    if (start >= end) {
      throw new Error('startTime must be before endTime.');
    }
    this.startTime = start;
    this.endTime = end;
  }
}
