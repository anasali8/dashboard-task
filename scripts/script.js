pageType = "events";

selected_profile = "projects";

window.onload = function () {
  includeHTML("sidebar", "shared_layout/sidebar.html");
  includeHTML("header", "shared_layout/header.html");
  loadPage("Pages/dashboard.html");
  document.getElementById("sec").classList.remove("content");
  document.getElementById("sec").classList.add("animated");
};

function includeHTML(id, file) {
  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((err) => console.error("Error loading file:", file, err));
}

if (pageType === "profile") {
  includeHTML("profile-card", "shared_layout/profile_Card.html");
  if (selected_profile === "projects") {
    includeHTML("projects", "shared_layout/project.html");
  }
}

function loadPage(page) {
  fetch(page)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("page").innerHTML = data;
    })
    .catch((err) => alert("Error loading page: " + page + "\n" + err));
}



function addCard() {
  var cartona = `  <div class="event-card boxShadow-pink">

                    <div class="card-body border-left-pink">

                        <div class="card-title">

                            <h4> <i class="fa-solid fa-briefcase" style="color: var(--red);"></i> Presentation
                                of the new
                                department </h4>

                            <span class="event-indicator c-danger"> <i class="fa-solid fa-arrow-up"></i> </span>

                        </div>

                        <div class="card-subtitle">
                            <span> Today | 6:00 PM </span>
                            <div class="time"> <i class="fa-solid fa-clock"></i> 4 hr </div>
                        </div>
                    </div>

                </div>  `;
  document
    .querySelector(".event-grid")
    .insertAdjacentHTML("beforeend", cartona);
}

function openProfile() {
    document.getElementById('sec').classList.remove('animated');
    document.getElementById('sec').classList.add('content');
    document.getElementById('dashboard').classList.remove('active');
    openPage("profile");
    // set animated class to the profile button
    setTimeout(() => {
        document.getElementById("sec").classList.remove("content");
        document.getElementById("sec").classList.add("animated");
    }, 30);
}

function openEvents() {
    document.getElementById('dashboard').classList.add('active');
    openPage("events");document.getElementById("sec").classList.remove("content");
    document.getElementById("sec").classList.add("animated");

}

// page To Open
function openPage(type) {
  if (type === "events" && pageType !== "events") {
    pageType = "events";
    loadPage("Pages/dashboard.html");
  } else if (type === "profile" && pageType !== "profile") {
    
    pageType = "profile";
    loadPage("Pages/profile.html");
    includeHTML("profile-card", "shared_layout/profile_Card.html");
    includeHTML("projects", "shared_layout/project.html");
    selected_profile = "projects";
  }
}

// add event listener to the profile button
function getProjectsContent() {
    document.getElementById('projects').classList.remove('animated');
    document.getElementById('projects').classList.add('content');
  var v = document.getElementById("projects-btn");
  if (v.innerHTML.toLowerCase() != selected_profile) {
    selected_profile = "projects";
    document.getElementById("projects-btn").classList.add("btn-active");
    document.getElementById("team-btn").classList.remove("btn-active");
    document.getElementById("vacations-btn").classList.remove("btn-active");
    includeHTML("projects", "shared_layout/project.html");
    
    setTimeout(() => {
        document.getElementById("projects").classList.remove("content");
        document.getElementById("projects").classList.add("animated");
    }, 30);
  }
}

function getTeamContent() {

    document.getElementById('team').classList.remove('animated');
    document.getElementById('team').classList.add('content');

  var v = document.getElementById("team-btn");
  if (v.innerHTML.toLowerCase() != selected_profile) {
    selected_profile = "team";
    document.getElementById("projects-btn").classList.remove("btn-active");
    document.getElementById("team-btn").classList.add("btn-active");
    document.getElementById("vacations-btn").classList.remove("btn-active");
    includeHTML("projects", "shared_layout/team.html");

    setTimeout(() => {
        document.getElementById("team").classList.remove("content");
        document.getElementById("team").classList.add("animated");
    }, 30);

  }
}
