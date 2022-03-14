const MyNameApp = {
    data() {
      return {
        name: "Lucas de Souza Simões Lisboa",
        age: 22,
        motivation: "Estou testando a framework Vue.js, adquirindo novos conhecimentos"
      }
    }
  }
  
  Vue.createApp(MyNameApp).mount('#app')