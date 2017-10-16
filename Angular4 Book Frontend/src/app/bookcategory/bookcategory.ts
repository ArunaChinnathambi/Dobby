import { Book } from "./book";

export class BookCategory {
    constructor(
        public bookcatId:number,
        public name: string,
        public book: Book[]){}
}