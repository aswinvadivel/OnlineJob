package com.Job.OnlineApp.repository;

import com.Job.OnlineApp.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepository extends MongoRepository <Post,String> {
}
