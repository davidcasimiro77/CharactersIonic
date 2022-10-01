package com.david.characters.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.david.characters.entity.dao.ICharacterDao;
import com.david.characters.entity.models.Character;

@Service
public class CharacterServiceImpl implements ICharacterService{

	@Autowired
	private ICharacterDao characterDao;
	
	@Override
	public Character get(long id) {
		return characterDao.findById(id).get();
	}

	@Override
	public List<Character> getAll() {
		return (List<Character>) characterDao.findAll();
	}

	@Override
	public void post(Character character) {
		characterDao.save(character);	
	}

	@Override
	public void put(Character character, long id) {
		characterDao.findById(id).ifPresent((x)->{
			character.setId(id);
			characterDao.save(character);
		});
	}

	@Override
	public void delete(long id) {
		characterDao.deleteById(id);
	}

}
