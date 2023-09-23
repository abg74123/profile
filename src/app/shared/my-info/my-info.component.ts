import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styles: [
  ]
})
export class MyInfoComponent implements OnInit {

  @Input() edit: boolean = false

  skills = [
    'javascript.png',
    'typescript.png',
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

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
