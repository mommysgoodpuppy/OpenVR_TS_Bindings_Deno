
import { dlopen, FetchOptions } from "https://deno.land/x/plug/mod.ts";

const opts: FetchOptions = {
  name: "openvr_api",
  url: "https://example.com/path/to/openvr_api.dll",
};

const { symbols } = await dlopen(opts, {
  Init: { parameters: ["pointer", "i32"], result: "pointer" },
  Shutdown: { parameters: [], result: "void" },
  IsHmdPresent: { parameters: [], result: "bool" },
  GetGenericInterface: { parameters: ["pointer", "pointer"], result: "pointer" },
  IsRuntimeInstalled: { parameters: [], result: "bool" },
  GetInitErrorAsSymbol: { parameters: ["i32"], result: "pointer" },
  GetInitErrorAsDescription: { parameters: ["i32"], result: "pointer" },
});

export const {
  Init,
  Shutdown,
  IsHmdPresent,
  GetGenericInterface,
  IsRuntimeInstalled,
  GetInitErrorAsSymbol,
  GetInitErrorAsDescription,
} = symbols;
