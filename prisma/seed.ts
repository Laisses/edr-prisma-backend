import { prisma } from "../src/database.js";

const main = async () => {
    try {
        await prisma.locations.createMany({
            data: [
                {
                    state: "Acre"
                },
                {
                    state: "Alagoas"
                },
                {
                    state: "Amapá"
                },
                {
                    state: "Amazonas"
                },
                {
                    state: "Bahia"
                },
                {
                    state: "Ceará"
                },
                {
                    state: "Distrito Federal"
                },
                {
                    state: "Espírito Santo"
                },
                {
                    state: "Goiás"
                },
                {
                    state: "Maranhão"
                },
                {
                    state: "Mato Grosso"
                },
                {
                    state: "Mato Grosso do Sul"
                },
                {
                    state: "Minas Gerais"
                },
                {
                    state: "Pará"
                },
                {
                    state: "Paraíba"
                },
                {
                    state: "Paraná"
                },
                {
                    state: "Pernambuco"
                },
                {
                    state: "Piauí"
                },
                {
                    state: "Rio de Janeiro"
                },
                {
                    state: "Rio Grande do Norte"
                },
                {
                    state: "Rio Grande do Sul"
                },
                {
                    state: "Rondônia"
                },
                {
                    state: "Roraima"
                },
                {
                    state: "Santa Catarina"
                },
                {
                    state: "São Paulo"
                },
                {
                    state: "Sergipe"
                },
                {
                    state: "Tocantins"
                }
            ]
        });

        await prisma.places.createMany({
            data: [
                {
                    name: "D.O.M",
                    rating: "great"
                },
                {
                    name: "A Figueira Rubaiyat",
                    rating: "great"
                },
                {
                    name: "Fasano",
                    rating: "great"
                }
            ]
        });

        await prisma.categories.createMany({
            data:[
                {
                    name: "restaurante"
                },
                {
                    name: "pub"
                },
                {
                    name: "bar"
                }
            ]
        });

        console.log("seeding completed");

    } catch (err) {
        console.error(err);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
};

main();