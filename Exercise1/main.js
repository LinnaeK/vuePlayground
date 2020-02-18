new Vue ({
    el: '#exercise',
    data: {
        name: 'Linnae',
        age: 32,
        image: 'https://www.pets4homes.co.uk/images/articles/5345/large/how-to-tell-if-your-puppy-is-tired-5ca8e08a54019.jpeg'
    },
    methods: {
        multiplyAge : function(){
            return this.age * 32
        },
        randomFloat : function (){
            return Math.random()
        }
    }
})