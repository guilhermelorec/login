import { Component } from '@angular/core';
import {FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { NgStyle } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FloatLabelModule, FormsModule, ButtonModule, NgStyle, InputTextModule,  PasswordModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class cadastroComponent {
  nome: string |undefined
  email: string | undefined
  password: string | undefined
}
