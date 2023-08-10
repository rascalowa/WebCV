import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from './infrastructure/services/loader.service';
import { LayoutService } from './infrastructure/services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading = false;
  isMobile$: Observable<boolean>;
  title = 'Monika Sikora';

  constructor(
    private readonly loaderService: LoaderService,
    private readonly layoutService: LayoutService
  ) {
    this.isMobile$ = this.layoutService.isMobile$;
  }
}
