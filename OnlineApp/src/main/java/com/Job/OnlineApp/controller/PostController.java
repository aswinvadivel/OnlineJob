package com.Job.OnlineApp.controller;

import com.Job.OnlineApp.repository.PostRepository;
import com.Job.OnlineApp.model.Post;
import com.Job.OnlineApp.repository.SearchRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class PostController {
    @Autowired
    PostRepository repo;

    @Autowired
    SearchRepositoryImpl searchRepository;

    @GetMapping(("/allposts"))
    public List<Post> getAllPost() {
        return repo.findAll();
    }

    @GetMapping("/posts/{text}")
    public List<Post> search(@PathVariable String text) {
        return searchRepository.findByText(text);
    }

    @PostMapping("/post")
    public Post addPost(@RequestBody Post post) {

        return repo.save(post);
    }
}
