import { Injectable } from '@angular/core';
import { ILocations } from '../model/interface';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private firestore: Firestore) { }

  getLocations(): Observable<ILocations[]> {
    const locationssRef = collection(this.firestore, 'locations');
    return collectionData(locationssRef, { idField: 'id'}) as Observable<ILocations[]>;
  }
  getLocationByIndex(id: string): Observable<ILocations> {
    const locationDocRef = doc(this.firestore, `locations/${id}`);
    return docData(locationDocRef, { idField: 'id' }) as Observable<ILocations>;
  }

  addLocation(location: ILocations) {
    const locationsRef = collection(this.firestore, 'locations');
    return addDoc(locationsRef, location);
  }

  deleteLocation(id: string) {
    const locationDocRef = doc(this.firestore, `locations/${id}`);
    return deleteDoc(locationDocRef);
  }

  updateLocation(location: ILocations) {
    const locationDocRef = doc(this.firestore, `locations/${location.id}`);
    return updateDoc(locationDocRef, { ...location });
  }

}

// getLocations(): ILocations[] {
//   if(window.localStorage.getItem('locations') !== null){
//     return JSON.parse(window.localStorage.getItem('locations')!);
//   }
//   else{
//     return [];
//   }
// }

// setLocation(location: ILocations):void{
//   const locations = this.getLocations();
//   locations.push(location);
//   this.saveLocations(locations);
// }

// editLocation(i: number, l: ILocations){
//   const locations = this.getLocations();
//   locations[i] = l;
//   this.saveLocations(locations);
// }

// getLocationByIndex(index: number){
//   const locations = this.getLocations();
//   return locations[index];
// }

// private saveLocations(locations: ILocations[]){
//   window.localStorage.setItem('locations',JSON.stringify(locations));
// }

// deleteItem(index: number){
//   const location = this.getLocations();
//   location.splice(index, 1);
//   window.localStorage.setItem('locations',JSON.stringify(location));
// }
