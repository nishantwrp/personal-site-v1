var slugify = require("slugify");

export function slug(title) {
  return slugify(title, { lower: true });
}
