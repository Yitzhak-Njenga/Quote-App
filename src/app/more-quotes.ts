export class MoreQuotes {
    showQuotesDetails: boolean;


    constructor(public author:string,public quote:string, public date: string){
        this.showQuotesDetails = false;

    }
}
