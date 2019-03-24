import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavService } from '@app/core/services/nav.service';
import { NavItem } from '@app/core/interfaces/nav-item';
import { TourService } from 'ngx-tour-md-menu';
import { Constants } from '@app/core/constants/constants';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(public navService: NavService, private tourService: TourService) {
  }

  ngOnInit(): void {

    this.initializeTour();
  }

  initializeTour(): void {

    if (localStorage.getItem(Constants.initalizedTour) === null) {

      this.tourService.initialize(Constants.appTour);

      this.tourService.start();

      localStorage.setItem(Constants.initalizedTour, "true");

    }

  }
  @ViewChild('appDrawer') appDrawer: ElementRef;
  public sidenav: MatSidenav;

  navItems: NavItem[] = [
    {
      displayName: 'Dashboard',
      iconName: 'swap_vert',
      children: [],
      route: "/dashboard"
    },
    {
      displayName: 'NHL Scores',
      iconName: 'score',
      children: [],
      route: "/scores"
    },
    {
      displayName: 'Settings',
      iconName: 'settings',
      children: [],
      route: "/settings"
    },
    {
      displayName: 'About',
      iconName: 'info',
      children: [],
      route: "/about"
    }
  ];

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

}
