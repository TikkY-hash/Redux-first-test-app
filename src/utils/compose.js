const compose = (...funcs) => (component) => {
    return funcs.reduceRight((prevResult,value) => value(prevResult),component)
}

export default compose