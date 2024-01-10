const booknow = document.querySelectorAll('body div a');

const validHotels = [
    'Jurassic Resort',
    'Prehistoric Lodge',
    'Avian Heights Hotel',
    'Lost World Lodge',
    'Cretaceous Shores',
    'Velociraptor Visa']

const validHotelAddresses = {
    'Jurassic Resort': '123 Carnivore Lane, Isla Nublar',
    'Prehistoric Lodge': '456 Velociraptor Avenue, Isla Nublar',
    'Avian Heights Hotel': '789 Tyrannosaurus Terrace, Isla Nublar',
    'Lost World Lodge': '321 Sky Soar Street, Isla Nublar',
    'Cretaceous Shores': '567 Long Neck Lane, Isla Nublar',
    'Velociraptor Visa': '890 Horned Way, Isla Nublar'
}

const hotelAvailable = {
    'Jurassic Resort': ['', ''],
    'Prehistoric Lodge': ['', ''],
    'Avian Heights Hotel': ['', ''],
    'Lost World Lodge': ['', ''],
    'Cretaceous Shores': ['', ''],
    'Velociraptor Visa': ['', '']
}


let skipFirst = 0
let url = document.URL;

const hotelEdit = document.querySelector('#hotelname')
const hotelAddressEdit = document.querySelector('#hoteladdress')
const hotelAddToEdit = document.querySelector('#hoteladdto')
const hotelNameEdit = document.querySelectorAll('.hotelName')

if (url.includes('bookdirect')) {
    //localStorage.removeItem('hotel') // reset when visting page

    booknow.forEach(element => {
        if (element.getAttribute('href').includes('booking')) {
            console.log('Found element: ' + element.getAttribute('href'))
            if (skipFirst == 0) { 
                console.log('Skipped first. Continuing..'); 
                skipFirst = 1; 
                return 
            }
            element.onmousedown = (event) => {
                const hotelName = element.parentElement.parentElement.parentElement.id.replace("_desc", "");
                validHotels.forEach(hotel => {
                    if (hotel.toLowerCase().includes(hotelName)) {
                        console.log('Found it: ' + hotel);
                        localStorage.setItem('hotel', hotel)
                        return;
                    } else {
                        console.log('Could NOT find')
                    };
                });
            }
        } else {
            console.log('Wrong element: ' + element.getAttribute('href'))
        };
    });

    console.log('-- injected')

} else {

    if (localStorage.getItem('hotel') !== null) {
        console.log('Hotel is saved.')

        hotelEdit.innerHTML = localStorage.getItem('hotel')
        hotelAddressEdit.innerHTML = validHotelAddresses[localStorage.getItem('hotel')]

        if (url.includes('booking')) {
            hotelAddToEdit.value = 'ADD HOTEL TO BOOKING: ' + localStorage.getItem('hotel')
        }
        
        if (url.includes('details') || url.includes('summary')){
            hotelNameEdit.forEach(hotel => {
                hotel.innerHTML = '(' + localStorage.getItem('hotel') + ')'
                console.log('asdas')
            }) 
        }

    } else {
        console.log('Hotel is NOT saved.')
        console.log(localStorage.getItem('hotel'))
    }
} 

