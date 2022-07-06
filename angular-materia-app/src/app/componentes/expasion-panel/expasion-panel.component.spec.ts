import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpasionPanelComponent } from './expasion-panel.component';

describe('ExpasionPanelComponent', () => {
  let component: ExpasionPanelComponent;
  let fixture: ComponentFixture<ExpasionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpasionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpasionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
