import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientAddEditConstructorService } from './add-edit-constructor.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.scss',
  standalone: false
})
export class AddEditComponent {
  public clientForm!: FormGroup;
  constructor(private readonly constructorService:ClientAddEditConstructorService) {
    this.initFormData();
  }

  //#region Inicialización de librerias
  public initFormData():void{
    this.clientForm = this.constructorService.initFormData();
  }
  //#endregion Inicialización de librerias
}
