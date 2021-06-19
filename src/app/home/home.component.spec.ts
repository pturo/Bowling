import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import * as jsonRes from 'src/assets/wyniki.json';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should open and load contents of JSON file', async() => {
    fixture = TestBed.createComponent(HomeComponent);
    fixture.nativeElement.querySelector('input').click();

    fixture.detectChanges();
    expect(jsonRes).toBeTruthy();
  });
});
