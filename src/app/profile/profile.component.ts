import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogAboutMeComponent } from '../shared/dialog-about-me/dialog-about-me.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [
  ]
})
export class ProfileComponent implements OnInit {

  skills = [
    'javascript.png',
    'html.png',
    'css.webp',
    'sass.png',
    'php.svg',
    'angular.png',
    'vue.png',
    'sql.png',
    'nodejs.png',
    'graphql.png',
    'github.png'
  ]

  projects = [
    './assets/profile/skills/github.png',
    './assets/profile/skills/github.png',
    './assets/profile/skills/github.png',
    './assets/profile/skills/github.png',
    './assets/profile/skills/github.png',
    './assets/profile/skills/github.png',
    './assets/profile/skills/github.png',
    './assets/profile/skills/github.png',
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogAboutMe(): void {
    this.dialog.open(DialogAboutMeComponent);
  }

}


