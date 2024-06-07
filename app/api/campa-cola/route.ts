import client from "@/lib/appwrite_client";
import { Databases, ID, Query } from "appwrite";
import { NextResponse } from "next/server";

const database = new Databases(client);

async function createDatabase(data: any) {
    try {
        const response = await database.createDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            'dealershipdata',
            ID.unique(),
            data
        )

        return response;
    } catch (error) {
        console.log("Error creating DB", error);
        throw new Error("Failed to create Db")


    }

}


async function fetchData(data: any) {
    try {
        const response = await database.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            'dealershipdata',
            [Query.orderAsc("$createdAt")]
        )

        return response.documents;
    } catch (error) {
        console.log("Error creating DB", error);
        throw new Error("Failed to create Db")


    }

}

export async function POST(req: Request) {
    try {
        const { name, email, apply, number, pincode, city, state, investment } = await req.json();
        const data = { name, email, apply, number, pincode, city, state, investment };
        const response = await createDatabase(data);
        return NextResponse.json({ message: "Applied" })

    } catch (error) {
        return NextResponse.json({
            error: "Failed to create "
        },
            { status: 500 }
        )
    }
}