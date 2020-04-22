import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() {}

  ngOnInit() {
  }

  typeCountCom(satellites): number {
    let num:number = 0;
    for(let i = 0; i<satellites.length; i++) {
      if (satellites[i].type === 'Communication') {
        num++;
      }
    }
    return num;
  }

  typeCountProbe(satellites): number {
    let num:number = 0;
    for(let i=0; i<satellites.length; i++) {
      if (satellites[i].type === 'Probe') {
        num++;
      }
    }
    return num;
  }

  typeCountPos(satellites): number {
    let num:number = 0;
    for(let i=0; i<satellites.length; i++) {
      if (satellites[i].type === 'Positioning') {
        num++;
      }
    }
    return num;
  }

  typeCountDebris(satellites): number {
    let num:number = 0;
    for(let i=0; i<satellites.length; i++) {
      if (satellites[i].type === 'Space Debris') {
        num++;
      }
    }
    return num;
  }

  typeCountSS(satellites): number {
    let num:number = 0;
    for(let i=0; i<satellites.length; i++) {
      if (satellites[i].type === 'Space Station') {
        num++;
      }
    }
    return num;
  }

  typeCountTelescope(satellites): number {
    let num:number = 0;
    for(let i=0; i<satellites.length; i++) {
      if (satellites[i].type === 'Telescope') {
        num++;
      }
    }
    return num;
  }
}
