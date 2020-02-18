new Vue({
        el: '#exercise',
        data: {
            value: '',
            value2: ''
        },
        methods: {
            alertMe: function(){
                alert('Im clicked')
        },
            storeValue: function(event){
                this.value = event.target.value
            },
            // enterStoreValue: function(){
            //     value = value
            // }
    }
    });