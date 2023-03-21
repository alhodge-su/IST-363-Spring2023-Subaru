const vehicles = [
    {
        model: 'Crosstrek',
        slug: 'crosstrek'
    },
    {
        model: 'Forester',
        slug: 'forester'
    },
    {
        model: 'Impreza',
        slug: 'impreza'
    }
];

export function getAllVehicles() { //take function and make it global across entire app
    return vehicles;
}

export function getAllCarSlugs() {
    return vehicles.map((vehicle) => {
        return vehicle.slug;
    }); //map == for each method, plows through every since entry from vehicles array
}

export function getSingleVehicleBySlug(slug) {
    return vehicles.find((vehicle) => { //find method slightly different from map, instead waits for you to produce true value, if not true, will skip to next value
        return vehicle.slug === slug;
    });
}