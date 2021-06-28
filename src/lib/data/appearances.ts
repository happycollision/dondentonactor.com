import { simpleDate } from "$lib/utils/date"
import type { SimpleDate } from "$lib/utils/date"

type Appearance = {
	start: SimpleDate
	end: SimpleDate
	description: string
}

export const current: Appearance[] = []

export const archive: Appearance[] = [
	{
		start: simpleDate(2018, 5, 25),
		end: simpleDate(2018, 7, 4),
		description:
			"Don stars as Robert Kincaid in <cite>The Bridges of Madison County</cite> at <a href='https://circa21.com'>Circa '21 Dinner Playhouse</a>",
	},
	{
		start: simpleDate(2018, 7, 27),
		end: simpleDate(2018, 8, 2),
		description:
			"Don plays Corny Collins in <cite>Hairspray</cite> at <a href='https://www.kcstarlight.com/meet-the-cast-of-hairspray/'>The Kansas City Starlight Theatre</a>",
	},
	{
		start: simpleDate(2018, 9, 21),
		end: simpleDate(2018, 11, 3),
		description:
			"Don returns to the <a href='https://circa21.com'>Circa '21</a> stage again in the comedic straight play, <cite>Mama Won't Fly</cite>",
	},
]
