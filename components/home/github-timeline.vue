<template>
  <div class="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4 text-gray-800">GitHub Contributions</h2>
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <li
        v-for="(contribution, index) in contributions"
        :key="index"
        class="mb-10 ml-6"
      >
        <span
          class="absolute flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full -left-3 ring-4 ring-white"
        >
          <svg
            class="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-11.293a1 1 0 00-1.414-1.414L10 7.586 7.707 5.293a1 1 0 10-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 101.414 1.414L10 12.414l2.293 2.293a1 1 0 101.414-1.414L11.414 10l2.293-2.293z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
        <div class="p-4 bg-gray-100 rounded-lg shadow">
          <h3 class="text-lg font-semibold text-gray-900">
            {{ contribution.repo }}
          </h3>
          <p class="text-sm text-gray-600">
            Commits: {{ contribution.commits }}
          </p>
          <time class="block text-sm text-gray-500">
            {{ formatDate(contribution.date) }}
          </time>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    contributions: {
      type: Array,
      required: true,
    },
  },
  methods: {
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString("id-ID", options);
    },
  },
};
</script>
