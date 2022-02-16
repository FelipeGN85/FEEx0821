import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneratorComponent } from './generator.component';

describe('GeneratorComponent', () => {
  let component: GeneratorComponent;
  let fixture: ComponentFixture<GeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [ GeneratorComponent ],
      providers: [ { provide: Router, useValue: '' }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have labels', () => {
    expect(component).withContext('YOUR CODE').toBeTruthy();
    expect(component).withContext('CHARACTER').toBeTruthy();
    expect(component).withContext('Character').toBeTruthy();
    expect(component).withContext('GENERATE 2D Grid').toBeTruthy();
  });
});
