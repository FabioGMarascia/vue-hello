const { createApp } = Vue;

createApp({
	data() {
		return {
			message: "Hello from class #125 Vue!",
			myH1Style: `text-center fw-bold text-warning mt-4 display-3`,
			myImg: `./img/one.png`,
			myImgStyle: `d-block mx-auto w-50 border border-5 rounded`,
			blue: `text-primary`,
		};
	},
}).mount("#app");
