import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.scss'],
})
export class LightsComponent implements OnInit {
  color: any = '#fff';
  constructor(public http: HttpClient) {}

  ngOnInit(): void {}

  async changeComplete(event: any) {
    const hex = event.color.hex.substring(1, event.color.hex.length);

    let res = await this.http
      .post(`http://localhost:3000/lights/color/${hex}`, {})
      .toPromise();

    console.log(res);
  }

  async patterns(mode: string) {
    console.log(mode);
    let res = await this.http
      .post(`http://localhost:3000/lights/pattern/${mode}`, {})
      .toPromise();

    console.log(res);
  }
}
