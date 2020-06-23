import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalEnvironmentComponent } from './global-environment.component';

describe('GlobalEnvironmentComponent', () => {
  let component: GlobalEnvironmentComponent;
  let fixture: ComponentFixture<GlobalEnvironmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalEnvironmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
