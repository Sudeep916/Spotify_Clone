import mongoose from "mongoose";
import { Song } from "../models/song.model.js";
import { config } from "dotenv";

config();

const songs = [
	{
		title: "Hanuman Chalisa",
		artist: "Gulshan Kumar",
		imageUrl: "/cover-images/1.jpg",
		audioUrl: "/songs/1.mp3",
		duration: 581, 
	},
	{
		title: "Meethe Ras Se Bhari",
		artist: "Anup Jalota",
		imageUrl: "/cover-images/2.jpg",
		audioUrl: "/songs/2.mp3",
		duration: 410, 
	},
	{
		title: "Kabhi Na Kabhi",
		artist: "Aditya Narayan",
		imageUrl: "/cover-images/3.jpg",
		audioUrl: "/songs/3.mp3",
		duration: 410, 
	},
	{
		title:"Falk Tk Chal Sath Mere",
		artist: "Udit Narayan",
		imageUrl: "/cover-images/4.jpg",
		audioUrl: "/songs/4.mp3",
		duration: 384, 
	},
	{
		title: "Tu Hi Haqeeqat",
		artist: "Emraan Hashmi",
		imageUrl: "/cover-images/5.jpg",
		audioUrl: "/songs/5.mp3",
		duration: 332	},
	{
		title: "Safari Serena",
		artist: "The Wild Ones",
		imageUrl: "/cover-images/6.jpg",
		audioUrl: "/songs/6.mp3",
		duration: 210, 
	},
	{
		title: "Hua H Aaj Phli Baar",
		artist: "Arman Malik",
		imageUrl: "/cover-images/7.jpg",
		audioUrl: "/songs/7.mp3",
		duration: 545, 
	},
	{
		title: "Jo Tum Mere Ho",
		artist: "Anuv Jain",
		imageUrl: "/cover-images/8.jpg",
		audioUrl: "/songs/8.mp3",
		duration: 290, 
	},
	{
		title: "Dil Ibaadat",
		artist: "Emraan Hashmi",
		imageUrl: "/cover-images/9.jpg",
		audioUrl: "/songs/9.mp3",
		duration: 394, 
	},
	{
		title: "Titli",
		artist: "Chinmayi, Gopi Sunder",
		imageUrl: "/cover-images/10.jpg",
		audioUrl: "/songs/10.mp3",
		duration: 389, 
	},
	{
		title: "Pal Pal Dil Ke Paas",
		artist: "Arjit Singh",
		imageUrl: "/cover-images/11.jpg",
		audioUrl: "/songs/11.mp3",
		duration: 239, 
	},
	{
		title: "Sajni",
		artist: "Arjit Singh",
		imageUrl: "/cover-images/12.jpg",
		audioUrl: "/songs/12.mp3",
		duration: 209, 
	},
	{
		title: "Sorry",
		artist: "Justin Bieber",
		imageUrl: "/cover-images/13.jpg",
		audioUrl: "/songs/13.mp3",
		duration: 239, 
	},
	{
		title: "Maula Mere Maula",
		artist: "Roop Kumar Rathod",
		imageUrl: "/cover-images/14.jpg",
		audioUrl: "/songs/14.mp3",
		duration: 414, 
	},
	{
		title: "Todha Todha Pyaar",
		artist: " Sidharth Malhotra & Neha Sharma",
		imageUrl: "/cover-images/15.jpg",
		audioUrl: "/songs/15.mp3",
		duration: 269, 
	},
	{
		title: "Siddat",
		artist: "Sunny Kaushal,Radhika Madan",
		imageUrl: "/cover-images/16.jpg",
		audioUrl: "/songs/16.mp3",
		duration: 243, 
	},
	{
		title: "Chitta",
		artist: "Sunny Kaushal,Radhika Madan",
		imageUrl: "/cover-images/17.jpg",
		audioUrl: "/songs/17.mp3",
		duration: 243, 
	},
	{
		title: "Jo Tere Sang",
		artist: "DJ Cruz R",
		imageUrl: "/cover-images/18.jpg",
		audioUrl: "/songs/18.mp3",
		duration: 282, 
	},
	{
		title: "Tere Liye",
		artist: "Atif Aslam",
		imageUrl: "/cover-images/19.jpg",
		audioUrl: "/songs/19.mp3",
		duration: 179, 
	}, 
	{
		title: "Millionaire",
		artist: "Honey Singh",
		imageUrl: "/cover-images/20.jpg",
		audioUrl: "/songs/20.mp3",
		duration: 210, 
	},
	{
		title: "Payal",
		artist: "Honey Singh",
		imageUrl: "/cover-images/21.jpg",
		audioUrl: "/songs/21.mp3",
		duration: 231, 
	}, 
	{
		title: "Bonita",
		artist: "Honey Singh",
		imageUrl: "/cover-images/22.jpg",
		audioUrl: "/songs/22.mp3",
		duration: 184, 
	}, 
	{
		title: "Blue Eyes",
		artist: "Honey Singh",
		imageUrl: "/cover-images/23.jpg",
		audioUrl: "/songs/23.mp3",
		duration: 242, 
	}, 
	{
		title: "Desi Kalakar",
		artist: "Honey Singh",
		imageUrl: "/cover-images/24.jpg",
		audioUrl: "/songs/24.mp3",
		duration: 597, 
	}, 
	{
		title: "Hass Hass",
		artist: "Diljit Dosanjh",
		imageUrl: "/cover-images/25.jpg",
		audioUrl: "/songs/25.mp3",
		duration: 152, 
	},
	{
		title: "Born To Shine",
		artist: "Diljit Dosanjh",
		imageUrl: "/cover-images/26.jpg",
		audioUrl: "/songs/26.mp3",
		duration: 218, 
	}, 

];

const seedSongs = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI);

		// Clear existing songs
		await Song.deleteMany({});

		// Insert new songs
		await Song.insertMany(songs);

		console.log("Songs seeded successfully!");
	} catch (error) {
		console.error("Error seeding songs:", error);
	} finally {
		mongoose.connection.close();
	}
};

seedSongs();
