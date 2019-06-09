import { Component, OnInit } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss']
})
export class RidesComponent implements OnInit {
  public tableData1: TableData;

  constructor() { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ '#', 'Numer Rejestracyjny', 'Pracownik', 'Typ', 'Marka', 'Model', 'Wyjazd', 'Przyjazd', 'Od', 'Do', 'Opcje'],
      dataRows: [
      ['1', 'SWD12345', 'Aleksander Kędzior', 'Prywatny', 'BMW', 'E90', 'Katowice', 'Warszawa', '7/3/2019', '7/4/2019', ''],
      ['2', 'SK15978', 'John Doe', 'Służbowy', 'KIA', 'Ceed', 'Gliwice', 'Poznań', '7/3/2019', '7/3/2019', ''],
      ['3', 'SR45687', 'Jan Kowalski', 'Służbowy', 'Volkswagen', 'Passat', 'Gliwice', 'Katowice', '5/3/2019', '5/3/2019', ''],
      ['4', 'KR45678', 'Adam Nowak', 'Służbowy', 'Opel', 'Corsa', 'Warszawa', 'Gliwice', '3/3/2019', '3/3/2019', ''],
      ['5', 'SZ25879', 'Szymon Stracała', 'Służbowy', 'Chevrolet', 'Cruze', 'Rzeszów', 'Gliwice', '10/3/2019', '11/3/2019', '']
      ]
      };
  }

}
