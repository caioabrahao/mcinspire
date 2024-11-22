import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

// DOM Elements
const loginForm = document.getElementById('loginForm');

// Handle login form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = './index.html';
    } catch (error) {
        alert('Login failed: ' + error.message);
    }
});

// Check auth state
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is already logged in, redirect to home
        window.location.href = './index.html';
    }
}); 