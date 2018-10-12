export class AirportData{
    countryID: string;
    countryName: string;
    id: string;
    name: string;
    city: string;

    constructor(countryID: string, id: string, name:string, city:string, countryName: string){
        this.countryID = countryID;
        this.id = id;
        this.name = name;
        this.city = city;
        this.countryName = countryName;
    }
}