window.onload=function () {
    var list=new Vue({
        el:".list",
        data:{
            state:"all",
            addnew:"",
            all:localStorage.list?JSON.parse(localStorage.list):[],
            done:[],
            un:[]
        },
        methods:{
            addlist(){
                let obj={
                    state:1,
                    con:this.addnew,
                    id:this.getid()
                };
                this.all.push(obj);
                localStorage.list=JSON.stringify(this.all);
            },
            getid(){
                let id=0;
                console.log(this.all.length);
                if(this.all.length==0){
                    id=1;
                }else{

                    id=this.all[this.all.length-1].id+1;
                }
                return id;
            },
            changeState(str){
                this.state=str;
            },
            del(id){
                this.all=this.all.filter(function (a) {
                    return a.id!=id;
                })
                localStorage.list=JSON.stringify(this.all);
            },
            bian(id,state){
                if(state==1){
                    for(var i=0;i<this.all.length;i++){
                        let arr=this.all[i];
                        if(arr.id==id){
                            this.all[i].state=2;
                            break;
                        }
                    }
                }
                else if(state==2){
                    for(var i=0;i<this.all.length;i++){
                        let arr=this.all[i];
                        if(arr.id==id){
                            this.all[i].state=1;
                            break;
                        }
                    }
                }
                localStorage.list=JSON.stringify(this.all);
            }
        },
        computed:{
            doneFun:function () {
                this.done=this.all.filter(function (a,b,c) {
                    return a.state==2;
                });
                this.un=this.all.filter(function (a,b,c) {
                    return a.state==1;
                });
            }
        }
    })
};
