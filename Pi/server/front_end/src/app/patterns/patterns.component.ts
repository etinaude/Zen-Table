import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.scss'],
})
export class PatternsComponent implements OnInit {
  patterns = [{ name: 'star' }, { name: 'spiral' }, { name: 'fractal' }];
  ngOnInit(): void {}

  constructor(public http: HttpClient) {}

  async sendPattern(event: any) {
    if (!event.source.selected) return;
    let selected = event.source.value;
    console.log(selected);

    let res = await this.http
      .post(`http://localhost:3000/sand/pattern/${selected}`, {})
      .toPromise();

    console.log(res);
  }
}
