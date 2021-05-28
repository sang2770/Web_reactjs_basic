import IMG from '../../../image/1.jpg'
import IMG_1 from '../../../image/4.jpg'
import IMG_2 from '../../../image/5.jpg'
import IMG_3 from '../../../image/6.jpg'

const data=[
    {
        id:0, 
        img:IMG,
        content:"Marketing Agency",
        title:"Lead Generation Specialist for Online Businesses ",
        context:" We help business owners increase their revenue",
        button:"Get Started",
    },
    {
        id:1, 
        img:IMG_1,
        content:"Instant Setup",
        title:"Extremely quick onboarding process",
        context:" Once you've joined, our team of specialist will reach out to you and get you set up in minutes.",
        button:"Learn More",
    },
    {
        id:2, 
        img:IMG_2,
        content:"Secure Database",
        title:"All your data is stored on our secure server ",
        context:" ou will never have to worry about your information getting leaked",
        button:"Sign Up Now",
    },
    {
        id:3, 
        img:IMG_3,
        content:"View Our Products",
        title:"Shop through our catalog of products",
        context:"We provide worldwide shipping to all countries. If there are any issues, just issue a refund and we will process your request",
        button:"Shop Now",
    }
    
]
console.log(data.length);
export default data;