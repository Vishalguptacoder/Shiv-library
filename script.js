const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});
// === Daily Motivational Thought Typing Effect (Auto Looping) ===
const thoughts = [
  "Learn. Focus. Grow. Repeat.",
  "Discipline turns dreams into reality.",
  "Push yourself, because no one else is going to do it for you.",
  "Study now, shine later.",
  "One more hour today is one step closer tomorrow."
];

const textElement = document.getElementById("motivational-text");

let currentThoughtIndex = 0;
let i = 0;

function typeWriter() {
  if (i < thoughts[currentThoughtIndex].length) {
    textElement.innerHTML += thoughts[currentThoughtIndex].charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  } else {
    // 0.5 second pause, then start next thought
    setTimeout(() => {
      // Clear current text
      textElement.innerHTML = "";
      // Move to next thought (loop back if at end)
      currentThoughtIndex = (currentThoughtIndex + 1) % thoughts.length;
      i = 0;
      typeWriter();
    }, 500); // 0.5 second = 500ms
  }
}

typeWriter();
// TOP PERFORMER//

// Dummy data — replace with real student data from backend later
const students = [
  { name: "Sadhna", attendance: 99 },
  { name: "Alok Gupta", attendance: 99 },
  { name: "Kanak", attendance: 98 },
  { name: "Krishna Chaudhary", attendance: 97 },
  { name: "Rishabh Chauhan", attendance: 96 },
  { name: "Deepak", attendance: 94 },
  { name: "Atul Dubey", attendance: 90 },
  { name: "Vikas", attendance: 90 },
];

// Rank badge titles
const badges = [" #1 Conqueror 🏆 ", " #2 Diamond 💎", "#3 Platinum 🥇", "#4 Gold 🥈", "#5 Silver 🥉"];

// Sort by attendance (highest first)
const sortedStudents = students.sort((a, b) => b.attendance - a.attendance);
const topFive = sortedStudents.slice(0, 5);

const container = document.getElementById("topPerformers");

topFive.forEach((student, index) => {
  const card = document.createElement("div");
  card.classList.add("performer-card");
  card.innerHTML = `
      <div class="badge">${badges[index]}</div>
      <h3>${student.name}</h3>
      <p>Attendance: ${student.attendance}%</p>
    `;
  container.appendChild(card);
});

//this is testimonial faq//
const questions = document.querySelectorAll('.faq-question');
questions.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});
// this is for back to top//
document.getElementById("backToTopBtn").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});




// this section is for AI//
// Auto popup greeting
const popup = document.getElementById("shiv-ai-message");
function showPopup() {
  popup.classList.add("show");
  setTimeout(() => popup.classList.remove("show"), 5000);
}
setInterval(showPopup, 1000);

// Toggle chatbox
const chatbox = document.getElementById("shiv-ai-chatbox");
const bubbleBtn = document.getElementById("shiv-ai-btn");
const closeChat = document.getElementById("close-chat");

bubbleBtn.addEventListener("click", () => {
  chatbox.style.display = "flex";
});

closeChat.addEventListener("click", () => {
  chatbox.style.display = "none";
});

// Chat logic
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chatBody = document.getElementById("chatbox-body");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const msg = userInput.value.trim();
  if (msg === "") return;
  appendMessage("user", msg);
  userInput.value = "";
  setTimeout(() => getAIReply(msg), 500);
}

function appendMessage(sender, text) {
  const msgDiv = document.createElement("div");
  msgDiv.className = sender === "user" ? "user-message" : "ai-message";
  msgDiv.innerText = text;
  chatBody.appendChild(msgDiv);
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Dummy AI replies
function getAIReply(input) {
  input = input.toLowerCase();
  let reply = "Sorry, I didn't understand that 😅 i can only give you answer of fee,attendance,location,contact and timing.";

  if (input.includes("fee")) {
    reply = "You can check your fee status in the Fee section.";
  } else if (input.includes("attendance")) {
    reply = "Attendance is updated daily. Use the 'Scan for Attendance' button!";
  } else if (input.includes("location")) {
    reply = "We are located at Shiv Library, 2nd floor, [Jolhiniya chauraha,Shukrauli,near DTDC sahaj jan(near Singh medical store)]";
  } else if (input.includes("contact")) {
    reply = "You can contact us at 7518455083 📞";
  } else if (input.includes("hours") || input.includes("timing")) {
    reply = "Library is open daily for 24 hours.";
  } else if (input.includes("hii") || input.includes("hello")) {
    reply = "Hi ! I'm Shiv AI, How can I help you today!😅";
  } else if (input.includes("top performer") || input.includes("top performer criteria")) {
    reply = "Top performer criteria is based on attendance , behaviour, study time, fees, and following the rules of Shiv library";
  }  

  appendMessage("ai", reply);
}

