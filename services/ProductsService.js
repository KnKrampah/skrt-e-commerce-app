
const PRODUCTS = [
    {
        id: 100,
        name: 'Amazon Echo Dot',
        price: 39,
        image: require('../assets/products/Amazon Echo.jpg'), 
        description: 'Expand or start a new Alexa ecosystem in your house with the charcoal 4th-generation Amazon Echo Dot. It is equipped with Bluetooth and Wi-Fi connectivity, and the onboard Amazon Alexa voice assistant enables a slew of voice control features, including weather and traffic updates, music playback, and more. Audio is output via the 1.6" full-range driver, or you can send sound to a pair of powered speakers with the 1/8" output.'
        
    },
    {
        id: 101,
        name: 'DJI Mavic Pro',
        price: 1600,
        image: require('../assets/products/Drone.jpg'),
        description: 'DJI Mavic Pro offers up to 4.3 miles (7km) of transmission range - Fly at up to 40mph (64kmh) or for as long as 27-minutes - True 4K, fully stabilized ensures smooth footage - Fly by Phone over Wi-Fi for even easier flight'
    },    
    {
        id: 102,
        name: 'Nike Benassi Slides',
        price: 61,
        image: require('../assets/products/NikeSlides.jpg'),
        description: "Women's Nike Benassi Jdi Print Fp Sandals",
        size: '43,44,45'
    },
    {
        id: 103,
        name: 'Nike Air Force 1',
        price: 150,
        image: require ('../assets/products/AF1.jpg'),
        description: 'Nike Air Force 1 2007 trainers.'
       
    },    
    {
        id: 104,
        name: 'Intense Wood Perfume Spray',
        price: 24.59,
        image: require ('../assets/products/IntenseWood.jpg'),
        description: 'Feel the woody scent of Intense Wood, best selected materials, properly blended together to give it an outstanding fragrance. Usable by men and women.'
       
    },    
    {
        id: 105,
        name: 'Dove Nourishing Secrets',
        price: 3.61,
        image: require ('../assets/products/DoveLotion.jpg'),
        description: 'For uplifting, moisturizing care, turn to Dove Nourishing Secrets Invigorating Body Lotion with avocado and calendula extract. It’s inspired by the beauty skin rituals of real women in Central America, who have used both avocado and calendula for their skin revitalizing properties for years.'
       
    }, 
    {
        id: 106,
        name: 'Philips Classic Dry Iron',
        price: 150,
        image: require ('../assets/products/Iron.jpg'),
        description: 'This iconic Philips iron helps to speed up your ironing.'
    },      
    {
        id: 107,
        name: 'Spalding Basketball',
        price: 150,
        image: require ('../assets/products/basketball.jpg'),
        description: 'The Spalding NBA basketball is a great ball for all weather conditions and can be played with indoor or outdoor, made with composite leather material which provides excellent durability and feel'
       
    },   
    {
        id: 108,
        name: 'EMPORIO ARMANI Jersey sweatshirt' ,
        price: 245,
        image: require ('../assets/products/sweatshirt.jpg'),
        description: 'A casual garment for leisure time and a glamorous accessory for a variety of occasions: a sweatshirt is the must-have item for every modern wardrobe. This basic yet stylish item can be easily teamed with any bottoms. Cursive logo embroidery on the chest completes the style.'
        
    },            
    

];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}