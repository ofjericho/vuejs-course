new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
           alert('Enter pressionado')
        },
        alterarValor() {
            this.valor = event.target.value
        }
    },
})