export default function QueryProcessor(query: string): string {
  const lower = query.toLowerCase();
  if (lower.includes('name')) {
    return 'Alex'
  }
  if (lower.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  return "";
}
