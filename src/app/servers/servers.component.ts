import { Component } from '@angular/core';
import { ServersService } from '../shared/servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  constructor(private ServersService: ServersService) {

  }
  public servers = this.ServersService.Servers
}
