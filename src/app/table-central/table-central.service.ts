import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TableCentralService {

    constructor() {
    }

    public async getApartments(): Promise<any> {
        const resp = await fetch(`${environment.serverUrl}/apartments`);
        const json = await resp.json();
        return json;
    }


    // TODO models
    public async getCities(): Promise<any> {
        const resp = await fetch(`${environment.serverUrl}/cities`);
        const json = await resp.json();
        return json;
    }


    public async getHoodsByCityId(id: string): Promise<any> {
        const resp = await fetch(`${environment.serverUrl}/hoods/city/${id}`);
        const json = await resp.json();
        return json;
    }

    public async getApartmentsByHoodId(id: string): Promise<any> {
        const resp = await fetch(`${environment.serverUrl}/apartments/hood/${id}`);
        const json = await resp.json();
        return json;
    }
    public async getApartmentsByCityId(id: string): Promise<any> {
        const resp = await fetch(`${environment.serverUrl}/apartments/city/${id}`);
        const json = await resp.json();
        return json;
    }
}
