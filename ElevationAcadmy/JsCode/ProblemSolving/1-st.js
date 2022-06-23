// PrepBuddy has an analog clock which consists of two hands one for hour and another for minute. She wants to calculate the shorter angle formed between hour and minute hand at any given time.

var Minimal_Angle = (h, m) => {
  if (h == 12) h = 0;
  if (m == 60) {
    m = 0;
    h += 1;
    if (h > 12) h = h - 12;
  }

  let hour_angle = 0.5 * (h * 60 + m);
  let minute_angle = 6 * m;

  let angle = Math.abs(hour_angle - minute_angle);

  angle = Math.min(360 - angle, angle);

  return angle;
};
