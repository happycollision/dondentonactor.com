<script>
	import { specialSkills, stage, training, stats, screen } from "../data"
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

	<div class="grid grid-cols-[1fr_53%] gap-4">
		<section>
			<header>
				<h2>Training</h2>
			</header>
			<div class="space-y-[0.85rem]">
				<div>{training.Education}</div>

				<div>
					<h3 class="font-bold font-sans inline">Voice:</h3>
					{@html training.Voice.map((x) => `<span class="whitespace-nowrap">${x}</span>`).join(
						", ",
					)}
				</div>

				<div>
					<h3 class="font-bold font-sans mt-2 inline">Acting:</h3>
					{@html training.Acting.map((x) => `<span class="whitespace-nowrap">${x}</span>`).join(
						", ",
					)}
				</div>
			</div>
		</section>

		<section>
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
		@apply mt-2 mb-1;
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
