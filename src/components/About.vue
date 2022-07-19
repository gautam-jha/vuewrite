<template lang="">
   <section>
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
    <div class="max-w-3xl">
      <h2 class="text-3xl font-bold sm:text-4xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod alias
        doloribus impedit.
      </h2>
    </div>

    <div class="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-2">
      <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
        <img
          class="absolute inset-0 object-cover w-full h-full"
          src="https://www.hyperui.dev/photos/man-1.jpeg"
          alt="Man using a computer"
        />
      </div>

      <div class="lg:py-16">
        <article class="space-y-4 text-gray-600">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
            hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
            minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            explicabo quidem voluptatum voluptas illo accusantium ipsam quis,
            vel mollitia? Vel provident culpa dignissimos possimus, perferendis
            consectetur odit accusantium dolorem amet voluptates aliquid,
            ducimus tempore incidunt quas. Veritatis molestias tempora
            distinctio voluptates sint! Itaque quasi corrupti, sequi quo odit
            illum impedit!
          </p>
        </article>
      </div>
    </div>
  </div>
</section>

<aside class="bg-gray-50">
  <div class="p-8 md:p-12 lg:px-16 lg:py-24">
    <div class="max-w-lg mx-auto text-center">
      <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit
      </h2>

      <p class="hidden text-gray-500 sm:mt-4 sm:block">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor
        officia blanditiis repellat in, vero, aperiam porro ipsum laboriosam
        consequuntur exercitationem incidunt tempora nisi?
      </p>
    </div>

    <div class="max-w-xl mx-auto mt-8">
      <form action="#" class="sm:gap-4 sm:flex">
        <div class="sm:flex-1">
          <label for="email" class="sr-only">Email</label>

          <input
            type="email"
            placeholder="Email address"
            class="w-full p-3 text-gray-700 transition bg-white border-gray-200 rounded-md shadow-sm focus:ring focus:outline-none focus:ring-yellow-400 focus:border-white"
          />
        </div>

        <button
          type="submit"
          class="flex items-center justify-center w-full px-5 py-3 mt-4 text-white transition rounded-md bg-rose-600 sm:mt-0 sm:w-auto group focus:outline-none focus:ring focus:ring-yellow-400"
        >
          <span class="text-sm font-medium"> Sign Up </span>

          <svg
            class="w-5 h-5 ml-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </form>
    </div>
  </div>
</aside>
</template>
<script>
export default {
    name: "AboutMe",
};
</script>
<style lang="">
</style>