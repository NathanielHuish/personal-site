import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NationalParksComponent } from './national-parks.component';
import { AppModule } from '../app.module';

describe('NationalParksComponent', () => {
  let component: NationalParksComponent;
  let fixture: ComponentFixture<NationalParksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NationalParksComponent],
      imports: [HttpClientTestingModule, AppModule]
    });
    fixture = TestBed.createComponent(NationalParksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
