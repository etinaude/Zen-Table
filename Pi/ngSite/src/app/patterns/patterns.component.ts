import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.scss'],
})
export class PatternsComponent implements OnInit {
  patterns = [{ name: 'a' }, { name: 'b' }];
  ngOnInit(): void {}

  changeComplete(event: any) {}

  sendPattern(event: any) {
    if (!event.source.selected) return;
    console.log(event.source.value);
  }
}
