import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocationsService } from '../../../services/locations.service';
import { ILocations } from '../../../model/interface';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-locations-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatInputModule],
  templateUrl: './locations-forms.component.html',
  styleUrl: './locations-forms.component.scss'
})
export class LocationsFormsComponent {

  locationService = inject(LocationsService);

  @Input() action!: string;
  @Input() location?: ILocations;
  // @Input() set location(l: ILocations){
  //   this.loc = l;
  //   console.log('Input:',this.loc);
  // };

  // get location(){
  //   return this.loc;
  // }

  @Output() outLocation = new EventEmitter<ILocations>();

  locationsForm!: FormGroup;

  loc!: ILocations;

  constructor(){
    this.createForm();
  }
  
  ngOnInit() {
    this.fillForm(this.location!);
  }

  ngOnChanges(changes: any){
    if(changes.location)
      this.fillForm(changes.location.currentValue!);
  }

  fillForm(location: ILocations){
    // this.locationsForm.controls['name'].setValue(l.name);
    this.locationsForm.patchValue({
      name:location?.name??'',
      description:location?.description??'',
      lat:location?.lat??'',
      lon:location?.lon??'',
      visible:location?.visible??''
    });
  }

  createForm(){
    this.locationsForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      description: new FormControl(''),
      lat: new FormControl(''),
      lon: new FormControl(''),
      visible: new FormControl(''),
    });
  }

  outputLocation(){
    if(this.locationsForm.valid){
      const l: ILocations = {
        id: this.location?.id,
        name: this.locationsForm.get('name')?.value,
        description: this.locationsForm.get('description')?.value,
        lat: this.locationsForm.get('lat')?.value,
        lon: this.locationsForm.get('lon')?.value,
        visible: false
      }
      this.outLocation.emit(l);
    }
    else {
      console.log('INVALID FORM!')
    }
    
  }
}
