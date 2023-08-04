import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, takeUntil, Subject, tap } from 'rxjs';
import { LayoutService } from '../../infrastructure/services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  logoPath = '../../../assets/NoBorderSnS.png';
  isMobile$: Observable<boolean>;
  isMobile = true;
  componentDestroyed$ = new Subject<void>();

  constructor(private layoutService: LayoutService) {
    this.isMobile$ = this.layoutService.isMobile$.asObservable();
  }

  ngOnInit() {
    this.isMobile$
      .pipe(
        tap((data) => {
          this.isMobile = data;
        }),
        takeUntil(this.componentDestroyed$)
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}
