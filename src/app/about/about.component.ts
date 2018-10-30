import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(":enter", [
        style({ opacity: "0" }),
        animate('.3s ease-in', style({ opacity: "1" })),
      ]),
    ])
  ]
})
export class AboutComponent implements OnInit {

  version: string = environment.version;

  constructor() { }

  ngOnInit() { }

}
