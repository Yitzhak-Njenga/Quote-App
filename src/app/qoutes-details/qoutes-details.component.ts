import { Component, OnInit, Input } from '@angular/core';
import { MoreQuotes } from '../more-quotes';

@Component({
  selector: 'app-qoutes-details',
  templateUrl: './qoutes-details.component.html',
  styleUrls: ['./qoutes-details.component.css']
})
export class QoutesDetailsComponent implements OnInit {

  @Input() quotes: MoreQuotes;


  constructor() { }

  ngOnInit(): void {
  }

}
