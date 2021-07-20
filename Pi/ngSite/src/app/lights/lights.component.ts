import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.scss'],
})
export class LightsComponent implements OnInit {
  color: any = '#fff';
  constructor() {}

  ngOnInit(): void {}

  changeComplete(event: any) {
    console.log(event.color.hex);
  }

  patterns(mode: string) {
    console.log(mode);
  }
}
