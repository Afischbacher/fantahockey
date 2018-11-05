import { Component, Inject, Optional } from "@angular/core";
import {MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
    selector: "update-snackbar",
    templateUrl: './update-snackbar.component.html',
    styleUrls: ['./update-snackbar.component.scss']
})
export class UpdateSnackbarComponent {
   constructor( @Optional() @Inject(MAT_SNACK_BAR_DATA) public data: any, ){}  
}