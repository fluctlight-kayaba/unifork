export const waitFor = (millisecond: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(() => resolve(), millisecond));
};
