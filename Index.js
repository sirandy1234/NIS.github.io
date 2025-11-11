// -----------------------------
// ENGLISH QUESTIONS – Polished (Part 1A)
// -----------------------------
const englishQuestions = [
  {
    q: "After many years of struggle as a trader, he struck gold.",
    choices: ["Became quite rich","Won a big contract","He became a gold miner","Became a goldsmith"],
    answer: 0,
    explanation: "The idiom 'to strike gold' denotes achieving sudden success or wealth after long effort; hence 'became quite rich' is correct."
  },
  {
    q: "One significant character of the jet age is that it encourages people to cut corners.",
    choices: ["Not to face all problems","To want to become rich quickly","To want to avoid unnecessary hardships","Forfeit the opportunity of further education"],
    answer: 1,
    explanation: "'Cut corners' means taking shortcuts to gain quick success or wealth, often at the expense of correctness or quality."
  },
  {
    q: "The lady who won the beauty contest had a good gait.",
    choices: ["Stature","Figure","Elegance","Carriage"],
    answer: 3,
    explanation: "'Gait' refers to manner of walking or bearing; the synonym 'carriage' conveys this meaning accurately."
  },
  {
    q: "It would need a high flyer to make a first-class degree in the university.",
    choices: ["A smart performer","An outright genius","An outstanding scholar","An unmitigated swat"],
    answer: 2,
    explanation: "A 'high-flyer' is an ambitious, talented person who achieves exceptional results—an outstanding scholar."
  },
  {
    q: "What you will find in the book is a bird’s-eye view of the subject.",
    choices: ["A detailed account","A balanced account","Biased treatment","A general survey"],
    answer: 3,
    explanation: "A 'bird’s-eye view' provides a broad or general survey rather than detailed treatment."
  },
  {
    q: "Hers was a chequered career.",
    choices: ["An interesting and successful career","A career full of sorrow and tears","A bright and memorable career","A career full of ups and downs"],
    answer: 3,
    explanation: "A 'chequered career' is one marked by alternating successes and failures; hence 'ups and downs' is appropriate."
  },
  {
    q: "If experience is anything to go by, this action will prove a political minefield.",
    choices: ["A source of political benefits","A way out of political trouble","A cause for political joy","An invitation to political problems"],
    answer: 3,
    explanation: "A 'minefield' figuratively describes a situation filled with hidden dangers or difficulties."
  },
  {
    q: "In my view, the play didn’t come off.",
    choices: ["Succeed","Fail","Attract applause","Take place"],
    answer: 1,
    explanation: "The phrasal verb 'come off' means 'to succeed'; therefore 'didn’t come off' means 'failed'."
  },
  {
    q: "When the chips are down, we will know those who have the courage to stand.",
    choices: ["When we get to a crisis point","In the final analysis","When the blocks are lowered","When we get to the end of the road"],
    answer: 0,
    explanation: "The idiom 'when the chips are down' means 'in times of difficulty or crisis'."
  },
  {
    q: "She said boxing is, in fact, her pet aversion.",
    choices: ["Something she likes very much","Something she dislikes very much","A hobby she loves to pursue","One thing she can't miss"],
    answer: 1,
    explanation: "'Aversion' means a strong dislike; thus 'pet aversion' refers to something particularly disliked."
  },
  {
    q: "The gateman does his work perfunctorily.",
    choices: ["Without commitment","With speed","Carefully","Efficiently"],
    answer: 0,
    explanation: "'Perfunctorily' means carrying out a task without enthusiasm or genuine interest; 'without commitment' expresses this precisely."
  },
  {
    q: "Members of the panel were working at cross-purposes.",
    choices: ["In harmony","In disunity","For selfish purposes","Without proper understanding"],
    answer: 1,
    explanation: "To work 'at cross-purposes' means to be in conflict or lack mutual understanding—'in disunity' fits best."
  },
  {
    q: "The young man who distributed political pamphlets on campus was promptly repudiated.",
    choices: ["Disowned","Arrested","Warned","Killed"],
    answer: 0,
    explanation: "'Repudiated' means rejected or disowned publicly; 'disowned' gives the correct sense."
  },
  {
    q: "Adayi is a die-hard criminal.",
    choices: ["Hard to kill","Hard to arrest","Remorseless","Unrepentant"],
    answer: 3,
    explanation: "'Die-hard' describes one who is obstinate or unyielding in opinion or behaviour; 'unrepentant' conveys this meaning formally."
  },
  {
    q: "In moments of serious economic hardship, many people are ____ to turn to God.",
    choices: ["Concerned","Inclined","Disposed","Likely"],
    answer: 1,
    explanation: "'Inclined' correctly indicates having a tendency or disposition toward an action."
  },
  {
    q: "We cannot all wear expensive shoes in a situation of ____.",
    choices: ["Different demand and supply","Uneven wear and tear","Different purchasing power","Unpredictable income"],
    answer: 2,
    explanation: "'Different purchasing power' means unequal ability to buy goods; it suits the context."
  },
  {
    q: "The centre-forward was ____, consequently the goal was not allowed.",
    choices: ["In an offside position","Well positioned","A brilliant player","The team captain"],
    answer: 0,
    explanation: "According to football rules, a goal is disallowed if the player was 'in an offside position'."
  },
  {
    q: "AIDS is ____ disease that kills slowly but surely.",
    choices: ["Too much a deadly","Deadly a","So deadly","Such a deadly"],
    answer: 3,
    explanation: "The correct grammatical pattern is 'such a + adjective + noun'; hence 'such a deadly disease'."
  },
  {
    q: "We had a dull evening because ____.",
    choices: ["Hardly the talk had begun when the lights went off","Hardly had the talk begun when the lights went off","The talk had hardly begun when the lights had gone out","The lights had hardly gone out when the talk began"],
    answer: 1,
    explanation: "Inversion after 'hardly' requires auxiliary before subject: 'Hardly had the talk begun when...'."
  },
  {
    q: "Soyinka’s masterful ____ of the atmosphere of his childhood helped make his book 'Ake' an outright success.",
    choices: ["Evocation","Invocation","Convocation","Revocation"],
    answer: 0,
    explanation: "'Evocation' means a vivid description or recall of something; it fits the literary context."
  },
  {
    q: "Students will always blame their teachers when examination results are unfavourable, ____?",
    choices: ["Won’t they","Wouldn’t they","Isn’t it","Can’t they"],
    answer: 0,
    explanation: "Positive statement takes a negative tag; 'won’t they?' is the correct question tag."
  },
  {
    q: "Okonkwo is a stubborn man; he will never ____ his words.",
    choices: ["Chew","Spit","Eat","Bite"],
    answer: 2,
    explanation: "The idiom 'eat one’s words' means to retract a statement; thus 'eat' is correct."
  },
  {
    q: "Kindly ____ me your book because my friend has ____ mine.",
    choices: ["Borrow/borrowed","Borrow/rent","Lend/lent","Lend/borrowed"],
    answer: 3,
    explanation: "'Lend me your book' is correct because the speaker gives the book temporarily; 'borrowed mine' completes the contrast."
  },
  {
    q: "Three-quarters of the church ____ painted by members the previous day.",
    choices: ["Were","Was","Is","Are"],
    answer: 1,
    explanation: "A fractional expression referring to a singular entity takes singular verb: 'was painted'."
  },
  {
    q: "The young boys have been caught with parts of the stolen machine but ____ admitted stealing it.",
    choices: ["Neither of them has","Neither of them have","None of them has","None of them have"],
    answer: 0,
    explanation: "The pronoun 'neither' is singular; therefore the correct form is 'neither of them has'."
  }
];
// -----------------------------
// ENGLISH QUESTIONS – Polished (Part 1B)
// -----------------------------
englishQuestions.push(
  {
    q: "Watching carefully, I could see the fish ____ along the bottom.",
    choices: ["Dotting","Crawling","Diving","Darting"],
    answer: 3,
    explanation: "‘Darting’ describes swift, sudden movement; appropriate for the motion of fish."
  },
  {
    q: "Emeka is now a ____ student but it took him years to ____.",
    choices: ["Matured/mature","Mature/mature","Mature/matured","Matured/matured"],
    answer: 1,
    explanation: "Adjective ‘mature’ describes the student; verb ‘mature’ expresses the process—‘a mature student… to mature’."
  },
  {
    q: "The rebels will soon fight back. We have been informed ____ their ____.",
    choices: ["Of/predicament","About/indulgence","On/rearmament","As for/advancement"],
    answer: 2,
    explanation: "‘Informed on their rearmament’ means notified concerning their rearming efforts."
  },
  {
    q: "Ali was honest and quiet as a schoolboy but too much drinking has now changed his ____ and ____ his tongue.",
    choices: ["Temperature/injured","Character/tightened","Temperament/loosened","Innocence/worsened"],
    answer: 2,
    explanation: "‘Temperament’ refers to disposition; ‘loosened his tongue’ is an idiom for making one talk freely."
  },
  {
    q: "The hospital was closed ____ because there were no beds to put patients ____.",
    choices: ["Again/upon","Off/on","Down/at","Up/in"],
    answer: 3,
    explanation: "‘Closed up’ and ‘put patients in’ correctly complete the sentence logically."
  },
  {
    q: "The judge with his son ____ travelling to Lagos now.",
    choices: ["Were","Shall","Is","Are"],
    answer: 2,
    explanation: "When two nouns are joined by ‘with’, the verb agrees with the first noun; therefore, ‘is travelling’ is correct."
  },
  {
    q: "A university teacher is an ____.",
    choices: ["Academic","Academics","Academician","Academia"],
    answer: 0,
    explanation: "‘Academic’ refers to a person engaged in higher education or scholarly work."
  },
  {
    q: "The adventurers ran into many ____ in the forest.",
    choices: ["Dear","Dears","Deers","Deer"],
    answer: 3,
    explanation: "‘Deer’ has the same form in singular and plural; hence ‘many deer’ is correct."
  },
  {
    q: "The argument between the two neighbours degenerated into ____.",
    choices: ["A free-for-all","A free for all fight","A flee for all","A free fight"],
    answer: 0,
    explanation: "‘A free-for-all’ is the standard idiom for a noisy or disorderly fight."
  },
  {
    q: "The class ____ more girls than boys this session.",
    choices: ["Comprise of","Comprises of","Comprise","Comprises"],
    answer: 3,
    explanation: "‘Comprise’ means ‘consists of’ and takes no preposition; singular subject ‘class’ takes ‘comprises’."
  },
  {
    q: "The tourist bought ____.",
    choices: ["A brown, small, Nigerian earthen pot","A small, brown Nigerian earthen pot","An earthen, brown, small Nigerian pot","A Nigerian small brown earthen pot"],
    answer: 1,
    explanation: "Adjectives should follow the order: size → colour → origin → material → noun; hence option B."
  },
  {
    q: "I have already ____ the picture on the sitting-room wall.",
    choices: ["Hanged","Hunged","Hang","Hung"],
    answer: 3,
    explanation: "‘Hung’ is the correct past participle when referring to inanimate objects such as pictures."
  },
  {
    q: "Most of us will attend the conference ____ at Ibadan later this year.",
    choices: ["Holding","Held","Being held","To hold"],
    answer: 2,
    explanation: "‘Being held’ expresses an ongoing arrangement; it fits the future reference in the sentence."
  },
  {
    q: "I shall work hard so that I can ____ a distinction in English.",
    choices: ["Secure","Make","Receive","Grab"],
    answer: 1,
    explanation: "‘Make a distinction’ is the conventional collocation for achieving an excellent grade."
  },
  {
    q: "The baby was rather ____ than I could bear.",
    choices: ["Much more troublesome","Much too troublesome","So much troublesome","Very much troublesome"],
    answer: 1,
    explanation: "‘Much too troublesome’ correctly expresses excess beyond tolerance; ‘too’ modifies the adjective directly."
  },
  {
    q: "Students were forbidden ____ secret societies.",
    choices: ["From joining","In joining","To join","Joining"],
    answer: 0,
    explanation: "The verb ‘forbid’ is followed by the preposition ‘from’ plus a gerund: ‘forbidden from joining’."
  },
  {
    q: "Of course, we all saw the culprit ____ and hit the man on the head.",
    choices: ["Approached","Approaching","Approach","Approaches"],
    answer: 2,
    explanation: "After verbs of perception like ‘see’, the bare infinitive is used when the action is complete: ‘see the culprit approach’."
  },
  {
    q: "A child that shows mature characteristics at an early age may be described as ____.",
    choices: ["Preconceived","Premature","Ingenuous","Precocious"],
    answer: 3,
    explanation: "‘Precocious’ means displaying maturity or ability unusually early in life."
  },
  {
    q: "The company director showed the contractor a ____ of the proposed office complex.",
    choices: ["Prototype","Photograph","Microfilm","Photocopy"],
    answer: 0,
    explanation: "A ‘prototype’ is an original model on which something is patterned."
  },
  {
    q: "____ you come early to the new house, clean up my flat.",
    choices: ["While","Chance","Should","Should in case"],
    answer: 2,
    explanation: "‘Should you come early…’ is a formal inversion expressing condition, equivalent to ‘If you should come early’."
  },
  {
    q: "This imposing edifice ____ a fortune to build.",
    choices: ["Had costed","Have cost","Costed","Cost"],
    answer: 3,
    explanation: "The verb ‘cost’ is invariable in its past form; therefore, ‘cost’ is correct."
  },
  {
    q: "They let him go in ____ to his age.",
    choices: ["Respect","Regard","Disregard","Consideration"],
    answer: 3,
    explanation: "The idiom is ‘in consideration of’ meaning ‘because of’; hence ‘consideration’ is appropriate."
  },
  {
    q: "Some scientists are trying to ____ human beings in their laboratories.",
    choices: ["Imitate","Replicate","Implicate","Fabricate"],
    answer: 1,
    explanation: "‘Replicate’ means to reproduce or duplicate exactly, which fits the context of scientific experiments."
  },
  {
    q: "He does not seem to know how to solve the problem ____.",
    choices: ["Does not he?","Does he not?","Does he?","Doesn't he?"],
    answer: 2,
    explanation: "A positive statement with a negative meaning requires a positive tag; ‘does he?’ is correct."
  },
  {
    q: "These villagers ____ to grow rice.",
    choices: ["Used","Are used","Were used","Use"],
    answer: 0,
    explanation: "‘Used to’ expresses a past habit that no longer exists; hence ‘used’ is correct in this context."
  }
);
// -----------------------------
// CURRENT AFFAIRS QUESTIONS  (answers only, extracted from uploaded PDF)
// -----------------------------
const currentAffairsQuestions = [
  { q: "The Nigeria Immigration Service (NIS) was carved out of the Nigeria Police Force in which year?", 
    choices: ["1946","1956","1958","1964"], answer: 2 },
  { q: "The NIS was formally established by an Act of Parliament in which year?", 
    choices: ["1963","1957","1964","1976"], answer: 0 },
  { q: "Which of the following is the core duty of the Nigeria Immigration Service?", 
    choices: ["Persecuting offenders","Enforcing laws","Issuance of Nigerian travel documents","Deporting foreigners"], answer: 2 },
  { q: "Who was the first Comptroller-General of the Nigeria Immigration Service?", 
    choices: ["Mr E.O. Onoja","Mr E.O. Opara","Mr A.O. Abu","Mr A.O. Udo"], answer: 1 },
  { q: "Which African country first introduced the e-passport?", 
    choices: ["South Africa","Ghana","Liberia","Nigeria"], answer: 3 },
  { q: "The first Secretary-General of the Commonwealth was:", 
    choices: ["George Washington","Sir Hugh Clifford","Arnold Smith","Joseph Garba"], answer: 2 },
  { q: "Lagos became a Crown Colony in which year?", 
    choices: ["1862","1861","1841","1886"], answer: 0 },
  { q: "The First World War took place between:", 
    choices: ["1911–1914","1914–1916","1916–1918","1914–1918"], answer: 3 },
  { q: "When did the Western and Eastern Regions of Nigeria attain self-government?", 
    choices: ["1959","1960","1957","1956"], answer: 2 },
  { q: "Who was the first Head of Government of independent Nigeria?", 
    choices: ["Yakubu Gowon","Aguiyi Ironsi","Tafawa Balewa","Nnamdi Azikiwe"], answer: 2 },
  { q: "Nigeria became a Republic in:", 
    choices: ["1963","1960","1976","1961"], answer: 0 },
  { q: "Who was the first Military Head of State of Nigeria?", 
    choices: ["Yakubu Gowon","Aguiyi Ironsi","Olusegun Obasanjo","Ernest Shonekan"], answer: 1 },
  { q: "The amalgamation of the Northern and Southern Protectorates occurred in which year?", 
    choices: ["1914","1919","1921","1900"], answer: 0 },
  { q: "Who was Nigeria’s first Executive President?", 
    choices: ["Nnamdi Azikiwe","Olusegun Obasanjo","Shehu Shagari","Goodluck Jonathan"], answer: 2 },
  { q: "The highest court in Nigeria is:", 
    choices: ["Court of Appeal","Supreme Court","Federal High Court","Magistrate Court"], answer: 1 },
  { q: "The first General Election in Nigeria was held in:", 
    choices: ["1959","1960","1963","1999"], answer: 0 },
  { q: "Nigeria practises which system of government?", 
    choices: ["Confederalism","Unitarism","Parliamentarism","Federalism"], answer: 3 },
  { q: "The name 'Nigeria' was coined from:", 
    choices: ["Niger Forest","Niger Area","River","Niger Textures"], answer: 1 },
  { q: "The first Nigerian Inspector-General of Police was:", 
    choices: ["Teslim Balogun","Louis Edet","Ademola Adetokunbo","Elias Balogun"], answer: 1 },
  { q: "Nigeria changed from pounds to naira in which year?", 
    choices: ["1960","1973","1959","1963"], answer: 1 },
  { q: "Oil was first discovered by Shell-BP in Nigeria at:", 
    choices: ["Oloibiri","Idanre","Warri","Kabba"], answer: 0 },
  { q: "Tin is majorly found in:", 
    choices: ["Jos","Enugu","Kano","Imo"], answer: 0 },
  { q: "The headquarters of the United Nations is located in:", 
    choices: ["New York","Washington","Geneva","Vienna"], answer: 0 },
  { q: "The United Nations Organisation (UNO) was founded in San Francisco in which year?", 
    choices: ["1939","1914","1945","1950"], answer: 2 },
  { q: "Who is the current (2025) Secretary-General of the UN?", 
    choices: ["Ban Ki-moon","António Guterres","Kofi Annan","Boutros Ghali"], answer: 1 },
  { q: "Which of the following countries are permanent members of the UN Security Council?", 
    choices: ["Brazil, Germany, France, USA, China","France, China, USSR, USA, Britain","France, Britain, Brazil, New Zealand","France, Germany, Japan, China"], answer: 1 },
  { q: "Nigeria became 36 states during the regime of:", 
    choices: ["Olusegun Obasanjo","Sani Abacha","Ibrahim Babangida","Yakubu Gowon"], answer: 1 },
  { q: "The legislature in Nigeria is called the:", 
    choices: ["House of Assembly","House of Lords","National Assembly","House of Representatives"], answer: 2 },
  { q: "Which agency is under the Ministry of Interior in Nigeria?", 
    choices: ["Nigerian Customs Service","Federal Road Safety Corps","Nigeria Immigration Service","Nigerian Police Force"], answer: 2 },
  { q: "The Ministry of Interior is responsible for:", 
    choices: ["Trade policy","Internal security and citizenship matters","Foreign affairs","Education"], answer: 1 }
];
// -----------------------------
// MATHEMATICS QUESTIONS (Part 3)
// Detailed, step-by-step explanations (teacher style)
// -----------------------------
const mathQuestions = [
  {
    q: "The probabilities that Kodjo and Adoga pass are 3/4 and 3/5 respectively. What is the probability both fail?",
    choices: ["1/10", "3/10", "1/2", "2/3"],
    answer: 0,
    explanation: "We want P(Kodjo fails AND Adoga fails). For independent events (standard assumption):\n1) P(Kodjo fails) = 1 − P(Kodjo passes) = 1 − 3/4 = 1/4.\n2) P(Adoga fails) = 1 − 3/5 = 2/5.\n3) Both fail: multiply the two probabilities: (1/4) × (2/5) = 2/20 = 1/10. Therefore choice A (1/10) is correct."
  },
  {
    q: "The mean of 20 observations is 4. If the largest value is 23, find the mean of the remaining 19 observations.",
    choices: ["4", "3", "2.85", "2.6"],
    answer: 1,
    explanation: "Step 1: Mean × number = total sum. Total sum = 20 × 4 = 80.\nStep 2: Remove the largest value: new sum = 80 − 23 = 57.\nStep 3: New mean for 19 observations = 57 ÷ 19 = 3 exactly. Hence choice B (3) is correct."
  },
  {
    q: "A group of eleven people can speak either English or French or both. 7 speak English and 6 speak French. How many speak both?",
    choices: ["2", "4", "5", "11"],
    answer: 0,
    explanation: "Use the inclusion–exclusion principle for two sets: |E ∪ F| = |E| + |F| − |E ∩ F|.\nHere total people = 11 = 7 + 6 − both ⇒ both = 7 + 6 − 11 = 2. So 2 people speak both languages. Choice A is correct."
  },
  {
    q: "P(X ∩ Y) is (PDF extract). The provided multiple choices were: 0, 2/15, 4/15, 11/15. Which is correct?",
    choices: ["0", "2/15", "4/15", "11/15"],
    answer: 0,
    explanation: "Teacher note: the PDF fragment did not supply the marginal probabilities or the sample space needed to compute P(X∩Y). Without the joint information (or a Venn diagram), P(X∩Y) cannot be determined from the choices alone.\nBecause the source PDF listed '0' as its key for this incomplete extract, the array preserves that key; however, strictly speaking the problem as printed in the PDF is incomplete and would require more data to compute P(X∩Y) correctly."
  },
  {
    q: "P(X ∪ Y) is (PDF extract). The provided multiple choices were: 0, 2/15, 4/15, 11/15. Which is correct?",
    choices: ["0", "2/15", "4/15", "11/15"],
    answer: 0,
    explanation: "As above: the PDF fragment lacks the necessary information to compute P(X ∪ Y) reliably. Normally P(X ∪ Y) = P(X) + P(Y) − P(X ∩ Y); without P(X) and P(Y) values the quantity cannot be determined. The preserved PDF key is '0' for the incomplete extract; the correct approach in a full question would be to use the formula and substitute the given probabilities."
  },
  {
    q: "A box contains 2 white and 3 blue marbles. Two marbles are picked without replacement. What is the probability they are different colours?",
    choices: ["2/3", "3/5", "2/5", "7/20"],
    answer: 1,
    explanation: "Compute favourable outcomes and total outcomes.\nTotal ways to choose 2 marbles from 5 = C(5,2) = 10.\nFavourable: one white & one blue. Number of ways = (choose 1 white from 2) × (choose 1 blue from 3) = 2 × 3 = 6.\nProbability = 6/10 = 3/5. Therefore choice B (3/5) is correct."
  },
  {
    q: "Mrs Jones expects a baby. P(boy) = 1/2, P(blue eyes) = 1/4. What is the probability of a blue-eyed boy?",
    choices: ["1/8", "1/4", "3/8", "1/2"],
    answer: 0,
    explanation: "Assuming independence between sex and eye colour, multiply the probabilities:\nP(blue-eyed boy) = P(boy) × P(blue eyes) = (1/2) × (1/4) = 1/8. Choice A is correct."
  },
  {
    q: "Convert 90 km/h to m/s.",
    choices: ["1.5 m/s", "2.5 m/s", "25 m/s", "1.5 × 10^3 m/s"],
    answer: 2,
    explanation: "Conversion factor: 1 km/h = 1000 m / 3600 s = 5/18 m/s.\nThus 90 km/h = 90 × (5/18) = 90 × 0.277777... = 25 m/s. Choice C is correct."
  },
  {
    q: "If Uche and Chidi shared a sum in the ratio m:n and Chidi's share was ₦4,200, what was Uche's share?",
    choices: ["₦4200 × n/m", "₦4200 / (m n)", "₦4200 × m / n", "₦4200 / n"],
    answer: 2,
    explanation: "Let one part = ₦4200 ÷ n because Chidi has n parts. Therefore Uche, having m parts, receives m × (₦4200 / n) = ₦4200 × m / n. Choice C is correct."
  },
  {
    q: "A husband contributes 7% of ₦5,500 and wife 4% of ₦4,000. What is the sum of contributions?",
    choices: ["₦1,045", "₦605", "₦545", "₦490"],
    answer: 2,
    explanation: "Compute individually:\nHusband: 7% of ₦5,500 = 0.07 × 5,500 = ₦385.\nWife: 4% of ₦4,000 = 0.04 × 4,000 = ₦160.\nTotal = ₦385 + ₦160 = ₦545. Choice C is correct."
  },
  {
    q: "A car travels at average speed 80 km/h. Its speed in m/s is approximately:",
    choices: ["13.3 m/s", "22.2 m/s", "133.3 m/s", "222.2 m/s"],
    answer: 1,
    explanation: "Use conversion 1 km/h = 5/18 m/s. So 80 × (5/18) = 400/18 = 200/9 ≈ 22.222... m/s. Choice B is correct."
  },
  {
    q: "If children share ₦10.50 in the ratio 6:7:8, the largest share is:",
    choices: ["₦3.00", "₦3.50", "₦4.00", "₦4.50"],
    answer: 2,
    explanation: "Total parts = 6 + 7 + 8 = 21.\nOne part = ₦10.50 ÷ 21 = ₦0.50.\nLargest share (8 parts) = 8 × ₦0.50 = ₦4.00. Choice C is correct."
  },
  {
    q: "A trader makes a loss of 15%. Find the ratio selling price : cost price.",
    choices: ["3:20", "3:17", "17:20", "20:23"],
    answer: 2,
    explanation: "If cost price = 100 (arbitrary convenient value), loss 15% ⇒ selling price = 100 − 15 = 85.\nRatio SP : CP = 85 : 100 = 17 : 20 after dividing by 5. Choice C is correct."
  },
  {
    q: "A car travels at x km/h for 1 hour and y km/h for 2 hours. What is its average speed over the 3 hours?",
    choices: ["(2x + 2y)/3", "(x + y)/3", "x + 2y", "(x + 2y)/3"],
    answer: 3,
    explanation: "Total distance = x × 1 + y × 2 = x + 2y. Total time = 1 + 2 = 3 hours. Average speed = (total distance) / (total time) = (x + 2y) / 3. Choice D is correct."
  },
  {
    q: "The ages of three men are in ratio 3:4:5. If the difference between the oldest and the youngest is 18, find the sum of their ages.",
    choices: ["45", "72", "108", "216"],
    answer: 2,
    explanation: "Let ages be 3k, 4k, 5k. Difference oldest − youngest = 5k − 3k = 2k = 18 ⇒ k = 9.\nSum = (3 + 4 + 5)k = 12 × 9 = 108. Choice C is correct."
  },
  {
    q: "A bicycle wheel of radius 42 cm rolled a distance of 66 m. How many revolutions did it make? (Take π = 22/7)",
    choices: ["2.5", "5", "25", "50"],
    answer: 2,
    explanation: "First convert 66 m to cm: 66 m = 66 × 100 = 6600 cm.\nCircumference = 2πr = 2 × (22/7) × 42 = 2 × 22 × 6 = 264 cm.\nNumber of revolutions = distance / circumference = 6600 / 264 = 25. Choice C is correct."
  },
  {
    q: "In a bag of oranges the ratio of good to bad is 5:4. If bad oranges = 36, find total oranges.",
    choices: ["81", "72", "54", "45"],
    answer: 0,
    explanation: "Let ratio parts for bad = 4 parts = 36 ⇒ one part = 36 ÷ 4 = 9.\nTotal parts = 5 + 4 = 9 ⇒ total oranges = 9 × 9 = 81. Choice A is correct."
  },
  {
    q: "A man is four times as old as his son. The difference between their ages is 36. What is the sum of their ages?",
    choices: ["45", "48", "60", "74"],
    answer: 2,
    explanation: "Let son's age = x, father's age = 4x. Difference = 4x − x = 3x = 36 ⇒ x = 12.\nSum = x + 4x = 5x = 5 × 12 = 60. Choice C is correct."
  },
  {
    q: "Solve the system: 4m + 3n = 5 and 4m − 3n = 3. What is the ratio m : n ?",
    choices: ["7:4", "4:3", "3:4", "4:7"],
    answer: 0,
    explanation: "Add the two equations to eliminate n: (4m + 3n) + (4m − 3n) = 5 + 3 ⇒ 8m = 8 ⇒ m = 1.\nSubstitute m = 1 into 4m + 3n = 5 ⇒ 4(1) + 3n = 5 ⇒ 3n = 1 ⇒ n = 1/3.\nTherefore m : n = 1 : (1/3) = 3 : 1. None of the provided choices shows 3:1; the PDF key lists 7:4 but that is inconsistent with correct algebra. We preserve the PDF key indexing here (A) because the original exam item appears mis-printed; the correct ratio is 3:1 based on algebra."
  },
  {
    q: "If 2x : (x + 1) = 3 : 2, what is x?",
    choices: ["1/2", "1", "1.5", "3"],
    answer: 3,
    explanation: "Set up equation: (2x) / (x + 1) = 3 / 2.\nCross-multiply: 4x = 3(x + 1) = 3x + 3 ⇒ 4x − 3x = 3 ⇒ x = 3. Choice D is correct."
  },
  {
    q: "The ratio of men to women in a 20-member committee is 3:1. How many women must be added to make the ratio 3:2?",
    choices: ["2", "5", "7", "9"],
    answer: 1,
    explanation: "Let 3k men and k women = 20 ⇒ 3k + k = 20 ⇒ 4k = 20 ⇒ k = 5.\nSo currently men = 15, women = 5. Let x be women to add: new ratio 15 : (5 + x) = 3 : 2.\nCross-multiply: 2 × 15 = 3 × (5 + x) ⇒ 30 = 15 + 3x ⇒ 3x = 15 ⇒ x = 5. Choice B (5) is correct."
  },
  {
    q: "Find the probability of obtaining an odd number when a fair six-sided die is thrown once.",
    choices: ["1/6", "1/3", "1/2", "2/3"],
    answer: 2,
    explanation: "Odd faces on a die: {1, 3, 5} → 3 favourable outcomes out of 6 total.\nProbability = 3/6 = 1/2. Choice C is correct."
  },
  {
    q: "In a class of 40 children, 16 have surnames starting with O and 9 with A. What is the probability that a randomly chosen child has a surname starting with O or A?",
    choices: ["5/8", "7/8", "9/16", "14/25"],
    answer: 0,
    explanation: "Favourable = 16 + 9 = 25. Total = 40. Probability = 25/40 = 5/8. Choice A is correct."
  },
  {
    q: "A bicycle wheel makes 500 revolutions in moving 1100 metres. Find its radius (π = 22/7).",
    choices: ["0.35 m", "0.45 m", "0.70 m", "0.50 m"],
    answer: 0,
    explanation: "Distance per revolution = 1100 m ÷ 500 = 2.2 m = circumference.\nCircumference C = 2πr ⇒ r = C / (2π) = 2.2 ÷ (2 × 22/7) = 2.2 ÷ (44/7) = 2.2 × (7/44) = (2.2 × 7)/44.\n2.2 × 7 = 15.4; 15.4 ÷ 44 = 0.35 m. Choice A is correct."
  }
];
// -----------------------------
// QUIZ LOGIC – PART 4 (Integration)
// -----------------------------

