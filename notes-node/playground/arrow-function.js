let square = (x) => x*x;

console.log(square(9));

let user={
    name:'Andrew',
    sayHi:()=>{
        console.log('Hi. Im '+this.name);
    },
    sayHiAlt(){
        console.log(arguments);
        console.log('Hi. Im '+this.name);
    }
    };


user.sayHiAlt(1,2,3);