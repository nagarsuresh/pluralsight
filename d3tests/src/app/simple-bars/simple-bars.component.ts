import { Component, OnInit, ElementRef } from '@angular/core';

import * as d3 from 'd3';


@Component({
  selector: 'simple-bars',
  templateUrl: './simple-bars.component.html',
  styleUrls: ['./simple-bars.component.css']
})
export class SimpleBarsComponent implements OnInit {

  private host: HTMLElement;
  private w = 300;
  private h = 200;
  private svg;
  private data = [30, 50, 110, 125, 180];


  constructor(private el: ElementRef) {
    this.host = el.nativeElement;
  }

  ngOnInit() {
    this.svg = d3.select(this.host)
      .append("svg")
      .attr("width", this.w)
      .attr("height", this.h);


    this.drawBars();
  }

  drawBars() {
    this.svg.selectAll("rect")
      .data(this.data).enter()
      .append("rect")
      .attr("x", (d, i) => i * (this.w / this.data.length))
      .attr("y", (d) => this.h - (d))
      .attr("width", this.w / this.data.length - 2)
      .attr("height", (d) => d );
  }

}



