import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavService } from '@app/core/services/nav.service';
import { TourService } from 'ngx-tour-md-menu';
import { Constants } from '@app/core/constants/constants';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {


  // icons for menu
  faBars = faBars;

  constructor(public navService: NavService, private tourService: TourService) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {

    this.navService.appDrawer = this.appDrawer;

    //   if(localStorage.getItem(Constants.initalizedTour) === null) 
    this.initializeTour();

  }

  async initializeTour() {

    this.tourService.initialize([{
      anchorId: 'tour1',
      content: 'Welcome to the NHL fantasy trade tool!',
      title: 'Welcome!',
      enableBackdrop: true
    }, {
      anchorId: 'tour2',
      content: "Use the menu to check out more features of the tool (it's a work in progress..)",
      title: 'The Menu',
      enableBackdrop: true
    }, {
      anchorId: 'tour3',
      content: 'Search for any active NHL player to see the latest stats for the current season',
      title: 'Search Players',
      enableBackdrop: true
    }, {
      anchorId: 'tour4',
      content: "Craft trades and watch the fantasy score points to help you make the best trade possible...(exciting I know!)",
      title: 'Fantasy Scores',
      enableBackdrop: true
    }]);

    await this.tourService.start();

    await localStorage.setItem(Constants.initalizedTour, "true");

  }

  @ViewChild('appDrawer') appDrawer: ElementRef;

}
