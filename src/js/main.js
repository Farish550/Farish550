// EasyFood - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Search form submission
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const location = document.getElementById('location').value;
            const foodType = document.getElementById('foodType').value;
            const priceRange = document.getElementById('priceRange').value;
            
            // In a real implementation, this would redirect to the listings page with filters
            alert(`Searching for restaurants in ${location} with cuisine type: ${foodType || 'any'} and price range: ${priceRange || 'any'}`);
        });
    }
    
    // Restaurant card click handling
    const restaurantCards = document.querySelectorAll('.restaurant-card');
    restaurantCards.forEach(card => {
        card.addEventListener('click', function() {
            // Prevent navigation if clicking on an actual link inside the card
            if (event.target.tagName !== 'A') {
                const restaurantName = this.querySelector('h3').textContent;
                console.log(`Navigating to details for: ${restaurantName}`);
                // In a real implementation: window.location.href = 'detail.html';
            }
        });
    });
    
    // Save restaurant functionality
    const saveButtons = document.querySelectorAll('.save-btn');
    saveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const restaurantName = document.querySelector('.restaurant-header h1')?.textContent || 'this restaurant';
            alert(`Restaurant "${restaurantName}" saved to your favorites!`);
        });
    });
    
    // Booking modal functionality
    const bookButtons = document.querySelectorAll('.book-btn');
    const modal = document.getElementById('bookingModal');
    const closeBtn = document.querySelector('.close');
    
    bookButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'block';
        });
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    // Booking form submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            alert(`Table booking request submitted for ${name}. We'll contact you at ${email} shortly.`);
            modal.style.display = 'none';
            bookingForm.reset();
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            
            alert(`Thank you ${fullName}! Your message has been sent. We'll contact you at ${email} soon.`);
            contactForm.reset();
        });
    }
    
    // Filter functionality on listings page
    const filterLocation = document.getElementById('filterLocation');
    const filterCuisine = document.getElementById('filterCuisine');
    const filterPrice = document.getElementById('filterPrice');
    const filterHalal = document.getElementById('filterHalal');
    
    if (filterLocation && filterCuisine && filterPrice && filterHalal) {
        // Add event listeners for all filter controls
        [filterLocation, filterCuisine, filterPrice, filterHalal].forEach(filter => {
            if (filter) {
                filter.addEventListener('change', function() {
                    // In a real implementation, this would filter the restaurant list
                    console.log('Filters updated:', {
                        location: filterLocation.value,
                        cuisine: filterCuisine.value,
                        price: filterPrice.value,
                        halal: filterHalal.value
                    });
                });
            }
        });
    }
    
    // Image gallery functionality
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            if (mainImage) {
                mainImage.src = this.src;
            }
        });
    });
});

// Utility functions
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        backgroundColor: type === 'error' ? '#f44336' : type === 'success' ? '#4CAF50' : '#2196F3',
        color: 'white',
        borderRadius: '4px',
        zIndex: '9999',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
    });
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}