import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/core/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product | undefined;
  imageUrl: string = "";

  constructor() { }

  ngOnInit(): void {
    this.imageUrl = this.product?.imageUrls[0] ?? '';
  }

}
