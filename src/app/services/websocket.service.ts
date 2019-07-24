import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private tempData = [];

  constructor(private socket: Socket) {
    this.socket.on('updateCreatureList', (data) => {
      this.tempData = data;
    });

    setInterval(() => {
          
    }, 1000);
  }
}
