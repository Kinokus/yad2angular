import {Component, OnInit} from '@angular/core';
import {TableCentralService} from './table-central.service';

@Component({
    selector: 'app-table-central',
    templateUrl: './table-central.component.html',
    styleUrls: ['./table-central.component.scss']
})
export class TableCentralComponent implements OnInit {
    public apartments: any;
    public path: string;

    constructor(private tableCentralService: TableCentralService) {
    }

    async ngOnInit(): Promise<void> {
        this.apartments = await this.tableCentralService.getApartments();
        console.log(this.apartments);
    }

    public generateTamaLinkAddress(apartment): string {
        return `https://tama38.madlan.co.il/project/${apartment.address.replace(/ /gim, '_')}_${apartment.city.replace(/ /gim, '_')}`;
    }

    public generateTamaLinkCity(apartment): string {
        return `https://tama38.madlan.co.il/location/${apartment.city.replace(/ /gim, '_')}`;
    }

    public generatePath(): void {
        const adresses = this.apartments
            .filter(a => a.addToPath)
            .map(a => `${a.city}, ${a.address}`)
            .join('/');
        this.path = `https://www.google.co.il/maps/dir/${adresses}`;
    }

    public toggleApartmentInPath(apartment: any): void {
        apartment.addToPath = !apartment.addToPath;
        this.generatePath();
    }
}
