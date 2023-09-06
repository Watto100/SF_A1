import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatCardModule } from '@angular/material/card'
import { MatRadioModule } from '@angular/material/radio'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({

    exports:[
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        MatRadioModule, 
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule, 
        MatDialogModule,
        CommonModule,
        MatButtonModule,
        MatSidenavModule
    ],

    declarations: [

    ]

})
export class MaterialModule{}