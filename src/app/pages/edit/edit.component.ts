import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationsService } from '../../services/locations.service';
import { ILocations } from '../../model/interface';
import { LocationsFormsComponent } from '../../shared/components/locations-forms/locations-forms.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [LocationsFormsComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit{

  private activateRoute = inject(ActivatedRoute);
  locationService = inject(LocationsService);
  private route = inject(Router);
  // constructor(private activateRouter: AvtivateRoute){}

  location!: ILocations;

  buttonName = 'Edit';
  index!: number;

  ngOnInit(): void {
    // this.activateRoute.params.subscribe(params =>{
    //   this.location = this.locationService.getLocationByIndex(params['id']);
    //   console.log(params['id']);
    //   console.log(location);
    // });
    
    const id = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.index = id;
    this.location = this.locationService.getLocationByIndex(id);
    console.log(this.location);
  }

  editLocation(l: ILocations){
    this.locationService.editLocation(this.index,l);
    this.route.navigate(['/home']);
  }
}
