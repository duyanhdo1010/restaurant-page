/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeView)
/* harmony export */ });
// create home view

function homeView() {

    const home = document.createElement('div');
    home.classList.add('home');

    const homeHeader = document.createElement('div');
    homeHeader.classList.add('heading-container')
    homeHeader.textContent = 'Duy Anh\'s Restaurant'

    const homeIntroduce  = document.createElement('div');
    homeIntroduce.classList.add('introduce');
    const review = document.createElement('p');
    review.classList.add('review');
    review.textContent = 'The best restaurant i\'ve visited in my whole life.'
    const customer = document.createElement('p');
    customer.classList.add('customer');
    customer.textContent = 'Joe Bastianich'
    homeIntroduce.append(review, customer);

    const hours = document.createElement('div');
    hours.classList.add('hours');
    const hoursHeader = document.createElement('h3');
    hoursHeader.textContent = 'Hours';
    hours.appendChild(hoursHeader);
    const days = [
        { class: 'sunday', text: 'Sunday: 8am - 8pm' },
        { class: 'monday', text: 'Monday: 6am - 6pm' },
        { class: 'tuesday', text: 'Tuesday: 6am - 6pm' },
        { class: 'wednesday', text: 'Wednesday: 6am - 6pm' },
        { class: 'thursday', text: 'Thursday: 6am - 10pm' },
        { class: 'friday', text: 'Friday: 6am - 10pm' },
        { class: 'saturday', text: 'Saturday: 8am - 10pm' },
      ];

      days.forEach(day => {
        const p = document.createElement('p');
        p.className = day.class;
        p.textContent = day.text;
        hours.appendChild(p);
      });

    const location = document.createElement('div');
    location.className = 'location';
    const locationHeader = document.createElement('h3');
    locationHeader.textContent = 'Location';
    const address = document.createElement('p');
    address.className = 'address'
    address.textContent = 'Ha Noi, Viet Nam'
    location.append(locationHeader, address);

    home.append(homeHeader, homeIntroduce, hours, location)

    return home
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDRDQUE0QztBQUN0RCxVQUFVLDRDQUE0QztBQUN0RCxVQUFVLDhDQUE4QztBQUN4RCxVQUFVLGtEQUFrRDtBQUM1RCxVQUFVLGlEQUFpRDtBQUMzRCxVQUFVLDZDQUE2QztBQUN2RCxVQUFVLGlEQUFpRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGNyZWF0ZSBob21lIHZpZXdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVWaWV3KCkge1xyXG5cclxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xyXG5cclxuICAgIGNvbnN0IGhvbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvbWVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGluZy1jb250YWluZXInKVxyXG4gICAgaG9tZUhlYWRlci50ZXh0Q29udGVudCA9ICdEdXkgQW5oXFwncyBSZXN0YXVyYW50J1xyXG5cclxuICAgIGNvbnN0IGhvbWVJbnRyb2R1Y2UgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob21lSW50cm9kdWNlLmNsYXNzTGlzdC5hZGQoJ2ludHJvZHVjZScpO1xyXG4gICAgY29uc3QgcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcmV2aWV3LmNsYXNzTGlzdC5hZGQoJ3JldmlldycpO1xyXG4gICAgcmV2aWV3LnRleHRDb250ZW50ID0gJ1RoZSBiZXN0IHJlc3RhdXJhbnQgaVxcJ3ZlIHZpc2l0ZWQgaW4gbXkgd2hvbGUgbGlmZS4nXHJcbiAgICBjb25zdCBjdXN0b21lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGN1c3RvbWVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbWVyJyk7XHJcbiAgICBjdXN0b21lci50ZXh0Q29udGVudCA9ICdKb2UgQmFzdGlhbmljaCdcclxuICAgIGhvbWVJbnRyb2R1Y2UuYXBwZW5kKHJldmlldywgY3VzdG9tZXIpO1xyXG5cclxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG4gICAgY29uc3QgaG91cnNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaG91cnNIZWFkZXIudGV4dENvbnRlbnQgPSAnSG91cnMnO1xyXG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNIZWFkZXIpO1xyXG4gICAgY29uc3QgZGF5cyA9IFtcclxuICAgICAgICB7IGNsYXNzOiAnc3VuZGF5JywgdGV4dDogJ1N1bmRheTogOGFtIC0gOHBtJyB9LFxyXG4gICAgICAgIHsgY2xhc3M6ICdtb25kYXknLCB0ZXh0OiAnTW9uZGF5OiA2YW0gLSA2cG0nIH0sXHJcbiAgICAgICAgeyBjbGFzczogJ3R1ZXNkYXknLCB0ZXh0OiAnVHVlc2RheTogNmFtIC0gNnBtJyB9LFxyXG4gICAgICAgIHsgY2xhc3M6ICd3ZWRuZXNkYXknLCB0ZXh0OiAnV2VkbmVzZGF5OiA2YW0gLSA2cG0nIH0sXHJcbiAgICAgICAgeyBjbGFzczogJ3RodXJzZGF5JywgdGV4dDogJ1RodXJzZGF5OiA2YW0gLSAxMHBtJyB9LFxyXG4gICAgICAgIHsgY2xhc3M6ICdmcmlkYXknLCB0ZXh0OiAnRnJpZGF5OiA2YW0gLSAxMHBtJyB9LFxyXG4gICAgICAgIHsgY2xhc3M6ICdzYXR1cmRheScsIHRleHQ6ICdTYXR1cmRheTogOGFtIC0gMTBwbScgfSxcclxuICAgICAgXTtcclxuXHJcbiAgICAgIGRheXMuZm9yRWFjaChkYXkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgcC5jbGFzc05hbWUgPSBkYXkuY2xhc3M7XHJcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IGRheS50ZXh0O1xyXG4gICAgICAgIGhvdXJzLmFwcGVuZENoaWxkKHApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbG9jYXRpb24uY2xhc3NOYW1lID0gJ2xvY2F0aW9uJztcclxuICAgIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcclxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBhZGRyZXNzLmNsYXNzTmFtZSA9ICdhZGRyZXNzJ1xyXG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICdIYSBOb2ksIFZpZXQgTmFtJ1xyXG4gICAgbG9jYXRpb24uYXBwZW5kKGxvY2F0aW9uSGVhZGVyLCBhZGRyZXNzKTtcclxuXHJcbiAgICBob21lLmFwcGVuZChob21lSGVhZGVyLCBob21lSW50cm9kdWNlLCBob3VycywgbG9jYXRpb24pXHJcblxyXG4gICAgcmV0dXJuIGhvbWVcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==