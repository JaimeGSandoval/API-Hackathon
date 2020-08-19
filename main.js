
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const modalOverlay = document.querySelector('.modal-overlay');
const mobileClose = document.querySelector('.mobile-menu-close');



function hiddenClass() {
  if (modalOverlay.classList.contains('hidden')) {
    modalOverlay.classList.remove('hidden');
  } else {
    modalOverlay.classList.add('hidden');
  }
}


mobileClose.addEventListener('click', hiddenClass);
mobileMenuIcon.addEventListener('click', hiddenClass);


// function getHoliday() {
//   $.ajax({
//     url: "https://calendarific.com/api/v2/holidays?api_key=9bbe604d6db855575f89691e9a861726fef5e172&country=US&year=2020",
//     method: "GET",
//     success: handleGetHolidaySuccess,
//     error: handleGetHolidayError
//   })
// }

// function handleGetHolidaySuccess(response) {
//   console.log(response);
// }

// function handleGetHolidayError(error) {
//   console.log(error);
// }


// function getTravelDeals() {
//   $.ajax({
//     headers: {
//       "x-rapidapi-host": "hotels4.p.rapidapi.com",
//       "x-rapidapi-key": "6bb1f7d518mshee6c717c3746b3ap119550jsned3e9335e862"
//     },

//     async: true,
//     crossDomain: true,
//     url: "https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=new%20york",
//     // url: "https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040",


//     success: handleGetTravelDealsSuccess,
//     error: handleTravelDealsError
//   })
// }


// function handleGetTravelDealsSuccess(response) {
//   console.log(response);
// }

// function handleTravelDealsError(error) {
//   console.log(error);
// }
