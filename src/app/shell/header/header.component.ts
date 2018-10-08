import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavItem } from '@app/core/interfaces/nav-item';
import { NavService } from '@app/core/services/nav.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit{

  // icons for menu
  faBars = faBars;
  
  constructor(public navService: NavService) { }

  ngOnInit() {     

  }

  @ViewChild('appDrawer') appDrawer: ElementRef;
  
  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

}
