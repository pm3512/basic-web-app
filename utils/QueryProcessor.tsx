function isPrime(n: number): boolean {
  if (n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  const sqrt = Math.sqrt(n);
  for (let i = 3; i <= sqrt; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function toFixed(x: number) {
  let x_str = '';
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1]);
    if (e) {
        x *= Math.pow(10,e-1);
        x_str = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
        e -= 20;
        x /= Math.pow(10,e);
        x_str += ((new Array(e+1)).join('0') as string);
    }
  }
  return x_str;
}

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

  if(lower.startsWith('what is ') && lower.includes(' minus ')) {
    const suff = lower.slice('what is '.length).replaceAll('?', '');
    const nums = suff.split(' minus ');
    const sum = nums.map((x) => parseInt(x)).reduce((a, b) => a - b);
    return sum.toString();
  }

  if(lower.startsWith('what is ') && lower.includes(' divided by ')) {
    const suff = lower.slice('what is '.length).replaceAll('?', '');
    const nums = suff.split(' divided by ');
    const sum = nums.map((x) => parseInt(x)).reduce((a, b) => a / b);
    return sum.toString();
  }

  if(lower.startsWith('what is ') && lower.includes(' multiplied by ')) {
    const suff = lower.slice('what is '.length).replaceAll('?', '');
    const nums = suff.split(' multiplied by ');
    const sum = nums.map((x) => parseInt(x)).reduce((a, b) => a * b);
    return sum.toString();
  }
  if(lower.startsWith('what is ') && lower.includes(' to the power of ')) {
    const suff = lower.slice('what is '.length).replaceAll('?', '');
    const nums = suff.split(' to the power of ');
    const sum = nums.map((x) => parseInt(x)).reduce((a, b) => a ** b);
    return sum.toLocaleString('fullwide', {useGrouping:false});
  }

  console.log(123)
  if (lower.startsWith('which of the following numbers is both a square and a cube:')) {
  console.log(456)
    const suff = lower.slice('which of the following numbers is both a square and a cube: '.length).replaceAll(',', '').replaceAll('?', '');
    const nums = suff.split(' ');
    for (let num of nums) {
      const n = parseInt(num);
      if (Math.sqrt(n) % 1 === 0 && Math.cbrt(n) % 1 === 0) {
        console.log(n, num, nums)
        return n.toString();
      }
    }
  }
   if (lower.startsWith('which of the following numbers are primes: ')) {
    const suff = lower.slice('which of the following numbers are primes: '.length).replaceAll(',', '').replaceAll('?', '');
    const nums = suff.split(' ');
    const primes = [];
    for (let num of nums) {
      const n = parseInt(num);
      if (isPrime(n)) {
        primes.push(n);
      }
    }
    return primes.join(', ');
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
