class CarFactrt {
    constructor(title, color) {
        this.title = title
        this.color = color
        this.numPlate = CarFactrt.numPlate()
    }

    horn() {
        console.log(this.title, "blwing horn")
    }

    static numPlate() {
        return Math.floor(1000 + (Math.random() * 1000))
    }
}


let car1 = new CarFactrt("hyundai" , "blue")
console.log(car1)
car1.horn()


