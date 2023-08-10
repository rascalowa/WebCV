# WebCv

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.7.

Requirements:

- 3 simple subpages with routing
  // app-routing.module.ts

- Visible advantages of static typing
  // Easier error encountering, limited hobby options to choose with use of enum

- Usage of pipe
  // contact.component.html > uppercase built-in pipe

- Usage of directive
  // header.component.html > *ngIf directive
  // hobby.component > *ngFor directive
  // usage of components

- Usage of component lifecycle
  // contact.component.ts > ngOnInit, ngAfterViewInit, ngOnDestroy

- Usage of other basic Angular's elements
  // Ex. Service

- Good RxJS practices
  // Ex. unsubscribing from Subject, using takeUntil as last operator

- Lazy loading usage
  // HobbyModule

- Shows data from public API
  // missing

- Maps data from API to the internal model of the application
  // missing

- Filling the form locally?
  // contact.component.ts > autoFillHandler()

- Scalable and ready for further development
  // Hobby Component in separate module,
  // Experience Route prepared for further development
  // BreakpointObserver for further responsive styling,
  // Firebase Storage connected to provide space for photos
  // Loading component prepared to be inserted in app.component.ts

Additionally:

- Notes what should be done next
  1. Notification should be added to contact form with information whether email was sent successfully or not
  2. Handling errors while filling form - red border with error text under input
  3. Loading Service should be used while waiting for data to be loaded, especially on HomePage
  4. In HobbyComponent - getting photo url should be done in more reusable way, code for assigning single url should be reused
  5. Test coverage should be improved - for now there is only few tests written
  6. Placeholders should be changed to actual descriptions
  7. '/experience' route should be completed with CV deatils and uncommented
  8. Polish/English language switch should be applied
