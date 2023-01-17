<script>
	import Img from "$components/Img.svelte"
	import { specialSkills, stage, training, stats } from "../data"

	const sliceAt = Math.ceil(specialSkills.length / 2)
	const specialSkillsView = [
		specialSkills.slice(0, sliceAt).join(", "),
		specialSkills.slice(sliceAt).join(", "),
	]
</script>

<div class="resume">
	<div class="flex items-end">
		<h1 class="text-5xl w-[47%]">Don Denton</h1>
		<section class="stats">
			<a class="text-blue-700" href="mailto:don@dondentonactor.com">don@dondentonactor.com</a>
			<dl class="flex gap-6">
				{#each Object.entries(stats) as [key, value]}
					<div class="flex">
						<dt class="capitalize">{key}</dt>
						<dd>{value}</dd>
					</div>
				{/each}
			</dl>
		</section>
	</div>
	<section class="stage">
		<header>
			<h2 class="flex items-baseline">
				<span class="w-[47%]">Stage</span>
				<span class="text-sm text-gray-600"
					>Selected videos at <a class="text-blue-600" href="https://dondentonactor.com/media"
						>dondentonactor.com/media</a
					></span
				>
			</h2>
		</header>
		<div class="credits">
			{#each stage as x}
				<div class="row">
					<span>{@html x.role}</span>
					<span>{@html x.show}</span>
					<span>{@html x.company}</span>
					<span>{@html x.director}</span>
				</div>
			{/each}
		</div>
	</section>

	<div class="grid grid-cols-[1fr_53%] gap-4">
		<section>
			<header>
				<h2>Training</h2>
			</header>
			<div>{training.Education}</div>

			<div class="mt-3">
				<h3 class="font-bold font-sans">Voice:</h3>
				<p>
					{@html training.Voice.map((x) => `<span class="whitespace-nowrap">${x}</span>`).join(
						", ",
					)}
				</p>

				<h3 class="font-bold font-sans mt-2">Acting:</h3>
				<p>
					{@html training.Acting.map((x) => `<span class="whitespace-nowrap">${x}</span>`).join(
						", ",
					)}
				</p>
			</div>
		</section>

		<section>
			<header>
				<h2>Special Skills</h2>
			</header>
			<div>
				{specialSkillsView[0]}
				<br />
				{specialSkillsView[1]}
			</div>

			<div class="flex justify-evenly mx-auto mt-2 space-x-2">
				<div class="flex-shrink">
					<Img src="/img/headshots/severe.jpg" class="object-cover h-40" />
				</div>
				<div class="flex-shrink">
					<Img src="/img/headshots/grin.jpg" class="object-cover h-40" />
				</div>
			</div>
		</section>
	</div>
</div>

<style>
	.resume {
		max-width: 900px;
		margin: 0 auto;
		font-size: 1em;
	}

	.resume:after {
		content: "";
		display: table;
		clear: both;
	}

	h2 {
		@apply font-sans text-blue-500;
		@apply mt-4 mb-1;
		font-size: 1.5em;
		border-bottom: 1px solid #6b90b5;
		margin-right: -1em;
		font-weight: 400;
	}

	h2 {
		margin-right: 0;
	}

	.stats dl {
		display: flex;
		justify-content: space-between;
	}

	.stats dl > * {
		flex-grow: 1;
	}

	.stats dt {
		text-align: right;
	}

	.stats dt::after {
		content: ": ";
		display: inline;
		margin-right: 0.5em;
	}

	.stats dd {
		text-align: left;
	}

	.credits {
		display: table;
		width: 100%;
	}

	.credits .row span {
		padding: 0.075em 0;
	}

	.credits .row span:nth-child(1) {
		width: 16%;
	}

	.credits .row span:nth-child(2) {
		width: 31%;
	}

	.credits .row span:nth-child(3) {
		width: 33%;
	}

	.credits .row span:nth-child(4) {
		width: 20%;
	}

	.row {
		display: table-row;
		width: 100%;
	}

	.row span {
		display: table-cell;
	}
</style>
