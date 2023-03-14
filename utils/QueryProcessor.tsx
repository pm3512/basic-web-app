export default function QueryProcessor(query: string): string {
  const lower = query.toLowerCase();
  const fixed_map = new Map([
    [ 'what is your name?', 'Alexander Obolenskiy' ],
  ])

  const includes_map = new Map([
    [ 'shakespeare', 
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist.",
    ], 
  ])

  if (lower in fixed_map) {
    return fixed_map.get(lower) as string;
  }

  for (const key in includes_map) {
    if (lower.includes(key)) {
      return includes_map.get(key) as string;
    }
  }

  return "";
}
