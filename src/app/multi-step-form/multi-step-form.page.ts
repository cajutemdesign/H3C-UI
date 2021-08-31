import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, IonContent, IonSlides, NavController } from '@ionic/angular';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
// import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// const { Camera } = Plugins;

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.page.html',
  styleUrls: ['./multi-step-form.page.scss']
})
export class MultiStepFormPage implements OnInit {

  @ViewChild(IonContent, { static: true }) ionContent: IonContent;
  @ViewChild(IonSlides, { static: false }) ionSlides: IonSlides;
  @ViewChild('userFormRef', { static: false }) userFormRef: NgForm;
  @ViewChild('medicalFormRef', { static: false }) medicalFormRef: NgForm;
  @ViewChild('covidFormRef', { static: false }) covidFormRef: NgForm;

  public order: any = {
    id: 1,
    items: [{
      id: 1,
      name: 'Denim T-Shirt',
      amount: 15.00,
    }, {
      id: 1,
      name: 'Denim Pants',
      amount: 5.00,
    }, {
      id: 1,
      name: 'Black T-Shirt',
      amount: 5.00,
    }],
    subtotal: 25.00,
    shippingFee: 5.00,
    total: 30.00, 
  };

  public userInformationForm: FormGroup;
  public medicalInformationForm: FormGroup;
  public covidInformationForm: FormGroup;

  public imagePath: SafeResourceUrl;

  public times = [];

  public slidesOpts = {
    allowTouchMove: false,
    autoHeight: true,
  };

  public slides: string[];
  public currentSlide: string;
  public isBeginning: boolean = true;
  public isEnd: boolean = false;


  /* form controls
  User:
  ******
  first_name: new FormControl('', Validators.required),
  last_name: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required),
  phone: new FormControl('', Validators.required),
  dob: new FormControl('', Validators.required),
  gender: new FormControl('', Validators.required),
  weight: new FormControl('', Validators.required),
  height: new FormControl('', Validators.required),
  ethnicity: new FormControl('', Validators.required),
  address: new FormControl('', Validators.required),
  city: new FormControl('', Validators.required),
  state: new FormControl('', Validators.required),
  zip: new FormControl('', Validators.required),
  country_code: new FormControl('', Validators.required)
  */
  get userFirstName(): AbstractControl {
    return this.userInformationForm.get('first_name');
  }

  get userLastName(): AbstractControl {
    return this.userInformationForm.get('last_name');
  }

  get userEmail(): AbstractControl {
    return this.userInformationForm.get('email');
  }

  get userPhone(): AbstractControl {
    return this.userInformationForm.get('phone');
  }

  get userGender(): AbstractControl {
    return this.userInformationForm.get('gender');
  }

  get userDOB(): AbstractControl {
    return this.userInformationForm.get('dob');
  }

  get userWeight(): AbstractControl {
    return this.userInformationForm.get('weight');
  }

  get userHeight(): AbstractControl {
    return this.userInformationForm.get('height');
  }

  get userEthnicity(): AbstractControl {
    return this.userInformationForm.get('ethnicity');
  }

  get userAddress(): AbstractControl {
    return this.userInformationForm.get('address');
  }

  get userCity(): AbstractControl {
    return this.userInformationForm.get('city');
  }

  get userState(): AbstractControl {
    return this.userInformationForm.get('state');
  }

  get userZip(): AbstractControl {
    return this.userInformationForm.get('zip');
  }

  get userCountry(): AbstractControl {
    return this.userInformationForm.get('country_code');
  }

  /* form controls
  Medical:
  ******
  preExistingConditions: new FormControl('', Validators.required),
  allergies: new FormControl('', Validators.required),
  medList: new FormControl('', Validators.required),
  familyMedicalHostory: new FormControl('', Validators.required),
  vitals: new FormControl('', Validators.required),
  immunizations: new FormControl('', Validators.required),
  alcoholUse: new FormControl('', Validators.required),
  smoking: new FormControl('', Validators.required),
  dailyActivity: new FormControl('', Validators.required),
  nutrition: new FormControl('', Validators.required),
  numberOfDependents: new FormControl('', Validators.required),
  medicalCareFrequency: new FormControl('', Validators.required),
  employmentStatus: new FormControl('', Validators.required),
  generalStressLevel: new FormControl('', Validators.required),
  pregnancy: new FormControl('', Validators.required),
  careSummary: new FormControl('', Validators.required),
  */

  get medicalPreExistingConditions(): AbstractControl {
    return this.medicalInformationForm.get('preExistingConditions');
  }

