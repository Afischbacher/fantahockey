import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { faBars, faQuestionCircle, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { NavService } from '@app/core/services/nav.service';
import { AppTourService } from '@app/core/services/app-tour.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {


  // icons for menu
  faBars = faBars;
  faQuestionCircle = faQuestionCircle;
  faCodeBranch = faCodeBranch;

  constructor(public navService: NavService, public appTourService: AppTourService) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {

    this.navService.appDrawer = this.appDrawer;

  }

  @ViewChild('appDrawer') appDrawer: ElementRef;

}
