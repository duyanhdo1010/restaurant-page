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
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactView)
/* harmony export */ });
// create menu view

function contactView() {

    const home = document.createElement('div');
    home.classList.add('home');

    const homeHeader = document.createElement('div');
    homeHeader.classList.add('heading-container')
    homeHeader.textContent = 'Sorry, I\'m too lazy too make contact webpage'

    const homeIntroduce  = document.createElement('div');
    homeIntroduce.classList.add('introduce');
    const review = document.createElement('p');
    review.classList.add('review');
    review.textContent = 'Sorry, I\'m too lazy too make contact webpage'
    const customer = document.createElement('p');
    customer.classList.add('customer');
    customer.textContent = 'Sorry, I\'m too lazy too make contact webpage'
    homeIntroduce.append(review, customer);

    const hours = document.createElement('div');
    hours.classList.add('hours');
    const hoursHeader = document.createElement('h3');
    hoursHeader.textContent = 'Sorry, I\'m too lazy too make contact webpage';
    hours.appendChild(hoursHeader);
    const days = [
        { class: 'sunday', text: 'Sorry, I\'m too lazy too make contact webpage' },
        { class: 'monday', text: 'Sorry, I\'m too lazy too make contact webpage' },
        { class: 'tuesday', text: 'Sorry, I\'m too lazy too make contact webpage' },
        { class: 'wednesday', text: 'Sorry, I\'m too lazy too make contact webpage' },
        { class: 'thursday', text: 'Sorry, I\'m too lazy too make contact webpage' },
        { class: 'friday', text: 'Sorry, I\'m too lazy too make contact webpage' },
        { class: 'saturday', text: 'Sorry, I\'m too lazy too make contact webpage' },
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
    locationHeader.textContent = 'Sorry, I\'m too lazy too make contact webpage';
    const address = document.createElement('p');
    address.className = 'address'
    address.textContent = 'Sorry, I\'m too lazy too make contact webpage'
    location.append(locationHeader, address );

    home.append(homeHeader, homeIntroduce, hours, location)

    return home
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHdFQUF3RTtBQUNsRixVQUFVLHdFQUF3RTtBQUNsRixVQUFVLHlFQUF5RTtBQUNuRixVQUFVLDJFQUEyRTtBQUNyRixVQUFVLDBFQUEwRTtBQUNwRixVQUFVLHdFQUF3RTtBQUNsRixVQUFVLDBFQUEwRTtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGNyZWF0ZSBtZW51IHZpZXdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RWaWV3KCkge1xyXG5cclxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xyXG5cclxuICAgIGNvbnN0IGhvbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvbWVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGluZy1jb250YWluZXInKVxyXG4gICAgaG9tZUhlYWRlci50ZXh0Q29udGVudCA9ICdTb3JyeSwgSVxcJ20gdG9vIGxhenkgdG9vIG1ha2UgY29udGFjdCB3ZWJwYWdlJ1xyXG5cclxuICAgIGNvbnN0IGhvbWVJbnRyb2R1Y2UgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob21lSW50cm9kdWNlLmNsYXNzTGlzdC5hZGQoJ2ludHJvZHVjZScpO1xyXG4gICAgY29uc3QgcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcmV2aWV3LmNsYXNzTGlzdC5hZGQoJ3JldmlldycpO1xyXG4gICAgcmV2aWV3LnRleHRDb250ZW50ID0gJ1NvcnJ5LCBJXFwnbSB0b28gbGF6eSB0b28gbWFrZSBjb250YWN0IHdlYnBhZ2UnXHJcbiAgICBjb25zdCBjdXN0b21lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGN1c3RvbWVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbWVyJyk7XHJcbiAgICBjdXN0b21lci50ZXh0Q29udGVudCA9ICdTb3JyeSwgSVxcJ20gdG9vIGxhenkgdG9vIG1ha2UgY29udGFjdCB3ZWJwYWdlJ1xyXG4gICAgaG9tZUludHJvZHVjZS5hcHBlbmQocmV2aWV3LCBjdXN0b21lcik7XHJcblxyXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XHJcbiAgICBjb25zdCBob3Vyc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBob3Vyc0hlYWRlci50ZXh0Q29udGVudCA9ICdTb3JyeSwgSVxcJ20gdG9vIGxhenkgdG9vIG1ha2UgY29udGFjdCB3ZWJwYWdlJztcclxuICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzSGVhZGVyKTtcclxuICAgIGNvbnN0IGRheXMgPSBbXHJcbiAgICAgICAgeyBjbGFzczogJ3N1bmRheScsIHRleHQ6ICdTb3JyeSwgSVxcJ20gdG9vIGxhenkgdG9vIG1ha2UgY29udGFjdCB3ZWJwYWdlJyB9LFxyXG4gICAgICAgIHsgY2xhc3M6ICdtb25kYXknLCB0ZXh0OiAnU29ycnksIElcXCdtIHRvbyBsYXp5IHRvbyBtYWtlIGNvbnRhY3Qgd2VicGFnZScgfSxcclxuICAgICAgICB7IGNsYXNzOiAndHVlc2RheScsIHRleHQ6ICdTb3JyeSwgSVxcJ20gdG9vIGxhenkgdG9vIG1ha2UgY29udGFjdCB3ZWJwYWdlJyB9LFxyXG4gICAgICAgIHsgY2xhc3M6ICd3ZWRuZXNkYXknLCB0ZXh0OiAnU29ycnksIElcXCdtIHRvbyBsYXp5IHRvbyBtYWtlIGNvbnRhY3Qgd2VicGFnZScgfSxcclxuICAgICAgICB7IGNsYXNzOiAndGh1cnNkYXknLCB0ZXh0OiAnU29ycnksIElcXCdtIHRvbyBsYXp5IHRvbyBtYWtlIGNvbnRhY3Qgd2VicGFnZScgfSxcclxuICAgICAgICB7IGNsYXNzOiAnZnJpZGF5JywgdGV4dDogJ1NvcnJ5LCBJXFwnbSB0b28gbGF6eSB0b28gbWFrZSBjb250YWN0IHdlYnBhZ2UnIH0sXHJcbiAgICAgICAgeyBjbGFzczogJ3NhdHVyZGF5JywgdGV4dDogJ1NvcnJ5LCBJXFwnbSB0b28gbGF6eSB0b28gbWFrZSBjb250YWN0IHdlYnBhZ2UnIH0sXHJcbiAgICAgIF07XHJcblxyXG4gICAgICBkYXlzLmZvckVhY2goZGF5ID0+IHtcclxuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHAuY2xhc3NOYW1lID0gZGF5LmNsYXNzO1xyXG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBkYXkudGV4dDtcclxuICAgICAgICBob3Vycy5hcHBlbmRDaGlsZChwKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxvY2F0aW9uLmNsYXNzTmFtZSA9ICdsb2NhdGlvbic7XHJcbiAgICBjb25zdCBsb2NhdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBsb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9ICdTb3JyeSwgSVxcJ20gdG9vIGxhenkgdG9vIG1ha2UgY29udGFjdCB3ZWJwYWdlJztcclxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBhZGRyZXNzLmNsYXNzTmFtZSA9ICdhZGRyZXNzJ1xyXG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICdTb3JyeSwgSVxcJ20gdG9vIGxhenkgdG9vIG1ha2UgY29udGFjdCB3ZWJwYWdlJ1xyXG4gICAgbG9jYXRpb24uYXBwZW5kKGxvY2F0aW9uSGVhZGVyLCBhZGRyZXNzICk7XHJcblxyXG4gICAgaG9tZS5hcHBlbmQoaG9tZUhlYWRlciwgaG9tZUludHJvZHVjZSwgaG91cnMsIGxvY2F0aW9uKVxyXG5cclxuICAgIHJldHVybiBob21lXHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=