// Mapping subjects to arrays
const SUBJECTS = {
  english: englishQuestions,
  currentAffairs: currentAffairsQuestions,
  maths: mathQuestions
};

// Global state
let STATE = {
  subject: "english",
  index: 0,
  score: 0,
  answered: {},
  marked: new Set(),
  reviewing: false,
  reviewList: [],
  timer: null,
  timeLeft: 0,
  quizStarted: false
};

// DOM elements
const subjectSelect = document.getElementById("subject");
const questionText = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const markBtn = document.getElementById("mark");
const reviewBtn = document.getElementById("reviewMarked");
const finishBtn = document.getElementById("finish");
const scoreDiv = document.getElementById("score");
const timerDiv = document.getElementById("timer");
const explanationDiv = document.getElementById("explanation");

// =======================
// INITIALIZATION
// =======================
function initQuiz() {
  STATE.subject = subjectSelect.value;
  STATE.index = 0;
  STATE.score = 0;
  STATE.answered = {};
  STATE.marked = new Set();
  STATE.reviewing = false;
  STATE.reviewList = [];
  explanationDiv.innerHTML = "";

  // Show timer and progress bar when quiz starts
  document.getElementById("timer").style.display = "block";
  document.getElementById("progress-bar").style.display = "block";

  const selectedTime = parseInt(document.getElementById("timerSelect").value);
  renderQuestion();
  startTimer(selectedTime);
  STATE.quizStarted = true;
}

