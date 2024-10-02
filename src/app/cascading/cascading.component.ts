import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cascading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cascading.component.html',
  styleUrl: './cascading.component.css'
})
export class CascadingComponent {

  public CountryData = [
    { Country: '--Selecct--'},
    { Country: 'INDIA'},
    { Country: 'USA'},
    { Country: 'UK'},
    { Country: 'China' }
]

public IndiaStates=[
    {State:'--SELECT--'},
    {State:'Telangana'},
    {State:'Andhra'},
    {State:'Gujarath'},
    {State:'Kerala'},
    {State:'Goa'},
]
public USAStates=[
    {State:'--SELECT--'},
    {State:'Texas'},
    {State:'Mexico'},
    {State:'washington'},
    {State:'newyork'},
    {State:'vegas'},
]
  public StatesData:string="";
   StateList(event:any){
    this.StatesData=event.target.value;
    console.log(this.StatesData);

  }
}
