import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    document.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy(): void {
    document.removeEventListener('scroll', this.onScroll);
  }

  onScroll(): void {
    const docElem = document.documentElement;
    const docBody = document.body;
    const scrollTop = docElem['scrollTop'] || docBody['scrollTop'];
    const scrollBottom =
      (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight;
    const scrollPercent = (scrollTop / scrollBottom) * 100 + '%';

    document
      .getElementById('progress-bar')
      .style.setProperty('--scrollAmount', scrollPercent);
  }
}
