# SkyBook MVC Handoff

This folder is a front-end prototype for conversion into an MVC project. The current UI uses static HTML, Tailwind CDN classes, local JavaScript, browser storage, and fake interactions. No backend or database is included.

## Page-to-View Map

| Current file                        | MVC view responsibility                   |
| ----------------------------------- | ----------------------------------------- |
| `HOME.html`                         | Home search and trip-type selection       |
| `Flights process 1.html`            | Flight results and fare selection         |
| `Seats process 2.html`              | Seat map and passenger seat assignment    |
| `Passenger Deitales process 3.html` | Passenger identity and passport details   |
| `Login & sign up.html`              | Login and account registration            |
| `Confirm&Pay process 4.html`        | Payment method and booking confirmation   |
| `My Bookings.html`                  | Upcoming, past, and cancelled bookings    |
| `Profile.html`                      | Customer profile and preferences          |
| `About.html`                        | Company information                       |
| `SkyClub.html`                      | SkyClub and private aviation inquiry page |

## Shared Front-End Assets

- `skybook-global.css`: shared header, navigation, booking progress, and responsive shell.
- `skybook-global.js`: shared navigation, active page state, and demo authentication header.

Every HTML page currently references both shared assets.

## Recommended MVC Controllers

- `HomeController`: home page and flight search request.
- `FlightController`: search results, fare selection, and trip mode.
- `SeatController`: seat map and seat assignments.
- `PassengerController`: passenger details validation.
- `AuthController`: login, signup, logout, and return URL handling.
- `PaymentController`: payment validation, payment submission, and confirmation.
- `BookingController`: booking list, booking details, e-ticket, receipt, and cancellation.
- `ProfileController`: profile display and profile updates.
- `SkyClubController`: SkyClub page and inquiry request.

## Recommended Models

- `User`
- `Flight`
- `FareOption`
- `TripSearch`
- `Booking`
- `Passenger`
- `SeatAssignment`
- `Payment`
- `SkyClubInquiry`

## Important Conversion Notes

1. Replace `localStorage` authentication with server authentication and session or cookie state.
2. Replace `sessionStorage` search handoff with a server-side search request, query string, or temporary booking session.
3. Replace static flight arrays with database or service data.
4. Replace static My Bookings demo data with bookings loaded for the authenticated user.
5. Keep the login return URL so Passenger Details can return to Confirm & Pay after authentication.
6. Move inline `onclick` handlers into view-specific JavaScript or controller-backed form actions.
7. Add server-side validation for passenger data, payment fields, seat availability, and booking totals. Client-side validation is only for UX.
8. Replace placeholder `#` and `javascript:void(0)` links with real routes or remove them until the destination exists.
9. Rename files during MVC conversion to route-friendly names. Existing prototype names include spaces, `&`, and the typo `Passenger Deitales`.
10. Replace external image URLs and Tailwind CDN usage with project-managed assets and a production CSS build when deploying.

## Current Prototype Flow

`HOME.html` -> `Flights process 1.html` -> `Seats process 2.html` -> `Passenger Deitales process 3.html` -> Login/Signup -> `Confirm&Pay process 4.html` -> `My Bookings.html`

The UI currently uses fake payment and authentication behavior intentionally. The MVC project should preserve the visual language while moving all business decisions and security checks to the server.
