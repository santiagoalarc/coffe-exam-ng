import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffees: Array<Coffee> = [];
  totalBlend!: number;
  totalOrigen!: number;

  constructor(private coffeeService: CoffeeService) { }

  getCoffees(): void{
    this.coffeeService.getCoffees().subscribe((coffees) => {
      this.coffees = coffees;
      this.totalBlend = coffees.filter(coffe => coffe.tipo === "Café de Origen").length;
      this.totalOrigen = coffees.filter(coffe => coffe.tipo === "Blend").length;
    })
  }

  ngOnInit() {
    this.getCoffees();
  }

}
