export function get(key) {
  return (obj) => obj[key] || null;
}