  get medicalAllergies(): AbstractControl {
    return this.medicalInformationForm.get('allergies');
  }

  get medicalList(): AbstractControl {
    return this.medicalInformationForm.get('medList');
  }

  get medicalFamilyHistory(): AbstractControl {
    return this.medicalInformationForm.get('familyMedicalHostory');
  }

  get medicalVitals(): AbstractControl {
    return this.medicalInformationForm.get('vitals');
  }

  get medicalImmunizations(): AbstractControl {
    return this.medicalInformationForm.get('immunizations');
  }

  get medicalAlcoholUse(): AbstractControl {
    return this.medicalInformationForm.get('alcoholUse');
  }

  get medicalSmoking(): AbstractControl {
    return this.medicalInformationForm.get('smoking');
  }

  get medicalDailyActivity(): AbstractControl {
    return this.medicalInformationForm.get('dailyActivity');
  }

  get medicalNutrition(): AbstractControl {
    return this.medicalInformationForm.get('nutrition');
  }

  get medicalNumberOfDependents(): AbstractControl {
    return this.medicalInformationForm.get('numberOfDependents');
  }

  get medicalCareFrequency(): AbstractControl {
    return this.medicalInformationForm.get('medicalCareFrequency');
  }

  get medicalEmploymentStatus(): AbstractControl {
    return this.medicalInformationForm.get('employmentStatus');
  }

  get medicalStressLevel(): AbstractControl {
    return this.medicalInformationForm.get('generalStressLevel');
  }

  get medicalPregnancy(): AbstractControl {
    return this.medicalInformationForm.get('pregnancy');
  }

  get medicalCareSummary(): AbstractControl {
    return this.medicalInformationForm.get('careSummary');
  }

  /* form controls
  Covid:
  ******
  diagnosedCovid: new FormControl('', Validators.required),
  covidDate: new FormControl('', Validators.required),
  isVaccinated: new FormControl('', Validators.required),
  vaccinationDate: new FormControl('', Validators.required),
  vaccinationBrand: new FormControl('', Validators.required),
  isSymptomatic: new FormControl('', Validators.required),
  symptomaticSymptoms: new FormControl('', Validators.required),
  erVisit: new FormControl('', Validators.required),
  hospitalization: new FormControl('', Validators.required),
  nnumberOfDaysHospitalized: new FormControl('', Validators.required),
  medicationPrescribed: new FormControl('', Validators.required),
  medTreatmentType: new FormControl('', Validators.required),
  houseHoldDiagnosed: new FormControl('', Validators.required)
  */

  get covidIsDiagnosed(): AbstractControl {
    return this.covidInformationForm.get('diagnosedCovid');
  }

  get covidDate(): AbstractControl {
    return this.covidInformationForm.get('covidDate');
  }

  get covidIsVaccinated(): AbstractControl {
    return this.covidInformationForm.get('isVaccinated');
  }

  get covidVaccinationDate(): AbstractControl {
    return this.covidInformationForm.get('vaccinationDate');
  }

  get covidVaccinationBrand(): AbstractControl {
    return this.covidInformationForm.get('vaccinationBrand');
  }

  get covidIsSymptomatic(): AbstractControl {
    return this.covidInformationForm.get('isSymptomatic');
  }

  get covidSymptomaticSymptoms(): AbstractControl {
    return this.covidInformationForm.get('symptomaticSymptoms');
  }

  get covidErVisit(): AbstractControl {
    return this.covidInformationForm.get('erVisit');
  }

  get covidHospitalization(): AbstractControl {
    return this.covidInformationForm.get('hospitalization');
  }

  get covidHospitalizationDays(): AbstractControl {
    return this.covidInformationForm.get('nnumberOfDaysHospitalized');
  }

  get covidMedicationPrescribed(): AbstractControl {
    return this.covidInformationForm.get('medicationPrescribed');
  }

  get covidMedTreatmentType(): AbstractControl {
    return this.covidInformationForm.get('medTreatmentType');
  }

  get covidHouseHoldDianosed(): AbstractControl {
    return this.covidInformationForm.get('houseHoldDiagnosed');
  }


