import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import '../../envConfig.js'

const connectionString = process.env.AUTH_DRIZZLE_URL!

async function main() {
    // Disable prefetch as it is not supported for "Transaction" pool mode 
    const client = postgres(connectionString, { prepare: false })
    const db = drizzle({ client });
}
main();