const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title : "Air Force",
        price : 119,
        colors : [
            {
                code: "black",
                img:"./img/Product/air.png",
                productDesc: "The Air Force 1 was created by designer Bruce Kilgore and was the first basketball shoe to use the Nike Air technology.",


            },
            {
                code: "darkblue",
                img:"./img/Product/air2.png",
                productDesc: "The Air Force 1 was created by designer Bruce Kilgore and was the first basketball shoe to use the Nike Air technology.",
            }
        ]
    },
    {
        id: 2,
        title : "Air Jordan",
        price : 149,
        colors : [
            {
                code: "lightgray",
                img:"./img/Product/jordan.png",
                productDesc: "Launched in 1984 for basketball legend Michael Jordan, the Air Jordan line broke the mold with its game-changing style and performance.",


            },
            {
                code: "green",
                img:"./img/Product/jordan2.png",
                productDesc: "Launched in 1984 for basketball legend Michael Jordan, the Air Jordan line broke the mold with its game-changing style and performance.",


            },
        ],
    },
    
    {
        id: 3,
        title : "Blazer",
        price : 109,
        colors : [
            {
                code: "lightgray",
                img:"./img/Product/blazer.png",
                productDesc: "Originally released in 1973, the Nike Blazer brought a clean, classic design to the court and quickly became a staple on and off the hardwood.",

            },
            {
                code: "green",
                img:"./img/Product/blazer2.png",
                productDesc: "Originally released in 1973, the Nike Blazer brought a clean, classic design to the court and quickly became a staple on and off the hardwood.",

            },
        ],
    },
    {
        id: 4,
        title : "Crater",
        price : 129,
        colors : [
            {
                code: "black",
                img:"./img/Product/crater.png",
                productDesc: "Nike Crater sneakers merge forward-thinking design with eco-conscious materials, built using recycled content for a lighter footprint.",

            },
            {
                code: "lightgray",
                img:"./img/Product/crater2.png",
                prodcutDesc: "Nike Crater sneakers merge forward-thinking design with eco-conscious materials, built using recycled content for a lighter footprint.",

            },
        ],
    },
    {
        id: 5,
        title : "Hippie",
        price : 99,
        colors : [
            {
                code: "gray",
                img:"./img/Product/hippie.png",
                productDesc: "The Space Hippie series reimagines footwear with an out-of-this-world aesthetic, made almost entirely from reclaimed waste.",

            },
            {
                code: "black",
                img:"./img/Product/hippie2.png",
                productDesc: "The Space Hippie series reimagines footwear with an out-of-this-world aesthetic, made almost entirely from reclaimed waste.",


            },
        ],
    },
    {
        id: 6,
        title : "Airmax",
        price : 199,
        colors : [
            {
                code: "red",
                img:"./img/Product/airmax.png",
                productDesc: "First seen in 1987, the Air Max introduced sneakerheads to visible Air cushioning, blending innovation with street-ready appeal.",

            },
            {
                code: "white=",
                img:"./img/Product/airmax2.png",
                productDesc: "First seen in 1987, the Air Max introduced sneakerheads to visible Air cushioning, blending innovation with street-ready appeal.",


            },
        ],
    },
];

let choosenProduct = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDesc = document.querySelector(".productDesc");

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //change the current slide
        wrapper.style.transform =`translateX(${-100*index}vw)`;
        //change the choosen product
        choosenProduct = products[index];

        //change text of current products
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "RM" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;
        currentProductDesc.textContent = choosenProduct.colors[0].productDesc;

        //assign new colors
        currentProductColors.forEach((color,index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color,index) => {
    color.addEventListener("click",()=>{
            currentProductImg.src = choosenProduct.colors[index].img;
            currentProductDesc.textContent = choosenProduct.colors[index].productDesc;
    });
});

currentProductSizes.forEach((size,index) => {
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});
//payment
const productButton = document.querySelector(".productbutton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display = "flex";
});
close.addEventListener("click",()=>{
    payment.style.display = "none";
});

    

    

