
// holdidayapi api key 9c40cd28-12d7-45c8-aecc-00c4d2a5e54c
//https://holidayapi.com/v1/holidays?pretty&key=9c40cd28-12d7-45c8-aecc-00c4d2a5e54c&country=US&year=2019

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


function getHoliday() {
  $.ajax({
    // url: "https://calendarific.com/api/v2/holidays?api_key=9bbe604d6db855575f89691e9a861726fef5e172&country=US&year=2020",
    url: "https://holidayapi.com/v1/holidays?pretty&key=9c40cd28-12d7-45c8-aecc-00c4d2a5e54c&country=JP&year=2019",
    method: "GET",
    success: handleGetHolidaySuccess,
    error: handleGetHolidayError
  })
}

function handleGetHolidaySuccess(response) {
  let arr = [];
  for (let i = 0; i < response.holidays.length; i++) {
    if (response.holidays[i].public) {
      arr.push(response.holidays[i]);
    }
  }
  console.log(arr);
}

function handleGetHolidayError(error) {
  console.log(error);
}


function getTravelDeals() {
  $.ajax({
    headers: {
      "x-rapidapi-host": "hotels4.p.rapidapi.com",
      "x-rapidapi-key": "6bb1f7d518mshee6c717c3746b3ap119550jsned3e9335e862"
    },

    async: true,
    crossDomain: true,
    url: "https://hotels4.p.rapidapi.com/locations/search?locale=en_US&query=new%20york",
    // url: "https://hotels4.p.rapidapi.com/properties/get-hotel-photos?id=1178275040",


    success: handleGetTravelDealsSuccess,
    error: handleTravelDealsError
  })
}


function handleGetTravelDealsSuccess(response) {
  console.log(response);
}

function handleTravelDealsError(error) {
  console.log(error);
}



// Try this to change the page on form submit
// var fromData = $(#formID).serialize(); // your form's data
// $.ajax({
//   type: "POST",
//   url: "newpage.php",
//   data: fromData //sends the data to the new page.
// })
//   .done(function (msg) {
//     window.location.href = 'index.php' // redirects the page when finished.
//   });


