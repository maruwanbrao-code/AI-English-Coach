const ADVANCED_CURRICULUM = {
  id: "advanced",
  name: "Advanced (C1 → C2)",
  levelRange: ["C1", "C2"],
  weeks: [
    {
      week: 1,
      levelTag: "C1",
      title: "Nuanced Self-Expression",
      objectives: [
        "เรียนรู้การใช้โครงสร้าง inversion เพื่อเน้นย้ำอารมณ์ความรู้สึกอย่างมีศิลปะ",
        "ฝึกใช้คำศัพท์ที่สื่อถึงอารมณ์และบุคลิกภาพอย่างละเอียดอ่อน",
        "พัฒนาทักษะการพูดแสดงความคิดเห็นส่วนตัวอย่างมีน้ำหนักและน่าเชื่อถือ"
      ],
      grammar: {
        point: "Inversion for Emphasis (Negative Adverbials)",
        explanationTh: "ปกติประธานจะอยู่หน้ากริยาช่วยในประโยคบอกเล่า แต่เมื่อต้องการเน้นย้ำอารมณ์ความรู้สึกหรือสร้างน้ำเสียงที่เป็นทางการและมีพลังทางวรรณศิลป์ เราสามารถนำคำวิเศษณ์เชิงปฏิเสธหรือคำจำกัดความ เช่น never, rarely, not only, seldom, little มาไว้ต้นประโยค แล้วสลับตำแหน่งประธานกับกริยาช่วยให้เหมือนประโยคคำถาม (inversion) โครงสร้างนี้พบมากในภาษาเขียนทางการ สุนทรพจน์ และวรรณกรรม ช่วยให้ประโยคมีน้ำหนักและดึงดูดความสนใจของผู้ฟังหรือผู้อ่านมากกว่าประโยคปกติ",
        examples: [
          "Never had she felt so confident before stepping onto that stage.",
          "Not only did he finish first, but he also broke the record.",
          "Rarely do we see such unwavering dedication in someone so young.",
          "Little did I know that this decision would change my life forever."
        ]
      },
      vocabulary: [
        { en: "eloquent", th: "คารมคมคาย พูดจาไพเราะและมีพลังโน้มน้าว", example: "Her eloquent speech moved the entire audience to tears." },
        { en: "candid", th: "ตรงไปตรงมา เปิดเผยอย่างจริงใจ", example: "He gave a surprisingly candid account of his failures." },
        { en: "poignant", th: "สะเทือนใจ ซาบซึ้งอย่างลึกซึ้ง", example: "The film's final scene was almost unbearably poignant." },
        { en: "ambivalent", th: "รู้สึกลังเล มีความรู้สึกสองด้านปนกัน", example: "I'm ambivalent about moving abroad; it's exciting yet terrifying." },
        { en: "wistful", th: "ครุ่นคิดถึงอดีตอย่างเศร้าเล็กน้อย", example: "She spoke with a wistful smile about her childhood home." },
        { en: "unassuming", th: "ถ่อมตัว ไม่โอ้อวด", example: "Despite his fame, the actor remained remarkably unassuming." },
        { en: "forthright", th: "ตรงไปตรงมา กล้าพูดความจริง", example: "I appreciate her forthright manner when giving feedback." },
        { en: "introspective", th: "ใคร่ครวญภายใน สำรวจความคิดตนเอง", example: "The long journey left him feeling unusually introspective." },
        { en: "visceral", th: "รู้สึกลึกซึ้งจากภายในตามสัญชาตญาณ", example: "The horror movie provoked a visceral reaction from the crowd." }
      ],
      reading: {
        passage: "When Marcus finally admitted that he had turned down the promotion, his colleagues assumed he had simply lost his nerve. Never had anyone considered that his decision might stem from something other than fear. In truth, he had spent months quietly assessing what the role would actually demand of him: longer hours, constant travel, and a slow erosion of the evenings he treasured with his aging father. Not only would the position have doubled his salary, but it would also have thrust him into a spotlight he had never sought. Rarely does anyone pause to ask whether ambition, left unchecked, is worth the quiet things it consumes. Marcus, for all his outward humility, had made a calculation that few around him were equipped to understand.",
        questions: [
          {
            question: "What does the passage imply about Marcus's colleagues' assumption?",
            choices: ["They correctly understood his reasons.", "They misjudged his motives, mistaking caution for cowardice.", "They encouraged him to accept the promotion.", "They were indifferent to his decision."],
            answerIndex: 1,
            explanation: "ข้อความบอกว่าไม่มีใครคิดว่าเหตุผลของเขาอาจไม่ใช่ความกลัว แสดงว่าเพื่อนร่วมงานเข้าใจผิดคิดว่าเขาขี้ขลาด ทั้งที่จริงเขาไตร่ตรองอย่างรอบคอบ"
          },
          {
            question: "What tone does the author take toward ambition in the final sentence?",
            choices: ["Wholly celebratory", "Mildly questioning or critical", "Angrily dismissive", "Completely neutral and factual"],
            answerIndex: 1,
            explanation: "ประโยคสุดท้ายตั้งคำถามเชิงวิพากษ์อย่างนุ่มนวลว่าความทะเยอทะยานที่ไม่มีการควบคุมนั้นคุ้มค่ากับสิ่งที่ต้องแลกไปหรือไม่ สะท้อนน้ำเสียงตั้งข้อสงสัยมากกว่ายกย่อง"
          }
        ]
      },
      speaking: {
        prompt: "ให้ผู้เรียนพูดแสดงความคิดเห็นส่วนตัวเกี่ยวกับการเลือกระหว่างความสำเร็จในหน้าที่การงานกับความสมดุลในชีวิตส่วนตัว โดยพยายามใช้โครงสร้าง inversion อย่างน้อยหนึ่งประโยคเพื่อเน้นย้ำความรู้สึกของตนเอง เช่น เริ่มประโยคด้วย Never have I... หรือ Rarely do I...",
        targetPhrase: "Never have I regretted choosing time with my family over a bigger paycheck."
      },
      quiz: [
        { type: "mcq", question: "Choose the correctly inverted sentence.", choices: ["Never I have seen such a beautiful sunset.", "Never have I seen such a beautiful sunset.", "Never I saw such a beautiful sunset.", "Never did I have seen such a beautiful sunset."], answerIndex: 1, explanation: "เมื่อ Never นำหน้าประโยค ต้องสลับตำแหน่งประธานกับกริยาช่วยแบบคำถาม (have + I)" },
        { type: "mcq", question: "Which sentence uses inversion correctly with 'Not only'?", choices: ["Not only he is smart, but also kind.", "Not only is he smart, but he is also kind.", "Not only he smart is, but kind also.", "Not only smart is he, but also he kind."], answerIndex: 1, explanation: "หลัง Not only ต้องสลับตำแหน่งกริยาช่วยกับประธาน (is he) เหมือนประโยคคำถาม" },
        { type: "mcq", question: "Which word best means 'extremely humble, not showing off despite achievements'?", choices: ["forthright", "unassuming", "visceral", "ambivalent"], answerIndex: 1, explanation: "unassuming หมายถึงถ่อมตัว ไม่โอ้อวด ตรงกับความหมายที่ถาม" },
        { type: "mcq", question: "\"She felt ___ about the job offer -- thrilled by the salary but anxious about relocating.\"", choices: ["candid", "ambivalent", "poignant", "eloquent"], answerIndex: 1, explanation: "ambivalent หมายถึงมีความรู้สึกสองด้านปนกัน ตรงกับบริบทที่ทั้งตื่นเต้นและกังวล" },
        { type: "mcq", question: "A \"visceral\" reaction is one that is...", choices: ["carefully calculated", "based on gut instinct or deep feeling", "completely emotionless", "purely intellectual"], answerIndex: 1, explanation: "visceral หมายถึงความรู้สึกที่มาจากภายในตามสัญชาตญาณ ไม่ใช่การคิดคำนวณ" },
        { type: "mcq", question: "According to the passage, what did Marcus give up by declining the promotion, per his own reasoning?", choices: ["Nothing of value", "Higher salary and prestige, in exchange for time with his father", "His job entirely", "His friendship with colleagues"], answerIndex: 1, explanation: "เขาแลกเงินเดือนสองเท่าและชื่อเสียง เพื่อรักษาเวลาที่มีค่ากับพ่อที่ชราภาพ" },
        { type: "mcq", question: "What can be inferred about Marcus's character from the passage?", choices: ["He is reckless and impulsive.", "He is thoughtful and values relationships over status.", "He is arrogant and self-centered.", "He is indecisive and confused."], answerIndex: 1, explanation: "การไตร่ตรองอย่างรอบคอบและเลือกเวลากับครอบครัวแสดงว่าเขาเป็นคนรอบคอบและให้คุณค่ากับความสัมพันธ์" }
      ]
    },
    {
      week: 2,
      levelTag: "C1",
      title: "Abstract & Academic Topics",
      objectives: [
        "เข้าใจการแปลงคำกริยาหรือคำคุณศัพท์เป็นคำนาม (nominalization) เพื่อสร้างน้ำเสียงเชิงวิชาการ",
        "ฝึกสร้างวลีนามที่ซับซ้อน (complex noun phrases) สำหรับงานเขียนเชิงวิชาการ",
        "ขยายคลังคำศัพท์เชิงนามธรรมที่ใช้ในบทความวิชาการและสื่อสิ่งพิมพ์"
      ],
      grammar: {
        point: "Nominalization & Complex Noun Phrases",
        explanationTh: "Nominalization คือการเปลี่ยนคำกริยาหรือคำคุณศัพท์ให้กลายเป็นคำนาม เช่น decide เป็น decision, aware เป็น awareness เทคนิคนี้ช่วยให้ประโยคดูเป็นทางการและกระชับขึ้น เหมาะกับงานเขียนเชิงวิชาการหรือรายงาน นอกจากนี้ยังสามารถขยายคำนามด้วยวลีขยาย เช่น of-phrase, relative clause หรือ participle clause เพื่อสร้าง complex noun phrase ที่บรรจุข้อมูลจำนวนมากไว้ในประโยคเดียว ทำให้สื่อความคิดที่ซับซ้อนได้อย่างกระชับและมีน้ำหนักทางวิชาการ",
        examples: [
          "The government's failure to address the crisis led to widespread criticism.",
          "Her sudden resignation shocked the entire department.",
          "The rapid deterioration of urban infrastructure has alarmed city planners.",
          "An increase in automation has fundamentally altered the labor market."
        ]
      },
      vocabulary: [
        { en: "ramification", th: "ผลกระทบที่ตามมาซึ่งมักซับซ้อน", example: "The ramifications of the policy will be felt for decades." },
        { en: "paradigm", th: "กรอบความคิดหรือแบบแผนหลัก", example: "The discovery represented a paradigm shift in modern physics." },
        { en: "dichotomy", th: "ความขัดแย้งแบบสองขั้วหรือการแบ่งเป็นสองส่วน", example: "There is a false dichotomy between economic growth and environmental protection." },
        { en: "empirical", th: "เชิงประจักษ์ อ้างอิงจากข้อมูลจริง", example: "The theory lacks empirical evidence to support it." },
        { en: "ubiquitous", th: "พบเห็นได้ทั่วไปทุกที่", example: "Smartphones have become ubiquitous in modern society." },
        { en: "discern", th: "แยกแยะ มองเห็นความแตกต่างอย่างละเอียด", example: "It can be difficult to discern fact from opinion in the media." },
        { en: "epitomize", th: "เป็นตัวอย่างที่ชัดเจนที่สุดของบางสิ่ง", example: "Her work ethic epitomizes what it means to be dedicated." },
        { en: "connotation", th: "ความหมายแฝงหรือนัยที่สื่อ", example: "The word 'cheap' carries a negative connotation compared to 'affordable'." },
        { en: "juxtapose", th: "นำมาวางเทียบกันเพื่อเปรียบต่าง", example: "The exhibit juxtaposes traditional art with digital installations." }
      ],
      reading: {
        passage: "The debate over artificial intelligence often collapses into a simplistic dichotomy: either the technology will liberate humanity from drudgery, or it will render millions obsolete. Such framing, however, obscures the more nuanced reality that empirical researchers have been documenting for years. The rapid adoption of automation across industries has not eliminated work so much as transformed its nature, shifting demand toward skills that machines cannot easily replicate. What remains ubiquitous, though rarely discussed, is the anxiety this transition breeds among workers who lack access to retraining. The ramifications of ignoring this anxiety, economists warn, could epitomize the very social instability that technological optimists claim to be solving.",
        questions: [
          {
            question: "What is the author's stance on the 'either liberate or render obsolete' framing of AI?",
            choices: ["The author fully endorses this framing.", "The author considers it an oversimplification that hides a more complex reality.", "The author believes automation has had no effect on jobs.", "The author argues AI will definitely cause obsolescence."],
            answerIndex: 1,
            explanation: "ผู้เขียนใช้คำว่า simplistic dichotomy และ obscures the more nuanced reality แสดงว่ามองว่าเป็นการมองแบบง่ายเกินไปที่บดบังความจริงที่ซับซ้อนกว่า"
          },
          {
            question: "What does the passage suggest is being overlooked in discussions about automation?",
            choices: ["The financial cost of new technology", "The psychological toll and anxiety faced by workers lacking retraining", "The environmental impact of AI", "The speed of technological development"],
            answerIndex: 1,
            explanation: "ผู้เขียนกล่าวว่าความวิตกกังวลของแรงงานที่ไม่มีโอกาสฝึกทักษะใหม่นั้นแพร่หลายแต่มักถูกละเลยไม่ถูกพูดถึง"
          }
        ]
      },
      speaking: {
        prompt: "ให้ผู้เรียนฝึกพูดอธิบายหัวข้อวิชาการหรือประเด็นทางสังคมที่ซับซ้อน โดยพยายามใช้คำนามที่แปลงมาจากคำกริยาหรือคำคุณศัพท์ (nominalization) เพื่อให้การพูดฟังดูเป็นทางการและมีน้ำหนักทางวิชาการมากขึ้น เช่น การพูดเรื่องผลกระทบของเทคโนโลยีต่อสังคม",
        targetPhrase: "The widespread implementation of automation has led to a significant transformation of the labor market."
      },
      quiz: [
        { type: "mcq", question: "Which sentence uses nominalization?", choices: ["He decided quickly.", "His quick decision surprised everyone.", "He was deciding.", "Decide quickly, he did."], answerIndex: 1, explanation: "decision คือรูปนามของ decide ทำให้ประโยคเป็นทางการขึ้น" },
        { type: "mcq", question: "Which is the nominalized form of 'aware'?", choices: ["awareness", "awarely", "awareful", "awarement"], answerIndex: 0, explanation: "awareness คือรูปคำนามที่ถูกต้องของ aware" },
        { type: "mcq", question: "A 'false dichotomy' refers to...", choices: ["A true division between two equally valid options", "An oversimplified presentation of only two options when more exist", "A scientific fact", "A type of empirical study"], answerIndex: 1, explanation: "false dichotomy คือการนำเสนอทางเลือกเพียงสองทางทั้งที่จริงมีทางเลือกอื่นอีก" },
        { type: "mcq", question: "Which word means 'found everywhere'?", choices: ["ubiquitous", "empirical", "discern", "epitomize"], answerIndex: 0, explanation: "ubiquitous แปลว่าพบเห็นได้ทั่วไปทุกที่" },
        { type: "mcq", question: "To 'juxtapose' two things means to...", choices: ["combine them into one", "place them side by side for comparison or contrast", "destroy one of them", "ignore both"], answerIndex: 1, explanation: "juxtapose คือการนำสิ่งสองสิ่งมาวางเทียบกันเพื่อเปรียบต่าง" },
        { type: "mcq", question: "According to the passage, what has automation actually done to work, according to researchers?", choices: ["Eliminated all jobs", "Transformed the nature of work rather than eliminating it entirely", "Had no measurable effect", "Increased drudgery"], answerIndex: 1, explanation: "บทความระบุว่าอัตโนมัติเปลี่ยนลักษณะของงานมากกว่าที่จะกำจัดงานไปทั้งหมด" },
        { type: "mcq", question: "What do economists warn could result from ignoring worker anxiety?", choices: ["Increased productivity", "Social instability", "Lower automation costs", "Faster technological adoption"], answerIndex: 1, explanation: "นักเศรษฐศาสตร์เตือนว่าความวิตกกังวลที่ถูกละเลยอาจนำไปสู่ความไม่มั่นคงทางสังคม" }
      ]
    },
    {
      week: 3,
      levelTag: "C1",
      title: "Persuasive Writing & Rhetoric",
      objectives: [
        "เรียนรู้การใช้ hedging language เพื่อแสดงความคิดเห็นอย่างระมัดระวังและน่าเชื่อถือ",
        "ฝึกใช้ cohesive devices เพื่อเชื่อมโยงความคิดในงานเขียนเชิงโน้มน้าวใจ",
        "พัฒนาทักษะการวิเคราะห์และโต้แย้งอย่างมีเหตุผล"
      ],
      grammar: {
        point: "Hedging Language & Cohesive Devices in Persuasive Writing",
        explanationTh: "การเขียนเชิงโน้มน้าวใจในระดับสูงมักไม่ฟันธงแบบตรงไปตรงมา แต่ใช้ hedging language เช่น arguably, it could be said that, to some extent, one might contend เพื่อแสดงความมั่นใจอย่างมีชั้นเชิงโดยไม่ดูก้าวร้าวเกินไป ขณะเดียวกันต้องใช้ cohesive devices เช่น moreover, consequently, notwithstanding, that said เพื่อเชื่อมโยงความคิดให้ลื่นไหลและแสดงตรรกะของการโต้แย้งอย่างชัดเจน",
        examples: [
          "Arguably, the policy has done more harm than good.",
          "It could be said that the reform, while well-intentioned, was poorly executed.",
          "Notwithstanding these concerns, the benefits appear to outweigh the risks.",
          "That said, one cannot ignore the mounting evidence to the contrary."
        ]
      },
      vocabulary: [
        { en: "arguably", th: "อาจกล่าวได้ว่า ใช้แสดงความเห็นอย่างมีเหตุผลรองรับ", example: "This is arguably the most important decision of her career." },
        { en: "ostensibly", th: "ดูเหมือนว่า ผิวเผิน อาจไม่ใช่ความจริงทั้งหมด", example: "The meeting was ostensibly about budget cuts, but really about restructuring." },
        { en: "compelling", th: "น่าเชื่อถือ ชักจูงใจได้อย่างมีพลัง", example: "She presented a compelling argument for renewable energy." },
        { en: "fallacy", th: "ความเข้าใจผิดเชิงตรรกะ", example: "It's a common fallacy that more work always means more productivity." },
        { en: "plausible", th: "เป็นไปได้อย่างมีเหตุผล", example: "His explanation, though unusual, seemed entirely plausible." },
        { en: "underscore", th: "เน้นย้ำความสำคัญ", example: "The report underscores the urgency of climate action." },
        { en: "corroborate", th: "ยืนยันสนับสนุนด้วยหลักฐานอื่น", example: "New evidence corroborates the witness's account." },
        { en: "refute", th: "หักล้างด้วยเหตุผลหรือหลักฐาน", example: "The scientist refuted the claims with data from her study." },
        { en: "unequivocally", th: "อย่างชัดเจนไม่มีข้อกังขา", example: "She unequivocally denied any wrongdoing." }
      ],
      reading: {
        passage: "Proponents of the four-day workweek argue, arguably with good reason, that reduced hours lead to higher productivity and improved wellbeing. Ostensibly, the pilot studies conducted across several countries corroborate this claim, showing little to no drop in output. Critics, however, contend that such results may not be generalizable beyond the white-collar sectors in which most trials took place. It would be a fallacy to assume that a policy successful in a software company would translate seamlessly to a hospital or a factory floor. That said, the mounting body of evidence is compelling enough that dismissing the idea outright seems, at the very least, premature.",
        questions: [
          {
            question: "What is the author's overall stance toward the four-day workweek evidence?",
            choices: ["Completely dismissive", "Cautiously open, acknowledging both support and limitations", "Entirely convinced with no reservations", "Indifferent"],
            answerIndex: 1,
            explanation: "ผู้เขียนยอมรับหลักฐานสนับสนุนแต่ก็ชี้ข้อจำกัด และสรุปว่าการปฏิเสธไปเลยนั้นยังเร็วเกินไป แสดงถึงท่าทีเปิดกว้างอย่างระมัดระวัง"
          },
          {
            question: "Why does the author call it a fallacy to generalize the results?",
            choices: ["Because the studies were fraudulent", "Because most trials occurred in white-collar settings that may not represent all industries", "Because no studies exist", "Because critics have no valid points"],
            answerIndex: 1,
            explanation: "ผู้เขียนชี้ว่าการทดลองส่วนใหญ่เกิดในภาคงานสำนักงาน ซึ่งอาจไม่สามารถเทียบเคียงได้กับภาคอุตสาหกรรมอื่น เช่น โรงพยาบาลหรือโรงงาน"
          }
        ]
      },
      speaking: {
        prompt: "ให้ผู้เรียนฝึกพูดโต้แย้งประเด็นที่มีข้อถกเถียง เช่น การทำงานสี่วันต่อสัปดาห์ โดยใช้ hedging language อย่างน้อยสองคำ เช่น arguably และ ostensibly เพื่อแสดงความเห็นอย่างมีน้ำหนักและรอบคอบ",
        targetPhrase: "Arguably, the benefits of this policy are compelling, though it could be said that more research is needed before drawing firm conclusions."
      },
      quiz: [
        { type: "mcq", question: "Which phrase is an example of hedging language?", choices: ["It is definitely true that...", "It could be argued that...", "Everyone agrees that...", "This is an absolute fact."], answerIndex: 1, explanation: "It could be argued that... เป็นวิธีแสดงความเห็นอย่างระมัดระวัง ไม่ฟันธง ซึ่งเป็นลักษณะของ hedging" },
        { type: "mcq", question: "Which cohesive device signals a contrast?", choices: ["Moreover", "Notwithstanding", "Consequently", "In addition"], answerIndex: 1, explanation: "Notwithstanding ใช้แสดงความขัดแย้งหรือข้อยกเว้น คล้ายกับ despite" },
        { type: "mcq", question: "'Ostensibly' is closest in meaning to...", choices: ["definitely", "apparently or seemingly, but perhaps not truly", "never", "completely"], answerIndex: 1, explanation: "ostensibly หมายถึงดูเหมือนว่าจริงแต่อาจไม่ใช่ความจริงทั้งหมด" },
        { type: "mcq", question: "To 'refute' an argument means to...", choices: ["support it with evidence", "prove it wrong", "ignore it completely", "repeat it"], answerIndex: 1, explanation: "refute หมายถึงการหักล้างข้อโต้แย้งด้วยเหตุผลหรือหลักฐาน" },
        { type: "mcq", question: "A 'fallacy' is...", choices: ["a proven scientific fact", "a mistaken belief based on faulty reasoning", "a type of persuasive essay", "a strong piece of evidence"], answerIndex: 1, explanation: "fallacy คือความเข้าใจผิดที่เกิดจากการให้เหตุผลที่ผิดพลาด" },
        { type: "mcq", question: "According to the passage, what do the pilot studies show?", choices: ["A significant drop in productivity", "Little to no drop in output despite reduced hours", "Complete failure of the four-day workweek", "No data was collected"], answerIndex: 1, explanation: "บทความระบุว่าผลผลิตแทบไม่ลดลงแม้ชั่วโมงทำงานจะลดลง" },
        { type: "mcq", question: "What caveat do critics raise about the pilot studies?", choices: ["They were too expensive", "The results may not apply to sectors like hospitals or factories", "The studies were too short", "There were no critics mentioned"], answerIndex: 1, explanation: "นักวิจารณ์ชี้ว่าผลการศึกษาอาจไม่สามารถนำไปใช้กับภาคส่วนอื่นที่ไม่ใช่งานสำนักงานได้" }
      ]
    },
    {
      week: 4,
      levelTag: "C1",
      title: "Advanced & Mixed Conditionals",
      objectives: [
        "เข้าใจโครงสร้าง mixed conditionals ที่ผสมระหว่างอดีตและปัจจุบันหรืออนาคต",
        "ฝึกใช้ conditional ขั้นสูงเพื่อแสดงสมมติฐาน ผลที่ตามมา และการคาดเดา",
        "ประยุกต์ใช้โครงสร้างเงื่อนไขในการพูดแสดงความคิดเห็นเชิงวิเคราะห์"
      ],
      grammar: {
        point: "Advanced & Mixed Conditionals",
        explanationTh: "Mixed conditionals คือประโยคเงื่อนไขที่ผสมเวลาต่างกันระหว่างประโยคเงื่อนไข (if-clause) และประโยคหลัก (main clause) เช่น เงื่อนไขในอดีตที่ส่งผลถึงปัจจุบัน หรือเงื่อนไขที่เป็นลักษณะนิสัยทั่วไปแต่ผลเป็นเหตุการณ์เฉพาะในอดีต โครงสร้างนี้ช่วยแสดงความสัมพันธ์ระหว่างเวลาที่ซับซ้อนและมักใช้ในการไตร่ตรองเชิงวิเคราะห์หรือแสดงความเสียดาย เช่น ประโยคที่พูดถึงการตัดสินใจในอดีตซึ่งยังคงส่งผลต่อสถานการณ์ปัจจุบัน",
        examples: [
          "If I had taken that job offer, I would be living in Singapore now.",
          "If she weren't so risk-averse, she would have invested in the startup years ago.",
          "Had he studied harder, he wouldn't be struggling with this exam now.",
          "If the company had invested in R&D earlier, it would be leading the market today."
        ]
      },
      vocabulary: [
        { en: "contingent", th: "ขึ้นอยู่กับเงื่อนไขบางอย่าง", example: "Her attendance is contingent on getting time off work." },
        { en: "hypothetical", th: "เชิงสมมติ ยังไม่เกิดขึ้นจริง", example: "Let's consider a hypothetical scenario for a moment." },
        { en: "retrospect", th: "การมองย้อนกลับไปในอดีต", example: "In retrospect, quitting that job was the best decision I ever made." },
        { en: "foresight", th: "การมองการณ์ไกลหรือคาดการณ์ล่วงหน้า", example: "Her foresight in diversifying investments saved the company." },
        { en: "presuppose", th: "สันนิษฐานไว้ล่วงหน้าโดยไม่ได้พิสูจน์", example: "The question presupposes that the policy has already failed." },
        { en: "counterfactual", th: "สมมติฐานที่ตรงข้ามกับสิ่งที่เกิดขึ้นจริง", example: "Historians often debate counterfactual scenarios, like what if a key battle had gone differently." },
        { en: "inadvertently", th: "โดยไม่ได้ตั้งใจ", example: "He inadvertently revealed the surprise party." },
        { en: "hindsight", th: "การรู้แจ้งหลังเหตุการณ์ผ่านไปแล้ว", example: "Hindsight is always 20/20, but at the time the decision made sense." },
        { en: "feasible", th: "เป็นไปได้ในทางปฏิบัติ", example: "Is it feasible to complete the project within a month?" }
      ],
      reading: {
        passage: "Historians love to entertain counterfactual questions: if the printing press had never been invented, would the Reformation have unfolded the way it did? Such hypothetical exercises, while impossible to prove, are far from a frivolous pastime. They force us to examine which factors were truly decisive and which were merely incidental. Had Gutenberg lacked the foresight to refine movable type, ideas might have spread more slowly, but it is doubtful that the underlying religious and political tensions would have simply vanished. In retrospect, most scholars agree that technology accelerates change rather than single-handedly causing it. This distinction matters enormously; it is inadvertently easy to credit an invention with outcomes that were, in truth, already contingent on deeper social forces.",
        questions: [
          {
            question: "What is the author's main point about the relationship between technology and historical change?",
            choices: ["Technology alone causes historical change", "Technology tends to accelerate change already driven by deeper social forces, rather than cause it alone", "Technology has no effect on history", "The printing press was irrelevant to the Reformation"],
            answerIndex: 1,
            explanation: "ผู้เขียนระบุว่านักวิชาการส่วนใหญ่เห็นว่าเทคโนโลยีเร่งการเปลี่ยนแปลงที่มีแรงขับเคลื่อนทางสังคมอยู่แล้ว ไม่ใช่เป็นสาเหตุเดียวโดยลำพัง"
          },
          {
            question: "Why does the author call counterfactual questions 'far from a frivolous pastime'?",
            choices: ["Because they always produce definite proof", "Because they help identify which historical factors were truly decisive", "Because historians enjoy games", "Because they are required by law"],
            answerIndex: 1,
            explanation: "คำถามเชิงสมมติช่วยให้นักประวัติศาสตร์แยกแยะได้ว่าปัจจัยใดเป็นตัวชี้ขาดจริง และปัจจัยใดเป็นเพียงเหตุการณ์แวดล้อม"
          }
        ]
      },
      speaking: {
        prompt: "ให้ผู้เรียนฝึกพูดสมมติสถานการณ์ในชีวิตตนเองโดยใช้ mixed conditionals เช่น พูดถึงการตัดสินใจในอดีตที่ส่งผลต่อชีวิตปัจจุบัน",
        targetPhrase: "If I hadn't taken that risk five years ago, I wouldn't be running my own business today."
      },
      quiz: [
        { type: "mcq", question: "Choose the correct mixed conditional: 'If she ___ harder in university, she would have a better job now.'", choices: ["studies", "had studied", "studied", "would study"], answerIndex: 1, explanation: "เงื่อนไขในอดีต (had studied) ส่งผลต่อสถานการณ์ปัจจุบัน (would have) จึงเป็น mixed conditional" },
        { type: "mcq", question: "'Had he known about the traffic, he ___ earlier.' Complete correctly.", choices: ["would leave", "would have left", "left", "leaves"], answerIndex: 1, explanation: "โครงสร้าง had + past participle ในเงื่อนไข ตามด้วย would have + past participle ในผล" },
        { type: "mcq", question: "'In hindsight' means...", choices: ["looking forward to the future", "looking back and understanding something only after it happened", "being confused about the past", "predicting future events accurately"], answerIndex: 1, explanation: "hindsight คือการเข้าใจสิ่งใดสิ่งหนึ่งได้ก็ต่อเมื่อเหตุการณ์ผ่านไปแล้ว" },
        { type: "mcq", question: "Something 'contingent on' another thing is...", choices: ["completely unrelated to it", "dependent on it", "opposed to it", "identical to it"], answerIndex: 1, explanation: "contingent on หมายถึงขึ้นอยู่กับเงื่อนไขอื่น" },
        { type: "mcq", question: "A 'counterfactual' scenario is one that...", choices: ["actually happened", "is contrary to what actually happened", "is scientifically proven", "is a type of grammar rule"], answerIndex: 1, explanation: "counterfactual คือสมมติฐานที่ตรงข้ามกับสิ่งที่เกิดขึ้นจริง" },
        { type: "mcq", question: "According to the passage, what do most scholars agree about technology's role in historical change?", choices: ["It single-handedly causes change", "It accelerates change driven by deeper forces", "It has no measurable impact", "It always reverses social trends"], answerIndex: 1, explanation: "บทความระบุว่านักวิชาการส่วนใหญ่เห็นว่าเทคโนโลยีเร่งการเปลี่ยนแปลง ไม่ใช่เป็นสาเหตุเดียว" },
        { type: "mcq", question: "What historical example does the passage use to illustrate counterfactual thinking?", choices: ["The invention of the telephone", "The printing press and the Reformation", "The moon landing", "World War II"], answerIndex: 1, explanation: "บทความยกตัวอย่างแท่นพิมพ์ของกูเทนแบร์กและการปฏิรูปศาสนา (the Reformation)" }
      ]
    },
    {
      week: 5,
      levelTag: "C1",
      title: "Idiomatic Expressions & Phrasal Verbs in Context",
      objectives: [
        "เรียนรู้สำนวนและ phrasal verbs ที่ใช้บ่อยในบริบทการทำงานและการสนทนาระดับสูง",
        "ฝึกใช้สำนวนเหล่านี้อย่างเป็นธรรมชาติในบทสนทนาและงานเขียน",
        "พัฒนาความสามารถในการเข้าใจความหมายแฝงของสำนวนภาษาอังกฤษ"
      ],
      grammar: {
        point: "Idiomatic Phrasal Verbs & Fixed Expressions in Professional Context",
        explanationTh: "สำนวนและ phrasal verbs เป็นส่วนสำคัญของภาษาอังกฤษระดับสูง เพราะเจ้าของภาษาใช้ในชีวิตประจำวันและที่ทำงานอย่างเป็นธรรมชาติ ผู้เรียนระดับ C1 ควรเรียนรู้ที่จะจดจำสำนวนเป็นหน่วยความหมายเดียว แทนที่จะแปลคำต่อคำ เพราะความหมายของสำนวนมักไม่ตรงกับความหมายของคำแต่ละคำ เช่น hit a snag ไม่ได้แปลว่าตีอะไรบางอย่าง แต่หมายถึงเจออุปสรรคกะทันหัน การฝึกใช้สำนวนเหล่านี้อย่างถูกบริบทจะทำให้การสื่อสารฟังดูเป็นธรรมชาติและใกล้เคียงเจ้าของภาษามากขึ้น",
        examples: [
          "We hit a snag during the final testing phase, so the launch has been delayed.",
          "Let's iron out the details before we sign the contract.",
          "To get the ball rolling, I'll send out the first draft this afternoon.",
          "We need to weigh up the pros and cons before making a final decision."
        ]
      },
      vocabulary: [
        { en: "hit a snag", th: "เจออุปสรรคโดยไม่คาดคิด", example: "The renovation hit a snag when they found structural damage." },
        { en: "iron out", th: "แก้ไขปัญหาให้เรียบร้อย", example: "We need to iron out a few details before the merger is finalized." },
        { en: "get the ball rolling", th: "เริ่มต้นดำเนินการ", example: "Let's get the ball rolling on the new marketing campaign." },
        { en: "on the same page", th: "เข้าใจตรงกัน มีความเห็นสอดคล้องกัน", example: "Before we proceed, let's make sure everyone is on the same page." },
        { en: "cut corners", th: "ลดขั้นตอนหรือคุณภาพเพื่อประหยัดเวลาหรือเงิน มักเชิงลบ", example: "The contractor cut corners, and the building's quality suffered." },
        { en: "bite the bullet", th: "ยอมเผชิญกับสิ่งที่ยากลำบากอย่างกล้าหาญ", example: "I finally bit the bullet and confronted my manager about the issue." },
        { en: "jump the gun", th: "ทำอะไรเร็วเกินไปก่อนถึงเวลาที่เหมาะสม", example: "Don't jump the gun; we haven't received official approval yet." },
        { en: "weigh up", th: "ชั่งน้ำหนักข้อดีข้อเสีย", example: "She weighed up her options before accepting the offer." },
        { en: "stem from", th: "มีต้นตอมาจาก", example: "His anxiety seems to stem from years of workplace pressure." }
      ],
      reading: {
        passage: "When the merger negotiations hit a snag over intellectual property rights, both legal teams knew they would have to iron out the disagreement before the deal could move forward. The CEOs, eager to get the ball rolling on what they publicly called a 'transformative partnership,' pressed their lawyers not to jump the gun by rushing an announcement. Behind closed doors, however, it was clear the two sides were not entirely on the same page: one company wanted aggressive cost-cutting, while the other worried that cutting corners on quality control would damage the brand they had spent decades building. Eventually, both parties bit the bullet and agreed to an independent audit, a decision that, while costly, stemmed from a shared recognition that trust, once broken, is far harder to rebuild than any contract clause.",
        questions: [
          {
            question: "What does the phrase 'not entirely on the same page' suggest about the two companies?",
            choices: ["They fully agreed on every aspect of the deal", "They had differing priorities and were not in full agreement", "They had never spoken to each other", "They were reading the same document"],
            answerIndex: 1,
            explanation: "สำนวน on the same page หมายถึงเข้าใจตรงกัน การที่บอกว่า not entirely on the same page จึงหมายถึงมีความเห็นไม่ตรงกันทั้งหมด"
          },
          {
            question: "What can be inferred about why the companies agreed to an independent audit?",
            choices: ["They wanted to save money regardless of trust", "They recognized that rebuilding broken trust is harder than resolving disagreements, so a costly but transparent step was worth it", "They were forced by the government", "One company wanted to end the deal"],
            answerIndex: 1,
            explanation: "บทความระบุชัดเจนว่าการตัดสินใจนี้มาจากความตระหนักร่วมกันว่าความไว้วางใจที่แตกหักนั้นยากจะฟื้นฟูกว่าข้อสัญญาใดๆ"
          }
        ]
      },
      speaking: {
        prompt: "ให้ผู้เรียนเล่าเรื่องประสบการณ์ทำงานหรือโปรเจกต์ที่เคยเจออุปสรรค โดยพยายามใช้สำนวนที่เรียนในสัปดาห์นี้อย่างน้อยสามสำนวน เช่น hit a snag, iron out, bite the bullet",
        targetPhrase: "We hit a snag halfway through the project, but we bit the bullet and ironed out the issues together."
      },
      quiz: [
        { type: "mcq", question: "'We hit a snag' means...", choices: ["We celebrated a success", "We encountered an unexpected problem", "We finished early", "We hired new staff"], answerIndex: 1, explanation: "hit a snag แปลว่าเจออุปสรรคโดยไม่คาดคิด" },
        { type: "mcq", question: "To 'cut corners' means to...", choices: ["take shortcuts that reduce quality to save time or money", "complete a task perfectly", "turn at an angle", "spend extra money on quality"], answerIndex: 0, explanation: "cut corners หมายถึงการลดขั้นตอนหรือคุณภาพเพื่อประหยัดเวลาหรือเงิน" },
        { type: "mcq", question: "'Bite the bullet' means to...", choices: ["avoid a difficult situation", "face a difficult situation with courage", "eat something unpleasant", "give up completely"], answerIndex: 1, explanation: "bite the bullet หมายถึงการยอมเผชิญกับสิ่งที่ยากลำบากอย่างกล้าหาญ" },
        { type: "mcq", question: "If two people are 'on the same page,' they...", choices: ["are reading the same book", "understand and agree with each other", "are in a disagreement", "are in different countries"], answerIndex: 1, explanation: "on the same page หมายถึงเข้าใจตรงกันและเห็นด้วยกัน" },
        { type: "mcq", question: "'Jump the gun' means to...", choices: ["act too hastily, before the right time", "shoot a gun", "wait patiently", "finish last"], answerIndex: 0, explanation: "jump the gun หมายถึงทำอะไรเร็วเกินไปก่อนถึงเวลาที่เหมาะสม" },
        { type: "mcq", question: "What was the source of disagreement between the two companies in the passage?", choices: ["The name of the merged company", "Whether to prioritize cost-cutting or maintaining quality", "The location of headquarters", "The color of the logo"], answerIndex: 1, explanation: "บริษัทหนึ่งต้องการลดต้นทุนอย่างจริงจัง ในขณะที่อีกบริษัทกังวลเรื่องคุณภาพของแบรนด์" },
        { type: "mcq", question: "Why did the CEOs want their lawyers to avoid 'jumping the gun'?", choices: ["They wanted to cancel the deal", "They didn't want to rush an announcement before issues were resolved", "They had no interest in publicity", "They were unaware of the negotiations"], answerIndex: 1, explanation: "CEO ทั้งสองไม่ต้องการให้ทีมกฎหมายรีบประกาศข้อตกลงก่อนที่ปัญหาจะได้รับการแก้ไข" }
      ]
    },
    {
      week: 6,
      levelTag: "C2",
      title: "Media Literacy & Critical Reading",
      objectives: [
        "วิเคราะห์อคติและความหมายแฝงในสื่อสิ่งพิมพ์และข่าว",
        "เข้าใจการใช้ modality เพื่อบอกระดับความน่าเชื่อถือของข้อมูลในข่าว",
        "ฝึกอ่านเชิงวิพากษ์เพื่อจับ subtext และเจตนาของผู้เขียน"
      ],
      grammar: {
        point: "Modality & Evidentiality in News Reporting",
        explanationTh: "ในภาษาข่าวและสื่อ ผู้เขียนมักใช้ modal verbs และวลีบอกระดับความแน่นอนของข้อมูล เรียกว่า evidentiality เพื่อบ่งบอกว่าข้อมูลนั้นเป็นข้อเท็จจริงที่ยืนยันแล้ว หรือเป็นเพียงข่าวลือหรือการกล่าวอ้าง เช่น reportedly, is said to, allegedly, sources claim that, it is believed that คำเหล่านี้ทำให้ผู้เขียนสามารถรายงานข้อมูลที่ยังไม่ได้รับการยืนยันโดยไม่ต้องรับผิดชอบทางกฎหมายเต็มที่ ผู้อ่านที่มีทักษะการอ่านเชิงวิพากษ์ต้องสังเกตคำเหล่านี้เพื่อประเมินความน่าเชื่อถือของเนื้อหาข่าว",
        examples: [
          "The minister allegedly accepted bribes from the construction firm.",
          "Sources close to the negotiation claim that a deal is imminent.",
          "The company is said to be planning massive layoffs next quarter.",
          "It is widely believed that the policy will be reversed within the year."
        ]
      },
      vocabulary: [
        { en: "sensationalism", th: "การนำเสนอข่าวแบบเกินจริงเพื่อดึงความสนใจ", example: "Critics accused the network of sensationalism rather than accurate reporting." },
        { en: "disinformation", th: "ข้อมูลเท็จที่จงใจเผยแพร่เพื่อหลอกลวง", example: "The report warned of a coordinated disinformation campaign." },
        { en: "partisan", th: "ฝักใฝ่ฝ่ายใดฝ่ายหนึ่งอย่างชัดเจน ไม่เป็นกลาง", example: "The article was criticized for being overtly partisan." },
        { en: "insinuate", th: "พูดเป็นนัยในเชิงลบโดยไม่พูดตรงๆ", example: "The headline insinuated wrongdoing without any actual evidence." },
        { en: "loaded language", th: "ภาษาที่มีความหมายแฝงทางอารมณ์อย่างจงใจ", example: "The editorial was full of loaded language designed to provoke outrage." },
        { en: "skew", th: "บิดเบือนหรือทำให้เอียงไปด้านใดด้านหนึ่ง", example: "Selective statistics can skew public perception of an issue." },
        { en: "propaganda", th: "การโฆษณาชวนเชื่อเพื่อครอบงำความคิด", example: "The regime used propaganda to control public opinion." },
        { en: "spin", th: "การนำเสนอข้อมูลในมุมที่เป็นประโยชน์ต่อฝ่ายตน", example: "The press secretary tried to put a positive spin on the scandal." },
        { en: "tabloid", th: "หนังสือพิมพ์แนวข่าวฉาวหรือเร้าใจ มักไม่น่าเชื่อถือ", example: "The story first appeared in a tabloid known for exaggeration." }
      ],
      reading: {
        passage: "The headline read: 'Local Officials Allegedly Mishandle Millions in Public Funds.' Nowhere in the accompanying article, however, was there any concrete evidence of wrongdoing -- only anonymous sources who claimed to have 'concerns.' This is a textbook example of loaded language doing the heavy lifting that facts cannot. By pairing the word 'mishandle' with an enormous, specific-sounding figure, the piece insinuates corruption without ever committing to the claim, a technique that protects the publication from libel while still skewing public perception. It is worth noting that the outlet in question has a documented history of partisan coverage, consistently framing stories to align with a particular political narrative. None of this proves the allegations are false; it simply means readers should treat unverified claims, however dramatically presented, with appropriate skepticism.",
        questions: [
          {
            question: "What is the author's main criticism of the headline and article?",
            choices: ["The article is completely fabricated", "The article uses loaded, unverified language to imply wrongdoing without proof", "The article is too boring", "The article is too short"],
            answerIndex: 1,
            explanation: "ผู้เขียนวิจารณ์ว่าบทความใช้ภาษาที่มีความหมายแฝงเพื่อสื่อเป็นนัยว่ามีการทุจริต ทั้งที่ไม่มีหลักฐานยืนยันจริง"
          },
          {
            question: "What is the author's implied advice to readers at the end of the passage?",
            choices: ["Believe everything news outlets report", "Ignore all news entirely", "Maintain healthy skepticism toward unverified, dramatically-framed claims", "Only trust tabloids"],
            answerIndex: 2,
            explanation: "ประโยคสุดท้ายแนะนำให้ผู้อ่านมีความเคลือบแคลงใจอย่างเหมาะสมต่อข้อกล่าวหาที่ยังไม่ได้รับการยืนยัน"
          }
        ]
      },
      speaking: {
        prompt: "ให้ผู้เรียนเลือกข่าวหรือพาดหัวข่าวหนึ่งชิ้นเป็นภาษาอังกฤษ แล้ววิเคราะห์ว่ามีการใช้ loaded language หรือ modal verbs เพื่อบ่งบอกระดับความน่าเชื่อถือของข้อมูลหรือไม่ อย่างไร แล้วพูดสรุปวิเคราะห์",
        targetPhrase: "This headline uses loaded language to insinuate wrongdoing, even though no concrete evidence is actually presented."
      },
      quiz: [
        { type: "mcq", question: "Which phrase signals that information is unverified?", choices: ["It is a proven fact that...", "Sources allegedly claim that...", "Scientists have confirmed that...", "The data clearly shows that..."], answerIndex: 1, explanation: "คำว่า allegedly บ่งบอกว่าข้อมูลยังไม่ได้รับการยืนยัน" },
        { type: "mcq", question: "'Loaded language' refers to...", choices: ["technical jargon", "words chosen to provoke a strong emotional reaction", "neutral factual reporting", "foreign language terms"], answerIndex: 1, explanation: "loaded language คือภาษาที่เลือกใช้เพื่อกระตุ้นอารมณ์ผู้อ่านโดยจงใจ" },
        { type: "mcq", question: "To 'insinuate' means to...", choices: ["state something directly and clearly", "suggest something negative indirectly", "prove something with evidence", "deny an accusation"], answerIndex: 1, explanation: "insinuate คือการพูดเป็นนัยในเชิงลบโดยไม่พูดตรงๆ" },
        { type: "mcq", question: "A 'partisan' news source is one that...", choices: ["is completely neutral", "favors a particular side or ideology", "only reports sports news", "never makes mistakes"], answerIndex: 1, explanation: "partisan หมายถึงฝักใฝ่ฝ่ายใดฝ่ายหนึ่งอย่างชัดเจน" },
        { type: "mcq", question: "'Disinformation' is best defined as...", choices: ["accurate information shared quickly", "false information deliberately spread to deceive", "information from a government source", "information published in a tabloid only"], answerIndex: 1, explanation: "disinformation คือข้อมูลเท็จที่จงใจเผยแพร่เพื่อหลอกลวง" },
        { type: "mcq", question: "According to the passage, why does the article avoid stating the allegations as fact?", choices: ["Because it has proof but chooses to hide it", "To protect the publication from libel while still influencing perception", "Because the editor forgot to", "Because it's illegal to state facts"], answerIndex: 1, explanation: "การใช้ภาษาแฝงนัยช่วยปกป้องสื่อจากการฟ้องร้องหมิ่นประมาท ในขณะที่ยังคงมีอิทธิพลต่อการรับรู้ของผู้อ่าน" },
        { type: "mcq", question: "What does the passage say about the news outlet's history?", choices: ["It has a history of only publishing sports stories", "It has a documented history of partisan coverage", "It won awards for objectivity", "It only reports internationally"], answerIndex: 1, explanation: "บทความระบุว่าสำนักข่าวนี้มีประวัติการรายงานข่าวแบบฝักใฝ่ฝ่ายใดฝ่ายหนึ่งอย่างต่อเนื่อง" }
      ]
    },
    {
      week: 7,
      levelTag: "C2",
      title: "Cross-Cultural Communication & Register Shifting",
      objectives: [
        "เข้าใจการปรับ register หรือระดับความเป็นทางการของภาษาให้เหมาะกับบริบทและวัฒนธรรม",
        "เรียนรู้คำศัพท์ที่เกี่ยวข้องกับมารยาททางสังคมและการสื่อสารข้ามวัฒนธรรม",
        "ฝึกปรับเปลี่ยนน้ำเสียงและคำศัพท์ตามสถานการณ์ที่เป็นทางการหรือไม่เป็นทางการ"
      ],
      grammar: {
        point: "Register Shifting: Formal vs Informal Structures",
        explanationTh: "Register คือระดับความเป็นทางการของภาษาที่ปรับเปลี่ยนตามบริบทและความสัมพันธ์ระหว่างผู้พูด ภาษาทางการมักใช้คำที่มีรากศัพท์ละติน โครงสร้างประโยคที่ซับซ้อน หลีกเลี่ยงการย่อคำ และใช้ modal verbs ที่สุภาพ เช่น would you be so kind as to... ในขณะที่ภาษาไม่เป็นทางการมักใช้ phrasal verbs คำย่อ และประโยคสั้นกระชับ ผู้เรียนระดับสูงต้องสามารถสลับ register ได้อย่างเหมาะสมตามสถานการณ์ทางสังคมและวัฒนธรรม",
        examples: [
          "I would be grateful if you could assist me at your earliest convenience.",
          "Could you help me out when you get a sec?",
          "We regret to inform you that your application was unsuccessful.",
          "Sorry, but you didn't get the job this time."
        ]
      },
      vocabulary: [
        { en: "formality", th: "ความเป็นทางการ", example: "The ceremony was conducted with great formality." },
        { en: "colloquialism", th: "คำพูดหรือสำนวนที่ใช้ในภาษาพูดทั่วไป ไม่เป็นทางการ", example: "Using too many colloquialisms in a business letter can seem unprofessional." },
        { en: "decorum", th: "ความเหมาะสมทางสังคม มารยาทที่ดี", example: "The judge insisted on strict decorum in the courtroom." },
        { en: "tact", th: "ความละมุนละม่อมในการพูดโดยไม่ทำให้ผู้อื่นขุ่นเคือง", example: "She handled the sensitive topic with remarkable tact." },
        { en: "faux pas", th: "ความผิดพลาดทางสังคมหรือมารยาท", example: "Bringing up salary at dinner was considered a major faux pas." },
        { en: "idiosyncrasy", th: "ลักษณะเฉพาะตัวที่แปลกหรือไม่เหมือนใคร", example: "Every culture has its own idiosyncrasies when it comes to greetings." },
        { en: "vernacular", th: "ภาษาพื้นถิ่นหรือภาษาที่ใช้ในชีวิตประจำวันของกลุ่มคนหนึ่ง", example: "The novel is written in the local vernacular, full of regional slang." },
        { en: "etiquette", th: "มารยาททางสังคม", example: "Business etiquette varies significantly from one country to another." },
        { en: "assimilate", th: "ปรับตัวกลมกลืนเข้ากับวัฒนธรรมหรือกลุ่มใหม่", example: "It took her years to fully assimilate into the new culture." }
      ],
      reading: {
        passage: "When Elena relocated from Madrid to Tokyo for work, she quickly discovered that the directness she had always considered a virtue could, in a different cultural context, register as a lack of tact. A colleague gently explained that in many Japanese business settings, decorum demands a more indirect approach -- disagreement is often signaled through subtle hesitation rather than outright refusal. What Elena had intended as refreshing honesty was, to her Japanese counterparts, borderline rude. She soon learned to read the unspoken cues, adjusting her register accordingly: more hedging in meetings, more formality with senior colleagues, and considerably fewer colloquialisms than she used with friends. It wasn't that one culture's communication style was superior to the other; rather, fluency, she realized, meant knowing which version of yourself to bring into a given room.",
        questions: [
          {
            question: "What is the passage's main point about cultural communication styles?",
            choices: ["Spanish directness is objectively better than Japanese indirectness", "Neither style is superior; true fluency means adapting register to context", "Japanese communication is always rude", "Elena refused to change her behavior"],
            answerIndex: 1,
            explanation: "บทความสรุปว่าไม่มีรูปแบบใดเหนือกว่ากัน แต่ความคล่องแคล่วที่แท้จริงคือการปรับตัวให้เหมาะกับบริบท"
          },
          {
            question: "What does the phrase 'knowing which version of yourself to bring into a given room' suggest about communication competence?",
            choices: ["People should have multiple fake personalities", "True communicative skill involves consciously adapting tone and register to social context", "It is impossible to adapt to new cultures", "One should never change how they speak"],
            answerIndex: 1,
            explanation: "ประโยคนี้สื่อว่าทักษะการสื่อสารที่แท้จริงคือความสามารถในการปรับน้ำเสียงและระดับภาษาให้เหมาะกับบริบททางสังคม"
          }
        ]
      },
      speaking: {
        prompt: "ให้ผู้เรียนฝึกพูดสถานการณ์เดียวกันสองแบบ คือแบบทางการและแบบไม่เป็นทางการ เช่น การขอความช่วยเหลือจากเพื่อนร่วมงาน เทียบกับการขอความช่วยเหลือจากผู้บริหารระดับสูง",
        targetPhrase: "I would be grateful if you could kindly review this proposal at your earliest convenience."
      },
      quiz: [
        { type: "mcq", question: "Which sentence is written in a more formal register?", choices: ["Can you check this out for me?", "I would appreciate it if you could review this at your convenience.", "Check this, please.", "Give it a look, yeah?"], answerIndex: 1, explanation: "ประโยคนี้ใช้โครงสร้างสุภาพและเป็นทางการ เหมาะกับบริบทที่เป็นทางการ" },
        { type: "mcq", question: "A 'faux pas' is...", choices: ["a formal dance", "a social blunder or embarrassing mistake", "a type of French cuisine", "a legal contract"], answerIndex: 1, explanation: "faux pas หมายถึงความผิดพลาดทางสังคมหรือมารยาท" },
        { type: "mcq", question: "'Colloquialism' refers to...", choices: ["highly technical scientific terms", "informal, everyday spoken expressions", "formal legal language", "ancient languages"], answerIndex: 1, explanation: "colloquialism คือสำนวนหรือคำพูดในภาษาพูดทั่วไปที่ไม่เป็นทางการ" },
        { type: "mcq", question: "To 'assimilate' into a new culture means to...", choices: ["reject all of its customs", "gradually adapt and blend into it", "visit it briefly", "criticize it openly"], answerIndex: 1, explanation: "assimilate หมายถึงการปรับตัวกลมกลืนเข้ากับวัฒนธรรมใหม่" },
        { type: "mcq", question: "'Decorum' most closely means...", choices: ["chaos and disorder", "appropriate social behavior and propriety", "loud celebration", "financial wealth"], answerIndex: 1, explanation: "decorum หมายถึงความเหมาะสมทางสังคมและมารยาทที่ดี" },
        { type: "mcq", question: "Why did Elena's directness cause friction with her Japanese colleagues?", choices: ["Because she spoke no Japanese at all", "Because directness was seen as lacking tact in that cultural context", "Because she refused to work with them", "Because she was always late"], answerIndex: 1, explanation: "ในบริบทวัฒนธรรมญี่ปุ่น ความตรงไปตรงมาถูกมองว่าขาดความละมุนละม่อม" },
        { type: "mcq", question: "What change did Elena eventually make?", choices: ["She quit her job and returned to Madrid", "She adjusted her register, using more hedging and formality in professional settings", "She stopped speaking in meetings altogether", "She demanded her colleagues change instead"], answerIndex: 1, explanation: "เอเลนาปรับระดับภาษาของตนเอง ใช้การพูดอ้อมและความเป็นทางการมากขึ้นในที่ทำงาน" }
      ]
    },
    {
      week: 8,
      levelTag: "C2",
      title: "Negotiation & Diplomatic Language",
      objectives: [
        "เรียนรู้การใช้ภาษาทางการทูตเพื่อสื่อสารประเด็นละเอียดอ่อนอย่างสุภาพ",
        "ฝึกใช้ euphemism และภาษาอ้อมเพื่อลดความรุนแรงของถ้อยคำ",
        "พัฒนาทักษะการเจรจาต่อรองด้วยภาษาที่แสดงความยืดหยุ่นแต่หนักแน่น"
      ],
      grammar: {
        point: "Diplomatic Hedging & Indirect Speech Acts",
        explanationTh: "ในการเจรจาต่อรองและการสื่อสารทางการทูต ผู้พูดมักหลีกเลี่ยงการปฏิเสธหรือวิจารณ์อย่างตรงไปตรงมา แต่ใช้โครงสร้างที่อ้อมและสุภาพ เช่น การใช้ modal verb แบบสุภาพ การใช้ euphemism แทนคำที่รุนแรง เช่น downsizing แทน layoffs และการใช้ conditional เพื่อเปิดพื้นที่ให้อีกฝ่ายรักษาหน้า เทคนิคเหล่านี้ช่วยให้การสื่อสารราบรื่นแม้ในสถานการณ์ที่มีความขัดแย้งทางผลประโยชน์",
        examples: [
          "We would encourage both parties to reconsider their current positions.",
          "Perhaps it would be worth exploring alternative options before finalizing the agreement.",
          "With all due respect, we feel the current proposal falls short of our expectations.",
          "The company has decided to pursue a restructuring of its workforce."
        ]
      },
      vocabulary: [
        { en: "euphemism", th: "คำพูดอ้อมที่ใช้แทนคำตรงๆ ที่อาจฟังดูรุนแรง", example: "'Letting someone go' is a common euphemism for firing an employee." },
        { en: "concession", th: "การยอมผ่อนปรนหรือยอมสละบางสิ่งในการเจรจา", example: "Both sides made concessions to reach a compromise." },
        { en: "leverage", th: "อำนาจต่อรองหรือข้อได้เปรียบที่ใช้ในการเจรจา", example: "Their control of the supply chain gave them significant leverage." },
        { en: "impasse", th: "ทางตัน ไม่สามารถตกลงกันได้", example: "The talks reached an impasse after three days without progress." },
        { en: "diplomatic", th: "มีชั้นเชิงทางการทูต ประนีประนอมอย่างชาญฉลาด", example: "She handled the tense situation in a remarkably diplomatic way." },
        { en: "conciliatory", th: "มีลักษณะปรองดอง ประนีประนอม", example: "He offered a conciliatory gesture to ease tensions." },
        { en: "stipulate", th: "กำหนดเงื่อนไขไว้อย่างชัดเจนในข้อตกลง", example: "The contract stipulates that payment must be made within 30 days." },
        { en: "ultimatum", th: "คำขาด ข้อเสนอสุดท้ายที่ต้องยอมรับหรือปฏิเสธ", example: "The union issued an ultimatum: raise wages or face a strike." },
        { en: "mediate", th: "ไกล่เกลี่ยระหว่างสองฝ่ายที่ขัดแย้งกัน", example: "A neutral third party was brought in to mediate the dispute." }
      ],
      reading: {
        passage: "After eighteen hours of talks, the trade negotiations had reached an impasse, with neither delegation willing to make the first concession. The lead negotiator for the smaller nation understood that her country lacked the economic leverage of its larger counterpart, so rather than issuing an ultimatum, she opted for a more conciliatory approach, proposing a phased implementation that would let both sides claim a partial victory. The final agreement, diplomatically worded to avoid the term 'trade restrictions,' instead stipulated 'temporary import adjustments' -- a euphemism both delegations privately acknowledged but publicly maintained, since naming the concession too plainly would have embarrassed constituents back home who had been promised a hard line.",
        questions: [
          {
            question: "Why did the negotiator avoid issuing an ultimatum?",
            choices: ["She had no other option available", "She recognized her country's weaker negotiating position and chose a conciliatory strategy instead", "She was ordered to accept everything", "She didn't understand negotiation tactics"],
            answerIndex: 1,
            explanation: "ผู้เจรจาตระหนักว่าประเทศของตนมีอำนาจต่อรองน้อยกว่า จึงเลือกใช้แนวทางประนีประนอมแทนการยื่นคำขาด"
          },
          {
            question: "What does the passage suggest about the phrase 'temporary import adjustments'?",
            choices: ["It was a completely accurate, literal description", "It functioned as a face-saving euphemism both sides accepted for political reasons", "It was a legal term with no political function", "Neither side understood what it meant"],
            answerIndex: 1,
            explanation: "วลีนี้เป็นคำอ้อมที่ทั้งสองฝ่ายยอมรับเพื่อรักษาหน้าตาทางการเมืองของตนเอง"
          }
        ]
      },
      speaking: {
        prompt: "ให้ผู้เรียนฝึกพูดสถานการณ์เจรจาต่อรอง เช่น การขอขึ้นเงินเดือนหรือการเจรจาสัญญาธุรกิจ โดยใช้ภาษาทางการทูตและ euphemism เพื่อรักษาน้ำใจอีกฝ่ายในขณะที่ยังคงยืนหยัดในจุดยืนของตนเอง",
        targetPhrase: "We would appreciate it if you could reconsider the terms, as the current proposal doesn't quite meet our expectations."
      },
      quiz: [
        { type: "mcq", question: "Which sentence best demonstrates diplomatic hedging?", choices: ["Your proposal is completely unacceptable.", "Perhaps it would be worth reconsidering some aspects of the proposal.", "No. We refuse.", "This is a terrible idea."], answerIndex: 1, explanation: "ประโยคนี้ใช้ภาษาอ้อมและสุภาพในการแสดงความไม่เห็นด้วย" },
        { type: "mcq", question: "A 'euphemism' is used to...", choices: ["state something as bluntly as possible", "soften or make a harsh reality sound more acceptable", "confuse the listener intentionally", "translate technical terms"], answerIndex: 1, explanation: "euphemism ใช้เพื่อลดความรุนแรงของคำพูดให้ฟังดูนุ่มนวลขึ้น" },
        { type: "mcq", question: "'Leverage' in a negotiation context means...", choices: ["a physical tool", "an advantage that gives one party more negotiating power", "a type of contract", "a legal penalty"], answerIndex: 1, explanation: "leverage หมายถึงอำนาจต่อรองหรือข้อได้เปรียบในการเจรจา" },
        { type: "mcq", question: "An 'impasse' occurs when...", choices: ["an agreement is quickly reached", "negotiations are stuck with no progress possible", "one party wins completely", "a contract is signed"], answerIndex: 1, explanation: "impasse คือทางตันที่ไม่สามารถตกลงกันต่อไปได้" },
        { type: "mcq", question: "To 'mediate' a dispute means to...", choices: ["escalate the conflict", "act as a neutral party to help resolve it", "take one side over the other", "ignore the conflict entirely"], answerIndex: 1, explanation: "mediate คือการไกล่เกลี่ยระหว่างสองฝ่ายที่ขัดแย้งกันในฐานะคนกลาง" },
        { type: "mcq", question: "Why did both delegations use the phrase 'temporary import adjustments' instead of 'trade restrictions'?", choices: ["Because it was a legal requirement", "To avoid embarrassing their constituents while still making the necessary concession", "Because they didn't know the correct term", "Because it made the negotiations longer"], answerIndex: 1, explanation: "การใช้คำอ้อมช่วยไม่ให้ประชาชนในประเทศรู้สึกอับอายจากการยอมผ่อนปรน" },
        { type: "mcq", question: "What compromise did the smaller nation's negotiator propose?", choices: ["Complete surrender to the larger nation's demands", "A phased implementation allowing both sides to claim partial victory", "Ending negotiations immediately", "Doubling the tariffs"], answerIndex: 1, explanation: "เธอเสนอให้ดำเนินการเป็นขั้นตอน เพื่อให้ทั้งสองฝ่ายสามารถอ้างได้ว่าได้รับชัยชนะบางส่วน" }
      ]
    },
    {
      week: 9,
      levelTag: "C2",
      title: "Literary & Figurative Language",
      objectives: [
        "วิเคราะห์การใช้ภาษาเชิงเปรียบเทียบในวรรณกรรม",
        "เข้าใจความแตกต่างระหว่าง irony ประเภทต่างๆ และผลต่อน้ำเสียงของงานเขียน",
        "ฝึกตีความสัญลักษณ์และน้ำเสียงแฝงในบทอ่านวรรณกรรม"
      ],
      grammar: {
        point: "As if / As though Clauses for Figurative Comparison",
        explanationTh: "โครงสร้าง as if และ as though ใช้เพื่อสร้างการเปรียบเทียบเชิงจินตนาการหรือสมมติ ซึ่งมักตามด้วยกริยารูปอดีตแม้จะพูดถึงปัจจุบันก็ตาม เพื่อแสดงว่าสิ่งที่พูดนั้นไม่ใช่ความจริง แต่เป็นภาพเปรียบเทียบเชิงวรรณกรรม เช่น she spoke as if she owned the place หมายความว่าเธอไม่ได้เป็นเจ้าของจริงๆ โครงสร้างนี้เป็นเครื่องมือสำคัญในการสร้างภาพพจน์และน้ำเสียงในงานเขียนเชิงวรรณกรรม",
        examples: [
          "He walked into the room as if he owned it.",
          "She looked at me as though I had lost my mind.",
          "The old house creaked as if it were breathing.",
          "He spoke as though nothing had happened, though we all knew the truth."
        ]
      },
      vocabulary: [
        { en: "allegory", th: "เรื่องเล่าที่มีความหมายแฝงเชิงสัญลักษณ์", example: "Animal Farm is a famous allegory for the Russian Revolution." },
        { en: "dramatic irony", th: "การประชดที่ผู้อ่านหรือผู้ชมรู้ความจริงมากกว่าตัวละคร", example: "The audience feels dramatic irony when the character trusts the villain unknowingly." },
        { en: "symbolism", th: "การใช้สิ่งหนึ่งแทนความหมายอื่นในเชิงสัญลักษณ์", example: "The wilting flower serves as symbolism for the character's fading hope." },
        { en: "foreshadowing", th: "การบอกใบ้เหตุการณ์ที่จะเกิดขึ้นในอนาคตของเรื่อง", example: "The storm at the beginning of the novel is foreshadowing of the conflict to come." },
        { en: "motif", th: "แนวคิดหรือภาพที่ปรากฏซ้ำๆ ในงานเขียนเพื่อเสริมธีม", example: "Water is a recurring motif throughout the novel, symbolizing renewal." },
        { en: "allusion", th: "การอ้างอิงถึงบุคคล เหตุการณ์ หรือวรรณกรรมอื่นโดยอ้อม", example: "The title contains an allusion to a famous Greek myth." },
        { en: "paradox", th: "ข้อความที่ดูขัดแย้งในตัวเองแต่แฝงความจริง", example: "'Less is more' is a well-known paradox." },
        { en: "satire", th: "งานเขียนที่ล้อเลียนวิพากษ์วิจารณ์สังคมด้วยอารมณ์ขัน", example: "The novel is a biting satire of modern political corruption." },
        { en: "understatement", th: "การพูดลดทอนความสำคัญของบางสิ่งเพื่อสร้างเอฟเฟกต์ ตรงข้ามกับการพูดเกินจริง", example: "Calling a hurricane 'a bit windy' is a classic British understatement." }
      ],
      reading: {
        passage: "In the novel's opening chapter, the protagonist admires the pristine white walls of the mansion she has just inherited, remarking that nothing bad could ever happen in such an immaculate place. Readers, who already know from the prologue that the previous owner died under suspicious circumstances within those very walls, experience a sharp jolt of dramatic irony. The recurring motif of untouched, gleaming surfaces -- the polished floors, the spotless windows -- begins to feel less like elegance and more like a thin veneer concealing rot beneath. By the novel's end, when the protagonist finally discovers the hidden room behind the library, the earlier descriptions of pristine surfaces reveal themselves as foreshadowing all along, a paradox in which cleanliness itself becomes the novel's most unsettling symbol.",
        questions: [
          {
            question: "What literary effect is created by the reader knowing about the previous owner's suspicious death while the protagonist does not?",
            choices: ["Foreshadowing only", "Dramatic irony, since the reader has knowledge the protagonist lacks", "Satire", "Understatement"],
            answerIndex: 1,
            explanation: "การที่ผู้อ่านรู้ความจริงมากกว่าตัวละครเอกคือลักษณะของ dramatic irony"
          },
          {
            question: "What does the 'pristine white walls' motif ultimately come to symbolize by the novel's end?",
            choices: ["Genuine safety and purity", "A false surface concealing something sinister", "The protagonist's wealth", "Nothing significant"],
            answerIndex: 1,
            explanation: "บทความระบุว่าความสะอาดที่ดูเหมือนสมบูรณ์แบบกลายเป็นสัญลักษณ์ของสิ่งที่น่าขนลุกซ่อนอยู่ภายใน"
          }
        ]
      },
      speaking: {
        prompt: "ให้ผู้เรียนเลือกภาพยนตร์หรือหนังสือที่ตนเองชื่นชอบ แล้วพูดวิเคราะห์การใช้สัญลักษณ์หรือการประชดในเรื่องนั้น พร้อมยกตัวอย่างประกอบ",
        targetPhrase: "The recurring symbol of the broken clock suggests that time, for this character, has effectively stopped."
      },
      quiz: [
        { type: "mcq", question: "Complete correctly: 'She acted as if she ___ the answer, though she clearly didn't.'", choices: ["knows", "knew", "has known", "will know"], answerIndex: 1, explanation: "หลัง as if ที่แสดงสมมติที่ไม่เป็นจริง ใช้กริยารูปอดีต (knew)" },
        { type: "mcq", question: "'Dramatic irony' occurs when...", choices: ["a character makes a joke", "the audience knows something a character does not", "a story has a sad ending", "the plot is very exciting"], answerIndex: 1, explanation: "dramatic irony เกิดขึ้นเมื่อผู้ชมรู้ข้อมูลที่ตัวละครไม่รู้" },
        { type: "mcq", question: "'Foreshadowing' refers to...", choices: ["summarizing the plot at the end", "hinting at future events earlier in a story", "describing a character's appearance", "using humor to criticize"], answerIndex: 1, explanation: "foreshadowing คือการบอกใบ้เหตุการณ์ในอนาคตตั้งแต่ช่วงต้นเรื่อง" },
        { type: "mcq", question: "A 'motif' is...", choices: ["a one-time event in a story", "a recurring image or idea that reinforces a theme", "the main character's name", "the setting of a story"], answerIndex: 1, explanation: "motif คือภาพหรือแนวคิดที่ปรากฏซ้ำๆ เพื่อเสริมธีมของเรื่อง" },
        { type: "mcq", question: "'Satire' is writing that...", choices: ["praises its subject sincerely", "uses humor or exaggeration to criticize something", "is always non-fiction", "avoids any humor"], answerIndex: 1, explanation: "satire คืองานเขียนที่ใช้อารมณ์ขันหรือการเสียดสีเพื่อวิพากษ์วิจารณ์" },
        { type: "mcq", question: "According to the passage, what do the pristine surfaces eventually come to represent?", choices: ["The protagonist's happiness", "A facade concealing something dark and unsettling", "The wealth of the town", "Nothing; they are purely decorative"], answerIndex: 1, explanation: "พื้นผิวที่ดูสะอาดสมบูรณ์แบบกลายเป็นสัญลักษณ์ของสิ่งที่น่ากลัวซ่อนอยู่" },
        { type: "mcq", question: "What is revealed behind the library at the end of the novel?", choices: ["A garden", "A hidden room connected to the earlier foreshadowing", "A new character", "Nothing is revealed"], answerIndex: 1, explanation: "ห้องลับหลังห้องสมุดคือจุดที่เชื่อมโยงกับการบอกใบ้ตั้งแต่ต้นเรื่อง" }
      ]
    },
    {
      week: 10,
      levelTag: "C2",
      title: "Academic Writing & Argumentation",
      objectives: [
        "ฝึกโครงสร้างวิทยานิพนธ์ (thesis statement) ที่ชัดเจนและมีพลังโน้มน้าว",
        "เรียนรู้การเขียนโต้แย้งฝ่ายตรงข้ามและการหักล้างอย่างมีเหตุผล",
        "พัฒนาทักษะการเขียนเชิงวิชาการที่มีความสอดคล้องและน่าเชื่อถือ"
      ],
      grammar: {
        point: "Concession Clauses for Counter-Argument (While/Although + Rebuttal)",
        explanationTh: "ในงานเขียนเชิงวิชาการระดับสูง ผู้เขียนที่มีทักษะจะไม่ละเลยข้อโต้แย้งฝ่ายตรงข้าม แต่จะยอมรับความสมเหตุสมผลของมันก่อนด้วยคำเชื่อม เช่น While, Although, Even though แล้วจึงตามด้วยการหักล้างหรือแสดงจุดยืนของตนเองอย่างหนักแน่น โครงสร้างนี้แสดงถึงความรอบด้านทางความคิดและเพิ่มความน่าเชื่อถือให้กับข้อโต้แย้งหลัก",
        examples: [
          "While it is true that remote work can reduce collaboration, the flexibility it offers often boosts overall productivity.",
          "Although some scholars dispute this theory, the majority of empirical evidence supports it.",
          "Even though the initial costs are high, the environmental benefits far outweigh them in the long run.",
          "Critics rightly point out the risks; nevertheless, the potential rewards justify further investment."
        ]
      },
      vocabulary: [
        { en: "premise", th: "ข้อสมมติฐานที่ใช้เป็นพื้นฐานของการให้เหตุผล", example: "The entire argument rests on a flawed premise." },
        { en: "syllogism", th: "การให้เหตุผลแบบตรรกะที่มีสองข้อสมมติฐานนำไปสู่บทสรุป", example: "The classic syllogism about Socrates being mortal illustrates deductive reasoning." },
        { en: "refutation", th: "การหักล้างข้อโต้แย้งด้วยเหตุผล", example: "The essay's strongest section is its refutation of the opposing view." },
        { en: "cogent", th: "มีเหตุผลหนักแน่นน่าเชื่อถือ", example: "She presented a cogent argument that left little room for doubt." },
        { en: "coherence", th: "ความสอดคล้องเป็นเหตุเป็นผลกันของความคิด", example: "The essay lacks coherence; the paragraphs don't connect logically." },
        { en: "synthesis", th: "การผสมผสานแนวคิดหลายอย่างเข้าด้วยกันเป็นข้อสรุปใหม่", example: "The paper offers a synthesis of economic and sociological perspectives." },
        { en: "exposition", th: "การอธิบายหรือนำเสนอข้อมูลหรือแนวคิดอย่างละเอียด", example: "The first chapter serves as an exposition of the theoretical framework." },
        { en: "corollary", th: "ผลที่ตามมาโดยธรรมชาติจากข้อสรุปหลัก", example: "A natural corollary of this policy is a rise in short-term unemployment." },
        { en: "substantive", th: "มีเนื้อหาสาระสำคัญ ไม่ใช่แค่ผิวเผิน", example: "The committee raised substantive objections to the proposal." }
      ],
      reading: {
        passage: "A well-constructed academic argument does not simply assert its thesis and move on; it anticipates objections and addresses them directly. Consider an essay arguing that standardized testing should be abolished. A weak version of this essay would ignore counterarguments entirely. A cogent version, by contrast, would concede that standardized tests offer a degree of comparability across schools -- a substantive point that cannot be dismissed -- before demonstrating that this benefit is outweighed by the tests' tendency to narrow curricula and disadvantage students from under-resourced backgrounds. This structure, moving from premise to concession to refutation, produces an argument with genuine coherence, one that feels less like a rant and more like a synthesis of multiple viewpoints arriving at a considered conclusion.",
        questions: [
          {
            question: "According to the passage, what distinguishes a 'weak' argumentative essay from a 'cogent' one?",
            choices: ["The weak essay uses more vocabulary", "The cogent essay acknowledges and addresses counterarguments rather than ignoring them", "The weak essay is longer", "There is no real difference"],
            answerIndex: 1,
            explanation: "บทความที่มีเหตุผลหนักแน่นจะยอมรับและตอบโต้ข้อโต้แย้งฝ่ายตรงข้าม ในขณะที่บทความที่อ่อนแอจะละเลยข้อโต้แย้งเหล่านั้น"
          },
          {
            question: "What is the passage's implicit view of the value of standardized testing?",
            choices: ["It has zero value and only harms students", "It offers some genuine benefit (comparability) but has significant drawbacks worth weighing seriously", "It should never be discussed", "It is superior to all other assessment methods"],
            answerIndex: 1,
            explanation: "บทความยอมรับว่าการทดสอบมาตรฐานมีประโยชน์ด้านการเปรียบเทียบ แต่ก็ชี้ให้เห็นข้อเสียที่สำคัญที่ต้องพิจารณาอย่างจริงจัง"
          }
        ]
      },
      speaking: {
        prompt: "ให้ผู้เรียนฝึกพูดนำเสนอข้อโต้แย้งทางวิชาการในหัวข้อที่ตนสนใจ โดยใช้โครงสร้าง concession บวก refutation อย่างน้อยหนึ่งครั้ง เช่น While some argue..., the evidence suggests...",
        targetPhrase: "While some argue that social media connects people, I would contend that it has, on balance, fostered greater isolation."
      },
      quiz: [
        { type: "mcq", question: "Which sentence correctly uses a concession clause?", choices: ["The plan is expensive and it is bad.", "While the plan is expensive, its long-term benefits justify the cost.", "The plan expensive is, but good.", "Because the plan is expensive, therefore bad."], answerIndex: 1, explanation: "While นำหน้าข้อยอมรับ ตามด้วยการหักล้างหรือแสดงจุดยืนหลัก" },
        { type: "mcq", question: "A 'premise' in an argument is...", choices: ["the final conclusion", "an assumption or starting point on which reasoning is based", "an irrelevant detail", "a type of counter-argument"], answerIndex: 1, explanation: "premise คือข้อสมมติฐานที่ใช้เป็นจุดเริ่มต้นของการให้เหตุผล" },
        { type: "mcq", question: "An argument described as 'cogent' is one that is...", choices: ["confusing and weak", "clear, logical, and convincing", "emotionally manipulative", "completely irrelevant"], answerIndex: 1, explanation: "cogent หมายถึงมีเหตุผลหนักแน่นและน่าเชื่อถือ" },
        { type: "mcq", question: "'Coherence' in writing refers to...", choices: ["the use of big words", "logical consistency and connection between ideas", "the length of an essay", "the number of citations used"], answerIndex: 1, explanation: "coherence คือความสอดคล้องเป็นเหตุเป็นผลกันของความคิดในงานเขียน" },
        { type: "mcq", question: "A 'corollary' is...", choices: ["the main thesis of an essay", "a natural consequence that follows from something else", "a type of grammatical error", "an unrelated topic"], answerIndex: 1, explanation: "corollary คือผลที่ตามมาโดยธรรมชาติจากข้อสรุปหลัก" },
        { type: "mcq", question: "What structure does the passage recommend for a strong argumentative essay?", choices: ["Ignore all counterarguments completely", "Move from premise to concession to refutation", "State only emotional opinions", "Avoid taking any clear position"], answerIndex: 1, explanation: "บทความแนะนำโครงสร้างที่เริ่มจากสมมติฐาน ผ่านการยอมรับข้อโต้แย้ง แล้วจึงหักล้าง" },
        { type: "mcq", question: "What substantive point does the passage concede in favor of standardized testing?", choices: ["It is enjoyable for students", "It offers a degree of comparability across different schools", "It is inexpensive to administer", "It has no drawbacks"], answerIndex: 1, explanation: "บทความยอมรับว่าการทดสอบมาตรฐานช่วยให้สามารถเปรียบเทียบผลระหว่างโรงเรียนต่างๆ ได้" }
      ]
    },
    {
      week: 11,
      levelTag: "C2",
      title: "Public Speaking & Debate at Native-Like Fluency",
      objectives: [
        "ฝึกใช้คำถามเชิงวาทศิลป์และโครงสร้างคู่ขนานเพื่อโน้มน้าวใจผู้ฟัง",
        "พัฒนาความมั่นใจและความคล่องแคล่วในการพูดโต้วาทีแบบเจ้าของภาษา",
        "เรียนรู้คำศัพท์ที่เกี่ยวข้องกับการพูดในที่สาธารณะและการโต้วาที"
      ],
      grammar: {
        point: "Rhetorical Questions & Parallelism for Persuasive Speech",
        explanationTh: "นักพูดที่มีทักษะระดับสูงมักใช้คำถามเชิงวาทศิลป์ ซึ่งเป็นคำถามที่ไม่ต้องการคำตอบจริง แต่ใช้เพื่อกระตุ้นให้ผู้ฟังคิดตามหรือเห็นด้วยกับประเด็นที่นำเสนอ นอกจากนี้ การใช้โครงสร้างคู่ขนานคือการใช้รูปแบบไวยากรณ์ที่ซ้ำกันในหลายวลีหรือประโยคติดต่อกัน ช่วยสร้างจังหวะและความน่าจดจำให้กับคำพูด เทคนิคทั้งสองนี้เป็นหัวใจสำคัญของการพูดโน้มน้าวใจระดับเจ้าของภาษา",
        examples: [
          "Is this the kind of leadership we deserve, or the kind we deserve better than?",
          "We must not merely dream of change; we must demand it, build it, and live it.",
          "How much longer can we afford to look away?",
          "Ask not what your country can do for you -- ask what you can do for your country."
        ]
      },
      vocabulary: [
        { en: "rebuttal", th: "คำโต้แย้งเพื่อหักล้างข้อกล่าวหาหรือข้อโต้แย้ง", example: "Her rebuttal dismantled the opponent's argument point by point." },
        { en: "oratory", th: "ศิลปะการพูดในที่สาธารณะอย่างมีพลัง", example: "His oratory skills captivated the entire hall." },
        { en: "extemporaneous", th: "พูดโดยไม่ได้เตรียมสคริปต์ล่วงหน้า แบบด้นสด", example: "She delivered a brilliant extemporaneous speech with no notes at all." },
        { en: "rapport", th: "ความสัมพันธ์ที่ดีและความเข้าใจร่วมกันระหว่างผู้พูดกับผู้ฟัง", example: "A good speaker builds rapport with the audience within the first minute." },
        { en: "assertive", th: "กล้าแสดงออกอย่างมั่นใจโดยไม่ก้าวร้าว", example: "He remained assertive throughout the debate without ever raising his voice." },
        { en: "captivate", th: "ดึงดูดความสนใจอย่างมาก", example: "Her storytelling captivated the entire audience." },
        { en: "resonate", th: "สร้างความรู้สึกร่วมหรือสอดคล้องกับความรู้สึกผู้ฟัง", example: "The message resonated deeply with young voters." },
        { en: "poise", th: "ความสง่างามและความสงบมั่นคงเมื่อต้องเผชิญสถานการณ์กดดัน", example: "She handled the hostile questions with remarkable poise." },
        { en: "charisma", th: "เสน่ห์ดึงดูดใจที่ทำให้ผู้อื่นเชื่อถือและศรัทธา", example: "The candidate's charisma won over even skeptical voters." }
      ],
      reading: {
        passage: "What separates a merely competent debater from a truly compelling one is rarely the strength of the underlying argument alone; it is, more often, the poise with which that argument is delivered. Consider two candidates responding to the same hostile question: one stumbles, defensive and visibly rattled, while the other pauses, unhurried, and delivers an extemporaneous rebuttal so measured it seems rehearsed. The audience does not merely hear the second candidate's words -- they feel them, because the speaker has, in that instant, built rapport through sheer command of tone and timing. This is the paradox of oratory: the more spontaneous a response appears, the more it typically owes to years of disciplined practice, not innate talent alone.",
        questions: [
          {
            question: "What is the passage's main claim about effective public speaking?",
            choices: ["Only the content of an argument matters, not delivery", "Delivery, poise, and timing are often as important as the argument's content itself", "Natural talent alone determines success, without practice", "Audiences only care about facts, never tone"],
            answerIndex: 1,
            explanation: "บทความระบุว่าความสง่างามและจังหวะในการพูดมักสำคัญพอๆ กับเนื้อหาของข้อโต้แย้งเอง"
          },
          {
            question: "What 'paradox' does the final sentence describe?",
            choices: ["That practice makes speeches worse", "That spontaneous-seeming responses are usually the product of extensive prior practice, not raw talent", "That audiences prefer scripted speeches", "That oratory has no connection to preparation"],
            answerIndex: 1,
            explanation: "ความขัดแย้งในตัวเองคือ ยิ่งคำตอบดูเป็นธรรมชาติและด้นสดมากเท่าไร มักยิ่งมาจากการฝึกฝนอย่างหนักมาก่อน ไม่ใช่พรสวรรค์ล้วนๆ"
          }
        ]
      },
      speaking: {
        prompt: "ให้ผู้เรียนฝึกพูดโต้วาทีสั้นๆ ในหัวข้อที่มีข้อถกเถียง โดยพยายามใช้คำถามเชิงวาทศิลป์อย่างน้อยหนึ่งครั้งและโครงสร้างคู่ขนานอย่างน้อยหนึ่งครั้งเพื่อเพิ่มพลังในการโน้มน้าวใจ",
        targetPhrase: "Are we going to keep making excuses, or are we finally going to take action?"
      },
      quiz: [
        { type: "mcq", question: "Which sentence best demonstrates parallelism?", choices: ["She likes running, to swim, and biking.", "She likes running, swimming, and biking.", "She likes to run, swimming, and to bike.", "She like running, swim, and bikes."], answerIndex: 1, explanation: "โครงสร้างคู่ขนานต้องใช้รูปกริยาที่สอดคล้องกันตลอดประโยค (running, swimming, biking)" },
        { type: "mcq", question: "Which is an example of a rhetorical question?", choices: ["What time is the meeting?", "Do we really want to leave this problem for the next generation?", "How do you spell that word?", "Where is the nearest exit?"], answerIndex: 1, explanation: "คำถามนี้ไม่ได้ต้องการคำตอบจริง แต่ใช้เพื่อกระตุ้นให้ผู้ฟังคิดตามและเห็นด้วย" },
        { type: "mcq", question: "An 'extemporaneous' speech is one that is...", choices: ["read word-for-word from a script", "delivered with little or no preparation, on the spot", "memorized months in advance", "given only in writing"], answerIndex: 1, explanation: "extemporaneous หมายถึงการพูดแบบด้นสดโดยไม่ได้เตรียมสคริปต์ล่วงหน้า" },
        { type: "mcq", question: "'Rapport' between a speaker and audience refers to...", choices: ["a formal written contract", "a sense of mutual understanding and connection", "a disagreement or conflict", "a technical malfunction"], answerIndex: 1, explanation: "rapport คือความสัมพันธ์และความเข้าใจร่วมกันที่ดีระหว่างผู้พูดกับผู้ฟัง" },
        { type: "mcq", question: "'Poise' under pressure means...", choices: ["panicking visibly", "remaining calm, composed, and graceful", "speaking as loudly as possible", "refusing to answer questions"], answerIndex: 1, explanation: "poise หมายถึงความสง่างามและความสงบมั่นคงแม้ในสถานการณ์กดดัน" },
        { type: "mcq", question: "According to the passage, what really separates a competent debater from a compelling one?", choices: ["Having a louder voice", "The poise and delivery with which the argument is presented", "Memorizing more facts", "Speaking for a longer time"], answerIndex: 1, explanation: "บทความระบุว่าความสง่างามและวิธีการนำเสนอคือสิ่งที่แยกนักพูดที่ยอดเยี่ยมออกจากนักพูดทั่วไป" },
        { type: "mcq", question: "What does the passage suggest about seemingly spontaneous responses in debates?", choices: ["They are always genuinely unplanned", "They usually result from years of disciplined practice", "They are a sign of poor preparation", "They never impress audiences"], answerIndex: 1, explanation: "คำตอบที่ดูเป็นธรรมชาติมักมาจากการฝึกฝนอย่างมีวินัยมาเป็นเวลานาน" }
      ]
    },
    {
      week: 12,
      levelTag: "C2",
      title: "Capstone: Extended Discourse",
      objectives: [
        "ทบทวนและบูรณาการไวยากรณ์และทักษะทั้งหมดที่เรียนมาตลอด 11 สัปดาห์",
        "ฝึกผลิตวาทกรรมที่ต่อเนื่องยาวโดยผสมผสานเทคนิคการเขียนและการพูดเชิงวิชาการ",
        "ประเมินความพร้อมสำหรับระดับ C2 อย่างครอบคลุมก่อนสำเร็จหลักสูตร"
      ],
      grammar: {
        point: "Integrated Review: Inversion, Nominalization, Hedging, Conditionals & Concession in Extended Discourse",
        explanationTh: "สัปดาห์นี้เป็นการทบทวนเชิงบูรณาการโครงสร้างไวยากรณ์ทั้งหมดที่เรียนมา ได้แก่ inversion เพื่อเน้นย้ำ nominalization เพื่อความเป็นทางการ hedging language เพื่อความน่าเชื่อถือ mixed conditionals เพื่อแสดงสมมติฐานซับซ้อน และ concession clauses เพื่อโต้แย้งอย่างรอบด้าน นักเรียนระดับ C2 ที่แท้จริงต้องสามารถผสมผสานโครงสร้างเหล่านี้เข้าด้วยกันได้อย่างเป็นธรรมชาติในวาทกรรมต่อเนื่องยาว ทั้งการเขียนและการพูด โดยไม่ต้องคิดถึงกฎไวยากรณ์ทีละข้อ",
        examples: [
          "Rarely has a policy generated such widespread debate; while its proponents point to empirical evidence of success, critics argue, arguably with some justification, that the ramifications have been understated.",
          "Had the committee acted sooner, the crisis -- arguably avoidable -- would not have escalated to the point it has now reached.",
          "Not only does the report underscore the urgency of reform, but it also, through its careful synthesis of data, refutes many of the counterarguments raised by skeptics."
        ]
      },
      vocabulary: [
        { en: "erudite", th: "มีความรู้ลึกซึ้งรอบด้านเชิงวิชาการ", example: "The professor's erudite lecture impressed even seasoned scholars." },
        { en: "magnanimous", th: "ใจกว้าง มีน้ำใจแม้ในสถานการณ์ที่ได้เปรียบ", example: "Despite winning the debate, she was magnanimous toward her opponent." },
        { en: "prudent", th: "รอบคอบ มีวิจารณญาณในการตัดสินใจ", example: "It would be prudent to review the contract before signing." },
        { en: "tenacious", th: "ยึดมั่นไม่ย่อท้อ พากเพียร", example: "Her tenacious pursuit of justice eventually paid off." },
        { en: "versatile", th: "รอบด้าน ปรับตัวได้หลากหลายสถานการณ์", example: "He is a versatile speaker, equally comfortable in formal and casual settings." },
        { en: "meticulous", th: "พิถีพิถัน ละเอียดรอบคอบในทุกรายละเอียด", example: "The report reflects months of meticulous research." },
        { en: "pragmatic", th: "เน้นการปฏิบัติจริง มองตามความเป็นจริงมากกว่าอุดมคติ", example: "The negotiator took a pragmatic approach rather than an idealistic one." },
        { en: "incisive", th: "แหลมคม เจาะประเด็นได้ตรงจุด", example: "Her incisive analysis exposed the flaws in the proposal immediately." },
        { en: "holistic", th: "แบบองค์รวม มองภาพรวมทุกด้าน", example: "The therapist takes a holistic approach, considering both mind and body." }
      ],
      reading: {
        passage: "Twelve weeks ago, few in this cohort could have anticipated how naturally inversion, nominalization, and hedging would eventually thread themselves through their everyday speech. Had someone predicted, back in week one, that they would soon be constructing mixed conditionals and concession clauses without conscious effort, most would have been sceptical. Yet fluency, as any erudite linguist will attest, is rarely the product of a single technique mastered in isolation; rather, it emerges from the meticulous, at times tenacious, integration of many smaller competencies into a single, versatile voice. Not only has this cohort learned to argue with rhetorical precision, but they have also, through sustained practice, developed the pragmatic judgment to know when directness serves them better than diplomacy -- and when the reverse is true. Whatever lies ahead, they are, arguably, far better equipped to navigate it than they once were.",
        questions: [
          {
            question: "What is the passage's central claim about how fluency develops?",
            choices: ["Fluency comes instantly from memorizing one grammar rule", "Fluency emerges gradually from integrating many smaller skills into a cohesive, adaptable voice", "Fluency is impossible to achieve in twelve weeks", "Fluency only requires vocabulary memorization"],
            answerIndex: 1,
            explanation: "บทความระบุว่าความคล่องแคล่วเกิดจากการผสมผสานทักษะย่อยหลายอย่างเข้าด้วยกันอย่างค่อยเป็นค่อยไป ไม่ใช่จากเทคนิคเดียว"
          },
          {
            question: "What does the passage imply about the relationship between directness and diplomacy?",
            choices: ["Directness is always the better choice", "Skilled communicators judge, situation by situation, which approach -- directness or diplomacy -- is more appropriate", "Diplomacy should never be used", "There is no real difference between them"],
            answerIndex: 1,
            explanation: "บทความบอกว่าผู้เรียนพัฒนาวิจารณญาณเชิงปฏิบัติในการเลือกว่าเมื่อใดควรพูดตรงและเมื่อใดควรใช้ภาษาทางการทูต"
          }
        ]
      },
      speaking: {
        prompt: "ให้ผู้เรียนพูดสรุปสิ่งที่ตนเองได้เรียนรู้ตลอด 12 สัปดาห์ โดยพยายามผสมผสานโครงสร้างไวยากรณ์อย่างน้อยสามแบบที่เรียนมา เช่น inversion, hedging, concession clause ในการพูดต่อเนื่องอย่างน้อยหนึ่งนาที",
        targetPhrase: "Never did I imagine, twelve weeks ago, that I would be arguing complex points with this level of nuance -- and while there is still much to learn, I feel far more confident navigating advanced English today."
      },
      quiz: [
        { type: "mcq", question: "Which sentence correctly combines inversion and a concession clause?", choices: ["Never has the team performed so well, although the season started poorly.", "Never the team has performed so well, although poorly the season started.", "The team never performed well, but starting the season poorly.", "Although poorly, never performed the team well the season started."], answerIndex: 0, explanation: "ประโยคนี้ใช้ inversion อย่างถูกต้อง (Never has the team) และตามด้วย concession clause (although the season started poorly)" },
        { type: "mcq", question: "Identify the nominalized form of 'integrate' used correctly: 'The ___ of these skills takes time.'", choices: ["integrate", "integration", "integrating only", "integral"], answerIndex: 1, explanation: "integration คือรูปคำนามที่ถูกต้องของ integrate" },
        { type: "mcq", question: "Someone described as 'erudite' is...", choices: ["uneducated and careless", "deeply knowledgeable, especially in academic matters", "rude and dismissive", "indecisive"], answerIndex: 1, explanation: "erudite หมายถึงมีความรู้ลึกซึ้งรอบด้านโดยเฉพาะเชิงวิชาการ" },
        { type: "mcq", question: "A 'pragmatic' approach to a problem focuses on...", choices: ["idealistic theories with no practical application", "practical, realistic solutions", "ignoring the problem entirely", "emotional reactions only"], answerIndex: 1, explanation: "pragmatic หมายถึงการเน้นแนวทางที่ปฏิบัติได้จริง ไม่ใช่อุดมคติล้วนๆ" },
        { type: "mcq", question: "'Tenacious' most nearly means...", choices: ["easily giving up", "persistent and determined despite difficulty", "careless and lazy", "indifferent to outcomes"], answerIndex: 1, explanation: "tenacious หมายถึงยึดมั่นไม่ย่อท้อแม้จะเจออุปสรรค" },
        { type: "mcq", question: "According to the passage, what allows true fluency to emerge, per the author?", choices: ["Memorizing a single grammar rule perfectly", "The gradual, integrated mastery of many smaller language competencies", "Avoiding difficult grammar altogether", "Speaking as fast as possible"], answerIndex: 1, explanation: "บทความระบุว่าความคล่องแคล่วเกิดจากการบูรณาการทักษะย่อยหลายอย่างเข้าด้วยกันอย่างค่อยเป็นค่อยไป" },
        { type: "mcq", question: "What pragmatic judgment does the passage say the cohort has developed?", choices: ["Knowing when to use a dictionary", "Knowing when directness serves them better than diplomacy, and vice versa", "Knowing how to translate word-for-word", "Avoiding all public speaking"], answerIndex: 1, explanation: "ผู้เรียนพัฒนาวิจารณญาณในการเลือกว่าเมื่อใดควรพูดตรงและเมื่อใดควรใช้ภาษาทางการทูต" }
      ]
    }
  ]
};
