const add=(a,b)=>{
    console.log(a+b);
}
const sub=(a,b)=>{
    console.log(a-b);
}

const mul=(a,b)=>{
    console.log(a*b);
}
const obj={
    Firstname:'Naveen_Anua',
    age:23,
    printDetails:function(){
        return `${this.Firstname}`
    }
}

module.exports={add,sub,mul,obj}
