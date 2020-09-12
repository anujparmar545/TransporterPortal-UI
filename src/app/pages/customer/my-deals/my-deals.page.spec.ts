import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyDealsPage } from './my-deals.page';

describe('MyDealsPage', () => {
  let component: MyDealsPage;
  let fixture: ComponentFixture<MyDealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDealsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyDealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
