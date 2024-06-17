const random = (min: number, max: number, truncate = true) => {
  const val = min + Math.random() * (max - min);
  return truncate ? Math.trunc(val) : val;
};

export default random;
