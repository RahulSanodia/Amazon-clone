export const initialState = {
    authInfo:{},
    cartList: [],
    productList: [
        {
            title: 'Lenovo IdeaCentre A340 Touchscreen 23.8-inch Full HD IPS All-in-One Desktop (Intel Core i5-10210U/16GB/512GB SSD/Windows 11/MS Office 2021/HD 720p Camera/Wireless Keyboard & Mouse/Black), F0E800YMIN',
            price: '64490.00',
            rating: '3',
            imageURL: 'https://m.media-amazon.com/images/I/811zyFsMcoL._SX522_.jpg'
        },
        {
            title: 'Apple iPhone 14 Pro 128GB Space Black 15.54 cm (6.1-inch) Super Retina XDR display featuring Always-On and ProMotion.Dynamic Island, a magical new way to interact with iPhone 48MP Main camera for up to 4x greater resolution ',
            price: '129900.00',
            rating: '4',
            imageURL: 'https://m.media-amazon.com/images/I/31irWzsdLsL._SY445_SX342_QL70_FMwebp_.jpg'
        },
        {
            title: 'Sony WH-1000XM4 Industry Leading Wireless Noise Cancellation Over-Ear Bluetooth Headphones with Mic,30 Hrs Battery, Multi Point-Black Digital noise cancelling: Industry leading Active Noise Cancellation (ANC) lends a personalized',
            price: '24052.00',
            rating: '4',
            imageURL: 'https://m.media-amazon.com/images/I/51SKmu2G9FL._SL1500_.jpg'
        },
        {
            title: 'Sony Alpha ILCE-7M4 Full-Frame Hybrid Camera 33MP Interchangeable-Lens Mirrorless Camera Body (4K 60P Video Recording, Real-Time Eye AF for Humans, Birds, Animals) - Digital_Zoom, Black,',
            price: '213490.00',
            rating: '4',
            imageURL: 'https://m.media-amazon.com/images/I/71Etp9En7tL._SL1500_.jpg'
        },
        {
            title: 'Callas Wooden Wall Mounted Shelves with Hooks | Floor Rack | Organizer | Shelf for Kitchen Storage Boxes (3 Shelves | Color - Black | Material - MDF Wooden)',
            price: '999.00',
            rating: '4',
            imageURL: 'https://m.media-amazon.com/images/I/81YfKir-OES._SL1500_.jpg'
        },
        {
            title: 'Green Soul Beast Racing Edition Ergonomic Gaming Chair with Premium Fabric & PU Leather, Adjustable Neck & Lumbar Pillow, 3D Adjustable Armrests & Strong Nylon Base (Full Black)',
            price: '15690.00',
            rating: '',
            imageURL: 'https://m.media-amazon.com/images/I/61B-lGflsML._SL1500_.jpg'
        },
        {
            title: 'Bourge Mens Loire-z126 Running Shoes',
            price: '549',
            rating: '3',
            imageURL: 'https://m.media-amazon.com/images/I/71fC87DbLHL._UL1500_.jpg'
        },
        {
            title: 'Amazon Brand - Symbol Womens Regular Track Pants',
            price: '670',
            rating: '4',
            imageURL: 'https://m.media-amazon.com/images/I/71l6BP3euwL._UL1500_.jpg'
        },
        {
            title: 'Amazon Brand - Eden & Ivy Women T-Shirt & Shorts Set',
            price: '670',
            rating: '2',
            imageURL: 'https://m.media-amazon.com/images/I/815uoGdy7qL._UL1500_.jpg'
        },
        {
            title: 'boAt Bassheads 242 in Ear Wired Earphones with Mic(Active Black)',
            price: '499.00',
            rating: '4',
            imageURL: 'https://m.media-amazon.com/images/I/61+tzvHZi+L._SL1500_.jpg'
        },
        {
            title: 'boAt Bassheads 242 in Ear Wired Earphones with Mic(Active Black)',
            price: '499.00',
            rating: '4',
            imageURL: 'https://m.media-amazon.com/images/I/61+tzvHZi+L._SL1500_.jpg'
        },
        {
            title: 'Acer Nitro 5 Gaming Laptop Intel Core i5-11400H 11th Gen Processor (16GB/512GB SSD/ NVIDIA GeForce GTX 1650 4GB',
            price: '59990.00',
            rating: '4',
            imageURL: 'https://m.media-amazon.com/images/I/81yZryzNh8L._SL1500_.jpg'
        },

    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return { 
          ...state, 
          cartList:[...state.cartList, action.payload]
        };
      case 'REMOVE_FROM_CART':
        return { 
          ...state, 
          cartList: state.cartList.filter(item => item.id !== action.payload)
        };
      case 'SIGN_IN':
        return{
          ...state,
          authInfo:action.payload
        }
      default:
        return state;
    }
  }