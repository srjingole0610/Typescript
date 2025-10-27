function process (val: unknown){
    if (typeof val === "string") {
        console.log(val.toUpperCase())
    } else if (typeof val === "number"){
        console.log(val.toFixed(2))
    } else if (typeof val === "boolean"){
        console.log(val.valueOf())
    }
    else {
        console.log("unknown type")
    }
}

process("hello")
process(123.456)
process(true)
process(null)
process(undefined)

