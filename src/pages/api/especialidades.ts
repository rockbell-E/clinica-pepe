import type { APIRoute } from "astro";
import { pool } from "../../lib/db.js";

export const GET: APIRoute = async () => {
  try {
    const [rows] = await pool.query(
      "SELECT id, nombre FROM especialidades ORDER BY nombre ASC"
    );

    return new Response(JSON.stringify(rows), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error al consultar especialidades:", err);
    return new Response(
      JSON.stringify({ error: "Error consultando la base de datos" }),
      { status: 500 }
    );
  }
};
