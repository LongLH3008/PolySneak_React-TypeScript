type att = {
    id: Number
    color: String
    stock: Number
    img: String
    sizes: Number[]
}

export default interface Products {
    id: Number
    name: String
    statusId: Number
    typeId: Number
    cost: Number | any
    discount: Number | any
    description: String
    thumbnail: String
    attribute: att[] | any[]
}
