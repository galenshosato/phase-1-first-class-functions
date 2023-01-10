
function Tuesday() {
    console.log("Check vault")
}

function receivesAFunction(Tuesday) {
    Tuesday()
}

function returnsANamedFunction() {
    receivesAFunction(Tuesday)
    
    return function funtimes() {
        console.log("Brag to Josh")
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("anon")
    }
}

