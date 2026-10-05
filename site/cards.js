// Real Talk Cards — card catalog.
// All copy is an AI-assisted DRAFT. Every card stays "draft" until a human editor approves it.

const VIBES = {
  real:   { name: "Real",   blurb: "Honest, low-key, no fluff. Says exactly what it means." },
  loving: { name: "Loving", blurb: "Deep, sincere, generational. Love that lasts decades." },
  hype:   { name: "Hype",   blurb: "Big energy. Some milestones deserve a declaration." },
  petty:  { name: "Petty",  blurb: "Funny, sharp, just shady enough. Side-eye with love." },
};

const OCCASIONS = [
  "Mother's Day", "Father's Day", "Birthday", "Anniversary", "Graduation",
  "Valentine's Day", "Christmas", "New Year", "Juneteenth", "Kwanzaa",
  "Wedding", "New Baby", "Sympathy", "Break-Up", "Divorce", "Friendship",
  "Teacher Appreciation",
];

const CARDS = [
  // Mother's Day
  { occasion: "Mother's Day", vibe: "real",
    front: "You did the best you could with what you had.",
    inside: "What you had was never enough, but somehow we never knew it. Happy Mother's Day, Mama." },
  { occasion: "Mother's Day", vibe: "loving",
    front: "Every good thing in me has your fingerprints on it.",
    inside: "The way I pray, the way I love, the way I season my food. Thank you for all of it. Happy Mother's Day." },
  { occasion: "Mother's Day", vibe: "petty",
    front: "Happy Mother's Day to the woman who said, \"We got food at home.\"",
    inside: "You were right. We did. And it was better. Love you." },

  // Father's Day
  { occasion: "Father's Day", vibe: "real",
    front: "You showed up. Every time.",
    inside: "Not always with the right words, but always with your whole self. That counts for everything. Happy Father's Day." },
  { occasion: "Father's Day", vibe: "loving",
    front: "I learned what a good man looks like by watching you.",
    inside: "How you worked, how you protected us, how you loved us out loud. Happy Father's Day, Daddy." },
  { occasion: "Father's Day", vibe: "petty",
    front: "Happy Father's Day to the man who still thinks the thermostat is his personal property.",
    inside: "Don't worry. Nobody touched it. (Somebody touched it.)" },

  // Birthday
  { occasion: "Birthday", vibe: "real",
    front: "Another year. You're still here. That's the whole blessing.",
    inside: "Happy birthday. Spend it however you want to." },
  { occasion: "Birthday", vibe: "hype",
    front: "IT'S YOUR BIRTHDAY. ACT LIKE IT.",
    inside: "Put the good outfit on. Play your song twice. Let them sing it with the extra runs. Happy birthday!" },
  { occasion: "Birthday", vibe: "petty",
    front: "Happy birthday! I'd say you don't look a day over 30...",
    inside: "...but I promised the Lord I'd stop lying. You look good though. Happy birthday." },

  // Anniversary
  { occasion: "Anniversary", vibe: "real",
    front: "We've had good years and hard years.",
    inside: "I'd choose you for all of them. Happy anniversary." },
  { occasion: "Anniversary", vibe: "loving",
    front: "I still look for you first in every room.",
    inside: "Year after year, you're still my favorite person to come home to. Happy anniversary, baby." },
  { occasion: "Anniversary", vibe: "petty",
    front: "Happy anniversary to the only person I'd share my last wing with.",
    inside: "Don't get used to it. Love you." },

  // Graduation
  { occasion: "Graduation", vibe: "real",
    front: "You did the work. Nobody handed you this.",
    inside: "Be proud. Then go get the next thing. Congratulations, graduate." },
  { occasion: "Graduation", vibe: "hype",
    front: "CAP. GOWN. GENERATIONAL CHANGE.",
    inside: "The whole family is about to be loud at this ceremony, and we earned it. So did you. Congratulations!" },
  { occasion: "Graduation", vibe: "petty",
    front: "Congratulations! Now about that \"I'll pay you back when I graduate\"...",
    inside: "I'm just playing. (I'm not playing.) So proud of you." },

  // Valentine's Day
  { occasion: "Valentine's Day", vibe: "real",
    front: "I'm not big on mushy stuff.",
    inside: "But I'm big on you. Happy Valentine's Day." },
  { occasion: "Valentine's Day", vibe: "loving",
    front: "You feel like home and Sunday dinner.",
    inside: "Warm, safe, and worth the wait. Happy Valentine's Day, love." },
  { occasion: "Valentine's Day", vibe: "petty",
    front: "Happy Valentine's Day. You're still my favorite... most days.",
    inside: "Today's one of the good ones. Don't ruin it." },

  // Christmas
  { occasion: "Christmas", vibe: "real",
    front: "Wishing you peace this season. Real peace.",
    inside: "The kind that doesn't need a bow on it. Merry Christmas." },
  { occasion: "Christmas", vibe: "loving",
    front: "The whole family under one roof, and you're my favorite part.",
    inside: "Merry Christmas. I love you." },
  { occasion: "Christmas", vibe: "petty",
    front: "Merry Christmas! Don't rip the wrapping paper. Some of us save it.",
    inside: "Also, whoever brought store-bought potato salad... we know. Merry Christmas." },

  // New Year
  { occasion: "New Year", vibe: "real",
    front: "New year. Same you. And that's fine.",
    inside: "You don't have to reinvent yourself. Just keep going. Happy New Year." },
  { occasion: "New Year", vibe: "hype",
    front: "NEW YEAR. NEW LEVELS. SAME GOD.",
    inside: "Eat your black-eyed peas and greens, because this year is coming in big. Happy New Year!" },
  { occasion: "New Year", vibe: "petty",
    front: "Leaving some things in last year...",
    inside: "...and some people. Not you though. You made the cut. Happy New Year." },

  // Juneteenth
  { occasion: "Juneteenth", vibe: "loving",
    front: "We are our ancestors' wildest dreams.",
    inside: "Celebrating the freedom they prayed for, and the family I get to share it with. Happy Juneteenth." },
  { occasion: "Juneteenth", vibe: "hype",
    front: "RED DRINK. GRILL ON. FAMILY OUTSIDE.",
    inside: "Celebrating freedom the right way: together and loud. Happy Juneteenth!" },
  { occasion: "Juneteenth", vibe: "petty",
    front: "Happy Juneteenth to everybody who just found out about it in 2021.",
    inside: "Welcome. We've been celebrating since 1865. Grab a plate." },

  // Kwanzaa
  { occasion: "Kwanzaa", vibe: "loving",
    front: "Umoja. Unity starts with family, and family starts with you.",
    inside: "Wishing you a Kwanzaa full of purpose, culture, and love." },
  { occasion: "Kwanzaa", vibe: "hype",
    front: "SEVEN DAYS. SEVEN PRINCIPLES. ALL BLESSINGS.",
    inside: "Light the kinara and celebrate who we are. Heri za Kwanzaa!" },
  { occasion: "Kwanzaa", vibe: "petty",
    front: "Happy Kwanzaa! Yes, it's real. No, I'm not explaining it again.",
    inside: "Look it up, then come eat. Heri za Kwanzaa." },

  // Wedding
  { occasion: "Wedding", vibe: "loving",
    front: "Two families. One love. A whole new legacy.",
    inside: "May your marriage be strong, your home be full, and your love be an example. Congratulations." },
  { occasion: "Wedding", vibe: "hype",
    front: "THEY SAID YES! LINE UP FOR THE ELECTRIC SLIDE!",
    inside: "Congratulations to the happy couple. Save me a spot on the dance floor." },
  { occasion: "Wedding", vibe: "petty",
    front: "Congratulations! I'll be at the reception.",
    inside: "Mostly for the food. But also for y'all. Wishing you a lifetime of love." },

  // New Baby
  { occasion: "New Baby", vibe: "loving",
    front: "Welcome to the world, little one. You come from a long line of love.",
    inside: "Congratulations on your beautiful new blessing." },
  { occasion: "New Baby", vibe: "hype",
    front: "THE NEWEST MEMBER OF THE FAMILY HAS ARRIVED!",
    inside: "The family just got bigger and better. Congratulations!" },
  { occasion: "New Baby", vibe: "petty",
    front: "Congratulations on the new baby! Sleep is overrated anyway.",
    inside: "That's what we tell ourselves. Also, the aunties are already fighting over who holds the baby first." },

  // Sympathy
  { occasion: "Sympathy", vibe: "real",
    front: "There are no right words. I'm just here.",
    inside: "Whatever you need: a meal, a ride, a quiet room. I'm here. With deep sympathy." },
  { occasion: "Sympathy", vibe: "loving",
    front: "Their love doesn't leave. It lives on in all of us.",
    inside: "Holding you and your family in prayer during this time." },

  // Break-Up
  { occasion: "Break-Up", vibe: "real",
    front: "It ended. That's allowed.",
    inside: "Take your time. Be sad if you need to. Then come back to yourself. I'm here." },
  { occasion: "Break-Up", vibe: "loving",
    front: "Losing them doesn't mean losing you.",
    inside: "You're still whole, still loved, still worthy. Call me anytime." },
  { occasion: "Break-Up", vibe: "petty",
    front: "Their loss. Literally. You took the air fryer, right?",
    inside: "Proud of you. Let's go eat." },

  // Divorce
  { occasion: "Divorce", vibe: "real",
    front: "Chapter closed. You still have a whole book left.",
    inside: "Wishing you peace and a fresh start." },
  { occasion: "Divorce", vibe: "hype",
    front: "FREEDOM LOOKS GOOD ON YOU.",
    inside: "New season, new you. Let's celebrate!" },
  { occasion: "Divorce", vibe: "petty",
    front: "Congratulations. The whole closet is yours now.",
    inside: "And the remote. And your peace. Enjoy all three." },

  // Friendship
  { occasion: "Friendship", vibe: "real",
    front: "We don't talk every day, but I know you've got me.",
    inside: "And you know I've got you. That's real friendship." },
  { occasion: "Friendship", vibe: "loving",
    front: "You're the family I chose.",
    inside: "Thank you for being there through every season. I love you, friend." },
  { occasion: "Friendship", vibe: "petty",
    front: "You know too much about me. So you can never leave.",
    inside: "Friends for life. It's for my protection. Love you." },

  // Teacher Appreciation
  { occasion: "Teacher Appreciation", vibe: "real",
    front: "You saw something in me before I did.",
    inside: "Thank you for every lesson, especially the ones that weren't in the book." },
  { occasion: "Teacher Appreciation", vibe: "loving",
    front: "You didn't just teach. You poured into us.",
    inside: "Thank you for your patience, your heart, and your belief in every child." },
  { occasion: "Teacher Appreciation", vibe: "hype",
    front: "BEST TEACHER IN THE BUILDING. NO DEBATE.",
    inside: "Thank you for showing up for us every single day!" },
  { occasion: "Teacher Appreciation", vibe: "petty",
    front: "Thank you for teaching my child. I've helped with the homework...",
    inside: "...so I know exactly what you go through. You deserve a raise and a vacation." },
].map((c, i) => ({ id: i + 1, status: "draft", ...c }));
