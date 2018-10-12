interface IFlightAwareResponse{
    airport_info: IAirportInfo,
    arrivals: IFlightSet,
    departures: IFlightSet,
    enroute: IFlightSet,
    scheduled: IFlightSet
}

interface IAirportInfo{
    airport_code: string,
    name: string,
    city: string,
    wiki_url: string
}

interface IFlightSet{
    flights: IFlightData[]
}

interface IFlightData{
    airline_iata: string,
    flightnumber: number,
    origin: ILocation,
    destination: ILocation, 
    filed_departure_time: IFlightTime,
    filed_arrival_time: IFlightTime,
    status: string
}

interface ILocation{
    city: string,
    code: string
}

interface IFlightTime{
    time: string,
    date: string
}

interface IAirport{
    LocationID: string,
    LocationCountryCode: string,
    LocationName: string,
    LocationAirportName: string,
    CountryName: string
}

interface ILoginDetails{
    id: string,
    fname: string,
    lname: string,
    flights: IFlight[];
}

interface IFlight{
    Departure_Time: Date,
    Arrival_Time: Date,
    Origin_Country_Code: string,
    Origin_Location_Code: string,
    Origin: string,
    Destination_Country_Code: string,
    Destination_Location_Code: string,
    Destination: string
}