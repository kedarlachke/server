// function sum(a,b){ return(a+b)}
// function modifyfun(func,a){return function(b){return func(a,b)}}
// const addfive=modifyfun(sum,6)
// console.log(addfive(3))


function func1(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

console.log(func1(1)(2)(3))



