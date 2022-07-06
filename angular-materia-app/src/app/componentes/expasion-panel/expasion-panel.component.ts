import {Component, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-expasion-panel',
  templateUrl: './expasion-panel.component.html',
  styleUrls: ['./expasion-panel.component.css']
})
export class ExpasionPanelComponent {

  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;



}
