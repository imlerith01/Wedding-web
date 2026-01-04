import { neon } from "@netlify/neon";
import type { Handler, HandlerEvent, HandlerResponse } from "@netlify/functions";

const sql = neon();

interface RSVPRequest {
  name: string;
  contact: string;
  attendance: "yes" | "no";
  guests: number;
  note?: string;
}

// Validation function
function validateRSVP(data: any): { valid: boolean; message?: string } {
  // Validate name
  if (!data.name || typeof data.name !== "string" || data.name.trim().length < 2) {
    return { valid: false, message: "Jméno musí mít alespoň 2 znaky" };
  }

  // Validate contact
  if (!data.contact || typeof data.contact !== "string" || data.contact.trim().length < 5) {
    return { valid: false, message: "Kontakt musí mít alespoň 5 znaků" };
  }

  // Validate attendance
  if (!data.attendance || (data.attendance !== "yes" && data.attendance !== "no")) {
    return { valid: false, message: "Účast musí být 'yes' nebo 'no'" };
  }

  // Validate guests
  if (typeof data.guests !== "number") {
    return { valid: false, message: "Počet hostů musí být číslo" };
  }

  if (data.attendance === "yes") {
    if (data.guests < 1 || data.guests > 10) {
      return { valid: false, message: "Počet hostů musí být mezi 1 a 10" };
    }
  } else {
    // If attendance is "no", set guests to 0
    data.guests = 0;
  }

  // Validate note (optional, max 500 chars)
  if (data.note && typeof data.note === "string" && data.note.length > 500) {
    return { valid: false, message: "Poznámka může mít maximálně 500 znaků" };
  }

  return { valid: true };
}

export const handler: Handler = async (
  event: HandlerEvent
): Promise<HandlerResponse> => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ok: false,
        message: "Method not allowed",
      }),
    };
  }

  try {
    // Parse request body
    let body: RSVPRequest;
    try {
      body = JSON.parse(event.body || "{}");
    } catch (e) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ok: false,
          message: "Neplatný JSON formát",
        }),
      };
    }

    // Validate data
    const validation = validateRSVP(body);
    if (!validation.valid) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ok: false,
          message: validation.message || "Neplatná data",
        }),
      };
    }

    // Create table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS rsvps (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        contact TEXT NOT NULL,
        attendance TEXT NOT NULL CHECK (attendance IN ('yes','no')),
        guests INTEGER NOT NULL,
        note TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `;

    // Insert RSVP into database
    await sql`
      INSERT INTO rsvps (name, contact, attendance, guests, note)
      VALUES (${body.name.trim()}, ${body.contact.trim()}, ${body.attendance}, ${body.guests}, ${body.note?.trim() || null})
    `;

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ok: true,
      }),
    };
  } catch (error) {
    console.error("Error processing RSVP:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ok: false,
        message: "Chyba serveru při zpracování požadavku",
      }),
    };
  }
};

