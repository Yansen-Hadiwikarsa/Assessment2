package net.yorksolutions.backend;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.UUID;

@Entity
public class BackendUserId {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) //this is to automatically generated the ID

    UUID id;
    String username;
    String password;

    public BackendUserId(){

    }

    //this one is used for BackendUserSignUp purposes.
    public BackendUserId(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