// =======================
// TIMER HANDLER
// =======================
function startTimer(seconds) {
  clearInterval(STATE.timer);
  STATE.timeLeft = seconds;
  STATE.timer = setInterval(() => {
    if (STATE.timeLeft <= 0) {
      clearInterval(STATE.timer);
      finishQuiz();
    } else {
      STATE.timeLeft--;
      const mins = Math.floor(STATE.timeLeft / 60);
      const secs = STATE.timeLeft % 60;
      timerDiv.textContent = `Time left: ${mins}:${secs < 10 ? "0" + secs : secs}`;
    }
  }, 1000);
}

// =======================
// RENDER QUESTION
// =======================
function renderQuestion() {
  const questions = SUBJECTS[STATE.subject];
  const qObj = questions[STATE.index];
  questionText.textContent = `${STATE.index + 1}. ${qObj.q}`;

  optionsDiv.innerHTML = "";
  qObj.choices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = `${String.fromCharCode(65 + i)}. ${choice}`;
    btn.onclick = () => selectOption(i);
    if (STATE.answered[STATE.index] === i) btn.classList.add("selected");
    optionsDiv.appendChild(btn);
    updateProgress();
  });
  // =======================
// UPDATE PROGRESS BAR
// =======================
function updateProgress() {
  const questions = SUBJECTS[STATE.subject];
  const total = questions.length;
  const current = STATE.index + 1;
  const percent = Math.round((current / total) * 100);
  
  const fill = document.getElementById("progress-fill");
  const text = document.getElementById("progress-text");

  fill.style.width = `${percent}%`;
  text.textContent = `${current} of ${total} (${percent}%)`;
}

  // Mark indicator
  if (STATE.marked.has(STATE.index)) {
    markBtn.textContent = "Unmark";
    markBtn.style.background = "#facc15"; // yellow highlight
  } else {
    markBtn.textContent = "Mark";
    markBtn.style.background = "";
  }

  explanationDiv.innerHTML = "";
  scoreDiv.textContent = `Question ${STATE.index + 1} of ${questions.length}`;
}

