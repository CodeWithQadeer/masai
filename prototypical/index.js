// function Animal(name, isNOctonal,legs){
//     this.name= name
//     this.isNOctonal= isNOctonal
//     this.legs= legs
// }

// Animal.prototype.speak=function(){
//     console.log(`${this.name}, says, hello`)
// }

// function Birds(name, isNOctonal, legs, canFly){
//     let obj= new Animal(name, isNOctonal, legs)
//     obj.canFly = canFly
//     return obj
// }

// let bird1= new Birds("sparrow", false, 1, true)
// console.log(bird1)
// bird1.speak()



class Bank{
    #pin
    constructor(name,adhar,pin){
        this.name=name
        this.adhar=adhar
        this.#pin=pin
    }
}

let account1= new Bank("qadeer", "WEJ34542",4436)
console.log(account1)
