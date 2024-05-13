
const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function () {
    setTimeout(() => {
        cross.style.display = 'block';
    }, 200);
    headerbar.style.right = '0%';
});

cross.addEventListener('click', function () {
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
});
 function makeButtonsResponsive() {
            var buttons = document.querySelectorAll('.red_button');
            buttons.forEach(function(button) {
                button.style.fontSize = ''; // Reset font size
                button.style.width = ''; // Reset width
                if (window.innerWidth <= 550) {
                    button.style.fontSize = '14px'; // Adjust font size for smaller screens
                    button.style.width = '100%'; // Make button full width
                }
            });
        }

        // Call the function initially
        makeButtonsResponsive();

        // Add event listener for window resize
        window.addEventListener('resize', function() {
            makeButtonsResponsive();
        });