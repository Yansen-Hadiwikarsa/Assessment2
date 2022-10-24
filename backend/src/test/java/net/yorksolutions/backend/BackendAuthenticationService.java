package net.yorksolutions.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Optional;
import java.util.UUID;

@Service
public class BackendAuthenticationService {

    private final BackendUserIdRepository backendUserIdRepository;
    private HashMap<UUID, UUID> tokenMap;

    //Autowire is for telling Springboot to fill data for us.
    @Autowired
    public BackendAuthenticationService(@NonNull BackendUserIdRepository backendUserIdRepository) {
        this.backendUserIdRepository = backendUserIdRepository;
        this.tokenMap = new HashMap<>(); //this is to initialize the tokenMap
    }

    // purpose of this code below is for making logout and login function
    public UUID BackendUserLogin (String username, String password){
        //refer to BackendUserIdRepository for the function for username and password function
        Optional<BackendUserId> possibilityUser = this.backendUserIdRepository.findByUsernameAndPassword(username,password);
        if (possibilityUser.isEmpty())
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED); //UNAUTHORIZED purpose is to stop any codes to run and send a response, when the user ID entered is wrong.


        UUID token = UUID.randomUUID(); //this is to randomly generating random UUID to fulfil tokenMap
        BackendUserId backendUserId = possibilityUser.get();
        this.tokenMap.put(token, backendUserId.id); //tokenMap is where the token and userID is being stored.
        return token;
    }

    //This is for logout based on the FrontendLogout.js and frontendReducer.frontendLogout
    public void BackendUserLogout (UUID token){
        if (!tokenMap.containsKey(token))
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "TOKEN DOES NOT EXIST");
        tokenMap.remove(token);
    }

    public void BackendUserSignup(String username, String password) {
        if(backendUserIdRepository.backendUsernameAlreadyExist(username)) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "ERROR! User already exist!");
        }
        //IF statement is passed, then this will implemented:
        BackendUserId backendNewUserAccount = new BackendUserId(username, password);
        backendUserIdRepository.save(backendNewUserAccount); //this is to save the backendNewUserAccount to the database.
    }
}
