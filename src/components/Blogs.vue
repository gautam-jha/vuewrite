<template>
  <h1 class="text-3xl font-extrabold sm:text-5xl text-center my-7">Blogs</h1>
  <div class="flex flex-row gap-6 max-w-screen-xl m-auto mb-10">
    <router-link
      :to="'/blog' + blog.path"
      class="block overflow-hidden rounded-2xl w-1/3"
      v-for="blog in blogList"
      :key="blog.id"
    >
      <div class="p-4 bg-gray-900">
        <div class="flex items-center">
          <img
            :src="blog.user.profile_image_90"
            class="h-8 w-8 object-cover pull-left rounded-full mr-2"
            alt="blog"
          />
          <div class="flex">
            <h5 class="text-sm text-white">{{ blog.user.name }}</h5>
            <p class="ml-1 text-xs text-gray-500">
              <span> @{{ blog.user.github_username }} </span>
              <span> &middot; </span>
              <span> {{ blog.readable_publish_date }} </span>
            </p>
          </div>
        </div>
        <h3 class="text-gray-300">{{ blog.title }}</h3>
      </div>

      <img class="object-cover w-full h-56" :src="blog.social_image" alt="" />
    </router-link>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "BlogVue",
  setup() {
    const store = useStore();

    const blogList = computed(() => store.getters.blogsList);
    // const participants = computed(() => store.getters.participantsList);

    return {
      blogList,
    };
  },
  mounted() {
    const store = useStore();

    store.dispatch("getBlogs");
  },
};
</script>
<style lang=""></style>
