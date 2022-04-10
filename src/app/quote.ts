export class Quote {
    quote:string;
    upvote:number;
    downvote:number;
    description:string;
    constructor(quote:string,upvote:number,downvote:number,description:string){
        this.quote=quote;
        this.upvote=upvote;
        this.downvote=downvote;
        this.description=description;
    }
}
