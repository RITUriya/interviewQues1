import { EverythingService } from './../../services/everything.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ViewComponent } from './view.component';

describe('ViewComponent', () => {
  let component: ViewComponent;
  let fixture: ComponentFixture<ViewComponent>;
  let service: EverythingService;
  // it('checked #onSubmit()', () => {
  //   const clCheck = new ViewComponent(service);
  //   expect(clCheck.onSubmit);
  //   clCheck.onSubmit();
  //   expect(clCheck.onSubmit());
  // });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewComponent],
    });
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance; //.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should click Set button', () => {
  //   fixture.detectChanges();
  //   let buttonElement = fixture.debugElement.query(By.css('.mat-raised-butto'));
  //   let p = fixture.debugElement.nativeElement.querySelector('p');

  //   buttonElement.triggerEventHandler('click', null);
  //   fixture.detectChanges();

  //   fixture.whenStable().then(() => {
  //     expect(component.data).toBe('');
  //     expect(p.textContent).toBe('Mahesh');
  //   });
  // });
});
