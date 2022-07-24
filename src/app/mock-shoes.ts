import { Design } from './core/design';
import { Size } from './core/size';

export const Designs: Design[]= [
    {
        id: 1,
        name: 'Shoe',
        imageUrls: [
            '../assets/shoes/Lace-up-Sneakers-BLACK-505479330.jpg', 
            '../assets/shoes/Lace-up-Sneakers-WHITE-505479330.jpg', 
            '../assets/shoes/Lace-up-Sneakers-NAVY-505479330.jpg'
        ],
        price: 200,
        colours: [
            {name: 'BLACK'},
            {name: 'WHITE'},
            {name: 'NAVY'}
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
        colours: [
            {name: 'BLACK'},
            {name: 'KHAKI'},
            {name: 'NAVY'}
        ],
        sizes: [Size.EIGHT, Size.NINE, Size.TEN, Size.ELEVEN]
    }
]