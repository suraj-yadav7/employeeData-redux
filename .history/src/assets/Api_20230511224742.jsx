import Chance from "chance"

const chance = Chance();

 export const fakeUserData  = ()=>{
    // console.log("the api data", chance.first())
    return chance.first()
}
