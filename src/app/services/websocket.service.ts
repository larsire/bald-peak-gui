import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private tempData = [];

  public creatureList: Subject<any[]>
  constructor(private socket: Socket) {
    this.creatureList = new Subject<any[]>();
    this.socket.on('updateCreatureList', (data) => {
      this.tempData = data;
    });

    setInterval(() => {
      this.creatureList.next(this.tempData);
    }, 2000);
  }
}
