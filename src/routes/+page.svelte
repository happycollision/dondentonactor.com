<script lang="ts">
	import Appearances from "$components/Appearances.svelte"
	import HomePageNav from "$components/HomePageNav.svelte"
	import Img from "$components/Img.svelte"
</script>

<HomePageNav />

<Appearances />

<div class="font-sans text-xl sm:text-3xl leading-snug sm:leading-snug -mx-4">
	<div class="text-white bg-blue-500 dark:bg-blue-900 dark:text-gray-300 py-20 px-4">
		<div class="max-w-4xl mx-auto">
			<Img
				class="mx-auto md:float-left max-w-md w-full md:mr-4 mb-2 mt-2 flip"
				src="/img/shows/LesMiserables-10.jpg"
				alt="Don as Jean Valjean"
			/>
			<blockquote class="mb-4">
				<p class="mb-4">
					Mr. Denton is a fierce, determined, passionate hero, and his exhilarating, sympathetic
					portrayal intimately connects us to the sweeping narrative […]
				</p>
				<p>
					With his very strong, piercing high register, the expressive, heart-wrenching Mr. Denton
					shines in numbers like “Who Am I,” “One Day More” and the prayerful, angelic “Bring Him
					Home.”
				</p>
			</blockquote>
			<div class="text-right italic text-smaller text-blue-300 max-w-3xl ml-auto">
				&mdash; Jonathan Turner, Dispatch/Argus, on Don’s portrayal of Jean Valjean
			</div>
		</div>
	</div>

	<div class="py-20 px-4">
		<div class="max-w-4xl mx-auto">
			<blockquote class="font-black italic mb-4 text-blue-500">
				Don Denton carries an easygoing charm and occasional smirky humor
			</blockquote>
			<div class="text-right italic text-smaller text-blue-300 max-w-3xl ml-auto">
				&mdash; David Burke, Quad City Times, on Don’s portrayal of Joseph in Joseph and the Amazing
				Technicolor Dreamcoat
			</div>
		</div>
	</div>

	<div class="text-white bg-blue-500 dark:bg-blue-900 dark:text-gray-300 py-20 px-4">
		<div class="max-w-4xl mx-auto md:flex md:flex-row-reverse">
			<div class="md:w-5/12 md:ml-4 mb-2 mt-2">
				<Img
					class="mx-auto w-full max-w-sm"
					src="/img/shows/WonderfulLife-02.jpg"
					alt="Don as George Bailey"
				/>
			</div>
			<div class="md:w-7/12">
				<blockquote class="mb-4">
					[Don Denton] is perfectly cast as George Bailey in voice, physical presence, and emotional
					range… Denton is a wonderful talent and I loved every note he sang and every movement he
					made on stage.
				</blockquote>
				<div class="text-right italic text-smaller text-blue-300 max-w-3xl ml-auto">
					&mdash; Dee Canfield, River Cities Reader, on Don's potrayal of George Bailey in A
					Wonderful Life
				</div>
			</div>
		</div>
	</div>

	<div class="py-20 px-4">
		<div class="max-w-4xl mx-auto">
			<blockquote class="font-black italic mb-4 text-blue-500">
				Don Denton’s Ichabod, the bookwormish new man in town, is sweetly sung in a startling high
				tenor.
			</blockquote>
			<div class="text-right italic text-smaller text-blue-300 max-w-3xl ml-auto">
				&mdash; William Panek, Broadway World Chicago, on Don’s performance in Sleepy Hollow
			</div>
		</div>
	</div>
</div>

<style>
	.text-smaller {
		font-size: 0.8em;
	}
</style>
