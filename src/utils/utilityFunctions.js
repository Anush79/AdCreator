

export const calculateTotal=(array, property)=>{
return  array.reduce((acc, curr)=>acc+curr[property],0)
}

