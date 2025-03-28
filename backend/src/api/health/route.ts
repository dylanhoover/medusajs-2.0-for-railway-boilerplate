import { MedusaRequest, MedusaResponse } from "@medusajs/framework";

export async function get(
    req: MedusaRequest,
    res: MedusaResponse
) : Promise<void> {
    res.status(200).json({ status: "ok" });
} 

