import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpComingMoviesComponent } from './up-coming-movies.component';

describe('UpComingMoviesComponent', () => {
  let component: UpComingMoviesComponent;
  let fixture: ComponentFixture<UpComingMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpComingMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpComingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
