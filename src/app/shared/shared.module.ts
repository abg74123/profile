import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { MyInfoComponent } from './my-info/my-info.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationalComponent } from './educational/educational.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const material = [
  MatSidenavModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule
]
const components = [
  MyInfoComponent,
  MyProjectComponent,
  WorkExperienceComponent,
  EducationalComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ...material
  ],
  exports:[
    ...material,
    ...components
  ]
})
export class SharedModule { }
