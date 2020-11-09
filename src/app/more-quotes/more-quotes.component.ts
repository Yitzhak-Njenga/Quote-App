import { Component, OnInit } from '@angular/core';
import { MoreQuotes } from '../more-quotes'

@Component({
  selector: 'app-more-quotes',
  templateUrl: './more-quotes.component.html',
  styleUrls: ['./more-quotes.component.css']
})
export class MoreQuotesComponent implements OnInit {

  quotes: MoreQuotes[] = [
    new MoreQuotes('Steve Jobs','Dont let the noise of others opinions drown out your own inner voice.','12/7/1996'),
    new MoreQuotes('Martha Teresa','Be faithful in small things because it is in them that your strength lie','04/12/1987'),
    new MoreQuotes('Dr. Ben Carson','Success is determined not by whether or not you face obstacles, but by your reaction to them','12/7/1986')
  ];
  showDetails(index){
    this.quotes[index].showQuotesDetails = !this.quotes[index].showQuotesDetails
    

  }
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
