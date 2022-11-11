import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './not-found.component.html',
})
export class NotFoundPage implements OnInit, OnDestroy {
  countdown = 10;
  countdownDots = Array(this.countdown).map((_, ix) => ix + 1);

  constructor(private router: Router) {}

  countdownTimer: number = 0;
  ngOnInit(): void {
    this.countdownTimer = window.setInterval(() => {
      --this.countdown;
      if (this.countdown === 0) {
        clearInterval(this.countdownTimer);
        this.router.navigateByUrl('/');
      }
    }, 1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.countdownTimer);
  }
}
