// Turns a section title into a URL-safe anchor id, e.g. "My Role" → "my-role".
export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
