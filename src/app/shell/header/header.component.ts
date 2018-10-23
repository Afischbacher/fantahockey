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

  }

  @ViewChild('appDrawer') appDrawer: ElementRef;

}