  constructor(private actionSheetCtrl: ActionSheetController,
    private navCtrl: NavController,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.setupForm();
    this.buildSlides();
    this.times = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];
  }

  ionViewDidEnter() {
    this.ionSlides.updateAutoHeight();
  }

  buildSlides() {
    const slides = ['Personal', 'Medical', 'Covid'];
    this.currentSlide = slides[0];
    this.slides = slides;
  }

  radioSelect(event) {
    console.log(event);
  }

  setupForm() {
    this.userInformationForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      weight: new FormControl('', Validators.required),
      height: new FormControl('', Validators.required),
      ethnicity: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      country_code: new FormControl('', Validators.required),
    });

    this.medicalInformationForm = new FormGroup({
      preExistingConditions: new FormControl('', Validators.required),
      allergies: new FormControl('', Validators.required),
      medList: new FormControl('', Validators.required),
      familyMedicalHostory: new FormControl('', Validators.required),
      vitals: new FormControl('', Validators.required),
      immunizations: new FormControl('', Validators.required),
      alcoholUse: new FormControl('', Validators.required),
      smoking: new FormControl('', Validators.required),
      dailyActivity: new FormControl('', Validators.required),
      nutrition: new FormControl('', Validators.required),
      numberOfDependents: new FormControl('', Validators.required),
      medicalCareFrequency: new FormControl('', Validators.required),
      employmentStatus: new FormControl('', Validators.required),
      generalStressLevel: new FormControl('', Validators.required),
      pregnancy: new FormControl(''),
      careSummary: new FormControl('', Validators.required),
    });

    this.covidInformationForm = new FormGroup({
      diagnosedCovid: new FormControl('', Validators.required),
      covidDate: new FormControl('', Validators.required),
      isVaccinated: new FormControl('', Validators.required),
      vaccinationDate: new FormControl('', Validators.required),
      vaccinationBrand: new FormControl('', Validators.required),
      isSymptomatic: new FormControl('', Validators.required),
      symptomaticSymptoms: new FormControl('', Validators.required),
      erVisit: new FormControl('', Validators.required),
      hospitalization: new FormControl('', Validators.required),
      nnumberOfDaysHospitalized: new FormControl('', Validators.required),
      medicationPrescribed: new FormControl('', Validators.required),
      medTreatmentType: new FormControl('', Validators.required),
      houseHoldDiagnosed: new FormControl('', Validators.required)
    });
  }

  async onSlidesChanged() {
    const index = await this.ionSlides.getActiveIndex();
    this.currentSlide = this.slides[index];
    this.isBeginning = await this.ionSlides.isBeginning();
    this.isEnd = await this.ionSlides.isEnd();
  }

  onSlidesDidChange() {
    this.ionContent.scrollToTop();
  }

  onBackButtonTouched() {
    this.ionSlides.slidePrev();
    this.ionContent.scrollToTop();
  }

  onNextButtonTouched() {
    
    if (this.currentSlide === 'Personal') {

      this.userFormRef.onSubmit(undefined);

      if (this.userFormRef.valid) {
        this.ionSlides.slideNext();
        this.ionContent.scrollToTop();
      }

    } else if (this.currentSlide === 'Medical') {
      
      this.medicalFormRef.onSubmit(undefined);

      if (this.medicalFormRef.valid) {
        this.ionSlides.slideNext();
        this.ionContent.scrollToTop();
      }

    } else if (this.currentSlide === 'Covid') {

      this.covidFormRef.onSubmit(undefined);

      if (this.covidFormRef.valid) {
        this.navCtrl.navigateRoot('/thanks', {
          animated: true,
          animationDirection: 'forward',
        });
      }

    }  else {

      this.ionSlides.slideNext();
      this.ionContent.scrollToTop();
    }
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });

  /*async chooseImage(source: CameraSource) {

    try {

      const image = await Camera.getPhoto({
        quality: 70,
        width: 600,
        height: 600,
        preserveAspectRatio: true,
        allowEditing: true,
        correctOrientation: true,
        source: source,
        resultType: CameraResultType.Uri,
      });

      const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(image.webPath);
      this.imagePath = safeUrl;

      const response = await fetch(image.webPath);
      const blob = await response.blob();

      const base64 = await this.convertBlobToBase64(blob) as string;

      // Send encoded string to server...

    } catch (error) {
      console.warn(error);
    }

  }

  async presentActionSheet() {

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Choose an option',
      buttons: [{
        text: 'Photo Library',
        handler: () => {
          this.chooseImage(CameraSource.Photos);
        }
      }, {
        text: 'Camera',
        handler: () => {
          this.chooseImage(CameraSource.Camera);
        }
      }, {
        text: 'Cancel',
        role: 'cancel'
      }]
    });

    return await actionSheet.present();
  }*/

  originalOrder = (): number => {
    return 0;
  }

}
