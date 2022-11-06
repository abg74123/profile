import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styles: [
  ]
})
export class MyProjectComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
