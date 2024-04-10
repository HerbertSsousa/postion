import type {Config} from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env'})

if(!process.env.DATABASE_URL){
    console.log('🔴 Não foi possível encontrar o banco de dados!!')
}

export default {
    schema: './src/lib/supabase/schema.ts',
    out: './migrations',
    driver: 'pg',
    dbCredentials:{
        connectionString: process.env.DATABASE_URL || '',

    },

} satisfies Config;