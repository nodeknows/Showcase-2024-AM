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

if (url.includes('bookdirect')) {
    //localStorage.removeItem('hotel') // reset when visting page

    booknow.forEach(element => {
        if (element.getAttribute('href') == 'booking.html') {
            console.log('Found element')
            if (skipFirst == 0) { skipFirst = 1; return }
            console.log('Not First!')
            element.onmousedown = (event) => {
                console.log('Clicked')
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
        };
    });

    console.log('-- injected')

} else {

    if (localStorage.getItem('hotel') !== null) {
        console.log('selected fr fr')

        hotelEdit.innerHTML = localStorage.getItem('hotel')
        hotelAddressEdit.innerHTML = validHotelAddresses[localStorage.getItem('hotel')]
    } else {
        console.log('Could NOT find')
        console.log(localStorage.getItem('hotel'))
    } 

}