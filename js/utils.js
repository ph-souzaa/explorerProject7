export function notANumber(value){
    return isNaN(value) || value == "";
}

export function calculateIMC (w,h){
    return (w / ((h /100) ** 2)).toFixed(2);
}