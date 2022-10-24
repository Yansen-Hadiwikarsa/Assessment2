package net.yorksolutions.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@CrossOrigin //this is to let our local server 300 to talk to other server 8080.
public class BackendController {

    // line 16-20 is for calling the BackendAuthenticationService into BackendController successfully authorized.
    private final BackendAuthenticationService backendAuthenticationService;
    @Autowired //Autowired is telling springboot to provide arguments.
    public BackendController(@NonNull BackendAuthenticationService backendAuthenticationService){
        this.backendAuthenticationService = backendAuthenticationService;
    }

    @GetMapping("/TestingIndexController")
    public String hello(){
        return "Hello, I am working properly";
    }

    //@RequestParam is needed because username and password parameter entry is required.
    @GetMapping("/BackendUserLogin")
    public UUID BackendUserLogin(@RequestParam String username, @RequestParam String password){
        return this.backendAuthenticationService.BackendUserLogin(username, password); //this is calling the BackendAuthenticationService
    }

    @GetMapping("/BackendUserLogout")
    public void BackendUserLogout(@RequestParam UUID token){
        this.backendAuthenticationService.BackendUserLogout(token); //the token is referring to BackendAuthenticationService
    }

    @GetMapping("/BackendUserSignup")
    public void BackEndUserSignup(@RequestParam String username, @RequestParam String password){
        this.backendAuthenticationService.BackendUserSignup(username, password); //refer to BackendAuthenticationService
    }

}
