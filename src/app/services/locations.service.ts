import { Injectable } from '@angular/core';
import { ILocations } from '../model/interface';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor() { }

  getLocations(): ILocations[] {
    if(window.localStorage.getItem('locations') !== null){
      return JSON.parse(window.localStorage.getItem('locations')!);
    }
    else{
      return [];
    }
  }

  setLocation(location: ILocations):void{
    const locations = this.getLocations();
    locations.push(location);
    this.saveLocations(locations);
  }

  editLocation(i: number, l: ILocations){
    const locations = this.getLocations();
    locations[i] = l;
    this.saveLocations(locations);
  }

  getLocationByIndex(index: number){
    const locations = this.getLocations();
    return locations[index];
  }

  private saveLocations(locations: ILocations[]){
    window.localStorage.setItem('locations',JSON.stringify(locations));
  }

  deleteItem(index: number){
    const location = this.getLocations();
    location.splice(index, 1);
    window.localStorage.setItem('locations',JSON.stringify(location));
  }

}
