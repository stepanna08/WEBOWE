import { MongoClient } from 'mongodb';
async function tworzenie() {
	const uri = "mongodb://localhost:27017";
	const client = new MongoClient(uri);

	try {
		await client.connect();
		const database = client.db("lekcja_mongodb");
		const collection = database.collection("TODO");

		// Tworzenie dokumentu
		const lista = [
			{
				tytul: "smieci",
				opis: "smieci",
				wykonane: false,
				id: 2
			},
			{
				nazwa: "pączek",
				cena: 0.01,
				zapas: 64,
				id: 1
			}
		];

		const listy = await collection.insertMany(lista);
		console.log("Dokument dodany z ID:", listy.id);

	} finally {
		await client.close();
	}
}