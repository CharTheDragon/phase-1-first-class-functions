function receivesAFunction(doesAThing) {
    doesAThing()
}

function returnsANamedFunction() {
    return function blank(){
        console.log('yes')
    }
}

function returnsAnAnonymousFunction() {
    return function(){}
}