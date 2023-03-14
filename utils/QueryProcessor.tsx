export default function QueryProcessor(query: string): string {
  const lower = query.toLowerCase();

  console.log(lower)
  if(lower.startsWith('which of the following numbers is the largest: ')) {
    const suff = lower.slice('which of the following numbers is the largest: '.length).replaceAll(',', '').replaceAll('?', '');
    const nums = suff.split(' ');
    const max = Math.max(...nums.map((x) => parseInt(x)));
    return max.toString();
  }

  if(lower.startsWith('what is ') && lower.includes(' plus ')) {
    const suff = lower.slice('what is '.length).replaceAll('?', '');
    const nums = suff.split(' plus ');
    const sum = nums.map((x) => parseInt(x)).reduce((a, b) => a + b);
    return sum.toString();
  }

  if(lower.startsWith('what is ') && lower.includes(' multiplied by ')) {
    const suff = lower.slice('what is '.length).replaceAll('?', '');
    const nums = suff.split(' multiplied by ');
    const sum = nums.map((x) => parseInt(x)).reduce((a, b) => a * b);
    return sum.toString();
  }
  if (lower.startsWith('which of the following numbers is both a square and a cube:')) {
    const suff = lower.slice('which of the following numbers is both a square and a cube: '.length).replaceAll(',', '').replaceAll('?', '');
    const nums = suff.split(' ');
    for (const num in nums) {
      const n = parseInt(num);
      if (Math.sqrt(n) % 1 === 0 && Math.cbrt(n) % 1 === 0) {
        return n.toString();
      }
    }
  }

  const fixed_map = new Map([
    [ 'what is your name?', 'Alexander Obolenskiy' ],
    [ '', '' ],
    [ '', '' ],
    [ '', '' ],
    [ '', '' ],
    [ '', '' ],
    [ '', '' ],
    [ '', '' ],
    [ '', '' ],
    [ '', '' ],
    [ '', '' ],
  ])

  const includes_map = new Map([
    [ 'shakespeare', 
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist.",
    ], 
    [ '', 
      ''
    ], 
    [ '', 
      ''
    ], 
    [ '', 
      ''
    ], 
    [ '', 
      ''
    ], 
    [ '', 
      ''
    ], 
    [ '', 
      ''
    ], 
    [ '', 
      ''
    ], 
  ])

  if (fixed_map.has(lower)) {
    return fixed_map.get(lower) as string;
  }

  for (const key in includes_map.keys()) {
    if (lower.includes(key)) {
      return includes_map.get(key) as string;
    }
  }

  return "";
}
