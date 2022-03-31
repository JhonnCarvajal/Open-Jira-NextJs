
interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData: SeedData = {
    entries: [
        {
            description: "Pendiente::Lorem ipsum 1",
            status: "pending",
            createdAt: Date.now(),
        },
        {

            description: "En progreso::Lorem ipsum 2",
            status: "in-progress",
            createdAt: Date.now() - 1000000,
        },
        {

            description: "Finalizada::Lorem ipsum 3",
            status: "finished",
            createdAt: Date.now() - 100000,
        },]
}




