# Events Organizer Application

This is a simple web application for organizing events. It allows users to add, view, and remove events.

## Technologies Used

- **HTML**: Used for structuring the web page.
- **CSS**: Used for styling the web page.
- **JavaScript**: Used for the application logic.

## How It Works

### Adding Events

- Users can input event details such as event name, date, and notes.
- When the "SUBMIT" button is clicked, the `addEvent()` function is called.
- The function retrieves the input values, validates them, and creates an event object.
- The event object is then added to the local storage.
- The events list is reloaded to reflect the new event.

### Loading Events

- When the page loads (`window.onload` event), the `loadEvents()` function is called.
- This function retrieves events from local storage and displays them on the page.
- Each event is displayed as a list item with its details and a "Remove" button.

### Removing Events

- Clicking the "Remove" button (represented by "X") next to an event calls the `deleteEvent()` function.
- This function removes the selected event from the local storage and reloads the events list.

## Accessing the Application

You can access the live version of the application [here](https://events-organizer.netlify.app/).
