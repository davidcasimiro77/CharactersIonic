package com.david.characters.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.david.characters.entity.models.Character;

public interface ICharacterDao extends CrudRepository<Character, Long>{

}
