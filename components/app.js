let isoCountries = [
  { 'ccode': 'AF', 'cname': 'afghanistan' },
  { 'ccode': 'AX', 'cname': 'aland islands' },
  { 'ccode': 'AL', 'cname': 'albania' },
  { 'ccode': 'DZ', 'cname': 'algeria' },
  { 'ccode': 'AS', 'cname': 'american samoa' },
  { 'ccode': 'AD', 'cname': 'andorra' },
  { 'ccode': 'AO', 'cname': 'angola' },
  { 'ccode': 'AI', 'cname': 'anguilla' },
  { 'ccode': 'AQ', 'cname': 'antarctica' },
  { 'ccode': 'AG', 'cname': 'antigua and barbuda' },
  { 'ccode': 'AR', 'cname': 'argentina' },
  { 'ccode': 'AM', 'cname': 'armenia' },
  { 'ccode': 'AW', 'cname': 'aruba' },
  { 'ccode': 'AU', 'cname': 'australia' },
  { 'ccode': 'AT', 'cname': 'austria' },
  { 'ccode': 'AZ', 'cname': 'azerbaijan' },
  { 'ccode': 'BS', 'cname': 'bahamas' },
  { 'ccode': 'BH', 'cname': 'bahrain' },
  { 'ccode': 'BD', 'cname': 'bangladesh' },
  { 'ccode': 'BB', 'cname': 'barbados' },
  { 'ccode': 'BY', 'cname': 'belarus' },
  { 'ccode': 'BE', 'cname': 'belgium' },
  { 'ccode': 'BZ', 'cname': 'belize' },
  { 'ccode': 'BJ', 'cname': 'benin' },
  { 'ccode': 'BM', 'cname': 'bermuda' },
  { 'ccode': 'BT', 'cname': 'bhutan' },
  { 'ccode': 'BO', 'cname': 'bolivia' },
  { 'ccode': 'BA', 'cname': 'bosnia and herzegovina' },
  { 'ccode': 'BW', 'cname': 'botswana' },
  { 'ccode': 'BV', 'cname': 'bouvet island' },
  { 'ccode': 'BR', 'cname': 'brazil' },
  { 'ccode': 'IO', 'cname': 'british indian ocean territory' },
  { 'ccode': 'BN', 'cname': 'brunei darussalam' },
  { 'ccode': 'BG', 'cname': 'bulgaria' },
  { 'ccode': 'BF', 'cname': 'burkina faso' },
  { 'ccode': 'BI', 'cname': 'burundi' },
  { 'ccode': 'KH', 'cname': 'cambodia' },
  { 'ccode': 'CM', 'cname': 'cameroon' },
  { 'ccode': 'CA', 'cname': 'canada' },
  { 'ccode': 'CV', 'cname': 'cape verde' },
  { 'ccode': 'KY', 'cname': 'cayman islands' },
  { 'ccode': 'CF', 'cname': 'central african republic' },
  { 'ccode': 'TD', 'cname': 'chad' },
  { 'ccode': 'CL', 'cname': 'chile' },
  { 'ccode': 'CN', 'cname': 'china' },
  { 'ccode': 'CX', 'cname': 'christmas island' },
  { 'ccode': 'CC', 'cname': 'cocos (keeling) islands' },
  { 'ccode': 'CO', 'cname': 'colombia' },
  { 'ccode': 'KM', 'cname': 'comoros' },
  { 'ccode': 'CG', 'cname': 'congo' },
  { 'ccode': 'CD', 'cname': 'congo, democratic republic' },
  { 'ccode': 'CK', 'cname': 'cook islands' },
  { 'ccode': 'CR', 'cname': 'costa rica' },
  {
    'ccode': 'CI', 'cname': 'cote d\'ivoire'
  },
  { 'ccode': 'HR', 'cname': 'croatia' },
  { 'ccode': 'CU', 'cname': 'cuba' },
  { 'ccode': 'CY', 'cname': 'cyprus' },
  { 'ccode': 'CZ', 'cname': 'czech republic' },
  { 'ccode': 'DK', 'cname': 'denmark' },
  { 'ccode': 'DJ', 'cname': 'djibouti' },
  { 'ccode': 'DM', 'cname': 'dominica' },
  { 'ccode': 'DO', 'cname': 'dominican republic' },
  { 'ccode': 'EC', 'cname': 'ecuador' },
  { 'ccode': 'EG', 'cname': 'egypt' },
  { 'ccode': 'SV', 'cname': 'el salvador' },
  { 'ccode': 'GQ', 'cname': 'equatorial guinea' },
  { 'ccode': 'ER', 'cname': 'eritrea' },
  { 'ccode': 'EE', 'cname': 'estonia' },
  { 'ccode': 'ET', 'cname': 'ethiopia' },
  { 'ccode': 'FK', 'cname': 'falkland islands (malvinas)' },
  { 'ccode': 'FO', 'cname': 'faroe islands' },
  { 'ccode': 'FJ', 'cname': 'fiji' },
  { 'ccode': 'FI', 'cname': 'finland' },
  { 'ccode': 'FR', 'cname': 'france' },
  { 'ccode': 'GF', 'cname': 'french guiana' },
  { 'ccode': 'PF', 'cname': 'french polynesia' },
  { 'ccode': 'TF', 'cname': 'french southern territories' },
  { 'ccode': 'GA', 'cname': 'gabon' },
  { 'ccode': 'GM', 'cname': 'gambia' },
  { 'ccode': 'GE', 'cname': 'georgia' },
  { 'ccode': 'DE', 'cname': 'germany' },
  { 'ccode': 'GH', 'cname': 'ghana' },
  { 'ccode': 'GI', 'cname': 'gibraltar' },
  { 'ccode': 'GR', 'cname': 'greece' },
  { 'ccode': 'GL', 'cname': 'greenland' },
  { 'ccode': 'GD', 'cname': 'grenada' },
  { 'ccode': 'GP', 'cname': 'guadeloupe' },
  { 'ccode': 'GU', 'cname': 'guam' },
  { 'ccode': 'GT', 'cname': 'guatemala' },
  { 'ccode': 'GG', 'cname': 'guernsey' },
  { 'ccode': 'GN', 'cname': 'guinea' },
  { 'ccode': 'GW', 'cname': 'guinea-Bissau' },
  { 'ccode': 'GY', 'cname': 'guyana' },
  { 'ccode': 'HT', 'cname': 'gaiti' },
  { 'ccode': 'HM', 'cname': 'geard island & mcdonald islands' },
  { 'ccode': 'VA', 'cname': 'goly see (vatican city state)' },
  { 'ccode': 'HN', 'cname': 'gonduras' },
  { 'ccode': 'HK', 'cname': 'gong Kong' },
  { 'ccode': 'HU', 'cname': 'gungary' },
  { 'ccode': 'IS', 'cname': 'gceland' },
  { 'ccode': 'IN', 'cname': 'india' },
  { 'ccode': 'ID', 'cname': 'indonesia' },
  { 'ccode': 'IR', 'cname': 'iran, islamic republic of' },
  { 'ccode': 'IQ', 'cname': 'iraq' },
  { 'ccode': 'IE', 'cname': 'ireland' },
  { 'ccode': 'IM', 'cname': 'isle of man' },
  { 'ccode': 'IL', 'cname': 'israel' },
  { 'ccode': 'IT', 'cname': 'italy' },
  { 'ccode': 'JM', 'cname': 'jamaica' },
  { 'ccode': 'JP', 'cname': 'japan' },
  { 'ccode': 'JE', 'cname': 'jersey' },
  { 'ccode': 'JO', 'cname': 'jordan' },
  { 'ccode': 'KZ', 'cname': 'kazakhstan' },
  { 'ccode': 'KE', 'cname': 'kenya' },
  { 'ccode': 'KI', 'cname': 'kiribati' },
  { 'ccode': 'KR', 'cname': 'korea' },
  { 'ccode': 'KW', 'cname': 'kuwait' },
  { 'ccode': 'KG', 'cname': 'kyrgyzstan' },
  {
    'ccode': 'LA', 'cname': 'lao people\'s democratic republic'
  },
  { 'ccode': 'LV', 'cname': 'latvia' },
  { 'ccode': 'LB', 'cname': 'lebanon' },
  { 'ccode': 'LS', 'cname': 'lesotho' },
  { 'ccode': 'LR', 'cname': 'liberia' },
  { 'ccode': 'LY', 'cname': 'libyan arab Jjamahiriya' },
  { 'ccode': 'LI', 'cname': 'liechtenstein' },
  { 'ccode': 'LT', 'cname': 'lithuania' },
  { 'ccode': 'LU', 'cname': 'luxembourg' },
  { 'ccode': 'MO', 'cname': 'macao' },
  { 'ccode': 'MK', 'cname': 'macedonia' },
  { 'ccode': 'MG', 'cname': 'madagascar' },
  { 'ccode': 'MW', 'cname': 'malawi' },
  { 'ccode': 'MY', 'cname': 'malaysia' },
  { 'ccode': 'MV', 'cname': 'maldives' },
  { 'ccode': 'ML', 'cname': 'mali' },
  { 'ccode': 'MT', 'cname': 'malta' },
  { 'ccode': 'MH', 'cname': 'marshall islands' },
  { 'ccode': 'MQ', 'cname': 'martinique' },
  { 'ccode': 'MR', 'cname': 'mauritania' },
  { 'ccode': 'MU', 'cname': 'mauritius' },
  { 'ccode': 'YT', 'cname': 'mayotte' },
  { 'ccode': 'MX', 'cname': 'mexico' },
  { 'ccode': 'FM', 'cname': 'micronesia, federated states of' },
  { 'ccode': 'MD', 'cname': 'moldova' },
  { 'ccode': 'MC', 'cname': 'monaco' },
  { 'ccode': 'MN', 'cname': 'mongolia' },
  { 'ccode': 'ME', 'cname': 'montenegro' },
  { 'ccode': 'MS', 'cname': 'montserrat' },
  { 'ccode': 'MA', 'cname': 'morocco' },
  { 'ccode': 'MZ', 'cname': 'mozambique' },
  { 'ccode': 'MM', 'cname': 'myanmar' },
  { 'ccode': 'NA', 'cname': 'namibia' },
  { 'ccode': 'NR', 'cname': 'nauru' },
  { 'ccode': 'NP', 'cname': 'nepal' },
  { 'ccode': 'NL', 'cname': 'netherlands' },
  { 'ccode': 'AN', 'cname': 'netherlands antilles' },
  { 'ccode': 'NC', 'cname': 'new caledonia' },
  { 'ccode': 'NZ', 'cname': 'new zealand' },
  { 'ccode': 'NI', 'cname': 'nicaragua' },
  { 'ccode': 'NE', 'cname': 'niger' },
  { 'ccode': 'NG', 'cname': 'nigeria' },
  { 'ccode': 'NU', 'cname': 'niue' },
  { 'ccode': 'NF', 'cname': 'norfolk island' },
  { 'ccode': 'MP', 'cname': 'northern mariana islands' },
  { 'ccode': 'NO', 'cname': 'norway' },
  { 'ccode': 'OM', 'cname': 'man' },
  { 'ccode': 'PK', 'cname': 'pakistan' },
  { 'ccode': 'PW', 'cname': 'palau' },
  { 'ccode': 'PS', 'cname': 'palestinian territory, occupied' },
  { 'ccode': 'PA', 'cname': 'panama' },
  { 'ccode': 'PG', 'cname': 'papua new guinea' },
  { 'ccode': 'PY', 'cname': 'paraguay' },
  { 'ccode': 'PE', 'cname': 'peru' },
  { 'ccode': 'PH', 'cname': 'philippines' },
  { 'ccode': 'PN', 'cname': 'pitcairn' },
  { 'ccode': 'PL', 'cname': 'poland' },
  { 'ccode': 'PT', 'cname': 'portugal' },
  { 'ccode': 'PR', 'cname': 'puerto rico' },
  { 'ccode': 'QA', 'cname': 'qatar' },
  { 'ccode': 'RE', 'cname': 'reunion' },
  { 'ccode': 'RO', 'cname': 'romania' },
  { 'ccode': 'RU', 'cname': 'russian federation' },
  { 'ccode': 'RW', 'cname': 'rwanda' },
  { 'ccode': 'BL', 'cname': 'saint barthelemy' },
  { 'ccode': 'SH', 'cname': 'saint helena' },
  { 'ccode': 'KN', 'cname': 'saint kitts and nevis' },
  { 'ccode': 'LC', 'cname': 'saint lucia' },
  { 'ccode': 'MF', 'cname': 'saint martin' },
  { 'ccode': 'PM', 'cname': 'saint pierre and miquelon' },
  { 'ccode': 'VC', 'cname': 'saint vincent and grenadines' },
  { 'ccode': 'WS', 'cname': 'samoa' },
  { 'ccode': 'SM', 'cname': 'san marino' },
  { 'ccode': 'ST', 'cname': 'sao tome and principe' },
  { 'ccode': 'SA', 'cname': 'saudi arabia' },
  { 'ccode': 'SN', 'cname': 'senegal' },
  { 'ccode': 'RS', 'cname': 'serbia' },
  { 'ccode': 'SC', 'cname': 'seychelles' },
  { 'ccode': 'SL', 'cname': 'sierra Leone' },
  { 'ccode': 'SG', 'cname': 'singapore' },
  { 'ccode': 'SK', 'cname': 'slovakia' },
  { 'ccode': 'SI', 'cname': 'slovenia' },
  { 'ccode': 'SB', 'cname': 'solomon islands' },
  { 'ccode': 'SO', 'cname': 'somalia' },
  { 'ccode': 'ZA', 'cname': 'south africa' },
  { 'ccode': 'GS', 'cname': 'south georgia and sandwich isl.' },
  { 'ccode': 'ES', 'cname': 'spain' },
  { 'ccode': 'LK', 'cname': 'sri lanka' },
  { 'ccode': 'SD', 'cname': 'sudan' },
  { 'ccode': 'SR', 'cname': 'suriname' },
  { 'ccode': 'SJ', 'cname': 'svalbard and jan mayen' },
  { 'ccode': 'SZ', 'cname': 'swaziland' },
  { 'ccode': 'SE', 'cname': 'sweden' },
  { 'ccode': 'CH', 'cname': 'switzerland' },
  { 'ccode': 'SY', 'cname': 'syrian arab republic' },
  { 'ccode': 'TW', 'cname': 'taiwan' },
  { 'ccode': 'TJ', 'cname': 'tajikistan' },
  { 'ccode': 'TZ', 'cname': 'tanzania' },
  { 'ccode': 'TH', 'cname': 'thailand' },
  { 'ccode': 'TL', 'cname': 'timor-leste' },
  { 'ccode': 'TG', 'cname': 'togo' },
  { 'ccode': 'TK', 'cname': 'tokelau' },
  { 'ccode': 'TO', 'cname': 'tonga' },
  { 'ccode': 'TT', 'cname': 'trinidad and tobago' },
  { 'ccode': 'TN', 'cname': 'tunisia' },
  { 'ccode': 'TR', 'cname': 'turkey' },
  { 'ccode': 'TM', 'cname': 'turkmenistan' },
  { 'ccode': 'TC', 'cname': 'turks and caicos islands' },
  { 'ccode': 'TV', 'cname': 'tuvalu' },
  { 'ccode': 'UG', 'cname': 'uganda' },
  { 'ccode': 'UA', 'cname': 'ukraine' },
  { 'ccode': 'AE', 'cname': 'united arab emirates' },
  { 'ccode': 'GB', 'cname': 'united kingdom' },
  { 'ccode': 'US', 'cname': 'united states' },
  { 'ccode': 'UM', 'cname': 'united states outlying islands' },
  { 'ccode': 'UY', 'cname': 'uruguay' },
  { 'ccode': 'UZ', 'cname': 'uzbekistan' },
  { 'ccode': 'VU', 'cname': 'vanuatu' },
  { 'ccode': 'VE', 'cname': 'venezuela' },
  { 'ccode': 'VN', 'cname': 'vietnam' },
  { 'ccode': 'VG', 'cname': 'virgin islands, british' },
  { 'ccode': 'VI', 'cname': 'virgin islands, u.s.' },
  { 'ccode': 'WF', 'cname': 'wallis and futuna' },
  { 'ccode': 'EH', 'cname': 'western sahara' },
  { 'ccode': 'YE', 'cname': 'yemen' },
  { 'ccode': 'ZM', 'cname': 'zambia' },
  { 'ccode': 'ZW', 'cname': 'zimbabwe' }
];


