<script>
	import Img from "$components/Img.svelte"
	import { specialSkills, stage, screen, training, stats } from "./data"
	import { pdfFile } from "$lib/data/resume"
</script>

<div class="flex justify-evenly max-w-3xl mx-auto mb-4 space-x-2">
	<div class="flex-shrink">
		<Img src="/img/headshots/current-short-beard.jpg" class="object-cover h-40 md:h-60" />
	</div>
	<div class="flex-shrink">
		<Img src="/img/headshots/current-beard.jpg?t=0" class="object-cover h-40 md:h-60" />
		<Img src="/img/headshots/current-beard.jpg?t=0" class="object-cover h-40 md:h-60" />
	</div>

	<div>
		<a
			class="inline-flex justify-center px-2 py-4 bg-blue-600 text-white rounded hover:bg-blue-400 max-w-[160px] text-center font-sans"
			href="{pdfFile}"
			download>Download Resumé as a PDF</a
		>
	</div>
</div>

<div class="resume">
	<section class="stats">
		<dl>
			{#each Object.entries(stats) as [key, value]}
				<dt class="capitalize">{key}</dt>
				<dd>{value}</dd>
			{/each}
		</dl>
	</section>
	<section class="stage">
		<header>
			<h2>Stage</h2>
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
	<section class="training">
		<header>
			<h2>Training</h2>
		</header>
		<div>{training.Education}</div>
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
	</section>
	<section class="skills">
		<header>
			<h2>Special Skills</h2>
		</header>
		<div class="space-y-[0.85rem]">
			{#each specialSkills as groupOrSkill}
				<div>
					{#if Array.isArray(groupOrSkill)}
						<span class="font-bold font-sans">
							{groupOrSkill[0]}:
						</span>
						<!-- prettier-ignore -->
						{( /** @type {string[] }*/ (groupOrSkill[1])).join(", ")}
					{:else}
						<span class="font-bold font-sans">
							{groupOrSkill}
						</span>
					{/if}
				</div>
			{/each}
		</div>
	</section>
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

	@media (max-width: 929px) {
		.resume {
			font-size: 0.8em;
		}
	}

	@media (max-width: 699px) {
		.resume {
			font-size: 1em;
		}
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

	@media (max-width: 699px) {
		.credits .row {
			display: block;
			width: 50%;
			padding: 22px;
			float: left;
		}

		.credits .row:nth-of-type(odd) {
			clear: left;
		}

		.credits .row span {
			display: block;
			padding: 0;
			width: 100% !important;
		}

		.credits .row span:first-child {
			font-weight: 700;
			font-family: proxima-nova, sans-serif;
		}

		.credits .row span:nth-child(3) {
			font-weight: 700;
		}

		.credits .row span:nth-child(4) {
			font-style: italic;
		}

		.credits .row span:nth-child(4):before {
			content: "dir. ";
		}
	}

	@media (max-width: 399px) {
		.credits .row {
			width: 100%;
			float: none;
			padding: 0;
			margin-bottom: 2em;
		}

		.credits .row span {
			display: inline;
			white-space: nowrap;
			width: auto !important;
			margin-right: 0.75em;
		}

		.credits .row span:nth-child(1) {
			font-size: 1.25em;
			display: block;
			padding: 0;
			font-weight: 400;
		}

		.credits .row span:nth-child(3) {
			font-weight: 700;
		}
	}

	.row {
		display: table-row;
		width: 100%;
	}

	.row span {
		display: table-cell;
	}
</style>
