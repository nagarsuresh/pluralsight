import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    starWidth: number = 86;
    @Input() rating: number = 4;
    @Output() starClicked: EventEmitter<number> = new EventEmitter<number>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

    onClick(): void {
        this.starClicked.emit(this.rating);
    }
}