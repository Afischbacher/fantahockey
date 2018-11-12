import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { trigger, transition, style, animate } from '@angular/animations';
import { Version } from '@app/core/models/version';

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

  versions: Version[] = [
    {
      version: "1.0.0",
      description: "Initial release of application",
      icon: "code"
    }
  ]
  constructor() { }
  ngOnInit() { }

}
