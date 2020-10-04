import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransporterRegistrationPage } from './transporter-registration.page';

describe('TransporterRegistrationPage', () => {
  let component: TransporterRegistrationPage;
  let fixture: ComponentFixture<TransporterRegistrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransporterRegistrationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransporterRegistrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
