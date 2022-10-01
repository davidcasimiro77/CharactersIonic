import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CharacterCrudService } from './../services/character-crud.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit {

  updateCharacterFg: FormGroup;
  id: any;

  constructor(
    private characterCrudService: CharacterCrudService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.fetchCharacter(this.id);
    this.updateCharacterFg = this.formBuilder.group({
      real_name: [''],
      alias: [''],
      rol: [''],
      status: [''],
      origin: ['']
    })
  }

  fetchCharacter(id) {
    this.characterCrudService.getCharacter(id).subscribe((data) => {
      this.updateCharacterFg.setValue({
        real_name: data['real_name'],
        alias: data['alias'],
        rol: data['rol'],
        status: data['status'],
        origin: data['origin']
      });
    });
  }

  onSubmit() {
    if (!this.updateCharacterFg.valid) {
      return false;
    } else {
      this.characterCrudService.updateCharacter(this.id, this.updateCharacterFg.value)
        .subscribe(() => {
          this.updateCharacterFg.reset();
          this.router.navigate(['/list']);
        })
    }
  }

}