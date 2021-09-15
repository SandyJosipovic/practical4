var prac1 = new Vue({
  el: '#prac-1',
  data: {
    todos: [{
        text: 'Finish all practicls'
      },
      {
        text: 'Submit to GitHub'
      },
      {
        text: 'Submit to Deakin'
      }
    ]
  }
})

new Vue({
  el: '#render',
  data: {
    message: 'Hello! Welcome. This is my declarative rednering'
  }
})

var show =new Vue({
	el:'#v-show',
	data:{
	a:true
},
	methods:{
		toggle(){
	this.a = !this.a
}
 }				 
})

var payment = new Vue({
  el: '#payment',
  data: {
    items: [
      { message: 'cash' },
      { message: 'card' }
    ]
  }
})