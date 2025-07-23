package com.pdk.userservice.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.pdk.userservice.dto.UserDTO;
import com.pdk.userservice.entity.User;
import com.pdk.userservice.exception.UserException;
import com.pdk.userservice.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void registerUser(UserDTO userDTO) throws UserException {
        Optional<User> user = userRepository.findByEmail(userDTO.getEmail());
        if (user.isPresent()) {
            throw new UserException("User already exists with this email");
        }
        userDTO.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        userRepository.save(userDTO.toUser());
    }

    @Override
    public UserDTO loginUser(UserDTO userDTO) throws UserException {
        Optional<User> user = userRepository.findByEmail(userDTO.getEmail());
        if (user.isPresent() && passwordEncoder.matches(userDTO.getPassword(), user.get().getPassword())) {
            user.get().setPassword(null);
            return user.get().toUserDTO();
        } else {
            throw new UserException("Invalid email or password");
        }
    }

    @Override
    public UserDTO getUserById(Long id) throws UserException {
        return userRepository.findById(id).orElseThrow(() -> new UserException("User not found with id: " + id))
                .toUserDTO();
    }

    @Override
    public void updateUser(Long id, UserDTO userDTO) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateUser'");
    }

    @Override
    public UserDTO getUserByEmail(String email) throws UserException {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UserException("User not found with email: " + email)).toUserDTO();
    }

}
