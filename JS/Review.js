document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll(".star");
    const feedback = document.querySelector(".feedback");
    const submitBtn = document.querySelector(".submit-btn");
    const confirmationMessage = document.querySelector(".confirmation-message");
    let selectedRating = 0;
  
    stars.forEach((star, index) => {
      // Highlight stars on hover
      star.addEventListener("mouseover", () => {
        highlightStars(index + 1);
      });
  
      // Reset stars on mouseout
      star.addEventListener("mouseout", () => {
        highlightStars(selectedRating);
      });
  
      // Set the rating on click
      star.addEventListener("click", () => {
        selectedRating = index + 1;
        highlightStars(selectedRating);
      });
    });
  
    // Highlight stars based on the rating
    function highlightStars(rating) {
      stars.forEach((star, index) => {
        if (index < rating) {
          star.classList.add("selected");
        } else {
          star.classList.remove("selected");
        }
      });
    }
  
    // Submit button functionality
    submitBtn.addEventListener("click", () => {
      if (selectedRating === 0) {
        confirmationMessage.textContent = "Please select a star rating before submitting.";
        confirmationMessage.style.color = "#e74c3c";
      } else {
        confirmationMessage.textContent = `Thank you for rating us ${selectedRating} stars!`;
        confirmationMessage.style.color = "#4caf50";
      }
    });
  });
  