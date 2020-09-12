import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransporterTabsPage } from './transporter-tabs.page';

describe('TransporterTabsPage', () => {
  let component: TransporterTabsPage;
  let fixture: ComponentFixture<TransporterTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransporterTabsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransporterTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
