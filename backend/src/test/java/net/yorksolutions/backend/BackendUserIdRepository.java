package net.yorksolutions.backend;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

//@Repository is needed to interact with database, in order to get quaries request with database.
//we only need BackendUserID and UUID because we only need to interact with CRUD with these two for user account.
@Repository
public interface BackendUserIdRepository extends CrudRepository <BackendUserId, UUID> {
   Optional<BackendUserId> findByUsernameAndPassword(String username, String password); //findByUsernameAndPassword is a spring query that mis pronounce can cause error on database request.
   Boolean backendUsernameAlreadyExist(String username);
}

