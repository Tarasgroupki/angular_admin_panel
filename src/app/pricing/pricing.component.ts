import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-service',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})

export class PricingComponent implements OnInit, OnDestroy {
  title = 'service';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'star'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataForSorting: PeriodicElement[];
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  show: number;

 // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
 //   this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataForSorting = this.calculateMealTotal(ELEMENT_DATA);
   // this.dataSource.map(result => result.weight);
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  calculateMealTotal(products: PeriodicElement[]): any {
    return products.reduce((acc, product) => acc + product.weight, 0);
  }

  showPosition(position: string): void {
    console.log(position);
  }

  showVert(value: any): void {
    this.show = value;
  }

  hideVert(): void {
    this.show = 0;
  }

  changeFilter(value: any): void {
    console.log(value);
  }

  ngOnDestroy(): void {

  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  star: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', star: ''},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', star: ''},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', star: ''},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', star: ''},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', star: ''},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', star: ''},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', star: ''},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', star: ''},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', star: ''},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', star: ''},
  /*{position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},*/
];
