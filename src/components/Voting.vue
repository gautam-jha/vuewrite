<template>
  <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div class="max-w-lg mx-auto">
      <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
        {{ poll?.title }}
      </h1>

      <p class="max-w-md mx-auto mt-4 text-center text-gray-500">
        {{ poll?.description }}
      </p>

      <form
        v-if="participants.length >= 2"
        class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl text-center"
      >
        <p>List of participant:</p>

        <div v-for="participant in participants" v-bind:key="participant">
          <div class="relative mt-1">
            <label class="text-sm font-medium">
              <input
                name="participant"
                type="radio"
                v-bind:value="participant.id"
                required
              />
              {{ participant.name }}
            </label>
          </div>
        </div>

        <button
          type="submit"
          class="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
        >
          Vote
        </button>
      </form>
      <h4 class="text-xl text-center" v-else>
        At least 2 participants are required to vote.
      </h4>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  name: "PollingPage",
  setup() {
    const store = useStore();
    const route = useRoute();

    // get the params from the router vue3

    const poll = computed(() => {
      const { params } = route;
      return store.getters.poll(params.id);
    });
    const participants = computed(() => store.getters.participantsList);
    return {
      poll,
      participants,
    };
  },
  mounted() {
    const store = useStore();
    const route = useRoute();
    const { params } = route;
    store.dispatch("getParticipants", { id: params.id });
  },
};
</script>
<style lang=""></style>
