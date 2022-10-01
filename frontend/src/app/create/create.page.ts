import { Component, OnInit, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CharacterCrudService } from './../services/character-crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {

  characterForm: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private characterCrudService: CharacterCrudService
  ) {
    this.characterForm = this.formBuilder.group({
      real_name: [''],
      alias: [''],
      rol: [''],
      status: [''],
      origin: ['']
    })
  }

  ngOnInit() { }

  onSubmit() {
    if (!this.characterForm.valid) {
      return false;
    } else {
      this.characterCrudService.createCharacter(this.characterForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.characterForm.reset();
            this.router.navigate(['/list']);
          })
        });
    }
  }
  gotolist() {
    this.router.navigateByUrl("/list");
  }
}