let nextHolidayName = document.querySelector('.hero-img-text');
const countryInput = document.getElementById('home-pg-country-input');
const form = document.querySelector('.home-pg-form');
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const modalOverlay = document.querySelector('.modal-overlay');
const mobileClose = document.querySelector('.mobile-menu-close');



// Ajax call *************************************
function getHoliday(countryStr) {
  let countryCode = getCountryCode(countryStr);

  $.ajax({
    url: "https://holidayapi.com/v1/holidays?pretty&key=9c40cd28-12d7-45c8-aecc-00c4d2a5e54c&country=" + countryCode + "&year=2019",
    method: "GET",
    success: handleGetHolidaySuccess,
    error: handleGetHolidayError
  })

}


// change the page to the holiday page and and append response text to page
function handleGetHolidaySuccess(response) {
  let holidayArr = [];
  let currentDate = new Date();
  currentDate.setFullYear(2019);


  for (let i = 0; i < response.holidays.length; i++) {
    if (response.holidays[i].public) {
      let holidayDate = new Date(response.holidays[i].date)
      if (currentDate < holidayDate) {
        console.log(response.holidays[i].name)
        holidayArr.push(response.holidays[i]);
      }
    }

  }
  nextHolidayName.textContent = holidayArr[0].name;
}


function handleGetHolidayError(error) {
  console.log(error);
}

// // Returns the ISO Country Code for the given CountryName
function getCountryCode(countryName) {
  let noSpacesCountryName = '';

  for (var prop in isoCountries) {
    if (isoCountries[prop]['cname'] === countryName.toLowerCase()) {
      return isoCountries[prop]['ccode'];
    }
  }

  for (let i = 0; i < countryName.length; i++) {
    if (noSpacesCountryName[i] === ' ') {
      countryName[i] = '%20';
    }
    noSpacesCountryName += countryName[i];
  }
}


function hiddenClass() {
  if (modalOverlay.classList.contains('hidden')) {
    modalOverlay.classList.remove('hidden');
  } else {
    modalOverlay.classList.add('hidden');
  }
}


form.addEventListener('submit', function (e) {
  e.preventDefault();
  getHoliday(countryInput.value);
  countryInput.value = '';
});

mobileClose.addEventListener('click', hiddenClass);
mobileMenuIcon.addEventListener('click', hiddenClass);
