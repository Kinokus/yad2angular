import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCentralComponent } from './table-central.component';

describe('TableCentralComponent', () => {
  let component: TableCentralComponent;
  let fixture: ComponentFixture<TableCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCentralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
