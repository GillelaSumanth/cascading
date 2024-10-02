import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gender',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gender.component.html',
  styleUrl: './gender.component.css'
})
export class GenderComponent {
  public Country = [
      { Country: '--Selecct--'},
      { Country: 'INDIA'},
      { Country: 'USA'},
      { Country: 'UK'},
      { Country: 'China' }
  ]
  public Countrys = [
    { Country: '--Selecct--',
     Country1: 'INDIA',
     Country2: 'USA',
    Country3: 'UK',
     Country4: 'China' }
]
  genderValue: string = "";
  public Gender = [
    { gender: '--Select--' },
    { gender: 'Male' },
    { gender: 'Female' },
    { gender: 'Other' }
  ]
  SelectGen() {
    this.Gender.push()
  }
  
  
  onDropdownChange(event: any) {
    // console.log(event.target.value);
    this.genderValue = event.target.value;
    console.log(this.genderValue);
  }

}