// var isoCountries = {
//   'AF': 'afghanistan',
//   'AX': 'aland islands',
//   'AL': 'albania',
//   'DZ': 'algeria',
//   'AS': 'american samoa',
//   'AD': 'andorra',
//   'AO': 'angola',
//   'AI': 'anguilla',
//   'AQ': 'antarctica',
//   'AG': 'antigua and barbuda',
//   'AR': 'argentina',
//   'AM': 'armenia',
//   'AW': 'aruba',
//   'AU': 'australia',
//   'AT': 'austria',
//   'AZ': 'azerbaijan',
//   'BS': 'bahamas',
//   'BH': 'bahrain',
//   'BD': 'bangladesh',
//   'BB': 'barbados',
//   'BY': 'belarus',
//   'BE': 'belgium',
//   'BZ': 'belize',
//   'BJ': 'benin',
//   'BM': 'bermuda',
//   'BT': 'bhutan',
//   'BO': 'bolivia',
//   'BA': 'bosnia and herzegovina',
//   'BW': 'botswana',
//   'BV': 'bouvet island',
//   'BR': 'brazil',
//   'IO': 'british indian ocean territory',
//   'BN': 'brunei darussalam',
//   'BG': 'bulgaria',
//   'BF': 'burkina faso',
//   'BI': 'burundi',
//   'KH': 'cambodia',
//   'CM': 'cameroon',
//   'CA': 'canada',
//   'CV': 'cape Verde',
//   'KY': 'cayman islands',
//   'CF': 'central african republic',
//   'TD': 'chad',
//   'CL': 'chile',
//   'CN': 'china',
//   'CX': 'christmas island',
//   'CC': 'cocos (keeling) islands',
//   'CO': 'colombia',
//   'KM': 'comoros',
//   'CG': 'congo',
//   'CD': 'congo, democratic republic',
//   'CK': 'cook islands',
//   'CR': 'costa rica',
//   'CI': 'cote d\'ivoire',
//   'HR': 'croatia',
//   'CU': 'cuba',
//   'CY': 'cyprus',
//   'CZ': 'czech republic',
//   'DK': 'cenmark',
//   'DJ': 'cjibouti',
//   'DM': 'cominica',
//   'DO': 'cominican republic',
//   'EC': 'ecuador',
//   'EG': 'egypt',
//   'SV': 'el salvador',
//   'GQ': 'equatorial guinea',
//   'ER': 'eritrea',
//   'EE': 'estonia',
//   'ET': 'ethiopia',
//   'FK': 'falkland islands (malvinas)',
//   'FO': 'faroe islands',
//   'FJ': 'fiji',
//   'FI': 'finland',
//   'FR': 'france',
//   'GF': 'french guiana',
//   'PF': 'french polynesia',
//   'TF': 'french southern territories',
//   'GA': 'gabon',
//   'GM': 'gambia',
//   'GE': 'georgia',
//   'DE': 'germany',
//   'GH': 'ghana',
//   'GI': 'gibraltar',
//   'GR': 'greece',
//   'GL': 'greenland',
//   'GD': 'grenada',
//   'GP': 'guadeloupe',
//   'GU': 'guam',
//   'GT': 'guatemala',
//   'GG': 'guernsey',
//   'GN': 'guinea',
//   'GW': 'guinea-bissau',
//   'GY': 'guyana',
//   'HT': 'haiti',
//   'HM': 'heard island & mcdonald mslands',
//   'VA': 'holy See (Vatican City State)',
//   'HN': 'honduras',
//   'HK': 'hong Kong',
//   'HU': 'hungary',
//   'IS': 'iceland',
//   'IN': 'india',
//   'ID': 'indonesia',
//   'IR': 'iran, Islamic Republic Of',
//   'IQ': 'iraq',
//   'IE': 'ireland',
//   'IM': 'isle Of Man',
//   'IL': 'israel',
//   'IT': 'italy',
//   'JM': 'jamaica',
//   'JP': 'japan',
//   'JE': 'jersey',
//   'JO': 'jordan',
//   'KZ': 'jazakhstan',
//   'KE': 'kenya',
//   'KI': 'kiribati',
//   'KR': 'korea',
//   'KW': 'kuwait',
//   'KG': 'kyrgyzstan',
//   'LA': 'lao People\'s Democratic Republic',
//   'LV': 'latvia',
//   'LB': 'lebanon',
//   'LS': 'lesotho',
//   'LR': 'liberia',
//   'LY': 'libyan Arab Jamahiriya',
//   'LI': 'liechtenstein',
//   'LT': 'lithuania',
//   'LU': 'luxembourg',
//   'MO': 'macao',
//   'MK': 'macedonia',
//   'MG': 'madagascar',
//   'MW': 'malawi',
//   'MY': 'malaysia',
//   'MV': 'maldives',
//   'ML': 'mali',
//   'MT': 'malta',
//   'MH': 'marshall Islands',
//   'MQ': 'martinique',
//   'MR': 'mauritania',
//   'MU': 'mauritius',
//   'YT': 'mayotte',
//   'MX': 'mexico',
//   'FM': 'micronesia, Federated States Of',
//   'MD': 'moldova',
//   'MC': 'monaco',
//   'MN': 'mongolia',
//   'ME': 'montenegro',
//   'MS': 'montserrat',
//   'MA': 'morocco',
//   'MZ': 'mozambique',
//   'MM': 'myanmar',
//   'NA': 'namibia',
//   'NR': 'nauru',
//   'NP': 'nepal',
//   'NL': 'netherlands',
//   'AN': 'netherlands Antilles',
//   'NC': 'new Caledonia',
//   'NZ': 'new Zealand',
//   'NI': 'nicaragua',
//   'NE': 'niger',
//   'NG': 'nigeria',
//   'NU': 'niue',
//   'NF': 'norfolk Island',
//   'MP': 'northern Mariana Islands',
//   'NO': 'norway',
//   'OM': 'oman',
//   'PK': 'pakistan',
//   'PW': 'palau',
//   'PS': 'palestinian Territory, Occupied',
//   'PA': 'panama',
//   'PG': 'papua New Guinea',
//   'PY': 'paraguay',
//   'PE': 'peru',
//   'PH': 'philippines',
//   'PN': 'pitcairn',
//   'PL': 'poland',
//   'PT': 'portugal',
//   'PR': 'puerto Rico',
//   'QA': 'patar',
//   'RE': 'peunion',
//   'RO': 'pomania',
//   'RU': 'russian Federation',
//   'RW': 'rwanda',
//   'BL': 'saint Barthelemy',
//   'SH': 'saint Helena',
//   'KN': 'saint Kitts And Nevis',
//   'LC': 'saint Lucia',
//   'MF': 'saint Martin',
//   'PM': 'saint Pierre And Miquelon',
//   'VC': 'saint Vincent And Grenadines',
//   'WS': 'samoa',
//   'SM': 'san Marino',
//   'ST': 'sao Tome And Principe',
//   'SA': 'saudi Arabia',
//   'SN': 'senegal',
//   'RS': 'serbia',
//   'SC': 'seychelles',
//   'SL': 'sierra Leone',
//   'SG': 'Singapore',
//   'SK': 'Slovakia',
//   'SI': 'Slovenia',
//   'SB': 'Solomon Islands',
//   'SO': 'Somalia',
//   'ZA': 'South Africa',
//   'GS': 'South Georgia And Sandwich Isl.',
//   'ES': 'Spain',
//   'LK': 'Sri Lanka',
//   'SD': 'Sudan',
//   'SR': 'Suriname',
//   'SJ': 'Svalbard And Jan Mayen',
//   'SZ': 'Swaziland',
//   'SE': 'Sweden',
//   'CH': 'Switzerland',
//   'SY': 'Syrian Arab Republic',
//   'TW': 'Taiwan',
//   'TJ': 'Tajikistan',
//   'TZ': 'Tanzania',
//   'TH': 'Thailand',
//   'TL': 'Timor-Leste',
//   'TG': 'Togo',
//   'TK': 'Tokelau',
//   'TO': 'Tonga',
//   'TT': 'Trinidad And Tobago',
//   'TN': 'Tunisia',
//   'TR': 'Turkey',
//   'TM': 'Turkmenistan',
//   'TC': 'Turks And Caicos Islands',
//   'TV': 'Tuvalu',
//   'UG': 'Uganda',
//   'UA': 'Ukraine',
//   'AE': 'United Arab Emirates',
//   'GB': 'United Kingdom',
//   'US': 'United States',
//   'UM': 'United States Outlying Islands',
//   'UY': 'Uruguay',
//   'UZ': 'Uzbekistan',
//   'VU': 'Vanuatu',
//   'VE': 'Venezuela',
//   'VN': 'Viet Nam',
//   'VG': 'Virgin Islands, British',
//   'VI': 'Virgin Islands, U.S.',
//   'WF': 'Wallis And Futuna',
//   'EH': 'Western Sahara',
//   'YE': 'Yemen',
//   'ZM': 'Zambia',
//   'ZW': 'Zimbabwe'
// };
