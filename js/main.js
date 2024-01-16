let eventBus = new Vue()



Vue.component("board", {
    template: `
    
<div class="board">

<ul id="columns">
<li class="column">
<div class="form">
<form @submit.prevent="onSubmit">
<label for="name">Заголовок</label> <input type="text" id="name" v-model="name"> 

<label for="point1">Пункт1</label> <input type="text" id="point1" v-model="point1"> 
<label for="point2">Пункт2</label> <input type="text" id="point2" v-model="point2"> 
<label for="point3">Пункт3</label> <input type="text" id="point3" v-model="point3"> 
<label for="point4">Пункт4</label> <input type="text" id="point4" v-model="point4"> 
<label for="point5">Пункт5</label> <input type="text" id="point5" v-model="point5"> 

<button type="submit" value="Submit">Создать</button>


</form>

<ul>
<li class="error "v-for="error in errors">{{error}}</li>
</ul>
</div>
<ul class="cards">
<li v-for="card in column1"><card :name="name" :points="points"></card></li>
</ul>
</li>


<li class="column"><card></card></li>



<li class="column">qeqw</li>


</ul>
</div>
    `,
    data() {
        return{
            column1:[],
            column2:[],
            column3:[],

            cards:[],

            name:null,
            point1:null,
            point2:null,
            point3:null,
            point4:null,
            point5:null,
            
            points:[],

            errors:[],

        }
    },
    methods:{
        onSubmit(){
            this.errors=[]
            this.points=[]
            if(this.point1){
                this.points.push(this.point1)
            }
            if(this.point2){
                this.points.push(this.point2)
            }
            if(this.point3){
                this.points.push(this.point3)
            }
            if(this.point4){
                this.points.push(this.point4)
            }
            if(this.point5){
                this.points.push(this.point5)
            }
            
            if(this.points.length < 3){
                this.errors.push("Должно быть заполнено от 3 пунктов")
            }
            if(!this.name){
                this.errors.push("Не введён заголовок")
            }
            if(this.errors.length==0){
                let info = {
                    name:this.name,
                    points:this.points
                }
                
                this.column1.push(info)
                console.log(this.column1)
                // eventBus.$emit('create-card', info)
            }



        }
    }
});

Vue.component("card", {
    template: `
<div class="card">
<h3>{{name}}</h3>
<ul>
<li v-for="point in points">{{point}}</li>
</ul>
</div>
    `,
    data() {
        return{
            
        }
    },
    mounted() {
        // eventBus.$on('create-card', info=> {

        //     this.name = info.name
        //     this.points.push(info.points)
        //     console.log(this.points)

        // })


    },
    props:{
        name:{
            type:String,
            required:false,
        },
        points:{
            type:Array,
            required:false,
        }
    }
});



Vue.component("task", {
    template: `
<div class="column">task</div>
    `,
    data() {
        return{
            name:null,
            done:false,
            
        }
    }
});




let app = new Vue({
    el: "#app",
    data: {
    },
    methods: {

    },
});