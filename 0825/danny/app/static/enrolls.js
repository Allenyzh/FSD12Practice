const { createApp } = Vue;

const EnrollApp = {
  data() {
    return {
      enrolls: [],
      errors: {},
    };
  },
  async created() {
    await this.getEnrolls();
  },
  methods: {
    async getEnrolls() {
      const response = await fetch(window.location, {
        method: "GET",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      });

      this.enrolls = await response.json();
    },
  },
  delimiters: ["{", "}"],
};

createApp(EnrollApp).mount("#app");
