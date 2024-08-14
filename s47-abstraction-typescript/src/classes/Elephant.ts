import Animal from "./Animal";

class Elephant extends Animal{
    noOfNTails: number=1;
    noOfEyes: number=2;
    noOfLegs: number=4;
    noOfNose: number=1;
    eatingHabits(): void {
        console.log("Elephant is Pure Vegetarian");
    }
    constructor(){
        super();
        console.log("Inside Elephant Constructor");
    }

}
export default Elephant;