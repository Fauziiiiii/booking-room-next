"use server"

import { deleteSession } from "@/app/lib/session";
import { redirect } from "next/navigation";

export async function logout() {
    await deleteSession();
    redirect('/sign-in')
}
