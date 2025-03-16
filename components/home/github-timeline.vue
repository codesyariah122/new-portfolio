<template>
  <div class="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4 text-gray-800">GitHub Contributions</h2>
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
      <li
        v-for="(contribution, index) in paginatedContributions"
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
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm8 14H6V4h8v12zm-5-3h2v-3h2l-3-3-3 3h2v3zm-4 3a1 1 0 100-2 1 1 0 000 2z"
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
          <time class="block text-sm text-gray-500">{{
            formatDate(contribution.date)
          }}</time>
        </div>
      </li>
    </ol>

    <!-- Pagination Controls -->
    <div class="flex justify-center items-center mt-4 space-x-2">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
      >
        Prev
      </button>
      <span class="text-gray-700"
        >Page {{ currentPage }} of {{ totalPages }}</span
      >
      <button
        @click="nextPage"
        :disabled="currentPage >= totalPages"
        class="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
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
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 5, // Jumlah item per halaman
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.contributions.length / this.itemsPerPage);
    },
    paginatedContributions() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.contributions.slice(start, end);
    },
  },
  methods: {
    formatDate(dateString) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString("id-ID", options);
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
};
</script>
