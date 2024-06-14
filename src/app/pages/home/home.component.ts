import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ILocations } from '../../model/interface';
import { LocationsService } from '../../services/locations.service';
import { CommonModule } from '@angular/common';
import { LocationsFormsComponent } from '../../shared/components/locations-forms/locations-forms.component';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatButtonModule,HeaderComponent, CommonModule, LocationsFormsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  locationService = inject(LocationsService);
  private router = inject(Router);

  locations: ILocations[] = [];

  title;
  buttonName = 'Save';

  constructor(){
    this.title = 'Home';
  }

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(){
    this.locationService.getLocations().subscribe(locations => {
      this.locations = locations;
    });
  }

  saveLocation(location: ILocations){
    this.locationService.addLocation(location);
    this.getLocations();
  }
  
  //Esto se puede hacer en el HTM [routerLink]="'/edit:id'"
  goToEdit(id: string){
    this.router.navigate(['/private/edit', id]);
  }

  delete(id: string){
    this.locationService.deleteLocation(id);
    this.getLocations();
  }
}
