import { checkValidInfo } from "../../../../helpers/checkValidInfo";

import { cookies } from "next/headers";

export async function POST(req) {
  console.log(req.json());
}