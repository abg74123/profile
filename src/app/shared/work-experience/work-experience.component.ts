import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styles: [
  ]
})
export class WorkExperienceComponent implements OnInit {

  @Input() from = {}

  htmlText = `
  จัดทำ แก้ไข พัฒนาเว็บไซต์ ตาม requirements และทำตาม design ที่ได้รับมอบหมาย<br>
  ใช้ php html css boostrap json WebService javascript jquery ajax sql<br>
  ตย. ผลงาน<br>
  <a href="https://audition.cgm48official.com/">https://audition.cgm48official.com/</a><br>
  ทำส่วน back/font ทั้งหมด<br>
  <a href="http://www.svoa.co.th/">http://www.svoa.co.th/</a><br>
  แก้ไขปรับปรุง<br>
  ส่วนใหญ่จะเป็นแก้ไข และพัฒนาต่อจากของเดิม`

  constructor() { }

  ngOnInit(): void {
  }

}
