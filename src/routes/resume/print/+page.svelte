<script>
	import Img from "$components/Img.svelte"
	import { specialSkills, stage, screen, training, stats } from "../data"

	const sliceAt = Math.ceil(specialSkills.length / 2)
	const specialSkillsView = [
		specialSkills.slice(0, sliceAt).join(", "),
		specialSkills.slice(sliceAt).join(", "),
	]
</script>

<div class="resume">
	<div class="flex items-baseline justify-between">
		<h1 class="text-5xl">Don Denton</h1>
		<section class="stats">
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
			<h2>Stage</h2>
		</header>
		<div class="credits">
			{#each stage.slice(0, 10) as x}
				<div class="row">
					<span>{@html x.role}</span>
					<span>{@html x.show}</span>
					<span>{@html x.company}</span>
					<span>{@html x.director}</span>
				</div>
			{/each}
		</div>
	</section>
	<section class="screen">
		<header>
			<h2>Screen</h2>
		</header>
		<div class="credits">
			{#each screen as x}
				<div class="row">
					<span>{@html x.role}</span>
					<span>{@html x.show}</span>
					<span>{@html x.company}</span>
					<span>{@html x.director}</span>
				</div>
			{/each}
		</div>
	</section>

	<div class="flex gap-4">
		<section class="training w-1/2">
			<header>
				<h2>Training</h2>
			</header>
			<div>{training.Education}</div>

			<div class="mt-3">
				<div class="voice">
					<h3>Voice:</h3>
					<ul>
						{#each training.Voice as person}
							<li>{person}</li>
						{/each}
					</ul>
				</div>
				<div class="acting">
					<h3>Acting:</h3>
					<ul>
						{#each training.Acting as person}
							<li>{person}</li>
						{/each}
					</ul>
				</div>
			</div>
		</section>

		<section class="skills w-1/2">
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
		margin: 0 auto 40px;
		font-size: 1em;
	}

	.resume:after {
		content: "";
		display: table;
		clear: both;
	}

	h2 {
		@apply font-sans text-blue-500;
		@apply mt-4 mb-2;
		font-size: 1.5em;
		border-bottom: 1px solid #6b90b5;
		margin-right: -1em;
		font-weight: 400;
	}

	@media (min-width: 700px) {
		h2 {
			margin-right: 0;
		}
	}

	h3 {
		@apply font-sans;
		font-size: 1.3em;
		font-weight: bold;
	}

	.skills,
	.training {
		width: 100%;
	}

	@media (min-width: 700px) {
		.skills,
		.training {
			width: 49.15254%;
			float: left;
			margin-right: 1.69492%;
		}
	}

	.acting,
	.voice {
		width: 40%;
		float: left;
		margin: 1em 5% 0;
	}

	.acting h3,
	.voice h3 {
		margin-bottom: 0;
	}

	.acting ul,
	.voice ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	@media (min-width: 700px) {
		.skills {
			width: 49.15254%;
			float: right;
			margin-right: 0;
		}
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
		padding: 0.35em 0;
	}

	.credits .row span:nth-child(1) {
		width: 17%;
	}

	.credits .row span:nth-child(2) {
		width: 30%;
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
