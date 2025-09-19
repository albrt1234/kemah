const mongoose = require('mongoose');
const cities = require('./indonesiaRegions');
const { places, descriptors } = require('./seedHelpers')
const Campground = require('../models/campground')

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error :"));
db.once('open', () => {
    console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length) + 1];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random50 = Math.floor(Math.random() * cities.length) + 1;
        const price = (Math.floor(Math.random() * 10) + 1) * 10000;
        const camp = new Campground({
            // ID User
            author: '68c521b09a298b6f94d1edbc',
            location: `${cities[random50].city}, ${cities[random50].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque quas pariatur expedita! Repudiandae reprehenderit earum ab voluptatum, corporis enim aspernatur libero atque officia veritatis eius aliquid, sequi nostrum, ex minus.",
            price,
            geometry: {
                type: 'Point',
                coordinates: [cities[random50].longitude, cities[random50].latitude]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dfyvkrjem/image/upload/v1757924506/YelpCamp/exkzq5y5fpy3lzpcswnh.jpg',
                    filename: 'YelpCamp/exkzq5y5fpy3lzpcswnh'
                },
                {
                    url: 'https://res.cloudinary.com/dfyvkrjem/image/upload/v1757924504/YelpCamp/uszbmmrq3ipjulr1rrdz.jpg',
                    filename: 'YelpCamp/uszbmmrq3ipjulr1rrdz'

                }
            ]
        })
        await camp.save();
    }
}

seedDB()
    .then(() => {
        mongoose.connection.close()
    });