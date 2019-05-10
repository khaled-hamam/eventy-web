export function toEnumKeys(e: object): string[] {
  return Object.keys(e).filter(key => isNaN(key as any));
}
