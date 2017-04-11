import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  public ngOnInit() {
    $(document).ready(function () {
      $('.slider').slider();
    });
  }
}
