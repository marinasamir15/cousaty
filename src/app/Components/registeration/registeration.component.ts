import { AuthService } from './../../shared/services/auth.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-registeration',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css'
})
export class RegisterationComponent {
  constructor(private _AuthService:AuthService){}
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required]),
    phone: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required]),
    repassword: new FormControl(null,[Validators.required]),
    
    profileImage: new FormControl(null),
  });
  selectedFileName: string = '';

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;
      this.registerForm.patchValue({ profileImage: file });
    }
  }

  // onSubmit(): void {
  //   if (this.registerForm.valid) {
  //     console.log(this.registerForm.value);
  //   }
  // }
  handleForm(){
  
    console.log(this.registerForm.value);
    if(this.registerForm.valid){
      this._AuthService.setRegister(this.registerForm.value).subscribe(
        {
          next:(response)=>{
            console.log(response)
          },
          error:(err)=>{
           console.log(err)
          }
        }
      )
    }
   
  }
}
