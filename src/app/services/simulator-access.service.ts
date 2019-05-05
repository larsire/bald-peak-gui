import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SimulatorAccessService {
  constructor(private http: HttpClient) {
  }

  createNewCreature(creatureData) {
    return this.http.post("http://localhost:3000/creature/add", creatureData);
  }

  getObjectList() {
    return this.http.get("http://localhost:3000");
  }

  moveCreature(moveObject) {
    return this.http.post("http://localhost:3000/creature/move", moveObject);
  }
}
