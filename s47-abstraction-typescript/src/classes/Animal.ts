abstract class Animal{
    noOfHearts:number=1;
    constructor(){
        console.log("Inside Constructor");
    }
    sleepingBehavior=()=>{
        console.log("Sleeps by closing eyes.")
    }
    abstract noOfEyes:number;
    abstract noOfLegs:number;
    abstract noOfNose:number;
    abstract noOfNTails:number;
    abstract eatingHabits():void;
    
}
export default Animal