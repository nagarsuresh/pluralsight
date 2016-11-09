import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div class="container">
            <h1>{{pageTitle}}</h1>
            <pm-products></pm-products>
        </div>
    `
})
export class AppComponent {
    pageTitle: string = "My Product Application";
}
