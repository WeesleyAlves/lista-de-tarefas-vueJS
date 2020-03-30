Vue.component('item-list',{
    props: [
        'content',
        'id'
    ],
    template: '<li><p>{{ content }}</p><slot></slot></li>'
});

var app = new Vue({
    el:'#app',
    data: {
        titulo:'Pressione "ENTER" para adicionar',
        inputTarefa: '',
        tarefas: [
            // {isPendente: true, content: 'Tarefa 1'},
            // {isPendente: true, content: 'Tarefa 2'},
            // {isPendente: true, content: 'Tarefa 3'},
            // {isPendente: true, content: 'Tarefa 4'},
        ]
    },
    computed: {
        
    },
    methods: {
        adicionarTarefa : function () {
            var newTarefa = {
                isPendente: true,
                content: this.inputTarefa
            };
            this.tarefas.push(newTarefa);
            this.inputTarefa ='';
        },

        removerTarefa : function (id) {
            this.tarefas.splice(id, 1);
        },

        finalizar: function (id) {
            this.tarefas[id].isPendente = false;
        },

        teste : function (x) {
            alert(x);
        }
    }
});

