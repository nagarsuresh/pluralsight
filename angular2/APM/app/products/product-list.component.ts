import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 40;
    imageMargin: number = 2;
    showImage: boolean = false;
    filterText: string = '';
    errorMessage: string;


    constructor(private _productService: ProductService) {
    }

    products: IProduct[] = [];


    toggleImage(): void {
        this.showImage = !this.showImage;
    };

    ngOnInit(): void {
        console.log("Init");
        this._productService.getProducts().subscribe(products => this.products = products,
            error => this.errorMessage = <any>error);
    };

    starClicked(rating: string): void {
        alert("You Clicked Star which has Rating = " + rating);
    }

}