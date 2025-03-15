const quotes = {
    like: [
        "Thank you for your support! 😊",
        "Your feedback keeps us going! 🚀",
        "We're glad you liked it! ❤️",
        "You're awesome! Thanks for your support! 🎉",
        "Your positivity means the world to us! 🌎"
    ],
    dislike: [
        "We appreciate your honesty! 💬",
        "Your feedback helps us improve! 🔧",
        "We're sorry to hear that! 😔 Let us know how we can do better.",
        "Every piece of feedback helps us grow! 📈",
        "Thanks for your input! We'll strive to improve. 🛠️"
    ]
};

function selectFeedback(type) {
    const randomQuote = quotes[type][Math.floor(Math.random() * quotes[type].length)];
    showPopup(randomQuote);
}

function submitReview() {
    const reviewText = document.getElementById("review").value;
    if (reviewText.trim() === "") {
        showPopup("Please enter your feedback before submitting!");
    } else {
        showPopup("Thank you for your feedback! 😊");
        document.getElementById("review").value = "";
    }
}

function showPopup(message) {
    document.getElementById("popupMessage").innerText = message;
    document.getElementById("popupModal").style.display = "block";
}

function closePopup() {
    document.getElementById("popupModal").style.display = "none";
}