// Set the date and time for the offer's end
const endDate = new Date("2024-11-17T23:59:59").getTime();

// Update the countdown every second
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = endDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the countdown display
    document.getElementById("days").value = days;
    document.getElementById("hours").value = hours;
    document.getElementById("minutes").value = minutes;
    document.getElementById("seconds").value = seconds;

    // Apply a background color change effect when time is updated
    const inputs = document.querySelectorAll('.count-down-box input');
    inputs.forEach(input => {
        input.style.transition = 'background-color 0.5s ease';
        input.style.backgroundColor = 'lightslategrey'; // Default color
    });

    // If the countdown is over, clear the interval and display a message
    if (timeRemaining < 0) {
        clearInterval(countdown);
    
        // Update the HTML content with a themed message and image
        document.getElementById("count-down").innerHTML = `
            <div style="text-align: center; font-family: Arial, sans-serif; color: #ff4d4d;">
                <img src="./images/DALL·E 2024-11-16 15.26.25 - A vibrant and festive scene symbolizing the end of a Diwali sale, featuring a glowing countdown timer fading into sparks and colorful fireworks in the.webp" alt="Offer Ended" style="width: 300px; height: auto; margin-bottom: 20px; border-radius:10px;">
                <h2 style="font-size: 24px; font-weight: bold;">Oops! The offer has ended!</h2>
                <p style="font-size: 16px;">Stay tuned for upcoming deals!</p>
            </div>
        `;
    }
    
}, 1000);
