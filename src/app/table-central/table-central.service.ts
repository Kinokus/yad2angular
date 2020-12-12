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

}
