export function generate() {
  let id = "";
  const subset = "123456789qwertyuiopasdfghjklzxcvbnm";
  const length = 5;
  for (let i = 0; i < length; i++) {
    id += subset[Math.floor(Math.random() * subset.length)];
  }
  return id;
}
