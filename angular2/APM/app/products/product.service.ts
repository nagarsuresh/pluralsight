import {Injectable} from '@angular/core';
import {IProduct} from './product';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductService {
    private _productUrl: string = "api/products/products.json";

    constructor(private _http: Http) {
    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]>response.json()).do(data => console.log(JSON.stringify(data)));
    };

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts().map((products: IProduct[]) => products.find(p => p.productId === id));

    }




}