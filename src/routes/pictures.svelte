<script lang="ts">
  import Img from "$components/Img.svelte"
  import { seededShuffle } from "$utils/seededShuffle"

  const photoData = [
    {
      name: "Les Mis&eacute;rables",
      character: "Jean Valjean",
      location: "Circa '21 Dinner Playhouse",
      images: [
        {
          file: "LesMiserables-04.jpg",
          description: "Rue Plumet",
          with: "Kim Steffen as Cosette",
        },
        {
          file: "LesMiserables-07.jpg",
          description: "&ldquo;I know the meaning of those 19 years.&rdquo;",
        },
        {
          file: "LesMiserables-10.jpg",
          description: "Prologue",
        },
        {
          file: "LesMiserables-13.jpg",
          description: '"Show me some way to help you."',
          with: "Caitlin Michelle Borek as Fantine",
        },
      ],
    },
    {
      name: "Guys &amp; Dolls",
      character: "Sky Masterson",
      location: "Post Playhouse",
      images: [
        {
          file: "GuysAndDolls-04.jpg",
          description: "I'll Know",
          with: "Paige Salter as Sarah Brown",
        },
        {
          file: "GuysAndDolls-05.jpg",
          ignore: true,
          with: "Janet McWilliams as Adelaide",
        },
        {
          file: "GuysAndDolls-09.jpg",
          description: "I'll Know",
        },
        {
          file: "GuysAndDolls-10.jpg",
          description: "If I Were a Bell",
          with: "Paige Salter as Sarah Brown",
        },
        {
          file: "GuysAndDolls-11.jpg",
          ignore: true,
          description: "If I Were a Bell",
          with: "Paige Salter as Sarah Brown",
        },
      ],
    },
    {
      name: "Dance Concert",
      images: [
        {
          file: "DanceConcert-02.jpg",
          ignore: true,
        },
        {
          file: "DanceConcert-04.jpg",
        },
      ],
    },
    {
      name: "Forever Plaid",
      location: "Post Playhouse",
      character: "Frankie",
      images: [
        {
          file: "ForeverPlaid-03.jpg",
        },
        {
          file: "ForeverPlaid-04.jpg",
        },
        {
          file: "ForeverPlaid-05.jpg",
        },
      ],
    },
    {
      name: "The Full Monty",
      location: "Circa '21 Dinner Playhouse",
      character: "Jerry Lukowski",
      images: [
        {
          file: "FullMonty-01.jpg",
        },
      ],
    },
    {
      name: "Hank Williams: Lost Highway",
      character: "Hank Williams",
      location: "Post Playhouse",
      images: [
        {
          ignore: true,
          file: "HankWilliamsLostHighway-01.jpg",
        },
        {
          file: "HankWilliamsLostHighway-03.jpg",
        },
        {
          file: "HankWilliamsLostHighway-05.jpg",
        },
        {
          file: "HankWilliamsLostHighway-06.jpg",
        },
      ],
    },
    {
      name: "Nine to Five",
      location: "Post Playhouse",
      character: "Joe",
      images: [
        {
          file: "NineToFive-01.jpg",
        },
      ],
    },
    {
      name: "Smoke on the Mountain: Homecoming",
      location: "Wayside Theatre",
      character: "Rev. Oglethorpe",
      images: [
        {
          file: "SmokeOnTheMountainHomecoming-01.jpg",
          with: "Pam Pendleton, Jennie Malone, Steve Przybylski",
        },
        {
          file: "SmokeOnTheMountainHomecoming-02.jpg",
          with: "Pam Pendleton, Jennie Malone, Steve Przybylski",
        },
        {
          file: "SmokeOnTheMountainHomecoming-03.jpg",
        },
        {
          file: "SmokeOnTheMountainHomecoming-04.jpg",
          with: "Thomasin Saviano",
        },
      ],
    },
    {
      name: "The Sound of Music",
      location: "Post Playhouse",
      character: "Captain Von Trapp",
      images: [
        {
          file: "SoundOfMusic-04.jpg",
        },
      ],
    },
    {
      name: "The 25th Annual Putnam County Spelling Bee",
      location: "Wayside Theatre",
      character: "Assistant Principal Panch",
      images: [
        {
          file: "SpellingBee-01.jpg",
          with: "Thomasin Saviano",
        },
      ],
    },
    {
      name: "The Wizard of Oz",
      location: "Post Playhouse",
      character: "Tinman",
      images: [
        {
          file: "WizardOfOz-01.jpg",
          description: "If I Only Had a Heart",
          with: "Stephen Anthony, Em Laudeman",
        },
        {
          file: "WizardOfOz-02.jpg",
          with: "Stephen Anthony, Em Laudeman",
        },
        {
          file: "WizardOfOz-03.jpg",
        },
        {
          file: "WizardOfOz-04.jpg",
          with: "Em Laudeman as Dorothy",
        },
      ],
    },
  ]

  seededShuffle.setSeed(12)

  const photos = seededShuffle.shuffle(
    photoData
      .reduce<
        Array<{
          file: string
          description?: string
          name: string
          ignore?: boolean
          location?: string
          character?: string
          with?: string
        }>
      >((acc, curr) => {
        curr.images.forEach((image) => {
          const { name, location, character } = curr
          acc.push({ name, location, character, ...image })
        })
        return acc
      }, [])
      .filter((image) => !image.ignore),
  )
</script>

<div class="flex flex-wrap justify-between">
  {#each photos as photo}
    <div class="flex-auto sm:flex-shrink-0 m-2 text-center">
      <Img
        class="object-contain sm:h-80 m-auto"
        src="/img/shows/{photo.file}"
        alt="{photo.description}"
      />
      {#if photo.description} {@html photo.description}<br /> {/if}
      {#if photo.character}
        {@html photo.character} in
      {/if}
      {@html photo.name}
      {#if photo.with}<br />Also pictured: {@html photo.with} {/if}
    </div>
  {/each}
</div>
