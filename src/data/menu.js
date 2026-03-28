export const SHEET_URL = "https://docs.google.com/spreadsheets/d/1ky379lDn3tCaTOYSN7ckUu81VVzFtWqd/edit?gid=1537339980#gid=1537339980";

export function getGvizUrl(sheetUrl, sheetName = "Menu Data") {
  const match = sheetUrl.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (!match) throw new Error(`Could not extract Sheet ID from: ${sheetUrl}`);
  return `https://docs.google.com/spreadsheets/d/${match[1]}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}`;
}

export const featuredDishes = [
  { category: "Kabab & Tandoor",   name: "Chicken Tikka",   desc: "Boneless chicken marinated with yogurt, cream and spices, grilled to perfection in our stone tandoor.", price: "$14.99" },
  { category: "Biryani & Rice",    name: "Goat Tehari",     desc: "Traditional Bangladeshi aromatic rice dish cooked with tender goat and a medley of whole spices.", price: "$17.99" },
  { category: "Curry",             name: "Beef Kala Bhuna", desc: "Slow-cooked beef with roasted spices until dark, deeply rich, and intensely flavoured.", price: "$17.99" },
  { category: "Signature Delight", name: "Family Platter",  desc: "Fried Rice, Fried Chicken (8 pcs), Chilli Chicken, Noodles, Soup & Wonton. For 4 persons.", price: "$79.99" },
  { category: "Hakka Chinese",     name: "Garlic Shrimp",   desc: "Plump shrimp sautéed with garlic, onions, and colourful peppers in a savory wok sauce.", price: "$18.99" },
  { category: "Kabab & Tandoor",   name: "Beef Angara",     desc: "Tender beef in spicy gravy, finished with a dramatic charcoal smoke infusion.", price: "$16.99" },
];
