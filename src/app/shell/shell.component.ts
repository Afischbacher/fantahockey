import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavService } from '@app/core/services/nav.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavItem } from '@app/core/interfaces/nav-item';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

   // icons for menu
   faBars = faBars;
  
   constructor(public navService: NavService) { }
 
   ngOnInit() {     
 
   }
 
   @ViewChild('appDrawer') appDrawer: ElementRef;
   
   navItems: NavItem[] = [
     {
       displayName: 'Dashboard',
       iconName: 'menu',
       children: [],
       route: "/dashboard"
     }
   ];
 
   ngAfterViewInit() {
     this.navService.appDrawer = this.appDrawer;
   }
 
}
