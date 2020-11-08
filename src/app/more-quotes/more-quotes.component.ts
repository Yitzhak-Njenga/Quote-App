import { Component, OnInit } from '@angular/core';
import { MoreQuotes } from '../more-quotes'

@Component({
  selector: 'app-more-quotes',
  templateUrl: './more-quotes.component.html',
  styleUrls: ['./more-quotes.component.css']
})
export class MoreQuotesComponent implements OnInit {

  quotes: MoreQuotes[] = [
     new MoreQuotes('Steve Jobs','12/7/1996'),
     new MoreQuotes('Martha Teresa','04/12/1987'),
     new MoreQuotes('Dr. Ben Carson','12/7/1986')
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
