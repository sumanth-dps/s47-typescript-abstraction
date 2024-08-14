import Animal from "./Animal";

class Lion extends Animal{
    eatingHabits(): void {
        console.log("Lion is pure non-vegetarian and eats deers.");
    }
    noOfNTails: number=1;
    noOfEyes: number=2;
    noOfLegs: number=4;
    noOfNose: number=1;
    constructor(){
        super();
        console.log("Inside Lion Constructor");
    }
    
}
export default Lion;