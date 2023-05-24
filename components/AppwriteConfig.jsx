"use client";
import { Client, Account, Databases } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("646abce1536a8eaef7f7");

export const account = new Account(client);

export const databases = new Databases(client, "646df0f09aabfb2b250c");
