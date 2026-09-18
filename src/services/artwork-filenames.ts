const INDEXED_FALLBACKS: Record<string, string> = {
  SCR: "SCR_00",
  SCR2: "SCR_01",
  SCR3: "SCR_02",
  BG: "BG_00",
};

export function artRemoteFileNames(gameId: string, type: string): string[] {
  const primary = `${gameId}_${type}.png`;
  const fallbackType = INDEXED_FALLBACKS[type];
  if (!fallbackType) {
    return [primary];
  }
  return [primary, `${gameId}_${fallbackType}.png`];
}
