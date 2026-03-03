const courses = [
  {
    id: 1,
    title: "React for Beginners",
    price: 499,
  },
  {
    id: 2,
    title: "Node.js Masterclass",
    price: 699,
  },
  {
    id: 3,
    title: "Advanced JavaScript",
    price: 599,
  },
];
const courseContainer = document.querySelector(".course-container");
const browseBtn = document.querySelector(".btn-primary");
function renderCourses() {
  courseContainer.innerHTML = "";

  courses.forEach((course) => {
    const card = document.createElement("div");
    card.classList.add("course-card");

    card.innerHTML = `
      <h3>${course.title}</h3>
      <p>₹${course.price}</p>
    `;

    card.addEventListener("click", () => {
      alert(`Opening ${course.title}`);
    });

    courseContainer.appendChild(card);
  });
}
browseBtn.addEventListener("click", () => {
  document.getElementById("courses").scrollIntoView({
    behavior: "smooth",
  });
});
renderCourses();