import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products'; // importa solo l'interfaccia "Product"

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() productPassato!: Product; // crea una proprieta' productPassato
                                     // e abilita l'utilizzo di [productPassato]="" nel template

}
