// @ts-ignore
import Faker from "faker"

export const fakerInit = () => {
    const replayedSeed = parseInt(process.env.FAKER_SEED || '', 10) || 0;
    const seedValue = replayedSeed || Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    Faker.seed(seedValue);
    if (replayedSeed) {
        console.warn(`Replaying test with FAKER_SEED=${replayedSeed}`);
    } else {
        console.info(`FAKER_SEED=${seedValue}`);
    }
};
