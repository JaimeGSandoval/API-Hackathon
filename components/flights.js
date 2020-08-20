const mobileClose = document.querySelector('.mobile-menu-close');
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const modalOverlay = document.querySelector('.modal-overlay');



$.ajax({
  headers: {
    "X-Access-Token": "6bb1f7d518mshee6c717c3746b3ap119550jsned3e9335e862",
    "x-rapidapi-host": "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
    "x-rapidapi-key": "6bb1f7d518mshee6c717c3746b3ap119550jsned3e9335e862"
  },
  method: "GET",
  url: "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?destination=-&origin=HKT&currency=RUB&page=None",
  async: true,
  crossDomain: true,

  success: handleGetTravelDealsSuccess,
  error: handleTravelDealsError
})



function handleGetTravelDealsSuccess(response) {
  console.log(response);

}

function handleTravelDealsError(error) {
  console.log(error);
}


function hiddenClass() {
  if (modalOverlay.classList.contains('hidden')) {
    modalOverlay.classList.remove('hidden');
  } else {
    modalOverlay.classList.add('hidden');
  }
}

mobileClose.addEventListener('click', hiddenClass);
mobileMenuIcon.addEventListener('click', hiddenClass);
