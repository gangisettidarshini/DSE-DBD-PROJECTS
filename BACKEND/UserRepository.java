package com.capacityconnect.repository;

import com.capacityconnect.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    List<User> findByIsTrainerTrue();
    List<User> findByIsTraineeTrue();
    List<User> findByIsAdminTrue();
    List<User> findByIsApprovedFalse();
    long countByIsTrainerTrue();
    long countByIsTraineeTrue();
    long countByIsAdminTrue();
}
