export function oneYearAhead(date: Date): Date {
  date.setFullYear(date.getFullYear() + 1)
  return date
}
