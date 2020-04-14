
  new Vue({
    el: '#desafio',
    data: {
      name: 'Fabio',
      age: 46
    },
    methods :  {
        calculaAge() {
          return this.age * 3
        },
        random() {
          return Math.random()
        },
        showImage() {
          return 'http://files.cod3r.com.br/curso-vue/vue.jpg'
        }
      }
  })

