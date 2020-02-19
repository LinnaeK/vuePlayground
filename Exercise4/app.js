new Vue({
  el: '#exercise',
  data: {
    attachEffect: false,
    shape: 'square',
    size: "",
    isTrue: "",
    color: "",
    progress: 0,
    length: "10px"
  },
  methods: {
    startEffect: function() {
      let that = this 
      setInterval(()=>{
        that.attachEffect = that.attachEffect === "highlight" ? "shrink" : "highlight"
      }, 1000)
    },
    startProgress: function() {
      let that = this
      setInterval(()=>{
        if(that.progress<200){
          that.progress+=5
          that.length = progress+"px"
        }
      }, 1000)
    }
  }
});
