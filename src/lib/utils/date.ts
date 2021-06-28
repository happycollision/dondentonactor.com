export type SimpleDate = { year: number; month: number; day: number }
export type AnyDate = SimpleDate | Date

export const MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
] as const

export const SHORT_MONTHS = MONTHS.map((x) => x.slice(0, 3))

/**
 * Create a new date where the month is properly numbers 1-12, not zero-indexed
 */
export function simpleDate(year: number, month: number, day: number): SimpleDate {
	return { year, month, day }
}

export function toSimpleDate(date: AnyDate): SimpleDate {
	if (!(date instanceof Date)) return date
	return {
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		day: date.getDate(),
	}
}

export function toDate(date: AnyDate): Date {
	if (date instanceof Date) return date
	return new Date(date.year, date.month - 1, date.day)
}

export function startOfDay(date: AnyDate): Date {
	return toDate(toSimpleDate(date))
}

export function adjustDays(date: AnyDate, days: number) {
	const newDate = new Date(toDate(date))
	newDate.setDate(newDate.getDate() + days)
	return newDate
}
