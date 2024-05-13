const { createApp } = Vue;

createApp({
	data() {
		return {
			message: "Hello from class #125 Vue!",
			myH1Style: `text-center fw-bold text-warning mt-4 display-3`,
			myImg: `./img/one.png`,
			myImgStyle: `d-block mx-auto w-50 border border-5 rounded`,
			toggle: 0,
		};
	},
	methods: {
		changePath() {
			if (this.toggle == 0) {
				this.myImg = `./img/two.jpg`;
				this.toggle = 1;
			} else {
				this.toggle = 0;
				this.myImg = `./img/one.png`;
			}
		},
	},
}).mount("#app");
