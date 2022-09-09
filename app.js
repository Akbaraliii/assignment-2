// const app = Vue.createApp({
//   data() {
//     return {
//       name: 'OutPut',
//       enter: '',
//       go: '',
//     };
//   },
//   methods: {
//     showAlert() {
//       alert('Hello there');
//     },
//     showInput(event) {
//       this.name = event.target.value;
//     },
//     enterButton(event) {
//       this.enter = event.target.value;
//     },
//     confirmInput() {
//       this.go = this.enter;
//     },
//   },
// });

// app.mount('#assignment');

const app = Vue.createApp({
  data() {
    return {
      userInput: '',
    };
  },

  methods: {
    showAlert() {
      alert('It is working');
    },
    saveInput(event) {
      this.userInput = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.userInput;
    },
  },
});

app.mount('#assignment');
