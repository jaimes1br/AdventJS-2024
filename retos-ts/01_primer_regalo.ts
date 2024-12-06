function prepareGifts(gifts: number[]): number[] {
    const result: number[] = [...new Set(gifts)];
    return result.sort((a, b) => a - b);
}