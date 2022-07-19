<template>
  <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
    <div
      class="bg-cover h-64 text-center overflow-hidden"
      title="Woman holding a mug"
    >
      <img :src="blog?.social_image" class="h-auto w-full" />
    </div>
    <div class="max-w-2xl mx-auto">
      <div
        class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"
      >
        <div class="">
          <a
            href="#"
            v-for="(tag, index) in blog.tag_list"
            v-bind:key="index"
            class="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            {{ tag }},
          </a>

          <h1 href="#" class="text-gray-900 font-bold text-3xl mb-2">
            {{ blog?.title }}
          </h1>
          <p class="text-gray-700 text-xs mt-2">
            Written By:
            <a
              :href="blog.user.website_url"
              target="_blank"
              class="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
            >
              {{ blog?.user?.name }}
            </a>
          </p>

          <p class="text-base leading-8 my-5" v-html="blogData.body_html"></p>

          <a
            href="#"
            v-for="(tag, index) in blog.tag_list"
            v-bind:key="index"
            class="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
          >
            {{ tag }},
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "BlogSingleVue",
  setup() {
    const store = useStore();
    const route = useRoute();

    const blog = computed(() => {
      const { id } = route.params;
      return store.getters.blog(id);
    });
    const blogData = computed(() => store.getters.blogData);
    // const participants = computed(() => store.getters.participantsList);

    return {
      blog,
      blogData,
    };
  },
  mounted() {
    const store = useStore();
    const id = this.blog.id;
    store.dispatch("getBlog", { id });
  },
};
</script>
<style lang=""></style>
