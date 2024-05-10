const { createApp } = Vue;

createApp({
	data() {
		return {
			message: "Hello from class #125 Vue!",
			myStile: `text-center fw-bold text-warning mt-5 display-3`,
		};
	},
}).mount("#app");
