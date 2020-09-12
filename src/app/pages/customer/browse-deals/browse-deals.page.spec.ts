import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowseDealsPage } from './browse-deals.page';

describe('BrowseDealsPage', () => {
  let component: BrowseDealsPage;
  let fixture: ComponentFixture<BrowseDealsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseDealsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowseDealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
