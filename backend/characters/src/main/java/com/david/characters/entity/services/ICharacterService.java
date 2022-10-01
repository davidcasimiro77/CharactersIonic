package com.david.characters.entity.services;

import java.util.List;

import com.david.characters.entity.models.Character;

public interface ICharacterService {
	public Character get(long id);
	public List<Character> getAll();
	public void post(Character character);
	public void put(Character character, long id);
	public void delete(long id);
}
