import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"

import Google from "next-auth/providers/google"
import AppleProvider from "next-auth/providers/apple"

import Nodemailer from "next-auth/providers/nodemailer"
import { db, accounts, sessions, users, verificationTokens } from "./src/db/schema"

const OPTIONS = {
    debug: process.env.NODE_ENV !== "production" ? true : false,
    adapter: DrizzleAdapter(db, {
        usersTable: users,
        accountsTable: accounts,
        sessionsTable: sessions,
        verificationTokensTable: verificationTokens,
    }),
    providers: [
        Nodemailer({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        }),
        Google,
    ],
    pages: {
        signIn: '../signin'
    }

}

export const { handlers, auth, signIn, signOut } = NextAuth(OPTIONS)