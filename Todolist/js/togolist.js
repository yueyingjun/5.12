window.onload=function () {
    new Vue({
        el:".todolist",
        data:{
            text:"",
            arr:[],
            done:[],
            undo:[],
            state:"all"
        },
        methods:{
            add(){

                var obj={
                    id:Math.random()+new Date().getTime(),
                    con:this.text,
                    state:1
                }
                this.text="";
                this.arr.push(obj);
                this.undo.push(obj);
            },
            del(id,state){
                if(state==1){

                    this.arr=this.arr.filter(function(a){
                        return a.id!=id;
                    });

                    this.undo=this.undo.filter(function(a){
                        return a.id!=id;
                    });
                }else{
                    this.arr=this.arr.filter(function(a){
                        return a.id!=id;
                    });

                    this.done=this.done.filter(function(a){
                        return a.id!=id;
                    });
                }
            },

            change(id,state){
                if(state==1){

                    var obj=this.arr.filter(function(a){
                        return a.id==id
                    })[0];

                    obj.state=2;

                    this.done.push(obj);


                    this.undo=this.undo.filter(function(a){

                        return a.id!=id;
                    })

                }else if(state==2){
                    var obj=this.arr.filter(function(a){
                        return a.id==id
                    })[0];

                    obj.state=1;

                    this.done=this.done.filter(function(a){

                        return a.id!=id;
                    })

                    this.undo.push(obj);

                }
            },
            changeState(str){
                this.state=str;
            }
        }
    })
    $(".select li a").click(function () {
        $(".select li").children('a').removeClass("first").end().find($(this)).addClass("first");
    })
}
