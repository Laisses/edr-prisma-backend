import { prisma } from "../src/database.js";

const main = async () => {
    try {
        await prisma.places.createMany({
            data: [
                {
                    name: "Kofi & Co",
                    category: "Restaurante",
                    rating: "good",
                },
                {
                    name: "CipóRestô",
                    category: "Restaurante",
                    rating: "great",
                },
                {
                    name: "Wanderlust",
                    category: "Bar",
                    rating: "null",
                },
                {
                    name: "O'Malley's",
                    category: "Bar",
                    rating: "bad",
                },
                {
                    name: "The Blue Pub",
                    category: "Pub",
                    rating: "null",
                },
            ]
        });
    } catch (err) {
        console.error(err);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};

main();
