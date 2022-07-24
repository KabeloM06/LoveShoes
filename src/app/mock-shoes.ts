import { Product } from './core/product';
import { Size } from './core/size';

export const PRODUCTS: Product[]= [
    {
        id: 1,
        name: 'Shoe',
        imageUrls: [
            '../assets/shoes/Lace-up-Sneakers-BLACK-505479330.jpg', 
            '../assets/shoes/Lace-up-Sneakers-WHITE-505479330.jpg', 
            '../assets/shoes/Lace-up-Sneakers-NAVY-505479330.jpg'
        ],
        price: 200,
        designs: [
            {colour: 'BLACK'},
            {colour: 'WHITE'},
            {colour: 'NAVY'}
        ],
        sizes: [Size.EIGHT, Size.NINE, Size.TEN, Size.ELEVEN]
    },
    {
        id: 2,
        name: 'Flops',
        imageUrls: [
            '../assets/flops/Flip-Flops-BLACK-506214512jpg', 
            '../assets/flops/Flip-Flops-KHAKI-506214512.jpg', 
            '../assets/flops/Flip-Flops-NAVY-506214512.jpg'
        ],
        price: 100,
        designs: [
            {colour: 'BLACK'},
            {colour: 'KHAKI'},
            {colour: 'NAVY'}
        ],
        sizes: [Size.EIGHT, Size.NINE, Size.TEN, Size.ELEVEN]
    }
]