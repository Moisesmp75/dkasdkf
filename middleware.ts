import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(_request: NextRequest) {
  // Validaciones desactivadas temporalmente para facilitar la navegación.
  return NextResponse.next();
}

