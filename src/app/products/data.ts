export interface Product{
    id: string;
    name: string;
    price: number;
    oldpriece: string;
    image: string;
    discount: string;
    sku: string;
    quantity?: string;
}

export const products: Product[] = [
    {
        id:"1",
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        oldpriece:"$160",
        discount:"-40%",
        image: "/images/pro-1.png",
        sku: "product-1",
        quantity: "1"
    },
    {
        id:"2",
        name: "AK-900 Wired Keyboard",
        price: 960,
        oldpriece:"$1160",
        discount:"-35%",
        image: "/images/pro-2.png",
        sku: "product-2"

    },
    {
        id:"3",
        name: "IPS LCD Gaming Monitor",
        price: 370,
        oldpriece:"$400",
        discount:"-30%",
        image: "/images/pro-3.png",
        sku: "product-3"

    },
    {
        id:"4",
        name: "S-Series Comfort Chair ",
        price: 375,
        oldpriece:"$400",
        discount:"-25%",
        image: "/images/pro-4.png",
        sku: "product-4"

    },
    {
        id:"5",
        name: "The north coat",
        price: 260,
        oldpriece:"$360",
        discount:"-40%",
        image: "/images/pro-5.png",
        sku: "product-5"

    },
    {
        id:"6",
        name: "Gucci duffle bag",
        price: 960,
        oldpriece:"$1160",
        discount:"-40%",
        image: "/images/pro-6.png",
        sku: "product-6"

    },
    {
        id:"7",
        name: "RGB liquid CPU Cooler",
        price: 160,
        oldpriece:"$170",
        discount:"-40%",
        image: "/images/pro-7.png",
        sku: "product-7"

    },
    {
        id:"8",
        name: "Small BookShelf",
        price: 360,
        oldpriece:"$200",
        discount:"-40%",
        image: "/images/pro-8.png",
        sku: "product-8"

    },
    {
        id:"9",
        name: "Breed Dry Dog Food",
        price: 100,
        oldpriece:"$200",
        discount:"-40%",
        image: "/images/pro-9.jpeg",
        sku: "product-9"

    },
    {
        id:"10",
        name: "CANON EOS DSLR Camera",
        price: 360,
        oldpriece:"$200",
        discount:"-40%",
        image: "/images/pro-10.png",
        sku: "product-10"

    },
    {
        id:"11",
        name: "ASUS FHD Gaming Laptop",
        price: 700,
        oldpriece:"$200",
        discount:"-40%",
        image: "/images/pro-11.png",
        sku: "product-11"

    },
    {
        id:"12",
        name: "Curology Product Set",
        price: 500,
        oldpriece:"$200",
        discount:"-40%",
        image: "/images/pro-12.png",
        sku: "product-12"

    },
    {
        id:"13",
        name: "Kids Electric Car",
        price: 960,
        oldpriece:"$200",
        discount:"-40%",
        image: "/images/pro-13.png",
        sku: "product-13"

    },
    {
        id:"14",
        name: "Jr.Zoom Soccer Cleats",
        price: 1160,
        oldpriece:"$200",
        discount:"-40%",
        image: "/images/pro-14.png",
        sku: "product-14"

    },
    {
        id:"15",
        name: "GP11 Shooter USB Gamepad",
        price: 660,
        oldpriece:"$200",
        discount:"-40%",
        image: "/images/pro-15.png",
        sku: "product-15"

    },
    {
        id:"16",
        name: "Quilted Satin Jacket",
        price: 660,
        oldpriece:"$200",
        discount:"-40%",
        image: "/images/pro-16.png",
        sku: "product-16"

    },
]