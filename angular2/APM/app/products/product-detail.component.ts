import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {IProduct} from './product';
import { Subscription }       from 'rxjs/Subscription';
import {ProductService} from './product.service';

@Component({
    selector: 'pm-detail',
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetail implements OnInit, OnDestroy {
    pageTitle: string = "Product Details";
    product: IProduct;
    private sub: Subscription;
    errorMessage: string;

    constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {
        let id = route.params.forEach((params: Params) => {
            this.pageTitle += " For id " + params['id'];
        });
    }


    onBack(): void {
        this.router.navigate(['/products']);
    };

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
            }
        )

    }

    ngOnDestroy(): void {

    }

    getProduct(id: number): void {
        this.productService.getProduct(id).subscribe(product => this.product = product, error => this.errorMessage = <any>error)
    }


}