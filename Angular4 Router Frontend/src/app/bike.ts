export class Bike {
    id: number;
    model:String;
    manufacturer:String;
    
    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}