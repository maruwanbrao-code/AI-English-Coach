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
          { en: "Never had she felt so confident before stepping onto that stage.", th: "เธอไม่เคยรู้สึกมั่นใจเช่นนี้มาก่อนเลยก่อนที่จะก้าวขึ้นไปบนเวทีนั้น", highlight: "Never had she felt" },
          { en: "Not only did he finish first, but he also broke the record.", th: "เขาไม่เพียงแต่เข้าเส้นชัยเป็นคนแรกเท่านั้น แต่ยังทำลายสถิติอีกด้วย", highlight: "Not only did he finish first" },
          { en: "Rarely do we see such unwavering dedication in someone so young.", th: "เราแทบไม่ค่อยได้เห็นความทุ่มเทที่ไม่หวั่นไหวเช่นนี้ในคนอายุน้อยขนาดนี้", highlight: "Rarely do we see" },
          { en: "Little did I know that this decision would change my life forever.", th: "ฉันแทบไม่รู้เลยว่าการตัดสินใจครั้งนี้จะเปลี่ยนชีวิตฉันไปตลอดกาล", highlight: "Little did I know" }
        ]
      },
      vocabulary: [
        { en: "eloquent", th: "คารมคมคาย พูดจาไพเราะและมีพลังโน้มน้าว", example: "Her eloquent speech moved the entire audience to tears.", exampleTh: "สุนทรพจน์ที่คารมคมคายของเธอทำให้ผู้ฟังทั้งหมดน้ำตาไหล" },
        { en: "candid", th: "ตรงไปตรงมา เปิดเผยอย่างจริงใจ", example: "He gave a surprisingly candid account of his failures.", exampleTh: "เขาเล่าเรื่องความล้มเหลวของตัวเองอย่างตรงไปตรงมาอย่างน่าประหลาดใจ" },
        { en: "poignant", th: "สะเทือนใจ ซาบซึ้งอย่างลึกซึ้ง", example: "The film's final scene was almost unbearably poignant.", exampleTh: "ฉากสุดท้ายของภาพยนตร์เรื่องนี้สะเทือนใจจนแทบทนดูไม่ไหว" },
        { en: "ambivalent", th: "รู้สึกลังเล มีความรู้สึกสองด้านปนกัน", example: "I'm ambivalent about moving abroad; it's exciting yet terrifying.", exampleTh: "ฉันรู้สึกลังเลกับการย้ายไปอยู่ต่างประเทศ มันทั้งน่าตื่นเต้นและน่ากลัวในเวลาเดียวกัน" },
        { en: "wistful", th: "ครุ่นคิดถึงอดีตอย่างเศร้าเล็กน้อย", example: "She spoke with a wistful smile about her childhood home.", exampleTh: "เธอพูดถึงบ้านในวัยเด็กด้วยรอยยิ้มที่ครุ่นคิดถึงอดีตอย่างเศร้าเล็กน้อย" },
        { en: "unassuming", th: "ถ่อมตัว ไม่โอ้อวด", example: "Despite his fame, the actor remained remarkably unassuming.", exampleTh: "แม้จะมีชื่อเสียง นักแสดงคนนี้ก็ยังคงถ่อมตัวอย่างน่าทึ่ง" },
        { en: "forthright", th: "ตรงไปตรงมา กล้าพูดความจริง", example: "I appreciate her forthright manner when giving feedback.", exampleTh: "ฉันชื่นชมวิธีการให้ข้อเสนอแนะที่ตรงไปตรงมาของเธอ" },
        { en: "introspective", th: "ใคร่ครวญภายใน สำรวจความคิดตนเอง", example: "The long journey left him feeling unusually introspective.", exampleTh: "การเดินทางอันยาวนานทำให้เขารู้สึกใคร่ครวญภายในตนเองอย่างผิดปกติ" },
        { en: "visceral", th: "รู้สึกลึกซึ้งจากภายในตามสัญชาตญาณ", example: "The horror movie provoked a visceral reaction from the crowd.", exampleTh: "หนังสยองขวัญเรื่องนี้กระตุ้นปฏิกิริยาที่รุนแรงจากภายในของฝูงชน" }
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
      story: {
        title: "นาฬิกาของช่างซ่อมผู้ถ่อมตัว",
        sentences: [
          { en: "In a narrow alley behind the old quarter, there lived an unassuming watchmaker named Anton, whose modest shop most passersby overlooked entirely.", th: "ในตรอกแคบๆ หลังย่านเมืองเก่า มีช่างซ่อมนาฬิกาผู้ถ่อมตัวคนหนึ่งชื่ออันตัน ซึ่งร้านเล็กๆ ของเขามักถูกคนเดินผ่านไปมามองข้ามไปโดยสิ้นเชิง" },
          { en: "Never had anyone suspected that behind his quiet, forthright manner lay a man once celebrated across Europe for restoring the rarest of antique clocks.", th: "ไม่เคยมีใครสงสัยเลยว่าเบื้องหลังกิริยาที่เงียบขรึมและตรงไปตรงมาของเขา คือชายผู้เคยโด่งดังไปทั่วยุโรปในการซ่อมนาฬิกาโบราณที่หายากที่สุด" },
          { en: "One rainy evening, a young woman named Clara entered, carrying a shattered pocket watch that had belonged to her late grandfather.", th: "เย็นวันฝนตกวันหนึ่ง หญิงสาวชื่อคลาร่าเดินเข้ามาในร้าน พร้อมกับนาฬิกาพกที่แตกหักซึ่งเคยเป็นของปู่ผู้ล่วงลับของเธอ" },
          { en: "With visceral grief still etched on her face, she candidly admitted that three other repairmen had already turned her away, calling the watch beyond saving.", th: "ด้วยความโศกเศร้าที่ฝังลึกจากภายในยังปรากฏชัดบนใบหน้าของเธอ เธอยอมรับอย่างตรงไปตรงมาว่าถูกช่างซ่อมอีกสามคนปฏิเสธไปแล้ว โดยบอกว่านาฬิกาเรือนนี้ไม่มีทางซ่อมได้อีก" },
          { en: "Rarely does such despair move Anton, yet something about her wistful expression reminded him of his own grandmother's kitchen clock, silent since the war.", th: "แทบไม่มีความสิ้นหวังใดสะเทือนใจอันตันได้ แต่สีหน้าที่ครุ่นคิดถึงอดีตอย่างเศร้าของเธอกลับทำให้เขานึกถึงนาฬิกาในครัวของยายตนเองที่เงียบเสียงมาตั้งแต่สงคราม" },
          { en: "He spent the next three weeks in an introspective silence, disassembling gears so minuscule that a single sneeze could scatter a decade of craftsmanship across the floor.", th: "เขาใช้เวลาสามสัปดาห์ต่อมาอยู่กับความเงียบที่ใคร่ครวญภายใน ค่อยๆ ถอดชิ้นส่วนเฟืองที่เล็กจิ๋วจนแค่จามครั้งเดียวก็อาจทำให้งานฝีมือนับสิบปีกระจัดกระจายไปทั่วพื้น" },
          { en: "Not only did he replace the shattered mainspring, but he also engraved, almost invisibly, Clara's grandfather's initials beneath the hidden casing.", th: "เขาไม่เพียงเปลี่ยนสปริงหลักที่แตกหักเท่านั้น แต่ยังแกะสลักอักษรย่อชื่อของปู่คลาร่าไว้อย่างแนบเนียนใต้ฝาปิดที่ซ่อนอยู่ด้วย" },
          { en: "When Clara returned, she was ambivalent about even hoping, half-expecting only fragments of what she had lost.", th: "เมื่อคลาร่ากลับมา เธอรู้สึกลังเลว่าจะหวังดีหรือไม่ เพราะแอบคาดหวังไว้เพียงครึ่งใจว่าจะได้เห็นแค่เศษซากของสิ่งที่เธอสูญเสียไป" },
          { en: "Little did she know that the watch would tick again, its hands sweeping forward as though no time had ever been lost at all.", th: "เธอไม่รู้เลยว่านาฬิกาเรือนนั้นจะเดินเครื่องได้อีกครั้ง เข็มนาฬิกาหมุนไปข้างหน้าราวกับว่าไม่เคยมีเวลาสูญหายไปเลย" },
          { en: "The moment was so poignant that Clara wept openly in the tiny shop, clutching the watch as though it were her grandfather's very hand.", th: "ช่วงเวลานั้นสะเทือนใจจนคลาร่าร้องไห้ออกมาอย่างเปิดเผยในร้านเล็กๆ นั้น กอดนาฬิกาไว้แน่นราวกับมันคือมือของปู่เธอเอง" },
          { en: "When she tried to pay him triple his usual fee, Anton refused, offering only an eloquent smile and the quiet remark that some debts are better left uncollected.", th: "เมื่อเธอพยายามจ่ายเงินให้เขาสามเท่าของค่าซ่อมปกติ อันตันปฏิเสธ พร้อมยิ้มอย่างมีเสน่ห์และพูดเบาๆ ว่าหนี้บางอย่างปล่อยให้ค้างไว้ดีกว่า" },
          { en: "News of the unassuming watchmaker's gift eventually travelled far beyond the narrow alley, though he himself remained just as quietly forthright as before.", th: "ในที่สุดข่าวเรื่องพรสวรรค์ของช่างซ่อมนาฬิกาผู้ถ่อมตัวคนนี้ก็แพร่ไปไกลเกินกว่าตรอกแคบๆ นั้น แม้ตัวเขาเองจะยังคงเงียบขรึมและตรงไปตรงมาเหมือนเดิม" }
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
          { en: "The government's failure to address the crisis led to widespread criticism.", th: "ความล้มเหลวของรัฐบาลในการจัดการวิกฤตนำไปสู่การวิพากษ์วิจารณ์อย่างกว้างขวาง", highlight: "The government's failure to address the crisis" },
          { en: "Her sudden resignation shocked the entire department.", th: "การลาออกอย่างกะทันหันของเธอสร้างความตกใจให้กับทั้งแผนก", highlight: "Her sudden resignation" },
          { en: "The rapid deterioration of urban infrastructure has alarmed city planners.", th: "การเสื่อมโทรมอย่างรวดเร็วของโครงสร้างพื้นฐานในเมืองสร้างความกังวลให้กับนักวางผังเมือง", highlight: "The rapid deterioration of urban infrastructure" },
          { en: "An increase in automation has fundamentally altered the labor market.", th: "การเพิ่มขึ้นของระบบอัตโนมัติได้เปลี่ยนแปลงตลาดแรงงานอย่างถึงรากถึงโคน", highlight: "An increase in automation" }
        ]
      },
      vocabulary: [
        { en: "ramification", th: "ผลกระทบที่ตามมาซึ่งมักซับซ้อน", example: "The ramifications of the policy will be felt for decades.", exampleTh: "ผลกระทบที่ตามมาของนโยบายนี้จะส่งผลต่อเนื่องไปอีกหลายทศวรรษ" },
        { en: "paradigm", th: "กรอบความคิดหรือแบบแผนหลัก", example: "The discovery represented a paradigm shift in modern physics.", exampleTh: "การค้นพบนี้ถือเป็นการเปลี่ยนกรอบความคิดครั้งสำคัญในวงการฟิสิกส์สมัยใหม่" },
        { en: "dichotomy", th: "ความขัดแย้งแบบสองขั้วหรือการแบ่งเป็นสองส่วน", example: "There is a false dichotomy between economic growth and environmental protection.", exampleTh: "การมองว่าการเติบโตทางเศรษฐกิจกับการอนุรักษ์สิ่งแวดล้อมต้องขัดแย้งกันเสมอนั้นเป็นความขัดแย้งแบบสองขั้วที่ผิดพลาด" },
        { en: "empirical", th: "เชิงประจักษ์ อ้างอิงจากข้อมูลจริง", example: "The theory lacks empirical evidence to support it.", exampleTh: "ทฤษฎีนี้ขาดหลักฐานเชิงประจักษ์มาสนับสนุน" },
        { en: "ubiquitous", th: "พบเห็นได้ทั่วไปทุกที่", example: "Smartphones have become ubiquitous in modern society.", exampleTh: "สมาร์ตโฟนกลายเป็นสิ่งที่พบเห็นได้ทั่วไปในสังคมยุคใหม่" },
        { en: "discern", th: "แยกแยะ มองเห็นความแตกต่างอย่างละเอียด", example: "It can be difficult to discern fact from opinion in the media.", exampleTh: "บางครั้งเป็นเรื่องยากที่จะแยกแยะข้อเท็จจริงออกจากความคิดเห็นในสื่อ" },
        { en: "epitomize", th: "เป็นตัวอย่างที่ชัดเจนที่สุดของบางสิ่ง", example: "Her work ethic epitomizes what it means to be dedicated.", exampleTh: "จรรยาบรรณการทำงานของเธอเป็นตัวอย่างที่ชัดเจนที่สุดของความทุ่มเท" },
        { en: "connotation", th: "ความหมายแฝงหรือนัยที่สื่อ", example: "The word 'cheap' carries a negative connotation compared to 'affordable'.", exampleTh: "คำว่า 'cheap' มีความหมายแฝงในเชิงลบเมื่อเทียบกับคำว่า 'affordable'" },
        { en: "juxtapose", th: "นำมาวางเทียบกันเพื่อเปรียบต่าง", example: "The exhibit juxtaposes traditional art with digital installations.", exampleTh: "นิทรรศการนี้นำศิลปะดั้งเดิมมาวางเทียบกับงานติดตั้งดิจิทัล" }
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
      story: {
        title: "นักวิทยาศาสตร์ผู้ท้าทายกรอบความคิดเดิม",
        sentences: [
          { en: "Dr. Elena Voss had spent fifteen years studying a phenomenon that most of her colleagues dismissed as statistical noise.", th: "ดร. เอเลนา วอสส์ใช้เวลาสิบห้าปีศึกษาปรากฏการณ์หนึ่งที่เพื่อนร่วมงานส่วนใหญ่ปัดตกว่าเป็นเพียงความคลาดเคลื่อนทางสถิติ" },
          { en: "The prevailing paradigm in her field held, unequivocally, that the anomaly she kept observing simply could not exist.", th: "กรอบความคิดหลักในสาขาของเธอยืนยันอย่างชัดเจนไม่มีข้อกังขาว่าความผิดปกติที่เธอสังเกตเห็นซ้ำแล้วซ้ำเล่านั้นไม่มีทางเกิดขึ้นได้จริง" },
          { en: "Her discernment, however, told her otherwise: the empirical data, however inconvenient, could not simply be juxtaposed with theory and dismissed.", th: "แต่การมองแยกแยะอย่างเฉียบคมของเธอกลับบอกเป็นอย่างอื่น ข้อมูลเชิงประจักษ์ ไม่ว่าจะสร้างความลำบากใจเพียงใด ก็ไม่อาจนำไปวางเทียบกับทฤษฎีแล้วปัดทิ้งไปเฉยๆ ได้" },
          { en: "The ramifications of publishing her findings were not lost on her; a false step could epitomize career suicide in a field notoriously hostile to dissent.", th: "เธอตระหนักดีถึงผลกระทบที่จะตามมาจากการตีพิมพ์ผลการค้นพบนี้ ก้าวพลาดเพียงครั้งเดียวอาจเป็นตัวอย่างที่ชัดเจนที่สุดของการฆ่าตัวตายทางอาชีพในวงการที่ขึ้นชื่อว่าไม่ยอมรับความเห็นต่าง" },
          { en: "Still, she submitted the paper, fully aware that the word 'anomaly' carried a dismissive connotation she would need to overcome sentence by sentence.", th: "กระนั้นเธอก็ยังส่งบทความไปตีพิมพ์ โดยรู้ดีว่าคำว่า 'ความผิดปกติ' มีความหมายแฝงในเชิงดูแคลนที่เธอต้องเอาชนะให้ได้ทีละประโยค" },
          { en: "For months, ubiquitous rejection letters piled up on her desk, each one echoing the same tired dichotomy: either she was wrong, or the entire field was.", th: "หลายเดือนที่จดหมายปฏิเสธซึ่งพบเจอได้ทั่วไปกองอยู่บนโต๊ะทำงานของเธอ แต่ละฉบับสะท้อนความขัดแย้งแบบสองขั้วแบบเดิมๆ ว่าไม่เธอผิด ก็ต้องเป็นทั้งวงการที่ผิด" },
          { en: "Then, quite unexpectedly, a young researcher in Osaka replicated her results using an entirely different method.", th: "แล้วอย่างไม่คาดคิด นักวิจัยหนุ่มคนหนึ่งในโอซาก้าก็ทำการทดลองซ้ำและได้ผลลัพธ์เดียวกันโดยใช้วิธีที่แตกต่างไปโดยสิ้นเชิง" },
          { en: "Word of the replication spread quickly, and what had once been ridiculed began, almost overnight, to look like the beginning of a genuine paradigm shift.", th: "ข่าวการทดลองซ้ำแพร่กระจายไปอย่างรวดเร็ว และสิ่งที่เคยถูกเยาะเย้ยก็เริ่มดูราวกับเป็นจุดเริ่มต้นของการเปลี่ยนกรอบความคิดครั้งใหญ่อย่างแท้จริงในชั่วข้ามคืน" },
          { en: "Elena's fifteen years of quiet, stubborn observation now epitomized exactly the kind of patience the discipline claimed, in theory, to value.", th: "การสังเกตอย่างเงียบๆ และดื้อรั้นตลอดสิบห้าปีของเอเลนากลายเป็นตัวอย่างที่ชัดเจนที่สุดของความอดทนแบบที่วงการนี้อ้างว่ายึดถือในทางทฤษฎี" },
          { en: "At the conference where she finally presented her work to a packed hall, she resisted the temptation to gloat.", th: "ในงานประชุมวิชาการที่เธอได้นำเสนอผลงานต่อหน้าห้องประชุมที่แน่นขนัดในที่สุด เธออดใจไม่ยอมพูดจาโอ้อวดความสำเร็จของตน" },
          { en: "She simply reminded the audience that every paradigm, however ubiquitous it seems today, was once someone's inconvenient anomaly.", th: "เธอเพียงเตือนผู้ฟังว่ากรอบความคิดทุกอย่าง ไม่ว่าจะดูเป็นเรื่องธรรมดาสามัญเพียงใดในวันนี้ ครั้งหนึ่งก็เคยเป็นความผิดปกติที่สร้างความลำบากใจให้ใครสักคนมาก่อน" }
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
          { en: "Arguably, the policy has done more harm than good.", th: "อาจกล่าวได้ว่านโยบายนี้สร้างความเสียหายมากกว่าประโยชน์", highlight: "Arguably" },
          { en: "It could be said that the reform, while well-intentioned, was poorly executed.", th: "อาจกล่าวได้ว่าการปฏิรูปครั้งนี้ แม้จะมีเจตนาดี แต่กลับดำเนินการได้ไม่ดีนัก", highlight: "It could be said that" },
          { en: "Notwithstanding these concerns, the benefits appear to outweigh the risks.", th: "แม้จะมีข้อกังวลเหล่านี้ แต่ผลประโยชน์ดูเหมือนจะมีน้ำหนักมากกว่าความเสี่ยง", highlight: "Notwithstanding these concerns" },
          { en: "That said, one cannot ignore the mounting evidence to the contrary.", th: "กระนั้นก็ตาม เราไม่อาจมองข้ามหลักฐานที่เพิ่มขึ้นซึ่งขัดแย้งกับเรื่องนี้ได้", highlight: "That said" }
        ]
      },
      vocabulary: [
        { en: "arguably", th: "อาจกล่าวได้ว่า ใช้แสดงความเห็นอย่างมีเหตุผลรองรับ", example: "This is arguably the most important decision of her career.", exampleTh: "นี่อาจกล่าวได้ว่าเป็นการตัดสินใจที่สำคัญที่สุดในอาชีพของเธอ" },
        { en: "ostensibly", th: "ดูเหมือนว่า ผิวเผิน อาจไม่ใช่ความจริงทั้งหมด", example: "The meeting was ostensibly about budget cuts, but really about restructuring.", exampleTh: "การประชุมครั้งนี้ดูเหมือนจะเกี่ยวกับการตัดงบประมาณ แต่จริงๆ แล้วเป็นเรื่องการปรับโครงสร้างองค์กร" },
        { en: "compelling", th: "น่าเชื่อถือ ชักจูงใจได้อย่างมีพลัง", example: "She presented a compelling argument for renewable energy.", exampleTh: "เธอนำเสนอข้อโต้แย้งที่น่าเชื่อถืออย่างมากเกี่ยวกับพลังงานหมุนเวียน" },
        { en: "fallacy", th: "ความเข้าใจผิดเชิงตรรกะ", example: "It's a common fallacy that more work always means more productivity.", exampleTh: "เป็นความเข้าใจผิดที่พบบ่อยว่าทำงานมากขึ้นย่อมหมายถึงผลผลิตที่มากขึ้นเสมอ" },
        { en: "plausible", th: "เป็นไปได้อย่างมีเหตุผล", example: "His explanation, though unusual, seemed entirely plausible.", exampleTh: "คำอธิบายของเขาแม้จะแปลกแต่ก็ดูเป็นไปได้อย่างมีเหตุผลอย่างสิ้นเชิง" },
        { en: "underscore", th: "เน้นย้ำความสำคัญ", example: "The report underscores the urgency of climate action.", exampleTh: "รายงานนี้เน้นย้ำถึงความเร่งด่วนของการดำเนินการด้านสภาพภูมิอากาศ" },
        { en: "corroborate", th: "ยืนยันสนับสนุนด้วยหลักฐานอื่น", example: "New evidence corroborates the witness's account.", exampleTh: "หลักฐานใหม่ยืนยันสนับสนุนคำให้การของพยาน" },
        { en: "refute", th: "หักล้างด้วยเหตุผลหรือหลักฐาน", example: "The scientist refuted the claims with data from her study.", exampleTh: "นักวิทยาศาสตร์หักล้างข้อกล่าวอ้างด้วยข้อมูลจากงานวิจัยของเธอ" },
        { en: "unequivocally", th: "อย่างชัดเจนไม่มีข้อกังขา", example: "She unequivocally denied any wrongdoing.", exampleTh: "เธอปฏิเสธการกระทำผิดใดๆ อย่างชัดเจนไม่มีข้อกังขา" }
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
      story: {
        title: "พ่อค้าผู้ขายคำพูด",
        sentences: [
          { en: "Bertrand had built an entire career on a single skill: the ability to make even the flimsiest idea sound, arguably, unassailable.", th: "เบอร์แทรนด์สร้างอาชีพทั้งหมดของตนขึ้นจากทักษะเพียงอย่างเดียว คือความสามารถในการทำให้แม้แต่ความคิดที่อ่อนแอที่สุดฟังดูอาจกล่าวได้ว่าไม่อาจโต้แย้งได้เลย" },
          { en: "At the town hall meeting, he stood to address a crowd already unequivocally opposed to the new highway project.", th: "ในที่ประชุมสภาเมือง เขาลุกขึ้นพูดต่อหน้าฝูงชนที่คัดค้านโครงการทางหลวงใหม่อย่างชัดเจนไม่มีข้อกังขาอยู่แล้ว" },
          { en: "It could be said, he began, that progress always demands some sacrifice -- and this, he insisted, was a remarkably small one.", th: "เขาเริ่มต้นด้วยการกล่าวว่า อาจกล่าวได้ว่าความก้าวหน้าย่อมต้องแลกมาด้วยการเสียสละบางอย่างเสมอ และสิ่งนี้ เขายืนกรานว่าเป็นการเสียสละที่เล็กน้อยอย่างน่าประหลาดใจ" },
          { en: "Ostensibly presenting neutral facts, he skilfully underscored only the figures that supported his employer's case.", th: "ดูเหมือนเขาจะนำเสนอข้อเท็จจริงอย่างเป็นกลาง แต่แท้จริงแล้วเขาเน้นย้ำเฉพาะตัวเลขที่สนับสนุนฝ่ายนายจ้างของเขาอย่างชำนาญ" },
          { en: "Notwithstanding the residents' concerns about noise and traffic, he offered statistic after statistic, each one plausible enough to quiet the loudest objections.", th: "แม้จะมีความกังวลของชาวบ้านเรื่องเสียงรบกวนและการจราจร เขาก็นำเสนอสถิติแล้วสถิติเล่า แต่ละตัวก็ดูเป็นไปได้อย่างมีเหตุผลมากพอที่จะทำให้เสียงคัดค้านที่ดังที่สุดเงียบลง" },
          { en: "An elderly woman named Mrs. Alvarez, however, was not so easily persuaded by his compelling rhetoric.", th: "แต่หญิงชราคนหนึ่งชื่อคุณนายอัลวาเรซกลับไม่ถูกโน้มน้าวได้ง่ายๆ ด้วยวาทศิลป์อันน่าเชื่อถือของเขา" },
          { en: "She stood, corroborating none of his figures, and instead read aloud from an independent engineering report that directly refuted his central claim.", th: "เธอลุกขึ้นยืน โดยไม่ยืนยันตัวเลขใดๆ ของเขาเลย แต่กลับอ่านออกเสียงรายงานทางวิศวกรรมอิสระที่หักล้างข้อกล่าวอ้างหลักของเขาโดยตรง" },
          { en: "The fallacy at the heart of his presentation, she argued, was assuming that residents would trade their peace and quiet for numbers on a slide.", th: "เธอโต้แย้งว่าความเข้าใจผิดเชิงตรรกะที่อยู่ในใจกลางการนำเสนอของเขาคือการสมมติว่าชาวบ้านจะยอมแลกความสงบสุขของตนกับตัวเลขบนสไลด์" },
          { en: "That said, she conceded, the highway might genuinely shorten commutes for thousands -- a point Bertrand had, to his credit, not entirely fabricated.", th: "กระนั้นก็ตาม เธอยอมรับว่าทางหลวงนี้อาจย่นระยะเวลาเดินทางให้คนนับพันได้จริง ซึ่งเป็นประเด็นที่เบอร์แทรนด์ไม่ได้กุขึ้นมาทั้งหมดเสียทีเดียว" },
          { en: "By the meeting's end, the vote was postponed, and Bertrand, watching his tidy narrative unravel, realized that even the most compelling spin cannot indefinitely outrun the truth.", th: "เมื่อการประชุมจบลง การลงคะแนนถูกเลื่อนออกไป และเบอร์แทรนด์ที่มองเห็นเรื่องราวอันเรียบร้อยของตนคลี่คลายออกก็ตระหนักว่าแม้แต่การพูดโน้มน้าวที่น่าเชื่อถือที่สุดก็ไม่อาจหนีความจริงไปได้ตลอดกาล" }
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
          { en: "If I had taken that job offer, I would be living in Singapore now.", th: "ถ้าฉันตอบรับข้อเสนองานนั้น ตอนนี้ฉันคงอาศัยอยู่ที่สิงคโปร์แล้ว", highlight: "If I had taken that job offer, I would be living" },
          { en: "If she weren't so risk-averse, she would have invested in the startup years ago.", th: "ถ้าเธอไม่ระมัดระวังความเสี่ยงมากขนาดนี้ เธอคงลงทุนในสตาร์ทอัพนั้นไปหลายปีแล้ว", highlight: "If she weren't so risk-averse, she would have invested" },
          { en: "Had he studied harder, he wouldn't be struggling with this exam now.", th: "ถ้าเขาตั้งใจเรียนมากกว่านี้ ตอนนี้เขาคงไม่ต้องดิ้นรนกับข้อสอบนี้", highlight: "Had he studied harder, he wouldn't be struggling" },
          { en: "If the company had invested in R&D earlier, it would be leading the market today.", th: "ถ้าบริษัทลงทุนด้านการวิจัยและพัฒนาตั้งแต่เนิ่นๆ วันนี้บริษัทคงเป็นผู้นำตลาดไปแล้ว", highlight: "If the company had invested in R&D earlier, it would be leading" }
        ]
      },
      vocabulary: [
        { en: "contingent", th: "ขึ้นอยู่กับเงื่อนไขบางอย่าง", example: "Her attendance is contingent on getting time off work.", exampleTh: "การเข้าร่วมของเธอขึ้นอยู่กับว่าจะได้ลาหยุดงานหรือไม่" },
        { en: "hypothetical", th: "เชิงสมมติ ยังไม่เกิดขึ้นจริง", example: "Let's consider a hypothetical scenario for a moment.", exampleTh: "ลองพิจารณาสถานการณ์สมมติสักครู่หนึ่ง" },
        { en: "retrospect", th: "การมองย้อนกลับไปในอดีต", example: "In retrospect, quitting that job was the best decision I ever made.", exampleTh: "เมื่อมองย้อนกลับไป การลาออกจากงานนั้นคือการตัดสินใจที่ดีที่สุดที่ฉันเคยทำ" },
        { en: "foresight", th: "การมองการณ์ไกลหรือคาดการณ์ล่วงหน้า", example: "Her foresight in diversifying investments saved the company.", exampleTh: "การมองการณ์ไกลของเธอในการกระจายการลงทุนช่วยกอบกู้บริษัทไว้ได้" },
        { en: "presuppose", th: "สันนิษฐานไว้ล่วงหน้าโดยไม่ได้พิสูจน์", example: "The question presupposes that the policy has already failed.", exampleTh: "คำถามนี้สันนิษฐานไว้ล่วงหน้าว่านโยบายนี้ล้มเหลวไปแล้ว" },
        { en: "counterfactual", th: "สมมติฐานที่ตรงข้ามกับสิ่งที่เกิดขึ้นจริง", example: "Historians often debate counterfactual scenarios, like what if a key battle had gone differently.", exampleTh: "นักประวัติศาสตร์มักถกเถียงกันเรื่องสมมติฐานที่ตรงข้ามกับความจริง เช่น หากยุทธการสำคัญครั้งหนึ่งจบลงต่างไปจากเดิม" },
        { en: "inadvertently", th: "โดยไม่ได้ตั้งใจ", example: "He inadvertently revealed the surprise party.", exampleTh: "เขาเผลอเปิดเผยงานเลี้ยงเซอร์ไพรส์โดยไม่ได้ตั้งใจ" },
        { en: "hindsight", th: "การรู้แจ้งหลังเหตุการณ์ผ่านไปแล้ว", example: "Hindsight is always 20/20, but at the time the decision made sense.", exampleTh: "การมองย้อนหลังมักชัดเจนเสมอ แต่ในตอนนั้นการตัดสินใจนี้ก็สมเหตุสมผลดี" },
        { en: "feasible", th: "เป็นไปได้ในทางปฏิบัติ", example: "Is it feasible to complete the project within a month?", exampleTh: "เป็นไปได้ในทางปฏิบัติหรือไม่ที่จะทำโครงการนี้ให้เสร็จภายในหนึ่งเดือน" }
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
      story: {
        title: "ถ้าเพียงแต่...",
        sentences: [
          { en: "Every town has someone like Mr. Whitfield, the retired postmaster who spent his afternoons on the same park bench, quietly turning over sentences that all began with 'if only.'", th: "ทุกเมืองย่อมมีใครสักคนแบบคุณไวท์ฟิลด์ อดีตนายไปรษณีย์ที่เกษียณแล้ว ผู้ใช้เวลาบ่ายๆ นั่งอยู่บนม้านั่งในสวนสาธารณะตัวเดิม ครุ่นคิดถึงประโยคที่มักขึ้นต้นด้วยคำว่า 'ถ้าเพียงแต่'" },
          { en: "Had he accepted the transfer to the capital forty years earlier, he was fairly certain he would be a wealthy man by now.", th: "ถ้าเขายอมรับการย้ายไปทำงานในเมืองหลวงเมื่อสี่สิบปีก่อน เขาค่อนข้างมั่นใจว่าตอนนี้เขาคงเป็นคนร่ำรวยไปแล้ว" },
          { en: "It was, admittedly, a hypothetical he had rehearsed so many times that it had hardened into something resembling memory itself.", th: "ต้องยอมรับว่ามันเป็นเพียงสมมติฐานที่เขาซักซ้อมในใจมานับครั้งไม่ถ้วนจนแข็งตัวกลายเป็นอะไรบางอย่างที่คล้ายความทรงจำจริงๆ" },
          { en: "One afternoon, a young journalist named Priya sat beside him, curious about the postmaster everyone in town seemed to know only by reputation.", th: "บ่ายวันหนึ่ง นักข่าวสาวคนหนึ่งชื่อพริยาเดินมานั่งข้างเขา อยากรู้จักนายไปรษณีย์คนนี้ที่คนทั้งเมืองรู้จักเพียงแค่ชื่อเสียงเลื่องลือ" },
          { en: "He inadvertently let slip the entire counterfactual life he had constructed -- the promotion he refused, the city apartment he never rented, the wife he presupposed he might have met there instead.", th: "เขาเผลอหลุดปากเล่าชีวิตสมมติที่ตรงข้ามกับความจริงทั้งหมดที่เขาสร้างขึ้นในใจ ทั้งตำแหน่งที่เขาปฏิเสธ อพาร์ตเมนต์ในเมืองที่ไม่เคยเช่า และภรรยาที่เขาสันนิษฐานไว้ล่วงหน้าว่าอาจได้พบที่นั่นแทน" },
          { en: "Priya listened, then asked gently whether, in hindsight, he actually regretted staying, or whether the fantasy was simply more comfortable than an honest answer.", th: "พริยาฟังอย่างตั้งใจ แล้วถามอย่างนุ่มนวลว่า เมื่อมองย้อนกลับไปแล้ว เขาเสียใจจริงๆ ที่อยู่ที่นี่ต่อไปหรือไม่ หรือว่าจินตนาการนี้เพียงแค่สบายใจกว่าคำตอบที่ตรงไปตรงมา" },
          { en: "Contingent, she suggested, on nothing but his own willingness to admit it, the truth might be gentler than the story he had told himself for decades.", th: "เธอบอกว่าความจริงนั้นขึ้นอยู่กับเพียงความเต็มใจของตัวเขาเองที่จะยอมรับมันเท่านั้น และความจริงอาจอ่อนโยนกว่าเรื่องราวที่เขาเล่าให้ตัวเองฟังมาตลอดหลายทศวรรษ" },
          { en: "Mr. Whitfield fell silent, surprised that it had never once occurred to him that a modest, unremarkable life might have been, in its own quiet way, the more feasible kind of happiness.", th: "คุณไวท์ฟิลด์เงียบไป ประหลาดใจว่าเขาไม่เคยนึกถึงเลยสักครั้งว่าชีวิตที่เรียบง่ายไม่หวือหวาอาจเป็นความสุขแบบที่เป็นไปได้ในทางปฏิบัติมากกว่าในแบบเงียบๆ ของมันเอง" },
          { en: "If he had chased that other life, he mused aloud, he might never have known his grandchildren the way he did now, running toward him across this very park each Sunday.", th: "เขาพูดออกมาลอยๆ ว่าถ้าเขาไล่ตามชีวิตอีกแบบนั้น เขาอาจไม่มีวันได้รู้จักหลานๆ ของตัวเองอย่างที่เป็นอยู่ตอนนี้ ที่วิ่งเข้ามาหาเขาข้ามสวนสาธารณะแห่งนี้ทุกวันอาทิตย์" },
          { en: "Priya smiled and closed her notebook, realizing that the most honest story on that park bench was never the counterfactual one she had come looking for.", th: "พริยายิ้มแล้วปิดสมุดบันทึกของเธอ ตระหนักว่าเรื่องราวที่จริงใจที่สุดบนม้านั่งสวนสาธารณะนั้นไม่เคยเป็นเรื่องสมมติที่ตรงข้ามความจริงที่เธอมาตามหาตั้งแต่แรกเลย" }
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
          { en: "We hit a snag during the final testing phase, so the launch has been delayed.", th: "เราเจออุปสรรคโดยไม่คาดคิดในช่วงทดสอบขั้นสุดท้าย ทำให้การเปิดตัวต้องล่าช้าออกไป", highlight: "hit a snag" },
          { en: "Let's iron out the details before we sign the contract.", th: "มาแก้ไขรายละเอียดให้เรียบร้อยก่อนที่เราจะเซ็นสัญญากัน", highlight: "iron out the details" },
          { en: "To get the ball rolling, I'll send out the first draft this afternoon.", th: "เพื่อเริ่มต้นดำเนินการ ฉันจะส่งร่างแรกออกไปในช่วงบ่ายนี้", highlight: "get the ball rolling" },
          { en: "We need to weigh up the pros and cons before making a final decision.", th: "เราต้องชั่งน้ำหนักข้อดีข้อเสียก่อนที่จะตัดสินใจขั้นสุดท้าย", highlight: "weigh up the pros and cons" }
        ]
      },
      vocabulary: [
        { en: "hit a snag", th: "เจออุปสรรคโดยไม่คาดคิด", example: "The renovation hit a snag when they found structural damage.", exampleTh: "การปรับปรุงบ้านเจออุปสรรคโดยไม่คาดคิดเมื่อพบความเสียหายเชิงโครงสร้าง" },
        { en: "iron out", th: "แก้ไขปัญหาให้เรียบร้อย", example: "We need to iron out a few details before the merger is finalized.", exampleTh: "เราต้องแก้ไขรายละเอียดบางอย่างให้เรียบร้อยก่อนที่การควบรวมกิจการจะเสร็จสมบูรณ์" },
        { en: "get the ball rolling", th: "เริ่มต้นดำเนินการ", example: "Let's get the ball rolling on the new marketing campaign.", exampleTh: "มาเริ่มต้นดำเนินการแคมเปญการตลาดใหม่กันเถอะ" },
        { en: "on the same page", th: "เข้าใจตรงกัน มีความเห็นสอดคล้องกัน", example: "Before we proceed, let's make sure everyone is on the same page.", exampleTh: "ก่อนที่เราจะดำเนินการต่อ มาให้แน่ใจกันก่อนว่าทุกคนเข้าใจตรงกัน" },
        { en: "cut corners", th: "ลดขั้นตอนหรือคุณภาพเพื่อประหยัดเวลาหรือเงิน มักเชิงลบ", example: "The contractor cut corners, and the building's quality suffered.", exampleTh: "ผู้รับเหมาลดขั้นตอนเพื่อประหยัด ทำให้คุณภาพของอาคารได้รับผลกระทบ" },
        { en: "bite the bullet", th: "ยอมเผชิญกับสิ่งที่ยากลำบากอย่างกล้าหาญ", example: "I finally bit the bullet and confronted my manager about the issue.", exampleTh: "ในที่สุดฉันก็ยอมเผชิญหน้าอย่างกล้าหาญและพูดคุยกับหัวหน้าเรื่องปัญหานี้" },
        { en: "jump the gun", th: "ทำอะไรเร็วเกินไปก่อนถึงเวลาที่เหมาะสม", example: "Don't jump the gun; we haven't received official approval yet.", exampleTh: "อย่าทำอะไรเร็วเกินไป เรายังไม่ได้รับการอนุมัติอย่างเป็นทางการเลย" },
        { en: "weigh up", th: "ชั่งน้ำหนักข้อดีข้อเสีย", example: "She weighed up her options before accepting the offer.", exampleTh: "เธอชั่งน้ำหนักตัวเลือกต่างๆ ก่อนที่จะตอบรับข้อเสนอ" },
        { en: "stem from", th: "มีต้นตอมาจาก", example: "His anxiety seems to stem from years of workplace pressure.", exampleTh: "ความวิตกกังวลของเขาดูเหมือนจะมีต้นตอมาจากความกดดันในที่ทำงานหลายปี" }
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
      story: {
        title: "โครงการที่เกือบพัง",
        sentences: [
          { en: "When Marisol was handed the lead on the company's biggest project in years, she was determined to get the ball rolling within the very first week.", th: "เมื่อมาริโซลได้รับมอบหมายให้เป็นหัวหน้าโครงการที่ใหญ่ที่สุดของบริษัทในรอบหลายปี เธอตั้งใจแน่วแน่ที่จะเริ่มต้นดำเนินการภายในสัปดาห์แรกให้ได้" },
          { en: "Her enthusiasm, however, meant she jumped the gun on the supplier contracts before the legal team had finished their review.", th: "แต่ความกระตือรือร้นของเธอทำให้เธอทำอะไรเร็วเกินไปกับสัญญาซัพพลายเออร์ ก่อนที่ทีมกฎหมายจะตรวจสอบเสร็จ" },
          { en: "Predictably, the project hit a snag when one supplier quietly admitted they had cut corners on the quality of raw materials.", th: "อย่างที่คาดไว้ โครงการนี้เจออุปสรรคโดยไม่คาดคิดเมื่อซัพพลายเออร์รายหนึ่งยอมรับเงียบๆ ว่าลดขั้นตอนคุณภาพวัตถุดิบเพื่อประหยัด" },
          { en: "Marisol's team was clearly not on the same page about how to respond -- some wanted to switch suppliers immediately, others wanted to negotiate.", th: "ทีมของมาริโซลชัดเจนว่าเข้าใจไม่ตรงกันว่าจะตอบสนองอย่างไร บางคนอยากเปลี่ยนซัพพลายเออร์ทันที บางคนอยากเจรจาต่อรอง" },
          { en: "She spent an anxious weekend trying to weigh up whether switching suppliers so late would save the timeline or destroy it entirely.", th: "เธอใช้เวลาสุดสัปดาห์ด้วยความกังวลพยายามชั่งน้ำหนักว่าการเปลี่ยนซัพพลายเออร์ในช่วงสายขนาดนี้จะช่วยรักษาเส้นตายไว้ได้หรือจะทำลายมันไปเลย" },
          { en: "Her frustration, she later admitted, seemed to stem from her own earlier haste rather than any single supplier's dishonesty.", th: "ภายหลังเธอยอมรับว่าความหงุดหงิดของเธอดูเหมือนจะมีต้นตอมาจากความรีบร้อนของตัวเธอเองก่อนหน้านี้ มากกว่าความไม่ซื่อสัตย์ของซัพพลายเออร์รายใดรายหนึ่ง" },
          { en: "On Monday morning, she finally bit the bullet, called an emergency meeting, and laid out the situation with complete honesty.", th: "เช้าวันจันทร์ ในที่สุดเธอก็ยอมเผชิญหน้าอย่างกล้าหาญ เรียกประชุมฉุกเฉิน และเล่าสถานการณ์ทั้งหมดอย่างตรงไปตรงมา" },
          { en: "Together, the team spent the entire day trying to iron out a revised timeline that everyone could actually commit to.", th: "ทั้งทีมใช้เวลาทั้งวันพยายามแก้ไขตารางเวลาใหม่ให้เรียบร้อยจนทุกคนสามารถยึดมั่นได้จริง" },
          { en: "By the end of the week, the project was back on track, and Marisol had learned that being on the same page mattered far more than being first out of the gate.", th: "เมื่อสิ้นสัปดาห์ โครงการก็กลับเข้าสู่แผนเดิมได้อีกครั้ง และมาริโซลก็ได้เรียนรู้ว่าการเข้าใจตรงกันสำคัญกว่าการเป็นคนแรกที่เริ่มลงมือทำมากนัก" },
          { en: "The company's directors later remarked that no team ever gets everything right the first time -- the difference lies in how quickly they iron out their mistakes.", th: "ผู้บริหารบริษัทกล่าวในภายหลังว่าไม่มีทีมไหนทำทุกอย่างถูกต้องตั้งแต่ครั้งแรก ความแตกต่างอยู่ที่ว่าพวกเขาแก้ไขข้อผิดพลาดให้เรียบร้อยได้เร็วแค่ไหนต่างหาก" }
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
          { en: "The minister allegedly accepted bribes from the construction firm.", th: "รัฐมนตรีถูกกล่าวหาว่ารับสินบนจากบริษัทก่อสร้าง", highlight: "allegedly" },
          { en: "Sources close to the negotiation claim that a deal is imminent.", th: "แหล่งข่าวใกล้ชิดกับการเจรจาอ้างว่าข้อตกลงใกล้จะเกิดขึ้นแล้ว", highlight: "Sources close to the negotiation claim" },
          { en: "The company is said to be planning massive layoffs next quarter.", th: "มีการกล่าวกันว่าบริษัทกำลังวางแผนปลดพนักงานจำนวนมากในไตรมาสหน้า", highlight: "is said to be planning" },
          { en: "It is widely believed that the policy will be reversed within the year.", th: "เชื่อกันอย่างกว้างขวางว่านโยบายนี้จะถูกยกเลิกภายในปีนี้", highlight: "It is widely believed that" }
        ]
      },
      vocabulary: [
        { en: "sensationalism", th: "การนำเสนอข่าวแบบเกินจริงเพื่อดึงความสนใจ", example: "Critics accused the network of sensationalism rather than accurate reporting.", exampleTh: "นักวิจารณ์กล่าวหาว่าสถานีข่าวนี้เน้นการนำเสนอข่าวแบบเกินจริงมากกว่าการรายงานที่ถูกต้อง" },
        { en: "disinformation", th: "ข้อมูลเท็จที่จงใจเผยแพร่เพื่อหลอกลวง", example: "The report warned of a coordinated disinformation campaign.", exampleTh: "รายงานเตือนถึงการรณรงค์เผยแพร่ข้อมูลเท็จที่มีการประสานงานกัน" },
        { en: "partisan", th: "ฝักใฝ่ฝ่ายใดฝ่ายหนึ่งอย่างชัดเจน ไม่เป็นกลาง", example: "The article was criticized for being overtly partisan.", exampleTh: "บทความนี้ถูกวิจารณ์ว่าฝักใฝ่ฝ่ายใดฝ่ายหนึ่งอย่างชัดเจน" },
        { en: "insinuate", th: "พูดเป็นนัยในเชิงลบโดยไม่พูดตรงๆ", example: "The headline insinuated wrongdoing without any actual evidence.", exampleTh: "พาดหัวข่าวพูดเป็นนัยถึงการกระทำผิดโดยไม่มีหลักฐานใดๆ จริง" },
        { en: "loaded language", th: "ภาษาที่มีความหมายแฝงทางอารมณ์อย่างจงใจ", example: "The editorial was full of loaded language designed to provoke outrage.", exampleTh: "บทบรรณาธิการเต็มไปด้วยภาษาที่มีความหมายแฝงทางอารมณ์ซึ่งจงใจกระตุ้นความโกรธแค้น" },
        { en: "skew", th: "บิดเบือนหรือทำให้เอียงไปด้านใดด้านหนึ่ง", example: "Selective statistics can skew public perception of an issue.", exampleTh: "สถิติที่เลือกใช้อย่างมีอคติสามารถบิดเบือนการรับรู้ของสาธารณชนต่อประเด็นหนึ่งได้" },
        { en: "propaganda", th: "การโฆษณาชวนเชื่อเพื่อครอบงำความคิด", example: "The regime used propaganda to control public opinion.", exampleTh: "ระบอบการปกครองนี้ใช้การโฆษณาชวนเชื่อเพื่อควบคุมความคิดเห็นสาธารณะ" },
        { en: "spin", th: "การนำเสนอข้อมูลในมุมที่เป็นประโยชน์ต่อฝ่ายตน", example: "The press secretary tried to put a positive spin on the scandal.", exampleTh: "โฆษกฝ่ายสื่อพยายามนำเสนอเรื่องอื้อฉาวนี้ในมุมที่เป็นบวก" },
        { en: "tabloid", th: "หนังสือพิมพ์แนวข่าวฉาวหรือเร้าใจ มักไม่น่าเชื่อถือ", example: "The story first appeared in a tabloid known for exaggeration.", exampleTh: "เรื่องนี้ปรากฏครั้งแรกในหนังสือพิมพ์แนวข่าวฉาวที่ขึ้นชื่อเรื่องการพูดเกินจริง" }
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
      story: {
        title: "ข่าวที่ไม่มีใครกล้าเขียน",
        sentences: [
          { en: "Nadia had built her reputation as an investigative journalist by refusing to let a single unverified claim slip past her desk unchallenged.", th: "นาเดียสร้างชื่อเสียงในฐานะนักข่าวสายสืบสวนด้วยการไม่ยอมปล่อยให้ข้อกล่าวอ้างที่ยังไม่ได้รับการยืนยันแม้แต่ข้อเดียวผ่านโต๊ะทำงานของเธอไปโดยไม่ถูกตรวจสอบ" },
          { en: "When a rival tabloid ran a headline insinuating that a beloved local charity was secretly siphoning donations, she smelled something amiss.", th: "เมื่อหนังสือพิมพ์แนวข่าวฉาวคู่แข่งพาดหัวข่าวเป็นนัยว่ามูลนิธิการกุศลท้องถิ่นที่คนรักกำลังยักยอกเงินบริจาคอย่างลับๆ เธอก็รู้สึกว่ามีอะไรผิดปกติ" },
          { en: "The piece was riddled with loaded language, calling the charity's founder 'evasive' and 'suspiciously generous' without citing a single concrete figure.", th: "บทความชิ้นนั้นเต็มไปด้วยภาษาที่มีความหมายแฝงทางอารมณ์ เรียกผู้ก่อตั้งมูลนิธิว่า 'หลบเลี่ยง' และ 'ใจกว้างอย่างน่าสงสัย' โดยไม่มีการอ้างตัวเลขที่ชัดเจนแม้แต่ตัวเดียว" },
          { en: "Nadia soon discovered that the story had originated from a disgruntled former board member with an obvious partisan grudge against the current leadership.", th: "นาเดียพบในไม่ช้าว่าเรื่องนี้มีต้นตอมาจากอดีตกรรมการที่ไม่พอใจ และมีอคติฝักใฝ่ฝ่ายใดฝ่ายหนึ่งอย่างชัดเจนต่อฝ่ายบริหารชุดปัจจุบัน" },
          { en: "What troubled her most was how easily a single source's disinformation had been allowed to skew an entire community's perception overnight.", th: "สิ่งที่รบกวนใจเธอมากที่สุดคือการที่ข้อมูลเท็จจากแหล่งข่าวเพียงแหล่งเดียวสามารถบิดเบือนการรับรู้ของคนทั้งชุมชนได้ง่ายดายเพียงชั่วข้ามคืน" },
          { en: "She spent two weeks auditing the charity's financial records herself, refusing to rely on anyone else's spin, whether flattering or damning.", th: "เธอใช้เวลาสองสัปดาห์ตรวจสอบบัญชีการเงินของมูลนิธิด้วยตัวเอง โดยไม่ยอมพึ่งพาการนำเสนอในมุมมองของใครทั้งด้านดีและด้านร้าย" },
          { en: "Her eventual article was, by design, almost aggressively plain: no sensationalism, no propaganda, just verified numbers laid bare for readers to judge.", th: "บทความที่เธอเขียนออกมาในที่สุดนั้น จงใจให้เรียบง่ายอย่างเกือบจะดูแข็งกร้าว ไม่มีการนำเสนอข่าวเกินจริง ไม่มีการโฆษณาชวนเชื่อ มีเพียงตัวเลขที่ผ่านการตรวจสอบแล้วเปิดเผยให้ผู้อ่านตัดสินเอง" },
          { en: "Predictably, it generated far fewer clicks than the original sensational story, a fact that no longer surprised or discouraged her.", th: "อย่างที่คาดไว้ บทความนี้ได้ยอดคลิกน้อยกว่าเรื่องราวเกินจริงต้นฉบับมาก ซึ่งเป็นความจริงที่ไม่ทำให้เธอประหลาดใจหรือท้อแท้อีกต่อไป" },
          { en: "The charity's founder, vindicated, thanked her privately, though Nadia insisted she had done nothing more than her job demanded.", th: "ผู้ก่อตั้งมูลนิธิที่ได้รับการล้างมลทินขอบคุณเธอเป็นการส่วนตัว แม้นาเดียจะยืนยันว่าเธอไม่ได้ทำอะไรมากไปกว่าหน้าที่ที่งานของเธอเรียกร้อง" },
          { en: "Months later, when a journalism student asked for her one piece of advice, Nadia said simply: assume nothing is true until you have corroborated it yourself.", th: "หลายเดือนต่อมา เมื่อนักศึกษาวารสารศาสตร์คนหนึ่งขอคำแนะนำเพียงข้อเดียวจากเธอ นาเดียตอบง่ายๆ ว่า อย่าเชื่อว่าสิ่งใดเป็นจริงจนกว่าคุณจะยืนยันด้วยตัวเองแล้ว" }
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
          { en: "I would be grateful if you could assist me at your earliest convenience.", th: "ฉันจะรู้สึกขอบคุณอย่างยิ่งหากคุณสามารถช่วยเหลือฉันได้โดยเร็วที่สุด", highlight: "I would be grateful if you could assist me" },
          { en: "Could you help me out when you get a sec?", th: "ช่วยฉันหน่อยได้ไหมตอนที่ว่างนะ", highlight: "Could you help me out" },
          { en: "We regret to inform you that your application was unsuccessful.", th: "เราเสียใจที่ต้องแจ้งให้ทราบว่าใบสมัครของคุณไม่ผ่านการพิจารณา", highlight: "We regret to inform you" },
          { en: "Sorry, but you didn't get the job this time.", th: "ขอโทษนะ แต่รอบนี้คุณไม่ได้งานนี้", highlight: "you didn't get the job" }
        ]
      },
      vocabulary: [
        { en: "formality", th: "ความเป็นทางการ", example: "The ceremony was conducted with great formality.", exampleTh: "พิธีนี้จัดขึ้นด้วยความเป็นทางการอย่างมาก" },
        { en: "colloquialism", th: "คำพูดหรือสำนวนที่ใช้ในภาษาพูดทั่วไป ไม่เป็นทางการ", example: "Using too many colloquialisms in a business letter can seem unprofessional.", exampleTh: "การใช้คำพูดภาษาพูดมากเกินไปในจดหมายธุรกิจอาจดูไม่เป็นมืออาชีพ" },
        { en: "decorum", th: "ความเหมาะสมทางสังคม มารยาทที่ดี", example: "The judge insisted on strict decorum in the courtroom.", exampleTh: "ผู้พิพากษายืนกรานให้รักษามารยาทที่ดีอย่างเคร่งครัดในห้องพิจารณาคดี" },
        { en: "tact", th: "ความละมุนละม่อมในการพูดโดยไม่ทำให้ผู้อื่นขุ่นเคือง", example: "She handled the sensitive topic with remarkable tact.", exampleTh: "เธอจัดการกับประเด็นละเอียดอ่อนนี้ด้วยความละมุนละม่อมอย่างน่าทึ่ง" },
        { en: "faux pas", th: "ความผิดพลาดทางสังคมหรือมารยาท", example: "Bringing up salary at dinner was considered a major faux pas.", exampleTh: "การพูดถึงเรื่องเงินเดือนระหว่างมื้อค่ำถูกมองว่าเป็นความผิดพลาดทางมารยาทครั้งใหญ่" },
        { en: "idiosyncrasy", th: "ลักษณะเฉพาะตัวที่แปลกหรือไม่เหมือนใคร", example: "Every culture has its own idiosyncrasies when it comes to greetings.", exampleTh: "ทุกวัฒนธรรมมีลักษณะเฉพาะตัวที่แปลกไม่เหมือนใครเมื่อพูดถึงการทักทาย" },
        { en: "vernacular", th: "ภาษาพื้นถิ่นหรือภาษาที่ใช้ในชีวิตประจำวันของกลุ่มคนหนึ่ง", example: "The novel is written in the local vernacular, full of regional slang.", exampleTh: "นวนิยายเรื่องนี้เขียนด้วยภาษาพื้นถิ่น เต็มไปด้วยคำแสลงประจำภูมิภาค" },
        { en: "etiquette", th: "มารยาททางสังคม", example: "Business etiquette varies significantly from one country to another.", exampleTh: "มารยาททางธุรกิจแตกต่างกันอย่างมากในแต่ละประเทศ" },
        { en: "assimilate", th: "ปรับตัวกลมกลืนเข้ากับวัฒนธรรมหรือกลุ่มใหม่", example: "It took her years to fully assimilate into the new culture.", exampleTh: "เธอใช้เวลาหลายปีกว่าจะปรับตัวกลมกลืนเข้ากับวัฒนธรรมใหม่ได้อย่างสมบูรณ์" }
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
      story: {
        title: "ภาษาที่ไม่มีในพจนานุกรม",
        sentences: [
          { en: "When Kenji was posted to the London office, he assumed that fluent English alone would be enough to navigate the subtleties of his new workplace.", th: "เมื่อเคนจิถูกส่งไปประจำที่สำนักงานลอนดอน เขาคิดว่าแค่พูดภาษาอังกฤษได้คล่องก็เพียงพอแล้วสำหรับการรับมือกับความละเอียดอ่อนต่างๆ ในที่ทำงานใหม่ของเขา" },
          { en: "He quickly discovered that his British colleagues' relentless politeness concealed an entire vernacular of its own, one where 'that's an interesting idea' rarely meant approval.", th: "เขาค้นพบอย่างรวดเร็วว่าความสุภาพที่ไม่ลดละของเพื่อนร่วมงานชาวอังกฤษซ่อนภาษาเฉพาะกลุ่มของมันเองไว้ทั้งชุด ซึ่งคำว่า 'นั่นเป็นความคิดที่น่าสนใจนะ' แทบไม่เคยหมายถึงการเห็นด้วยเลย" },
          { en: "His first faux pas came during a team lunch, when he candidly criticized a colleague's proposal in front of the entire group, a directness admired back home.", th: "ความผิดพลาดทางมารยาทครั้งแรกของเขาเกิดขึ้นระหว่างมื้อกลางวันของทีม เมื่อเขาวิจารณ์ข้อเสนอของเพื่อนร่วมงานอย่างตรงไปตรงมาต่อหน้าทั้งกลุ่ม ซึ่งความตรงไปตรงมาแบบนี้เป็นที่ชื่นชมในบ้านเกิดของเขา" },
          { en: "The room fell into an uncomfortable silence, and Kenji sensed, too late, that he had violated some unspoken code of decorum.", th: "ห้องทั้งห้องเงียบลงอย่างอึดอัด และเคนจิรู้สึกได้ แม้จะสายไปแล้ว ว่าเขาได้ละเมิดกฎมารยาทที่ไม่มีใครพูดออกมาบางอย่าง" },
          { en: "A patient colleague later explained, with considerable tact, that criticism here was usually wrapped in layers of hedging and delivered privately rather than in a group setting.", th: "เพื่อนร่วมงานผู้อดทนคนหนึ่งอธิบายในภายหลังด้วยความละมุนละม่อมอย่างมากว่า ที่นี่การวิจารณ์มักถูกห่อหุ้มไว้ด้วยภาษาอ้อมหลายชั้นและมักพูดกันเป็นการส่วนตัวมากกว่าในที่ประชุมกลุ่ม" },
          { en: "Kenji began keeping a mental list of idiosyncrasies he needed to learn: when formality was expected, when a colloquialism would build rapport instead of undermining it.", th: "เคนจิเริ่มจดจำรายการลักษณะเฉพาะตัวที่แปลกไว้ในใจว่าเมื่อไรควรเป็นทางการ เมื่อไรการใช้คำพูดแบบภาษาพูดจะช่วยสร้างความสัมพันธ์ที่ดีแทนที่จะบั่นทอนมัน" },
          { en: "Slowly, through a string of small, private conversations, he began to assimilate not just the vocabulary but the entire rhythm of British office etiquette.", th: "ค่อยๆ ผ่านบทสนทนาส่วนตัวเล็กๆ น้อยๆ หลายครั้ง เขาก็เริ่มปรับตัวกลมกลืนไม่ใช่แค่คำศัพท์เท่านั้น แต่รวมถึงจังหวะทั้งหมดของมารยาทในที่ทำงานแบบอังกฤษด้วย" },
          { en: "Six months later, he delivered feedback on a junior colleague's report so gently wrapped in qualifiers that his old self would hardly have recognized it as criticism at all.", th: "หกเดือนต่อมา เขาให้ข้อเสนอแนะเกี่ยวกับรายงานของเพื่อนร่วมงานรุ่นน้องคนหนึ่งด้วยถ้อยคำที่ห่อหุ้มด้วยคำขยายความอย่างนุ่มนวลจนตัวเขาในอดีตแทบจะจำไม่ได้ว่านั่นคือคำวิจารณ์" },
          { en: "What surprised him most was that he hadn't lost his directness entirely; he had simply learned which register to reach for, and when.", th: "สิ่งที่ทำให้เขาประหลาดใจที่สุดคือเขาไม่ได้สูญเสียความตรงไปตรงมาของตัวเองไปทั้งหมด เขาเพียงแค่เรียนรู้ว่าจะหยิบใช้ระดับภาษาแบบไหนและเมื่อใด" },
          { en: "Fluency, he now understood, was never just about words -- it was about knowing exactly which version of honesty a room could hold.", th: "ตอนนี้เขาเข้าใจแล้วว่าความคล่องแคล่วไม่เคยเป็นเรื่องของคำพูดเพียงอย่างเดียว แต่เป็นเรื่องของการรู้ว่าความจริงแบบไหนที่ห้องนั้นๆ จะรับไหว" }
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
          { en: "We would encourage both parties to reconsider their current positions.", th: "เราขอสนับสนุนให้ทั้งสองฝ่ายทบทวนจุดยืนปัจจุบันของตนอีกครั้ง", highlight: "We would encourage both parties to reconsider" },
          { en: "Perhaps it would be worth exploring alternative options before finalizing the agreement.", th: "บางทีอาจคุ้มค่าที่จะสำรวจทางเลือกอื่นก่อนที่จะสรุปข้อตกลงให้เป็นที่สิ้นสุด", highlight: "Perhaps it would be worth exploring alternative options" },
          { en: "With all due respect, we feel the current proposal falls short of our expectations.", th: "ด้วยความเคารพอย่างสูง เรารู้สึกว่าข้อเสนอในปัจจุบันยังไม่ตรงตามความคาดหวังของเรา", highlight: "With all due respect" },
          { en: "The company has decided to pursue a restructuring of its workforce.", th: "บริษัทได้ตัดสินใจดำเนินการปรับโครงสร้างกำลังคน", highlight: "a restructuring of its workforce" }
        ]
      },
      vocabulary: [
        { en: "euphemism", th: "คำพูดอ้อมที่ใช้แทนคำตรงๆ ที่อาจฟังดูรุนแรง", example: "'Letting someone go' is a common euphemism for firing an employee.", exampleTh: "'Letting someone go' เป็นคำอ้อมที่ใช้แทนคำว่าไล่พนักงานออก" },
        { en: "concession", th: "การยอมผ่อนปรนหรือยอมสละบางสิ่งในการเจรจา", example: "Both sides made concessions to reach a compromise.", exampleTh: "ทั้งสองฝ่ายยอมผ่อนปรนเพื่อให้บรรลุข้อตกลงร่วมกัน" },
        { en: "leverage", th: "อำนาจต่อรองหรือข้อได้เปรียบที่ใช้ในการเจรจา", example: "Their control of the supply chain gave them significant leverage.", exampleTh: "การควบคุมห่วงโซ่อุปทานของพวกเขาทำให้พวกเขามีอำนาจต่อรองที่สำคัญ" },
        { en: "impasse", th: "ทางตัน ไม่สามารถตกลงกันได้", example: "The talks reached an impasse after three days without progress.", exampleTh: "การเจรจาเข้าสู่ทางตันหลังจากผ่านไปสามวันโดยไม่มีความคืบหน้า" },
        { en: "diplomatic", th: "มีชั้นเชิงทางการทูต ประนีประนอมอย่างชาญฉลาด", example: "She handled the tense situation in a remarkably diplomatic way.", exampleTh: "เธอจัดการกับสถานการณ์ตึงเครียดนี้ด้วยชั้นเชิงทางการทูตอย่างน่าทึ่ง" },
        { en: "conciliatory", th: "มีลักษณะปรองดอง ประนีประนอม", example: "He offered a conciliatory gesture to ease tensions.", exampleTh: "เขาแสดงท่าทีปรองดองเพื่อคลี่คลายความตึงเครียด" },
        { en: "stipulate", th: "กำหนดเงื่อนไขไว้อย่างชัดเจนในข้อตกลง", example: "The contract stipulates that payment must be made within 30 days.", exampleTh: "สัญญากำหนดไว้ว่าต้องชำระเงินภายใน 30 วัน" },
        { en: "ultimatum", th: "คำขาด ข้อเสนอสุดท้ายที่ต้องยอมรับหรือปฏิเสธ", example: "The union issued an ultimatum: raise wages or face a strike.", exampleTh: "สหภาพแรงงานยื่นคำขาดว่าให้ขึ้นค่าจ้างมิฉะนั้นจะนัดหยุดงาน" },
        { en: "mediate", th: "ไกล่เกลี่ยระหว่างสองฝ่ายที่ขัดแย้งกัน", example: "A neutral third party was brought in to mediate the dispute.", exampleTh: "มีการเชิญบุคคลที่สามที่เป็นกลางเข้ามาไกล่เกลี่ยข้อพิพาท" }
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
      story: {
        title: "ข้อตกลงหลังเที่ยงคืน",
        sentences: [
          { en: "By midnight, the merger talks between the two family-owned vineyards had reached an impasse over something no one had anticipated: the label design.", th: "เมื่อถึงเที่ยงคืน การเจรจาควบรวมกิจการระหว่างไร่องุ่นของสองตระกูลก็เข้าสู่ทางตันในเรื่องที่ไม่มีใครคาดคิดมาก่อน นั่นคือการออกแบบฉลากไวน์" },
          { en: "Neither family was willing to concede the prominence of their own crest, and both lawyers had begun quietly drafting language for an ultimatum.", th: "ไม่มีตระกูลใดยอมสละความโดดเด่นของตราประจำตระกูลตนเอง และทนายทั้งสองฝ่ายก็เริ่มร่างถ้อยคำสำหรับคำขาดกันอย่างเงียบๆ" },
          { en: "Sensing disaster, the mediator, a soft-spoken woman named Ingrid, suggested a short recess before anyone said something they couldn't diplomatically walk back.", th: "เมื่อรู้สึกได้ถึงหายนะที่กำลังจะเกิดขึ้น ผู้ไกล่เกลี่ยหญิงเสียงนุ่มนวลชื่ออิงกริดจึงเสนอให้พักการประชุมสั้นๆ ก่อนที่ใครสักคนจะพูดอะไรออกไปที่ไม่อาจถอนคำพูดอย่างมีชั้นเชิงทางการทูตได้" },
          { en: "Over coffee, she pointed out, with considerable tact, that the real issue was never the crest itself but the leverage each family believed it represented in the new company's identity.", th: "ระหว่างจิบกาแฟ เธอชี้ให้เห็นด้วยความละมุนละม่อมอย่างมากว่าปัญหาที่แท้จริงไม่เคยอยู่ที่ตราประจำตระกูลเลย แต่อยู่ที่อำนาจต่อรองที่แต่ละตระกูลเชื่อว่าตนได้จากอัตลักษณ์ของบริษัทใหม่" },
          { en: "Ingrid proposed a conciliatory compromise: a new, entirely original emblem that stipulated equal representation of both vineyards' founding years rather than either family's crest.", th: "อิงกริดเสนอทางออกแบบปรองดองว่าจะสร้างตราสัญลักษณ์ใหม่ทั้งหมดที่กำหนดให้แสดงปีก่อตั้งของไร่องุ่นทั้งสองอย่างเท่าเทียมกัน แทนที่จะใช้ตราของตระกูลใดตระกูลหนึ่ง" },
          { en: "Both sides, exhausted and reluctant to let the deal collapse over pride, quietly agreed -- though each later described the outcome to their relatives using careful euphemisms.", th: "ทั้งสองฝ่ายที่เหนื่อยล้าและไม่อยากให้ข้อตกลงล่มเพราะความหยิ่งทะนงก็ยอมรับอย่างเงียบๆ แม้ว่าภายหลังแต่ละฝ่ายจะเล่าผลลัพธ์ให้ญาติฟังด้วยคำอ้อมที่เลือกใช้อย่างระมัดระวัง" },
          { en: "One family called it 'a fresh, forward-looking identity'; the other called it 'a necessary evolution' -- neither willing to admit, out loud, that they had given something up.", th: "ตระกูลหนึ่งเรียกมันว่า 'อัตลักษณ์ใหม่ที่มองไปข้างหน้า' ส่วนอีกตระกูลเรียกมันว่า 'วิวัฒนาการที่จำเป็น' ไม่มีฝ่ายใดยอมพูดออกมาตรงๆ ว่าตนได้เสียสละบางอย่างไป" },
          { en: "Ingrid, watching the contracts finally get signed just before dawn, reflected that most impasses were never truly about the stated disagreement at all.", th: "อิงกริดที่มองดูสัญญาถูกลงนามในที่สุดก่อนรุ่งสาง คิดทบทวนว่าทางตันส่วนใหญ่ไม่เคยเป็นเรื่องข้อพิพาทที่ระบุไว้อย่างแท้จริงเลย" },
          { en: "The real skill of diplomacy, she had learned over twenty years of mediating, was finding the concession neither side realized they were capable of making.", th: "ทักษะที่แท้จริงของการทูตที่เธอเรียนรู้มาตลอดยี่สิบปีของการไกล่เกลี่ยคือการหาจุดผ่อนปรนที่ทั้งสองฝ่ายไม่เคยรู้ตัวว่าตนเองสามารถทำได้" },
          { en: "By sunrise, two labels bearing the same quietly negotiated emblem left the printer, and only Ingrid seemed to notice how much diplomacy could fit inside a single piece of paper.", th: "เมื่อพระอาทิตย์ขึ้น ฉลากไวน์สองแบบที่มีตราสัญลักษณ์ซึ่งผ่านการเจรจาอย่างเงียบๆ ก็ออกมาจากเครื่องพิมพ์ และมีเพียงอิงกริดเท่านั้นที่สังเกตเห็นว่าการทูตสามารถบรรจุลงในกระดาษแผ่นเดียวได้มากเพียงใด" }
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
          { en: "He walked into the room as if he owned it.", th: "เขาเดินเข้าไปในห้องราวกับว่าเขาเป็นเจ้าของห้องนั้น", highlight: "as if he owned it" },
          { en: "She looked at me as though I had lost my mind.", th: "เธอมองฉันราวกับว่าฉันเสียสติไปแล้ว", highlight: "as though I had lost my mind" },
          { en: "The old house creaked as if it were breathing.", th: "บ้านเก่าหลังนั้นส่งเสียงเอี๊ยดอ๊าดราวกับว่ามันกำลังหายใจ", highlight: "as if it were breathing" },
          { en: "He spoke as though nothing had happened, though we all knew the truth.", th: "เขาพูดราวกับว่าไม่มีอะไรเกิดขึ้น ทั้งที่เรารู้ความจริงกันหมดแล้ว", highlight: "as though nothing had happened" }
        ]
      },
      vocabulary: [
        { en: "allegory", th: "เรื่องเล่าที่มีความหมายแฝงเชิงสัญลักษณ์", example: "Animal Farm is a famous allegory for the Russian Revolution.", exampleTh: "Animal Farm เป็นนิทานเปรียบเทียบที่โด่งดังเกี่ยวกับการปฏิวัติรัสเซีย" },
        { en: "dramatic irony", th: "การประชดที่ผู้อ่านหรือผู้ชมรู้ความจริงมากกว่าตัวละคร", example: "The audience feels dramatic irony when the character trusts the villain unknowingly.", exampleTh: "ผู้ชมรู้สึกถึงการประชดแบบดราม่าเมื่อตัวละครไว้ใจตัวร้ายโดยไม่รู้ตัว" },
        { en: "symbolism", th: "การใช้สิ่งหนึ่งแทนความหมายอื่นในเชิงสัญลักษณ์", example: "The wilting flower serves as symbolism for the character's fading hope.", exampleTh: "ดอกไม้ที่กำลังเหี่ยวเฉาทำหน้าที่เป็นสัญลักษณ์ของความหวังที่กำลังจางหายไปของตัวละคร" },
        { en: "foreshadowing", th: "การบอกใบ้เหตุการณ์ที่จะเกิดขึ้นในอนาคตของเรื่อง", example: "The storm at the beginning of the novel is foreshadowing of the conflict to come.", exampleTh: "พายุในตอนต้นของนวนิยายเป็นการบอกใบ้ถึงความขัดแย้งที่จะเกิดขึ้นในภายหลัง" },
        { en: "motif", th: "แนวคิดหรือภาพที่ปรากฏซ้ำๆ ในงานเขียนเพื่อเสริมธีม", example: "Water is a recurring motif throughout the novel, symbolizing renewal.", exampleTh: "น้ำเป็นภาพที่ปรากฏซ้ำๆ ตลอดทั้งนวนิยาย เป็นสัญลักษณ์ของการเกิดใหม่" },
        { en: "allusion", th: "การอ้างอิงถึงบุคคล เหตุการณ์ หรือวรรณกรรมอื่นโดยอ้อม", example: "The title contains an allusion to a famous Greek myth.", exampleTh: "ชื่อเรื่องมีการอ้างอิงถึงตำนานกรีกที่มีชื่อเสียงเรื่องหนึ่ง" },
        { en: "paradox", th: "ข้อความที่ดูขัดแย้งในตัวเองแต่แฝงความจริง", example: "'Less is more' is a well-known paradox.", exampleTh: "'Less is more' เป็นข้อความที่ดูขัดแย้งในตัวเองที่รู้จักกันดี" },
        { en: "satire", th: "งานเขียนที่ล้อเลียนวิพากษ์วิจารณ์สังคมด้วยอารมณ์ขัน", example: "The novel is a biting satire of modern political corruption.", exampleTh: "นวนิยายเรื่องนี้เป็นงานเสียดสีเจ็บแสบต่อการทุจริตทางการเมืองสมัยใหม่" },
        { en: "understatement", th: "การพูดลดทอนความสำคัญของบางสิ่งเพื่อสร้างเอฟเฟกต์ ตรงข้ามกับการพูดเกินจริง", example: "Calling a hurricane 'a bit windy' is a classic British understatement.", exampleTh: "การเรียกพายุเฮอริเคนว่า 'ลมแรงนิดหน่อย' เป็นการพูดลดทอนความสำคัญแบบอังกฤษคลาสสิก" }
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
      story: {
        title: "นักเขียนกับตัวละครที่ไม่ยอมตาย",
        sentences: [
          { en: "Every evening for a month, the novelist Imre sat before a blank page, trying to write the death scene his editor was demanding.", th: "ทุกเย็นตลอดหนึ่งเดือน นักเขียนชื่ออิมเรนั่งอยู่หน้ากระดาษเปล่า พยายามเขียนฉากการตายที่บรรณาธิการของเขาเรียกร้อง" },
          { en: "His protagonist, a weary detective named Kessler, was supposed to die in the final chapter, poisoned by the very wine he had used, throughout the novel, as a recurring motif of false comfort.", th: "ตัวเอกของเขาซึ่งเป็นนักสืบผู้เหนื่อยล้าชื่อเคสเลอร์ ควรจะต้องตายในบทสุดท้ายด้วยพิษจากไวน์ชนิดเดียวกับที่เขาใช้เป็นภาพสัญลักษณ์ซ้ำๆ ตลอดทั้งเรื่องแทนความสบายใจปลอมๆ" },
          { en: "Readers, thanks to a subtle foreshadowing in chapter three, already suspected the wine was tainted -- a dramatic irony Imre had carefully engineered.", th: "ผู้อ่านที่ได้รับการบอกใบ้อย่างแนบเนียนในบทที่สามต่างสงสัยอยู่แล้วว่าไวน์นั้นถูกวางยาพิษ ซึ่งเป็นการประชดแบบดราม่าที่อิมเรออกแบบไว้อย่างพิถีพิถัน" },
          { en: "Yet each time Imre typed the fatal sentence, he deleted it, as if some invisible hand kept pulling the words back off the page.", th: "แต่ทุกครั้งที่อิมเรพิมพ์ประโยคที่นำไปสู่ความตาย เขาก็ลบมันทิ้ง ราวกับว่ามีมือที่มองไม่เห็นคอยดึงคำพูดเหล่านั้นกลับออกจากหน้ากระดาษ" },
          { en: "He began to suspect, with the discomfort of a man noticing his own paradox, that he had grown to admire a character he was contractually obligated to kill.", th: "เขาเริ่มสงสัยด้วยความอึดอัดของคนที่สังเกตเห็นความขัดแย้งในตัวเอง ว่าเขาชื่นชมตัวละครที่ตนมีข้อผูกมัดตามสัญญาว่าจะต้องฆ่าทิ้งมากเกินไปแล้ว" },
          { en: "His editor, unimpressed by talk of artistic conscience, wrote back with an understatement so dry it could have been satire: 'Kessler's mortality is somewhat overdue.'", th: "บรรณาธิการของเขาไม่ประทับใจกับคำพูดเรื่องมโนธรรมทางศิลปะ จึงเขียนตอบกลับมาด้วยการพูดลดทอนความสำคัญที่แห้งแล้งจนแทบจะกลายเป็นงานเสียดสีได้ว่า 'ความตายของเคสเลอร์ดูจะล่าช้าไปสักหน่อยแล้วนะ'" },
          { en: "In a fit of frustration, Imre wrote an entirely different ending, an allegory of his own predicament: a writer who discovers his character has quietly begun writing back.", th: "ด้วยความหงุดหงิด อิมเรจึงเขียนตอนจบที่ต่างไปโดยสิ้นเชิง เป็นนิทานเปรียบเทียบของสถานการณ์ของตัวเขาเอง เรื่องราวของนักเขียนที่ค้นพบว่าตัวละครของเขาเริ่มเขียนโต้ตอบกลับมาอย่างเงียบๆ" },
          { en: "The final manuscript contained a sly allusion to Frankenstein, its creator undone by the very creation he refused to abandon.", th: "ต้นฉบับสุดท้ายมีการพาดพิงอย่างแยบยลถึงเรื่อง Frankenstein ที่ผู้สร้างต้องพ่ายแพ้ให้กับสิ่งที่ตนสร้างขึ้นเองซึ่งเขาไม่ยอมทอดทิ้ง" },
          { en: "Kessler, in the end, did not die; he simply walked out of the story's final page as if stepping out of a room he had grown tired of.", th: "ในที่สุดเคสเลอร์ก็ไม่ได้ตาย เขาเพียงแค่เดินออกจากหน้าสุดท้ายของเรื่องราวราวกับกำลังก้าวออกจากห้องที่เขาเบื่อหน่ายแล้ว" },
          { en: "Readers called it the strangest ending of the year; Imre, privately, called it the only honest one he had ever written.", th: "ผู้อ่านเรียกมันว่าตอนจบที่แปลกที่สุดแห่งปี ส่วนอิมเรในใจของเขาเองกลับเรียกมันว่าเป็นตอนจบที่ซื่อสัตย์ที่สุดเท่าที่เขาเคยเขียนมา" }
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
          { en: "While it is true that remote work can reduce collaboration, the flexibility it offers often boosts overall productivity.", th: "แม้จะเป็นความจริงที่การทำงานทางไกลอาจลดการทำงานร่วมกัน แต่ความยืดหยุ่นที่มันมอบให้มักช่วยเพิ่มผลผลิตโดยรวม", highlight: "While it is true that remote work can reduce collaboration" },
          { en: "Although some scholars dispute this theory, the majority of empirical evidence supports it.", th: "แม้นักวิชาการบางคนจะโต้แย้งทฤษฎีนี้ แต่หลักฐานเชิงประจักษ์ส่วนใหญ่สนับสนุนมัน", highlight: "Although some scholars dispute this theory" },
          { en: "Even though the initial costs are high, the environmental benefits far outweigh them in the long run.", th: "แม้ต้นทุนเริ่มต้นจะสูง แต่ประโยชน์ด้านสิ่งแวดล้อมก็มีน้ำหนักมากกว่าในระยะยาว", highlight: "Even though the initial costs are high" },
          { en: "Critics rightly point out the risks; nevertheless, the potential rewards justify further investment.", th: "นักวิจารณ์ชี้ให้เห็นความเสี่ยงอย่างถูกต้อง กระนั้นผลตอบแทนที่อาจได้รับก็ยังคุ้มค่าต่อการลงทุนเพิ่มเติม", highlight: "Critics rightly point out the risks" }
        ]
      },
      vocabulary: [
        { en: "premise", th: "ข้อสมมติฐานที่ใช้เป็นพื้นฐานของการให้เหตุผล", example: "The entire argument rests on a flawed premise.", exampleTh: "ข้อโต้แย้งทั้งหมดตั้งอยู่บนข้อสมมติฐานที่มีข้อบกพร่อง" },
        { en: "syllogism", th: "การให้เหตุผลแบบตรรกะที่มีสองข้อสมมติฐานนำไปสู่บทสรุป", example: "The classic syllogism about Socrates being mortal illustrates deductive reasoning.", exampleTh: "การให้เหตุผลแบบตรรกะคลาสสิกเรื่องโสเครตีสเป็นมนุษย์ที่ต้องตายนั้นแสดงให้เห็นถึงการให้เหตุผลแบบนิรนัย" },
        { en: "refutation", th: "การหักล้างข้อโต้แย้งด้วยเหตุผล", example: "The essay's strongest section is its refutation of the opposing view.", exampleTh: "ส่วนที่แข็งแกร่งที่สุดของบทความคือการหักล้างมุมมองฝ่ายตรงข้าม" },
        { en: "cogent", th: "มีเหตุผลหนักแน่นน่าเชื่อถือ", example: "She presented a cogent argument that left little room for doubt.", exampleTh: "เธอนำเสนอข้อโต้แย้งที่มีเหตุผลหนักแน่นจนแทบไม่เหลือช่องว่างให้สงสัย" },
        { en: "coherence", th: "ความสอดคล้องเป็นเหตุเป็นผลกันของความคิด", example: "The essay lacks coherence; the paragraphs don't connect logically.", exampleTh: "บทความนี้ขาดความสอดคล้อง ย่อหน้าต่างๆ ไม่เชื่อมโยงกันอย่างเป็นเหตุเป็นผล" },
        { en: "synthesis", th: "การผสมผสานแนวคิดหลายอย่างเข้าด้วยกันเป็นข้อสรุปใหม่", example: "The paper offers a synthesis of economic and sociological perspectives.", exampleTh: "บทความนี้นำเสนอการผสมผสานมุมมองทางเศรษฐศาสตร์และสังคมวิทยาเข้าด้วยกัน" },
        { en: "exposition", th: "การอธิบายหรือนำเสนอข้อมูลหรือแนวคิดอย่างละเอียด", example: "The first chapter serves as an exposition of the theoretical framework.", exampleTh: "บทแรกทำหน้าที่อธิบายกรอบทฤษฎีอย่างละเอียด" },
        { en: "corollary", th: "ผลที่ตามมาโดยธรรมชาติจากข้อสรุปหลัก", example: "A natural corollary of this policy is a rise in short-term unemployment.", exampleTh: "ผลที่ตามมาโดยธรรมชาติของนโยบายนี้คือการเพิ่มขึ้นของการว่างงานในระยะสั้น" },
        { en: "substantive", th: "มีเนื้อหาสาระสำคัญ ไม่ใช่แค่ผิวเผิน", example: "The committee raised substantive objections to the proposal.", exampleTh: "คณะกรรมการยกข้อคัดค้านที่มีเนื้อหาสาระสำคัญต่อข้อเสนอนี้" }
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
      story: {
        title: "วิทยานิพนธ์ที่เกือบถูกปฏิเสธ",
        sentences: [
          { en: "Professor Aldana had reviewed hundreds of dissertation proposals, but none had opened with a premise quite as audacious as the one on her desk that morning.", th: "ศาสตราจารย์อัลดานาได้ตรวจสอบข้อเสนอวิทยานิพนธ์มาแล้วหลายร้อยฉบับ แต่ไม่มีฉบับใดเปิดเรื่องด้วยข้อสมมติฐานที่กล้าหาญเท่ากับฉบับที่วางอยู่บนโต๊ะของเธอในเช้าวันนั้น" },
          { en: "The student, a quiet young man named Teo, argued that the department's entire theoretical framework rested on a syllogism no one had bothered to examine in thirty years.", th: "นักศึกษาชายหนุ่มเงียบขรึมคนหนึ่งชื่อเทโอ โต้แย้งว่ากรอบทฤษฎีทั้งหมดของภาควิชาตั้งอยู่บนการให้เหตุผลแบบตรรกะที่ไม่มีใครคิดจะตรวจสอบมานานถึงสามสิบปีแล้ว" },
          { en: "Her first instinct was dismissal; the exposition alone ran twenty pages before Teo even stated his actual thesis.", th: "สัญชาตญาณแรกของเธอคือการปัดตกไปเลย เพราะแค่ส่วนอธิบายเบื้องต้นก็ยาวถึงยี่สิบหน้าก่อนที่เทโอจะกล่าวถึงวิทยานิพนธ์ที่แท้จริงของเขาเสียด้วยซ้ำ" },
          { en: "While it is true that unconventional proposals are often the work of undisciplined minds, she forced herself to read further before passing judgment.", th: "แม้จะเป็นความจริงที่ข้อเสนอที่ไม่ธรรมดามักเป็นผลงานของความคิดที่ไม่มีระเบียบวินัย เธอก็บังคับตัวเองให้อ่านต่อไปก่อนที่จะตัดสิน" },
          { en: "What she found, buried beneath the clumsy prose, was a genuinely cogent refutation of an assumption three generations of scholars had simply inherited without question.", th: "สิ่งที่เธอพบซึ่งซ่อนอยู่ใต้สำนวนที่เขียนไม่เรียบร้อยนั้น คือการหักล้างที่มีเหตุผลหนักแน่นอย่างแท้จริงต่อข้อสมมติฐานที่นักวิชาการสามรุ่นรับสืบทอดกันมาโดยไม่เคยตั้งคำถาม" },
          { en: "Although the paper's coherence suffered from Teo's habit of chasing every tangential idea, its central synthesis of two previously unconnected fields was, she had to admit, quietly brilliant.", th: "แม้ความสอดคล้องของบทความจะบกพร่องเพราะนิสัยของเทโอที่ชอบไล่ตามความคิดนอกประเด็นทุกอย่าง แต่การผสมผสานแนวคิดจากสองสาขาที่ไม่เคยเชื่อมโยงกันมาก่อนซึ่งเป็นแก่นของบทความนั้น เธอต้องยอมรับว่าเฉียบแหลมอย่างเงียบๆ" },
          { en: "The most substantive contribution, buried in a footnote Teo clearly considered an afterthought, revealed an unexpected corollary that could reshape how the department taught the subject entirely.", th: "การมีส่วนร่วมที่มีเนื้อหาสาระสำคัญที่สุด ซึ่งซ่อนอยู่ในเชิงอรรถที่เทโอเห็นได้ชัดว่าคิดว่าเป็นเพียงความคิดเสริม กลับเผยให้เห็นผลพวงที่ไม่คาดคิดซึ่งอาจเปลี่ยนวิธีการสอนวิชานี้ของภาควิชาไปโดยสิ้นเชิง" },
          { en: "Rather than reject the proposal outright, Professor Aldana wrote back with a single condition: rewrite the exposition, trim the tangents, and let the cogent argument stand on its own.", th: "แทนที่จะปฏิเสธข้อเสนอไปเลย ศาสตราจารย์อัลดานาเขียนตอบกลับไปพร้อมเงื่อนไขเดียว คือให้เขียนส่วนอธิบายใหม่ ตัดส่วนที่นอกประเด็นออก และปล่อยให้ข้อโต้แย้งที่มีเหตุผลหนักแน่นยืนหยัดได้ด้วยตัวมันเอง" },
          { en: "Even though the department chair remained skeptical, nevertheless he agreed to let the revised dissertation proceed to committee review.", th: "แม้หัวหน้าภาควิชาจะยังคงไม่แน่ใจนัก แต่กระนั้นเขาก็ยอมให้วิทยานิพนธ์ฉบับปรับปรุงดำเนินการเข้าสู่การพิจารณาของคณะกรรมการต่อไป" },
          { en: "Years later, Teo's once-dismissed premise had become a required reading in the very course that had almost buried it.", th: "หลายปีต่อมา ข้อสมมติฐานของเทโอที่เคยเกือบถูกปัดตกกลับกลายเป็นบทอ่านบังคับในวิชาเดียวกันกับที่เคยเกือบฝังมันไว้" }
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
          { en: "Is this the kind of leadership we deserve, or the kind we deserve better than?", th: "นี่คือความเป็นผู้นำที่เราสมควรได้รับ หรือเป็นแบบที่เราควรได้รับที่ดีกว่านี้กันแน่", highlight: "Is this the kind of leadership we deserve" },
          { en: "We must not merely dream of change; we must demand it, build it, and live it.", th: "เราต้องไม่เพียงแค่ฝันถึงการเปลี่ยนแปลง เราต้องเรียกร้องมัน สร้างมัน และใช้ชีวิตอยู่กับมัน", highlight: "we must demand it, build it, and live it" },
          { en: "How much longer can we afford to look away?", th: "เราจะสามารถเมินเฉยต่อไปได้อีกนานแค่ไหนกัน", highlight: "How much longer can we afford to look away" },
          { en: "Ask not what your country can do for you -- ask what you can do for your country.", th: "อย่าถามว่าประเทศชาติจะให้อะไรกับท่าน แต่จงถามว่าท่านจะทำอะไรให้กับประเทศชาติได้บ้าง", highlight: "Ask not what your country can do for you" }
        ]
      },
      vocabulary: [
        { en: "rebuttal", th: "คำโต้แย้งเพื่อหักล้างข้อกล่าวหาหรือข้อโต้แย้ง", example: "Her rebuttal dismantled the opponent's argument point by point.", exampleTh: "คำโต้แย้งของเธอทำลายข้อโต้แย้งของฝ่ายตรงข้ามลงไปทีละประเด็น" },
        { en: "oratory", th: "ศิลปะการพูดในที่สาธารณะอย่างมีพลัง", example: "His oratory skills captivated the entire hall.", exampleTh: "ทักษะการพูดในที่สาธารณะของเขาดึงดูดใจคนทั้งห้องประชุม" },
        { en: "extemporaneous", th: "พูดโดยไม่ได้เตรียมสคริปต์ล่วงหน้า แบบด้นสด", example: "She delivered a brilliant extemporaneous speech with no notes at all.", exampleTh: "เธอกล่าวสุนทรพจน์แบบด้นสดได้อย่างยอดเยี่ยมโดยไม่มีโน้ตช่วยเลย" },
        { en: "rapport", th: "ความสัมพันธ์ที่ดีและความเข้าใจร่วมกันระหว่างผู้พูดกับผู้ฟัง", example: "A good speaker builds rapport with the audience within the first minute.", exampleTh: "นักพูดที่ดีสร้างความสัมพันธ์อันดีกับผู้ฟังได้ภายในนาทีแรก" },
        { en: "assertive", th: "กล้าแสดงออกอย่างมั่นใจโดยไม่ก้าวร้าว", example: "He remained assertive throughout the debate without ever raising his voice.", exampleTh: "เขายังคงกล้าแสดงออกอย่างมั่นใจตลอดการโต้วาทีโดยไม่เคยตะโกนเสียงดังเลย" },
        { en: "captivate", th: "ดึงดูดความสนใจอย่างมาก", example: "Her storytelling captivated the entire audience.", exampleTh: "การเล่าเรื่องของเธอดึงดูดความสนใจผู้ฟังทั้งหมด" },
        { en: "resonate", th: "สร้างความรู้สึกร่วมหรือสอดคล้องกับความรู้สึกผู้ฟัง", example: "The message resonated deeply with young voters.", exampleTh: "ข้อความนี้สร้างความรู้สึกร่วมอย่างลึกซึ้งกับผู้มีสิทธิเลือกตั้งรุ่นเยาว์" },
        { en: "poise", th: "ความสง่างามและความสงบมั่นคงเมื่อต้องเผชิญสถานการณ์กดดัน", example: "She handled the hostile questions with remarkable poise.", exampleTh: "เธอรับมือกับคำถามที่มีท่าทีไม่เป็นมิตรด้วยความสง่างามอย่างน่าทึ่ง" },
        { en: "charisma", th: "เสน่ห์ดึงดูดใจที่ทำให้ผู้อื่นเชื่อถือและศรัทธา", example: "The candidate's charisma won over even skeptical voters.", exampleTh: "เสน่ห์ดึงดูดใจของผู้สมัครทำให้แม้แต่ผู้มีสิทธิเลือกตั้งที่ยังลังเลก็ยอมเปลี่ยนใจ" }
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
      story: {
        title: "สุนทรพจน์ที่ไม่ได้เตรียมมา",
        sentences: [
          { en: "Three minutes before she was due on stage, the keynote speaker fell ill, and the conference organizers turned, in desperation, to a junior researcher named Farah.", th: "สามนาทีก่อนที่ผู้บรรยายหลักจะต้องขึ้นเวที เธอล้มป่วยกะทันหัน และผู้จัดงานประชุมก็หันมาขอความช่วยเหลือจากนักวิจัยรุ่นเยาว์คนหนึ่งชื่อฟาราห์ด้วยความสิ้นหวัง" },
          { en: "Farah had never delivered anything extemporaneous in her life; every talk she had ever given had been rehearsed down to the last comma.", th: "ฟาราห์ไม่เคยพูดแบบด้นสดมาก่อนในชีวิตเลย ทุกครั้งที่เธอเคยบรรยายล้วนซักซ้อมมาอย่างละเอียดจนถึงเครื่องหมายจุลภาคตัวสุดท้าย" },
          { en: "Walking onstage, she asked herself a single rhetorical question: how much longer could she let fear decide what she was capable of?", th: "ขณะเดินขึ้นเวที เธอถามตัวเองด้วยคำถามเชิงวาทศิลป์เพียงคำถามเดียวว่าเธอจะปล่อยให้ความกลัวเป็นตัวกำหนดว่าเธอทำอะไรได้บ้างไปอีกนานแค่ไหน" },
          { en: "With no notes, no slides, and a poise she didn't know she possessed, she began simply by describing the very panic she was feeling.", th: "โดยไม่มีโน้ต ไม่มีสไลด์ และด้วยความสง่างามที่เธอไม่เคยรู้ว่าตัวเองมีอยู่ เธอเริ่มต้นเพียงแค่บรรยายถึงความตื่นตระหนกที่เธอกำลังรู้สึกอยู่ในขณะนั้น" },
          { en: "The confession, oddly, built more rapport with the audience in thirty seconds than any polished introduction could have managed.", th: "การสารภาพนั้นแปลกที่กลับสร้างความสัมพันธ์อันดีกับผู้ฟังได้มากกว่าคำนำที่เตรียมมาอย่างดีใดๆ ภายในเวลาเพียงสามสิบวินาที" },
          { en: "She spoke assertively but never aggressively, letting her genuine curiosity about the research resonate more than any rehearsed line ever could.", th: "เธอพูดอย่างมั่นใจแต่ไม่เคยก้าวร้าว ปล่อยให้ความอยากรู้อยากเห็นอันแท้จริงของเธอเกี่ยวกับงานวิจัยสร้างความรู้สึกร่วมได้มากกว่าประโยคที่ซักซ้อมมาใดๆ" },
          { en: "By the halfway mark, she had, without quite realizing it, captivated a room of scientists who had expected a dry recitation of statistics.", th: "เมื่อถึงครึ่งทาง เธอได้ดึงดูดความสนใจของห้องประชุมที่เต็มไปด้วยนักวิทยาศาสตร์ผู้คาดหวังการอ่านสถิติแบบแห้งแล้งไปแล้วโดยที่เธอเองแทบไม่รู้ตัว" },
          { en: "When a skeptical audience member offered a sharp rebuttal to her central claim, she paused, genuinely considered it, and responded with an honesty that read as pure charisma.", th: "เมื่อผู้ฟังคนหนึ่งที่ไม่เชื่อยื่นคำโต้แย้งอันแหลมคมต่อข้อกล่าวอ้างหลักของเธอ เธอหยุดคิดพิจารณาอย่างจริงจัง แล้วตอบกลับด้วยความจริงใจซึ่งดูราวกับเป็นเสน่ห์อันบริสุทธิ์" },
          { en: "Afterward, colleagues praised her oratory as though it had been meticulously planned for weeks, and she found she hadn't the heart to correct them.", th: "หลังจากนั้น เพื่อนร่วมงานต่างชื่นชมศิลปะการพูดของเธอราวกับว่ามันถูกวางแผนมาอย่างพิถีพิถันเป็นเวลาหลายสัปดาห์ และเธอก็รู้สึกว่าไม่มีใจจะแก้ไขความเข้าใจนั้น" },
          { en: "Farah realized, walking off that stage, that the most persuasive voice she owned had never needed a script -- only the willingness to let people see it shake.", th: "ฟาราห์ตระหนักได้ขณะเดินลงจากเวทีว่าเสียงที่โน้มน้าวใจได้มากที่สุดที่เธอมีนั้นไม่เคยต้องการสคริปต์เลย มันต้องการเพียงความเต็มใจที่จะปล่อยให้คนอื่นเห็นว่ามันสั่นได้เท่านั้น" }
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
          { en: "Rarely has a policy generated such widespread debate; while its proponents point to empirical evidence of success, critics argue, arguably with some justification, that the ramifications have been understated.", th: "แทบไม่มีนโยบายใดที่ก่อให้เกิดการถกเถียงกันอย่างกว้างขวางเช่นนี้ ในขณะที่ฝ่ายสนับสนุนชี้ไปที่หลักฐานเชิงประจักษ์ของความสำเร็จ ฝ่ายวิจารณ์กลับโต้แย้งซึ่งอาจกล่าวได้ว่ามีเหตุผลอยู่บ้างว่าผลกระทบที่ตามมานั้นถูกประเมินต่ำเกินไป", highlight: "Rarely has a policy generated such widespread debate" },
          { en: "Had the committee acted sooner, the crisis -- arguably avoidable -- would not have escalated to the point it has now reached.", th: "ถ้าคณะกรรมการดำเนินการเร็วกว่านี้ วิกฤตนี้ ซึ่งอาจกล่าวได้ว่าสามารถหลีกเลี่ยงได้ ก็คงจะไม่บานปลายมาถึงจุดที่เป็นอยู่ในตอนนี้", highlight: "Had the committee acted sooner, the crisis" },
          { en: "Not only does the report underscore the urgency of reform, but it also, through its careful synthesis of data, refutes many of the counterarguments raised by skeptics.", th: "รายงานนี้ไม่เพียงเน้นย้ำถึงความเร่งด่วนของการปฏิรูปเท่านั้น แต่ผ่านการสังเคราะห์ข้อมูลอย่างรอบคอบยังหักล้างข้อโต้แย้งหลายประการที่ฝ่ายไม่เชื่อได้หยิบยกขึ้นมาอีกด้วย", highlight: "Not only does the report underscore the urgency of reform" }
        ]
      },
      vocabulary: [
        { en: "erudite", th: "มีความรู้ลึกซึ้งรอบด้านเชิงวิชาการ", example: "The professor's erudite lecture impressed even seasoned scholars.", exampleTh: "การบรรยายอันเปี่ยมความรู้ของศาสตราจารย์สร้างความประทับใจแม้แต่นักวิชาการผู้ช่ำชอง" },
        { en: "magnanimous", th: "ใจกว้าง มีน้ำใจแม้ในสถานการณ์ที่ได้เปรียบ", example: "Despite winning the debate, she was magnanimous toward her opponent.", exampleTh: "แม้จะชนะการโต้วาที เธอก็ยังคงมีน้ำใจใจกว้างต่อคู่แข่งของตน" },
        { en: "prudent", th: "รอบคอบ มีวิจารณญาณในการตัดสินใจ", example: "It would be prudent to review the contract before signing.", exampleTh: "ควรจะรอบคอบด้วยการตรวจสอบสัญญาก่อนที่จะเซ็นชื่อ" },
        { en: "tenacious", th: "ยึดมั่นไม่ย่อท้อ พากเพียร", example: "Her tenacious pursuit of justice eventually paid off.", exampleTh: "ความมุ่งมั่นไม่ย่อท้อของเธอในการแสวงหาความยุติธรรมในที่สุดก็ได้ผล" },
        { en: "versatile", th: "รอบด้าน ปรับตัวได้หลากหลายสถานการณ์", example: "He is a versatile speaker, equally comfortable in formal and casual settings.", exampleTh: "เขาเป็นนักพูดที่รอบด้าน สบายใจได้ทั้งในบริบททางการและไม่เป็นทางการเท่าๆ กัน" },
        { en: "meticulous", th: "พิถีพิถัน ละเอียดรอบคอบในทุกรายละเอียด", example: "The report reflects months of meticulous research.", exampleTh: "รายงานนี้สะท้อนถึงการวิจัยอย่างพิถีพิถันตลอดหลายเดือน" },
        { en: "pragmatic", th: "เน้นการปฏิบัติจริง มองตามความเป็นจริงมากกว่าอุดมคติ", example: "The negotiator took a pragmatic approach rather than an idealistic one.", exampleTh: "นักเจรจาเลือกใช้แนวทางที่เน้นการปฏิบัติจริงมากกว่าแนวทางเชิงอุดมคติ" },
        { en: "incisive", th: "แหลมคม เจาะประเด็นได้ตรงจุด", example: "Her incisive analysis exposed the flaws in the proposal immediately.", exampleTh: "การวิเคราะห์อันแหลมคมของเธอเผยให้เห็นข้อบกพร่องในข้อเสนอได้ในทันที" },
        { en: "holistic", th: "แบบองค์รวม มองภาพรวมทุกด้าน", example: "The therapist takes a holistic approach, considering both mind and body.", exampleTh: "นักบำบัดใช้แนวทางแบบองค์รวม โดยพิจารณาทั้งจิตใจและร่างกาย" }
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
      story: {
        title: "บทเรียนสุดท้ายของครูผู้เกษียณ",
        sentences: [
          { en: "Never had the lecture hall been so quiet as on the afternoon Professor Ansah delivered what everyone knew would be her final class before retirement.", th: "ไม่เคยมีครั้งไหนที่ห้องบรรยายจะเงียบสงบเท่ากับบ่ายวันที่ศาสตราจารย์อันซาห์บรรยายซึ่งทุกคนรู้ว่าจะเป็นคาบเรียนสุดท้ายของเธอก่อนเกษียณ" },
          { en: "Erudite as she was, she began not with theory but with a confession: prudent planning, she said, had taught her far less than her own mistakes ever had.", th: "แม้จะเป็นผู้มีความรู้ลึกซึ้ง เธอกลับเริ่มต้นไม่ใช่ด้วยทฤษฎี แต่ด้วยการสารภาพว่าการวางแผนอย่างรอบคอบสอนเธอได้น้อยกว่าความผิดพลาดของตัวเธอเองมากนัก" },
          { en: "Had she taken the safer academic path offered to her thirty years earlier, she admitted, she would never have developed the tenacious curiosity that defined her entire career.", th: "เธอยอมรับว่าถ้าเธอเลือกเส้นทางวิชาการที่ปลอดภัยกว่าซึ่งถูกเสนอให้เมื่อสามสิบปีก่อน เธอคงไม่มีวันพัฒนาความอยากรู้อยากเห็นที่ไม่ย่อท้อซึ่งเป็นตัวกำหนดอาชีพทั้งหมดของเธอ" },
          { en: "While some colleagues considered her methods unconventional, arguably even reckless, her incisive questions had, over the decades, produced some of the department's most versatile graduates.", th: "แม้เพื่อนร่วมงานบางคนจะมองว่าวิธีการของเธอไม่ธรรมดา อาจกล่าวได้ว่าถึงขั้นบุ่มบ่าม แต่คำถามอันแหลมคมของเธอได้สร้างบัณฑิตที่รอบด้านที่สุดบางคนของภาควิชาตลอดหลายทศวรรษที่ผ่านมา" },
          { en: "Not only did she insist on meticulous rigor in every argument her students made, but she also demanded a magnanimous willingness to concede when the evidence pointed elsewhere.", th: "เธอไม่เพียงยืนกรานให้นักศึกษาทุกคนมีความเข้มงวดอย่างพิถีพิถันในทุกข้อโต้แย้งเท่านั้น แต่ยังเรียกร้องให้มีน้ำใจใจกว้างพอที่จะยอมรับเมื่อหลักฐานชี้ไปทางอื่นอีกด้วย" },
          { en: "A pragmatic thinker at heart, she never demanded idealism from her students, only that their arguments remain cogent under honest scrutiny.", th: "โดยพื้นฐานแล้วเธอเป็นนักคิดเชิงปฏิบัติจริง เธอไม่เคยเรียกร้องอุดมคติจากนักศึกษาของเธอ เพียงแค่ขอให้ข้อโต้แย้งของพวกเขายังคงมีเหตุผลหนักแน่นเมื่อถูกตรวจสอบอย่างตรงไปตรงมา" },
          { en: "Looking back with the hindsight only three decades can grant, she offered a single piece of advice: adopt a holistic view of failure, treating each mistake as data rather than verdict.", th: "เมื่อมองย้อนกลับไปด้วยการมองย้อนหลังที่มีเพียงสามทศวรรษเท่านั้นที่จะมอบให้ได้ เธอให้คำแนะนำเพียงข้อเดียวคือให้มองความล้มเหลวแบบองค์รวม โดยปฏิบัติต่อความผิดพลาดแต่ละครั้งเป็นข้อมูล ไม่ใช่คำตัดสิน" },
          { en: "Little did the students in that room realize, as she smiled and gathered her notes, that this final lecture would resonate with them longer than any exam ever had.", th: "นักศึกษาในห้องนั้นแทบไม่รู้เลยว่า ขณะที่เธอยิ้มและเก็บโน้ตของเธอ คาบบรรยายสุดท้ายนี้จะสร้างความรู้สึกร่วมกับพวกเขาไปอีกนานยิ่งกว่าการสอบครั้งใดๆ" },
          { en: "As she walked out of the lecture hall for the last time, one student was overheard remarking that her retirement felt less like an ending and more like a particularly cogent argument for starting something new.", th: "ขณะที่เธอเดินออกจากห้องบรรยายเป็นครั้งสุดท้าย มีนักศึกษาคนหนึ่งพูดขึ้นมาว่าการเกษียณของเธอรู้สึกเหมือนไม่ใช่การจบลง แต่เหมือนข้อโต้แย้งที่มีเหตุผลหนักแน่นเป็นพิเศษสำหรับการเริ่มต้นสิ่งใหม่มากกว่า" },
          { en: "Not once, in thirty years of teaching, had she given the same lecture twice -- a fact her former students, now scattered across the world, would arguably call the truest measure of her legacy.", th: "ตลอดสามสิบปีของการสอน เธอไม่เคยบรรยายเรื่องเดิมซ้ำแม้แต่ครั้งเดียว ซึ่งเป็นความจริงที่อดีตนักศึกษาของเธอที่กระจัดกระจายอยู่ทั่วโลกในตอนนี้อาจกล่าวได้ว่าเป็นเครื่องวัดมรดกที่แท้จริงที่สุดของเธอ" }
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
