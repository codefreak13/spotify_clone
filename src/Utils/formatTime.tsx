const formatTime = (t: number): string => {
  let s = t / 1000;
  let time = (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
  return time.slice(0, 4);
};

const playRate = (ab: number, ba: number): number | undefined => {
  const a = formatTime(ab);
  const b = formatTime(ba);
  const f = parseInt(a);
  const g = parseInt(b);
  const c = f / g;
  const d = String(c);
  const e = d.slice(0, 3);
  return Number(e);
};

export {formatTime, playRate};
