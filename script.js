// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.fa-bars');
    let mobileMenu = null;
    
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            if (!mobileMenu) {
                // Create mobile menu if it doesn't exist
                mobileMenu = document.createElement('div');
                mobileMenu.className = 'mobile-menu fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6';
                mobileMenu.innerHTML = `
                    <div class="flex justify-end mb-6">
                        <i class="fas fa-times text-2xl cursor-pointer close-menu"></i>
                    </div>
                    <nav class="flex flex-col space-y-4">
                        <a href="#" class="text-gray-600 hover:text-black py-2 border-b border-gray-200">Home</a>
                        <a href="#" class="text-gray-600 hover:text-black py-2 border-b border-gray-200">About</a>
                        <a href="#" class="text-gray-600 hover:text-black py-2 border-b border-gray-200">News</a>
                        <a href="#" class="text-gray-600 hover:text-black py-2 border-b border-gray-200">Careers</a>
                    </nav>
                    <div class="mt-6">
                        <a href="#" class="bg-black text-white px-4 py-2 rounded flex items-center w-full justify-center">
                            <span class="mr-2">Get Started</span>
                            <i class="fas fa-arrow-down transform rotate-45"></i>
                        </a>
                    </div>
                `;
                document.body.appendChild(mobileMenu);
                
                // Add close functionality
                const closeButton = mobileMenu.querySelector('.close-menu');
                closeButton.addEventListener('click', function() {
                    mobileMenu.classList.remove('active');
                });
            }
            
            // Toggle menu visibility
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Animate platform layers on scroll
    const animateLayers = function() {
        const platformLayers = document.querySelectorAll('.platform-layer');
        platformLayers.forEach((layer, index) => {
            setTimeout(() => {
                layer.classList.add('animate');
            }, index * 200);
        });
    };
    
    // Check if element is in viewport
    const isInViewport = function(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
    
    // Scroll animations
    window.addEventListener('scroll', function() {
        const platformDiagram = document.querySelector('.platform-diagram');
        if (platformDiagram && isInViewport(platformDiagram)) {
            animateLayers();
        }
    });
    
    // Initialize animations if elements are already in viewport
    setTimeout(() => {
        const platformDiagram = document.querySelector('.platform-diagram');
        if (platformDiagram && isInViewport(platformDiagram)) {
            animateLayers();
        }
    }, 500);
});