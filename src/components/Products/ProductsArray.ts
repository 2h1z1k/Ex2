export type Product = {
    id:number
    name: string
    description: string
    price: number
    valuta:string
}

const productsArray: Product[] = [
    {
        id:1,
        name:"iPhone 12",
        description:"This is iPhone 12",
        price: 750,
        valuta:"USD",
    },
    {
        id:2,
        name:"iPhone 8",
        description:"This is iPhone 8",
        price: 850,
        valuta:"USD",
    },
    {
        id:3,
        name:"iPhone X",
        description:"This is iPhone X",
        price: 1250,
        valuta:"USD",
    }
]

export const getProductsObject = (array:Product[]) => array.reduce((object,product) => ({
    ...object,
    [product.id]: product
}), {})



export default productsArray