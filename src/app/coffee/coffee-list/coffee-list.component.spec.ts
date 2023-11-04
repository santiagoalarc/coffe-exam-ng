/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CoffeeListComponent } from './coffee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

describe('CoffeeListComponent', () => {
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CoffeeListComponent ],
      providers: [CoffeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    for(let i = 0; i < 3; i++) {
      const genre = new Coffee(
        faker.number.int(),
        faker.airline.airline.name,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.lorem.sentence(),
      );
      component.coffees.push(genre);
    }

    fixture.detectChanges();
    debug = fixture.debugElement

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 col-md-8 element', () => {
    expect(debug.queryAll(By.css('div.col-md-8'))).toHaveSize(1)
  });

  it('should have 1 table element', () => {
    expect(debug.queryAll(By.css('table'))).toHaveSize(1)
  });

  it('should have 7 th elements', () => {
    expect(debug.queryAll(By.css('th'))).toHaveSize(7)
  });
});
