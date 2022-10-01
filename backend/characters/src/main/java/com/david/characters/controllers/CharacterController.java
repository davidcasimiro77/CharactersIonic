package com.david.characters.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.david.characters.entity.models.Character;
import com.david.characters.entity.services.ICharacterService;

@RestController
@CrossOrigin(origins = "*")
public class CharacterController {

	@Autowired
	ICharacterService characterService;
	
	@GetMapping("/characters")
	public List<Character> getAllCharacters(){
		return characterService.getAll();
	}
	
	@GetMapping("/characters/{id}")
	public Character getOne(@PathVariable(value = "id") long id) {
		return characterService.get(id);
	}
	
	@PostMapping("/characters")
	public void post(Character character) {
		characterService.post(character);
	}
	
	@PutMapping("/characters/{id}")
	public void put(Character character, @PathVariable(value = "id") long id) {
		characterService.put(character, id);
	}
	
	@DeleteMapping("/characters/{id}")
	public void delete(@PathVariable(value = "id") long id) {
		characterService.delete(id);
	}
}
