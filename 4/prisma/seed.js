import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import process from 'process';

const prisma = new PrismaClient();

async function main() {
    // Create 20 fake users
    const users = [];

    for (let i = 0; i < 20; i++) {
        users.push({
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            phone: faker.phone.number(),
            email: faker.internet.email(),
            createdAt: faker.date.past(),
        });
    }

    await prisma.user.createMany({
        data: users,
    });

    console.log('Seed complete!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
