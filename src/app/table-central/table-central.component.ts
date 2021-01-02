import {Component, OnInit} from '@angular/core';
import {TableCentralService} from './table-central.service';

@Component({
    selector: 'app-table-central',
    templateUrl: './table-central.component.html',
    styleUrls: ['./table-central.component.scss']
})
export class TableCentralComponent implements OnInit {
    apartments: any = [];
    path: string;
    cities: any = [];
    hoods: any = [];
    selectedCity: string = null;
    selectedHood: string = null;
    currentImage: string;
    selectedImg: string;

    constructor(private tableCentralService: TableCentralService) {
    }

    async ngOnInit(): Promise<void> {

        this.cities = await this.tableCentralService.getCities();
        // todo get by city and hood
        // this.apartments = await this.tableCentralService.getApartments();
        // console.log(this.apartments);
    }

    public generateTamaLinkAddress(apartment): string {
        if (!apartment.street) {
            return null;
        }
        return `https://tama38.madlan.co.il/project/${apartment.street.replace(/ /gim, '_')}_${apartment.homeNumber}_${apartment.city.replace(/ /gim, '_')}`;
    }

    public generateTamaLinkCity(apartment): string {
        return `https://tama38.madlan.co.il/location/${apartment.city.replace(/ /gim, '_')}`;
    }

    public generatePath(): void {
        const adresses = this.apartments
            .filter(a => a.addToPath)
            .map(a => `${a.city}, ${a.street}, ${a.homeNumber} `)
            .join('/');
        this.path = `https://www.google.co.il/maps/dir/${adresses}`;
    }

    public toggleApartmentInPath(apartment: any): void {
        apartment.addToPath = !apartment.addToPath;
        this.generatePath();
    }

    async getHoods(id): Promise<void> {
        await this.getApartmentsByCityId(id);
        this.hoods = await this.tableCentralService.getHoodsByCityId(id);
        this.selectedCity = id;
        this.selectedHood = null;

    }

    async getApartmentsByHoodId(id: string): Promise<void> {
        this.apartments = await this.tableCentralService.getApartmentsByHoodId(id);
        this.selectedHood = id;
    }

    async getApartmentsByCityId(id: string): Promise<void> {
        this.apartments = await this.tableCentralService.getApartmentsByCityId(id);
    }

    sortBy(field): any {
        return (a, b) => {
            return a[field] < b[field] ? -1 : 1;
        };
    }

    sortByStreet(): void {
        this.apartments = this.apartments.sort(this.sortBy('street'));
    }
    sortByPrice(): void {
        this.apartments = this.apartments.sort(this.sortBy('price'));
    }

}
