import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimulatorAccessService {
  serverURL = 'http://localhost:3000'

  constructor(private http: HttpClient) {
  }

  createNewCreature(creatureData) {
    return this.http.post(this.serverURL + '/creature/add', creatureData);
  }

  getObjectList() {
    return this.http.get(this.serverURL);
  }

  moveCreature(moveObject) {
    return this.http.post(this.serverURL + '/creature/move', moveObject);
  }

  addNewObstacle(obstacle) {
    return this.http.post(this.serverURL + '/obstacle/add/', obstacle);
  }

  addItem(userId, itemToAdd) {
    var obj = {
      id: userId,
      itemId: itemToAdd
    };
    return this.http.post(this.serverURL + '/item/add/' , obj);
  }
}
