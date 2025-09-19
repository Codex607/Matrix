// Global state
let currentUser = null;
let isAdmin = false;

// DOM Elements
const loginModal = document.getElementById('loginModal');
const adminModal = document.getElementById('adminModal');
const userDashboard = document.getElementById('userDashboard');
const adminDashboard = document.getElementById('adminDashboard');
const commandList = document.getElementById('commandList');
const commandSearch = document.getElementById('commandSearch');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeCommandSearch();
    initializeScrollEffects();
    initializeSmoothScrolling();
});

// Command Search Functionality
function initializeCommandSearch() {
    if (commandSearch) {
        commandSearch.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const commandItems = document.querySelectorA