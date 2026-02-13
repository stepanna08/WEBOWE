

import { MongoClient } from 'mongodb';
async function tworzenie() {
	const uri = "mongodb://localhost:27017";
	const client = new MongoClient(uri);

	try {
		await client.connect();
		const database = client.db("lekcja_mongodb");
		const collection = database.collection("przedmioty");

		// Tworzenie dokumentu
		const produkty = [
			{
				nazwa: "nazwa",
				cena: 5374,
				zapas: 74845,
				id: 2
			},
			{
				nazwa: "pączek",
				cena: 0.01,
				zapas: 64,
				id: 1
			}
		];

		const produkt = await collection.insertMany(produkty);
		console.log("Dokument dodany z ID:", produkty.id);

	} finally {
		await client.close();
	}
}


async function czytanie() {
	const uri = "mongodb://localhost:27017";
	const client = new MongoClient(uri);

	try {
		await client.connect();
		const database = client.db("lekcja_mongodb");
		const collection = database.collection("przedmioty");

		const wszystkie = await collection.find({}).toArray();
		console.log("Wszystkie produkty: ", wszystkie)

	
	} finally {
		await client.close();
	}
}

async function aktualizacja() {
	const uri = "mongodb://localhost:27017";
	const client = new MongoClient(uri);

	try {
		await client.connect();
		const database = client.db("lekcja_mongodb");
		const collection = database.collection("przedmioty");

		const wynik = await collection.updateOne(
			{ imie: "Anna" },
			{ $set: { semestr: 3 } }
		);

	
	} finally {
		await client.close();
	}
}
import express from 'express';
const PORT = 3000;
const app = express();
tworzenie();
aktualizacja();

app.listen( PORT, () => {
    console.log(`app at localhost:${PORT}/`)
});

