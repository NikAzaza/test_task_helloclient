export function setConfigPixelRelatedValue(value: number | undefined, defaultValue: number): number {
  return Number.isSafeInteger(value) && !!value && value > 0
    ? value
    : defaultValue;
}
