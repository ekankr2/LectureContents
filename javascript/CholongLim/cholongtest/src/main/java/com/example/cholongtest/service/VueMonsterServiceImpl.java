package com.example.cholongtest.service;

import com.example.cholongtest.entity.Monster;
import com.example.cholongtest.repository.VueBoardRepository;
import com.example.cholongtest.repository.VueMonsterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VueMonsterServiceImpl implements VueMonsterService {

    @Autowired
    private VueMonsterRepository repository;

    @Override
    public void register(Monster monster) throws Exception {
        repository.create(monster);
    }

    @Override
    public List<Monster> list() throws Exception {
        return repository.list();
    }

    @Override
    public Monster read(Integer monsterNo) throws Exception {
        return repository.read(monsterNo);
    }

    @Override
    public void remove(Integer monsterdNo) throws Exception {
        repository.delete(monsterdNo);
    }

    @Override
    public void modify(Monster monster) throws Exception {
        repository.update(monster);
    }
}
