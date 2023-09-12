const getMarkedLS = () => {
    const storedMarked = localStorage.getItem('marked')
    if (storedMarked) {
        return JSON.parse(storedMarked)
    }
    return []
}

const saveLS = (cart) => {
    const string = JSON.stringify(cart)
    localStorage.setItem('marked', string)
}

const addLS = (id) => {
    const marked = getMarkedLS()
    marked.push(id)
    saveLS(marked)
}

export { addLS,getMarkedLS }