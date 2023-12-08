var lastSelectedHotel = localStorage.getItem('hotel');

const booknow = document.querySelectorAll('body div a');

const validHotels = [
    'Jurassic Resort',
    'Prehistoric Lodge',
    'Avian Heights Lodge',
    'Lost World Lodge',
    'Cretaceous Shores',
    'Velociraptor Visa']

const validHotelAddresses = {
    'Jurassic Resort': '123 Carnivore Lane, Isla Nublar',
    'Prehistoric Lodge': '456 Velociraptor Avenue, Isla Nublar',
    'Avian Heights Lodge': '789 Tyrannosaurus Terrace, Isla Nublar',
    'Lost World Lodge': '321 Sky Soar Street, Isla Nublar',
    'Cretaceous Shores': '567 Long Neck Lane, Isla Nublar',
    'Velociraptor Visa': '890 Horned Way, Isla Nublar'
}

const hotelAvailable = {
    'Jurassic Resort': ['', ''],
    'Prehistoric Lodge': ['', ''],
    'Avian Heights Lodge': ['', ''],
    'Lost World Lodge': ['', ''],
    'Cretaceous Shores': ['', ''],
    'Velociraptor Visa': ['', '']
}


let skipFirst = 0
let url = document.URL;

const hotelEdit = document.querySelector('#hotelname')
const hotelAddressEdit = document.querySelector('#hoteladdress')

if (url.includes('bookdirect.html')) {
    localStorage.setItem('hotel', null) // reset when visting page

    booknow.forEach(element => {
        if (element.getAttribute('href') == 'booking.html') {
            if (skipFirst == 0) { skipFirst = 1; return }
            element.onmousedown = (event) => {
                const hotelName = element.parentElement.parentElement.parentElement.id.replace("_desc", "");
                validHotels.forEach(hotel => {
                    if (hotel.toLowerCase().includes(hotelName)) {
                        console.log('Found it: ' + hotel);
                        localStorage.setItem('hotel', hotel)
                        return;
                    };
                });
            }
        };
    });

    console.log('-- injected')

} else {

    console.log('Selected Hotel: ' + lastSelectedHotel)
    var lastSelectedHotel = localStorage.getItem('hotel');

    if ((lastSelectedHotel != 'null') || (lastSelectedHotel != null)) {
        console.log('selected fr fr')

        hotelEdit.innerHTML = lastSelectedHotel
        hotelAddressEdit.innerHTML = validHotelAddresses[lastSelectedHotel]
    }

}