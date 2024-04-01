// Load events from local storage on page load
window.onload = function () {
  loadEvents();
};

function addEvent() {
  const eventInput = document.getElementById("event-input").value;
  const dateInput = document.getElementById("date-input").value;
  const notesInput = document.getElementById("notes-input").value;

  if (eventInput === "" || dateInput === "" || notesInput === "") {
    alert("Please fill out all fields");
    return;
  }

  const event = {
    event: eventInput,
    date: dateInput,
    notes: notesInput,
  };

  // Get existing events from local storage or initialize an empty array
  let events = JSON.parse(localStorage.getItem("events")) || [];
  events.push(event);

  // Save events to local storage
  localStorage.setItem("events", JSON.stringify(events));

  // Reload events list
  loadEvents();

  // Clear input fields after adding the event
  document.getElementById("event-input").value = "";
  document.getElementById("date-input").value = "";
  document.getElementById("notes-input").value = "";
}

function loadEvents() {
  const eventsList = document.getElementById("events-list");
  eventsList.innerHTML = ""; // Clear the previous list

  const events = JSON.parse(localStorage.getItem("events")) || [];

  events.forEach(function (event, index) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${event.event} - ${event.date} - ${event.notes}</span>
                      <button id="delBtn" onclick="deleteEvent(${index})">Delete</button>
                      <button id="editBtn" onclick="editEvent(${index})">Edit</button>`;
    eventsList.appendChild(li);
  });
}

function deleteEvent(index) {
  const events = JSON.parse(localStorage.getItem("events")) || [];
  events.splice(index, 1); // Remove the event at the given index
  localStorage.setItem("events", JSON.stringify(events));
  loadEvents(); // Reload the events list
}

function editEvent(index) {
  const events = JSON.parse(localStorage.getItem("events")) || [];
  const eventToEdit = events[index];
  const newEvent = prompt(
    "Enter new event details:",
    `${eventToEdit.event} - ${eventToEdit.date} - ${eventToEdit.notes}`
  );
  if (newEvent !== null) {
    const [newEventName, newEventDate, newEventNotes] = newEvent.split(" - ");
    events[index] = {
      event: newEventName,
      date: newEventDate,
      notes: newEventNotes,
    };
    localStorage.setItem("events", JSON.stringify(events));
    loadEvents(); // Reload the events list
  }
}
