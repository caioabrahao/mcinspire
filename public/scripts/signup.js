import { auth } from './firebase-config.js';

// DOM Elements
const signupForm = document.getElementById('signupForm');

// Handle signup form submission
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const username = document.getElementById('username').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    try {
        // Create the user account
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        
        // Add the display name (username)
        await userCredential.user.updateProfile({
            displayName: username
        });

        console.log('User created successfully:', userCredential.user);
        window.location.href = './success.html';
    } catch (error) {
        console.error('Signup error:', error);
        alert('Signup failed: ' + error.message);
    }
});