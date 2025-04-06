# Airtable timeline assignment

## Questions:

- What you like about your implementation.
    - The core timeline functionality is clean, responsive, and visually simple.
    - I implemented zoom controls, inline editing, and drag-and-drop movement—all without relying on external timeline libraries.
    - The codebase is modular, with a clear separation of concerns (Timeline, TimelineItem, ZoomControls, assignLanes, etc.).
- What you would change if you were going to do it again.
    - I would consider using a drag-and-drop library like dnd-kit or react-dnd to better handle the dragging experience, including edge resizing and accessibility concerns.
    - I would implement edge-based resizing to allow users to change the number of days (duration) of an item by adjusting its start or end date directly.
    - I might improve the accessibility of the components (keyboard navigation, ARIA labels).

- How you made your design decisions. For example, if you looked at other timelines for inspiration, please note that.
    - I chose to use React with Vite to quickly set up a clean and modern development environment. This gave me a clear file structure and fast iteration during development.
    - I structured the project into well-organized folders (components, data, utils) to showcase my understanding of maintainable frontend architecture.
    - I used Tailwind CSS to speed up styling and ensure responsiveness without spending too much time on custom CSS.
    - I prioritized implementing the core functionality first (timeline layout, lane assignment, axis, item rendering) and then moved on to the optional enhancements (zoom, inline editing, drag-and-drop) in order of complexity.

- How you would test this if you had more time.
    - I’d write unit tests for utility functions like assignLanes
    - I’d test the layout behavior with edge cases like overlapping items, very short or very long events, and timeline zoom extremes.
    - I would also write visual regression tests to catch any layout breaks when styling changes.

## Starter code:

1. git clone https://github.com/miikEe13/timeline.git
1. Navigate to project directory
2. Run `npm install` to install dependencies
3. Run `npm run dev` to initialize and connect to a node server with your default browser
4. open in browser with the url in the console
