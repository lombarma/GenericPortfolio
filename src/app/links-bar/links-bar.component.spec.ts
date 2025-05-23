import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksBarComponent } from './links-bar.component';

describe('LinksBarComponent', () => {
  let component: LinksBarComponent;
  let fixture: ComponentFixture<LinksBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinksBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
