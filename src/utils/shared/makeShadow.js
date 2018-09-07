const makeShadow = (opacity = 0.2) => {
    return `
    box-shadow: 
    0px 1px 5px 0px rgba(0, 0, 0, ${opacity}), 
    0px 2px 2px 0px rgba(0, 0, 0, ${opacity - 0.06}), 
    0px 3px 1px -2px rgba(0, 0, 0, ${opacity - 0.08})
    `
}

export default makeShadow
