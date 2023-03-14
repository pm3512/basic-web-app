export default function QueryProcessor(query: string): string {
  const lower = query.toLowerCase();

  console.log(lower)
  if(lower.startsWith('which of the following numbers is the largest: ')) {
    const suff = lower.slice('which of the following numbers is the largest: '.length).replaceAll(',', '').replaceAll('?', '');
    console.log('suff', suff)
    const nums = suff.split(' ');
    console.log('nums', nums)
    const max = Math.max(...nums.map((x) => parseInt(x)));
    return max.toString();
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
