import { Component, OnInit } from '@angular/core';
import { CharacterCrudService } from './../services/character-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements OnInit {

  Characters: any = [];

  constructor(
    private characterCrudService: CharacterCrudService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllCharacters();
  }

  gotocreate() {
    this.router.navigateByUrl("/create");
  }

  ionViewDidEnter() {
    this.characterCrudService.getCharacters().subscribe((response) => {
      this.Characters = response;
    })
  }

  getAllCharacters() {
    console.log("alola1");
    this.characterCrudService.getCharacters().subscribe(response => {
      this.Characters = response;
    });
    console.log("alola2");
  }

  removeCharacter(character, i) {
    if (window.confirm('Are you sure')) {
      this.characterCrudService.deleteCharacter(character.id)
        .subscribe(() => {
          this.ionViewDidEnter();
          console.log('Character deleted!')
        }
        )
    }
  }

}