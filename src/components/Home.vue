<template>
  <section class="bg-gray-50">
    <div
      class="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex"
    >
      <div class="max-w-xl mx-auto text-center">
        <h1 class="text-3xl font-extrabold sm:text-5xl">
          Online Voting App.
          <strong class="font-extrabold text-red-700 sm:block">
            Easy & Efficient Polling
          </strong>
        </h1>

        <p class="mt-4 sm:leading-relaxed sm:text-xl">
          Powered by Vue.js & AppWrite
        </p>

        <div class="flex flex-wrap justify-center gap-4 mt-8">
          <a
            class="block w-full px-12 py-3 text-sm font-medium text-white bg-red-600 rounded shadow sm:w-auto active:bg-red-500 hover:bg-red-700 focus:outline-none focus:ring"
            href="/get-started"
          >
            Get Started
          </a>

          <a
            class="block w-full px-12 py-3 text-sm font-medium text-red-600 rounded shadow sm:w-auto hover:text-red-700 active:text-red-500 focus:outline-none focus:ring"
            href="/about"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- Active polls -->
  <div class="p-10 bg-slate-100">
    <h2 class="text-4xl font-bold text-center mb-10">Active Polls</h2>
    <div class="flex gap-4">
      <a
        class="relative block p-8 border bg-white border-gray-100 shadow-xl rounded-xl w-1/4"
        v-for="poll in activePolls"
        v-bind:key="poll.id"
        v-bind:href="'/poll/' + poll.id"
      >
        <span
          class="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs"
        >
          4.3
        </span>

        <div class="mt-4 text-gray-500 sm:pr-8">
          <svg
            class="w-8 h-8 sm:w-10 sm:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            ></path>
          </svg>

          <h5 class="mt-4 text-xl font-bold text-gray-900">{{ poll.title }}</h5>

          <p class="hidden mt-2 text-sm sm:block">
            {{ poll.description }}
          </p>
        </div>
      </a>
    </div>
  </div>
  <!--  -->
  <aside
    class="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center bg-gray-50"
  >
    <div class="p-8 md:p-12 lg:px-16 lg:py-24">
      <div class="max-w-xl mx-auto text-center sm:text-left">
        <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">Features</h2>

        <p class="hidden text-gray-500 md:mt-4 md:block">
          This is an end to end voting app. It is a fully functional where user
          can create a poll, share among there peers and get real time results.
          <br />
          <br />
          This app is developed with following technologies:
        </p>

        <ul class="mt-4">
          <li>AppWrite</li>
          <li>Vue 3</li>
          <li>Vuex</li>
          <li>Chart.js</li>
        </ul>

        <div class="mt-4 md:mt-8">
          <a
            href="#"
            class="inline-block px-12 py-3 text-sm font-medium text-white transition rounded bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>

    <img
      alt="#"
      src="https://www.hyperui.dev/photos/women-2.jpeg"
      class="object-cover w-full h-full sm:h-[calc(100%_-_2rem)] md:h-[calc(100%_-_4rem)] sm:rounded-tl-[30px] md:rounded-tl-[60px] sm:self-end"
    />
  </aside>
</template>
<script>
export default {
  name: "HomePage",

  // setup() {
  //   const store = useStore();
  //   return {
  //     activePolls,
  //     playerList,
  //   };
  // },
};
</script>
<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

import { onMounted } from "vue";
const store = useStore();
const activePolls = computed(() => store.getters.pollList);
onMounted(() => {
  store.dispatch("getPolls");
});
</script>
