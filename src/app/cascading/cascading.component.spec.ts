import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadingComponent } from './cascading.component';

describe('CascadingComponent', () => {
  let component: CascadingComponent;
  let fixture: ComponentFixture<CascadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CascadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CascadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
