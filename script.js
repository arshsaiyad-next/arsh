const wishes = [
    "May your birthday be filled with sunshine and smiles, laughter and love.",
    "Wishing you a year filled with the same joy you bring to others.",
    "Happy Birthday! May your day be as special as you are.",
    "Cheers to you on your birthday! May it be filled with happiness and love.",
    "On your special day, I wish you all the happiness in the world.",
    "Happy Birthday! Enjoy your day to the fullest!",
    "May your birthday be the start of a year filled with good luck, good health, and much happiness.",
    "Wishing you a day that’s as special as you are!",
];

document.getElementById('newWishBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * wishes.length);
    document.getElementById('wish').innerText = wishes[randomIndex];
});
const audio = new Audio('birthday-song.mp3');
audio.play();
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
];

document.getElementById('newWishBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * wishes.length);
    document.getElementById('wish').innerText = wishes[randomIndex];
    
    const randomImageIndex = Math.floor(Math.random() * images.length);
    const wishImage = document.getElementById('wishImage');
    wishImage.src = images[randomImageIndex];
    wishImage.style.display = 'block';
});
document.getElementById('addWishBtn').addEventListener('click', function() {
    const userWish = document.getElementById('userWish').value;
    if (userWish) {
        wishes.push(userWish);
        document.getElementById('userWish').value = '';
        alert('Your wish has been added!');
    }
});
function countdownToBirthday(birthday) {
    const now = new Date();
    const nextBirthday = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());
    if (nextBirthday < now) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    const timeDiff = nextBirthday - now;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').innerText = `Days until your birthday: ${days}`;
}

countdownToBirthday(new Date('YYYY-MM-DD')); // Replace with actual birthday
function shareOnFacebook() {
    const wish = document.getElementById('wish').innerText;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(wish)}`, '_blank');
}

function shareOnTwitter() {
    const wish = document.getElementById('wish').innerText;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(wish)}`, '_blank');
}
document.getElementById('themeSelector').addEventListener('change', function() {
    const selectedTheme = this.value;
    document.body.className = selectedTheme; // Assuming CSS classes are defined for each theme
});
const quotes = [
    "Count your life by smiles, not tears. Count your age by friends, not years. Happy Birthday!",
    "You are never too old to set another goal or to dream a new dream. Happy Birthday!",
];

document.getElementById('newWishBtn').addEventListener('click', function() {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomQuoteIndex];
});
document.getElementById('sendWishBtn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const wish = document.getElementById('wish').innerText;
    if (email) {
        window.open(`mailto:${email}?subject=Birthday Wish&body=${encodeURIComponent(wish)}`);
    } else {
        alert('Please enter a valid email address.');
    }
});
document.getElementById('submitFeedbackBtn').addEventListener('click', function() {
    const feedback = document.getElementById('feedback').value;
    if (feedback) {
        alert('Thank you for your feedback!');
        document.getElementById('feedback').value = '';
    } else {
        alert('Please enter your feedback before submitting.');
    }
});