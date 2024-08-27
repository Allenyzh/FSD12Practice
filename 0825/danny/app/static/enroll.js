const { createApp } = Vue;

const EnrollApp = {
  data() {
    return {
      enroll: {
        naem: "",
        email: "",
      },
    };
  },
  async created() {
    await this.getEnrolls();
  },
  methods: {
    async createEnroll() {
      const response = await fetch(windows.location, {
        methos: "POST",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ enroll: this.enroll }),
      });

      this.enrolls = await response.json();
    },
  },
  delimiters: ["{", "}"],
};

createApp(EnrollApp).mount("#app");
