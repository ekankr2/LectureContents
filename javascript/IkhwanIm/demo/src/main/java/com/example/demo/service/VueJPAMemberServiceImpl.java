package com.example.demo.service;

import com.example.demo.entity.VueMember;
import com.example.demo.repository.VueJPAMemberRepository;
import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

@Service
@Lazy
@Slf4j
public class VueJPAMemberServiceImpl implements VueJPAMemberService {

    @Autowired
    private VueJPAMemberRepository repository;

    @Override
    public void register(VueMember member) throws Exception {
        repository.save(member);

    }
}