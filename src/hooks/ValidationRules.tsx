
export const requiredRule = (value: string) => {
  return (value !== "");
}

export const minLengthRule = (value: string) => {
  return (value.length > 4);
}