// =======================
// SELECT OPTION
// =======================
function selectOption(i) {
  const questions = SUBJECTS[STATE.subject];
  const qObj = questions[STATE.index];
  STATE.answered[STATE.index] = i;
  renderQuestion(); // refresh to show selected
  const all = optionsDiv.querySelectorAll("button");
  all[i].classList.add("selected");
}

// =======================
// NAVIGATION
// =======================
function nextQuestion() {
  const questions = SUBJECTS[STATE.subject];
  if (STATE.index < questions.length - 1) {
    STATE.index++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (STATE.index > 0) {
    STATE.index--;
    renderQuestion();
  }
}

// =======================
// MARK / REVIEW
// =======================
function toggleMark() {
  if (STATE.marked.has(STATE.index)) {
    STATE.marked.delete(STATE.index);
  } else {
    STATE.marked.add(STATE.index);
  }
  renderQuestion();
}

function startReviewMarked() {
  if (STATE.marked.size === 0) {
    alert("No questions have been marked for review.");
    return;
  }
  STATE.reviewing = true;
  STATE.reviewList = Array.from(STATE.marked);
  STATE.index = STATE.reviewList[0];
  alert(`You are reviewing ${STATE.reviewList.length} marked question(s).`);
  renderQuestion();
}

function nextReview() {
  if (STATE.reviewing) {
    const pos = STATE.reviewList.indexOf(STATE.index);
    if (pos < STATE.reviewList.length - 1) {
      STATE.index = STATE.reviewList[pos + 1];
      renderQuestion();
      return;
    } else {
      alert("You’ve reached the last marked question.");
    }
  } else nextQuestion();
}

function prevReview() {
  if (STATE.reviewing) {
    const pos = STATE.reviewList.indexOf(STATE.index);
    if (pos > 0) {
      STATE.index = STATE.reviewList[pos - 1];
      renderQuestion();
      return;
    } else {
      alert("You’re at the first marked question.");
    }
  } else prevQuestion();
}

// =======================
// FINISH QUIZ
// =======================
function finishQuiz() {
  clearInterval(STATE.timer);
  const questions = SUBJECTS[STATE.subject];
  let correct = 0;
  let total = questions.length;
  let summaryHTML = `<h2>Result Summary (${STATE.subject.toUpperCase()})</h2>`;

  questions.forEach((q, i) => {
    const userAns = STATE.answered[i];
    const isCorrect = userAns === q.answer;
    if (isCorrect) correct++;

    summaryHTML += `
      <div class="result-item ${isCorrect ? "correct" : "wrong"}">
        <strong>Q${i + 1}:</strong> ${q.q}<br>
        <em>Your answer:</em> ${userAns != null ? q.choices[userAns] : "Not answered"}<br>
        <em>Correct answer:</em> ${q.choices[q.answer]}<br>
        <em>Explanation:</em> ${q.explanation}
      </div><hr>`;
  });

  const percent = ((correct / total) * 100).toFixed(1);
  summaryHTML = `<h3>Score: ${correct}/${total} (${percent}%)</h3>` + summaryHTML;

  questionText.innerHTML = "";
  optionsDiv.innerHTML = "";
  explanationDiv.innerHTML = summaryHTML;
  scoreDiv.textContent = "";
  markBtn.style.display = "none";
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
  finishBtn.style.display = "none";
  reviewBtn.style.display = "none";
  timerDiv.style.display = "none";
}

// =======================
// KEYBOARD SHORTCUTS
// =======================
document.addEventListener("keydown", (e) => {
  if (!STATE.quizStarted) return;
  if (e.key >= "a" && e.key <= "d") {
    const idx = e.key.charCodeAt(0) - 97;
    selectOption(idx);
  } else if (e.key >= "A" && e.key <= "D") {
    const idx = e.key.charCodeAt(0) - 65;
    selectOption(idx);
  } else if (e.key === "ArrowRight") nextQuestion();
  else if (e.key === "ArrowLeft") prevQuestion();
  else if (e.key.toLowerCase() === "m") toggleMark();
  else if (e.key.toLowerCase() === "f") finishQuiz();
});

// =======================
// EVENT HOOKS
// =======================
subjectSelect.onchange = initQuiz;
nextBtn.onclick = nextQuestion;
prevBtn.onclick = prevQuestion;
markBtn.onclick = toggleMark;
reviewBtn.onclick = startReviewMarked;
finishBtn.onclick = finishQuiz;

const startBtn = document.getElementById("startBtn");
startBtn.onclick = () => {
  startBtn.style.display = "none"; // hide start button when quiz begins
  subjectSelect.disabled = true;   // prevent changing subject mid-quiz
  document.getElementById("timerSelect").disabled = true;
  initQuiz();
};
