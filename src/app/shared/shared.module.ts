import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogAboutMeComponent } from './dialog-about-me/dialog-about-me.component';

const material = [
  MatSidenavModule,
  MatCardModule,
  MatDialogModule
]
const components = [
  DialogAboutMeComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ...material,
    ...components
  ]
})
export class SharedModule { }
