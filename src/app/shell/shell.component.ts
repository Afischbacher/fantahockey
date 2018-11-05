import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavService } from '@app/core/services/nav.service';
import { NavItem } from '@app/core/interfaces/nav-item';
import { TourService } from 'ngx-tour-md-menu';
import { Constants } from '@app/core/constants/constants';


@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(public navService: NavService, private tourService: TourService) { }

  ngOnInit(): void {
    this.initializeTour();
  }

  initializeTour(): void {

    if (localStorage.getItem(Constants.initalizedTour) === null) {
      this.tourService.initialize([{
        anchorId: 'tour1',
        content: 'Welcome to the NHL fantasy trade tool!',
        title: 'Welcome!',
        route: '/dashboard',
        enableBackdrop: true
      }, {
        anchorId: 'tour2',
        content: "Use the menu to check out more features of the tool (it's a work in progress..)",
        title: 'The Menu',
        route: '/dashboard',
        enableBackdrop: true
      }, {
        anchorId: 'tour3',
        content: 'Search for any active NHL player to see the latest stats for the current season',
        title: 'Search Players',
        route: '/dashboard',
        enableBackdrop: true
      },
      {
        anchorId: 'tour4',
        content: "Craft trades and watch the fantasy score points to help you make the best trade possible",
        title: 'Fantasy Scores',
        route: '/dashboard',
        enableBackdrop: true
      },
      {
        anchorId: 'tour7',
        content: "Configure your fantasy leauge settings here for both players and goalies based on your fantasy leauge",
        title: 'Fantasy Configuration',
        route: '/settings',
        enableBackdrop: true
      }]);


      this.tourService.start();

      localStorage.setItem(Constants.initalizedTour, "true");

    }

  }
  @ViewChild('appDrawer') appDrawer: ElementRef;

  navItems: NavItem[] = [
    {
      displayName: 'Dashboard',
      iconName: 'trending_up',
      children: [],
      route: "/dashboard"
    },
    {
      displayName: 'Settings',
      iconName: 'settings',
      children: [],
      route: "/settings"
    },
    {
      displayName: 'Information',
      iconName: 'info',
      children: [],
      route: "/about"
    }
  ];

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

}
