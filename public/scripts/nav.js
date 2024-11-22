import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

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
        await createUserWithEmailAndPassword(auth, email, password);
        // TODO: Store additional user data (username) in Firebase
        window.location.href = './index.html';
    } catch (error) {
        alert('Signup failed: ' + error.message);
    }
});

// Check auth state
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is already logged in, redirect to home
        window.location.href = './index.html';
    }
}); 