import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavService } from '@app/core/services/nav.service';
import { faBars, faFingerprint } from '@fortawesome/free-solid-svg-icons';
import { NavItem } from '@app/core/interfaces/nav-item';
import { TourService } from 'ngx-tour-md-menu';
import { Constants } from '@app/core/constants/constants';

// fingerprint 2 declaration
declare var Fingerprint2: any;

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  // icons for menu
  faBars = faBars;

  
  constructor(public navService: NavService, private tourService: TourService) { }

  ngOnInit() {

  }

  @ViewChild('appDrawer') appDrawer: ElementRef;

  navItems: NavItem[] = [
    {
      displayName: 'Dashboard',
      iconName: 'trending_up',
      children: [],
      route: "/dashboard"
    }
  ];

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }


}
