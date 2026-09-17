const INTERMEDIATE_CURRICULUM = {
  id: "intermediate",
  name: "Intermediate (B1 → B2)",
  levelRange: ["B1", "B2"],
  weeks: [
    {
      week: 1,
      levelTag: "B1",
      title: "Talking About Yourself in Depth",
      objectives: [
        "เข้าใจโครงสร้างและการใช้ Present Perfect เพื่อพูดถึงประสบการณ์และสิ่งที่เพิ่งเกิดขึ้น",
        "สามารถแนะนำตัวเองอย่างละเอียดโดยใช้คำศัพท์เกี่ยวกับบุคลิกภาพและความสำเร็จ",
        "ฝึกอ่านและตอบคำถามจากบทความสั้นเกี่ยวกับการแนะนำตัว"
      ],
      grammar: {
        point: "Present Perfect (Introduction)",
        explanationTh: "Present Perfect ใช้ Have/Has + Verb ช่องที่ 3 เพื่อพูดถึงเหตุการณ์ที่เกิดขึ้นในอดีตแต่ยังมีผลหรือเกี่ยวข้องกับปัจจุบัน เช่น ประสบการณ์ที่เคยทำหรือสิ่งที่เพิ่งเกิดขึ้น เรามักใช้คำว่า ever, never, already, yet, just ร่วมกับโครงสร้างนี้ ต่างจาก Past Simple ตรงที่ Present Perfect ไม่เน้นเวลาที่แน่นอนในอดีต แต่เน้นผลลัพธ์หรือความเชื่อมโยงกับปัจจุบัน",
        examples: [
          "I have lived here for five years.",
          "She has never been to Japan.",
          "They have already finished the report.",
          "Have you ever tried Thai food?"
        ]
      },
      vocabulary: [
        { en: "achievement", th: "ความสำเร็จ", example: "Getting this job is a big achievement for me." },
        { en: "personality", th: "บุคลิกภาพ", example: "Her outgoing personality makes her easy to talk to." },
        { en: "background", th: "ภูมิหลัง / ประวัติความเป็นมา", example: "He comes from a business background." },
        { en: "hobby", th: "งานอดิเรก", example: "Reading novels is my favorite hobby." },
        { en: "accomplish", th: "ทำสำเร็จ / บรรลุผล", example: "I accomplished all my goals this year." },
        { en: "curious", th: "อยากรู้อยากเห็น", example: "She has always been curious about other cultures." },
        { en: "ambitious", th: "ทะเยอทะยาน / มีความมุ่งมั่น", example: "He is ambitious and wants to start his own company." },
        { en: "experience", th: "ประสบการณ์", example: "I have gained a lot of experience from this job." },
        { en: "journey", th: "การเดินทาง / เส้นทางชีวิต", example: "Learning English has been a long journey for me." },
        { en: "milestone", th: "จุดสำคัญ / ก้าวสำคัญ", example: "Graduating from university was a major milestone in her life." }
      ],
      reading: {
        passage: "My name is Nicha, and I have lived in Chiang Mai for most of my life. I have always been curious about different cultures, so I have traveled to five countries so far. Two years ago, I started learning graphic design, and I have already completed three online courses. My biggest achievement has been starting my own small design business last year. I have never regretted taking that risk, even though it hasn't been easy. Now I'm working on a new milestone: expanding my business to serve international clients.",
        questions: [
          {
            question: "What has Nicha already completed?",
            choices: ["Three online courses in graphic design", "A university degree in business", "Five years of work experience", "A trip around the world"],
            answerIndex: 0,
            explanation: "ในบทความระบุชัดเจนว่า Nicha ได้เรียนคอร์สออนไลน์ด้านกราฟิกดีไซน์จบไปแล้วสามคอร์ส"
          },
          {
            question: "What can we infer about Nicha's attitude toward risk?",
            choices: ["She regrets starting her own business.", "She is willing to take risks to achieve her goals.", "She avoids taking any risks in life.", "She thinks starting a business was a mistake."],
            answerIndex: 1,
            explanation: "แม้บทความจะบอกว่าการเริ่มธุรกิจไม่ใช่เรื่องง่าย แต่ Nicha บอกว่าไม่เคยเสียใจเลย แสดงว่าเธอยอมรับความเสี่ยงเพื่อบรรลุเป้าหมาย"
          }
        ]
      },
      speaking: {
        prompt: "ลองแนะนำตัวเองอย่างละเอียด โดยพูดถึงภูมิหลัง งานอดิเรก และความสำเร็จที่ผ่านมาโดยใช้โครงสร้าง Present Perfect เช่น บอกว่าคุณเคยทำอะไรมาบ้างในชีวิต และมีความภาคภูมิใจในเรื่องใด",
        targetPhrase: "I have worked in marketing for three years, and I have recently started learning graphic design as a new hobby."
      },
      quiz: [
        { type: "mcq", question: "Choose the correct sentence.", choices: ["I have went to Japan twice.", "I have been to Japan twice.", "I have go to Japan twice.", "I has been to Japan twice."], answerIndex: 1, explanation: "โครงสร้าง Present Perfect คือ have/has + verb ช่องที่ 3 คำกริยาช่อง 3 ของ go คือ been" },
        { type: "mcq", question: "Which word often appears with the Present Perfect to ask about experience?", choices: ["yesterday", "ever", "last week", "ago"], answerIndex: 1, explanation: "คำว่า 'ever' ใช้ถามประสบการณ์ในรูป Present Perfect เช่น Have you ever...?" },
        { type: "mcq", question: "What does 'achievement' mean?", choices: ["ความล้มเหลว", "ความสำเร็จ", "ความกังวล", "ความสงสัย"], answerIndex: 1, explanation: "achievement แปลว่า ความสำเร็จ" },
        { type: "mcq", question: "Choose the correct meaning of 'ambitious'.", choices: ["ขี้เกียจ", "ทะเยอทะยาน", "ใจเย็น", "ประหยัด"], answerIndex: 1, explanation: "ambitious หมายถึง มีความทะเยอทะยาน มุ่งมั่นสู่เป้าหมาย" },
        { type: "mcq", question: "Complete: 'She ___ never been to Japan.'", choices: ["have", "has", "is", "was"], answerIndex: 1, explanation: "ประธานเอกพจน์ (she) ใช้ has ในรูป Present Perfect" },
        { type: "mcq", question: "According to the passage, what is Nicha's next goal?", choices: ["To move to another country", "To expand her business internationally", "To go back to university", "To stop working as a designer"], answerIndex: 1, explanation: "บทความบอกว่าเธอกำลังทำงานสู่จุดหมายใหม่คือการขยายธุรกิจไปสู่ลูกค้าต่างประเทศ" },
        { type: "mcq", question: "What does the passage suggest about Nicha's journey?", choices: ["It has been easy and free of challenges.", "It has involved effort and some difficulty but she doesn't regret it.", "She failed in her business.", "She has given up on her goals."], answerIndex: 1, explanation: "บทความระบุว่าธุรกิจไม่ใช่เรื่องง่าย แต่เธอไม่เคยเสียใจ แสดงว่าต้องใช้ความพยายามแต่คุ้มค่า" }
      ]
    },
    {
      week: 2,
      levelTag: "B1",
      title: "Past Habits & Experiences",
      objectives: [
        "เข้าใจการใช้ 'used to' เพื่อพูดถึงพฤติกรรมหรือสภาพในอดีตที่ไม่เป็นจริงในปัจจุบัน",
        "แยกความแตกต่างระหว่าง Past Continuous และ Past Simple ในการเล่าเหตุการณ์ในอดีต",
        "ฝึกใช้คำศัพท์เกี่ยวกับความทรงจำและวัยเด็กในการสนทนา"
      ],
      grammar: {
        point: "Used to / Past Continuous vs. Past Simple",
        explanationTh: "Used to + verb ช่องที่ 1 ใช้พูดถึงสิ่งที่เคยทำเป็นประจำในอดีตแต่ปัจจุบันไม่ทำแล้ว เช่น I used to play football. ส่วน Past Continuous (was/were + Ving) ใช้บรรยายเหตุการณ์ที่กำลังดำเนินอยู่ในอดีต มักใช้คู่กับ Past Simple ที่บอกเหตุการณ์สั้นๆ ที่มาขัดจังหวะ เช่น I was cooking when the phone rang.",
        examples: [
          "I used to live in a small village.",
          "She didn't use to like coffee, but now she loves it.",
          "I was watching TV when my friend called.",
          "While we were walking home, it started to rain."
        ]
      },
      vocabulary: [
        { en: "childhood", th: "วัยเด็ก", example: "I had a happy childhood in the countryside." },
        { en: "habit", th: "นิสัย / พฤติกรรมที่ทำเป็นประจำ", example: "Reading before bed is a good habit." },
        { en: "memory", th: "ความทรงจำ", example: "I have fond memories of my grandmother's house." },
        { en: "nostalgic", th: "คิดถึงอดีต / รู้สึกอาลัยอาวรณ์", example: "This song makes me feel nostalgic about my school days." },
        { en: "routine", th: "กิจวัตรประจำวัน", example: "My morning routine used to be very different." },
        { en: "upbringing", th: "การเลี้ยงดู", example: "His strict upbringing taught him discipline." },
        { en: "tradition", th: "ประเพณี", example: "We used to follow this tradition every New Year." },
        { en: "generation", th: "รุ่น / เจเนอเรชัน", example: "My generation grew up without smartphones." },
        { en: "reminisce", th: "รำลึกความหลัง", example: "We sat reminiscing about our university days." },
        { en: "transform", th: "เปลี่ยนแปลงอย่างมาก", example: "The neighborhood has completely transformed since I was a child." }
      ],
      reading: {
        passage: "When I was a child, my family used to spend every summer at my grandparents' farm. We didn't have a television, so we used to play outside all day and listen to my grandfather's stories at night. One evening, while we were sitting around the fire, a sudden storm started, and we had to run inside. I still remember how loud the thunder was that night. Nowadays, the farm has transformed into a small guesthouse, but whenever I visit, I feel nostalgic about those simple summers.",
        questions: [
          {
            question: "What did the family do instead of watching television?",
            choices: ["They used to play outside and listen to stories.", "They used to watch movies at the cinema.", "They used to read books all day.", "They used to visit their neighbors."],
            answerIndex: 0,
            explanation: "บทความบอกว่าครอบครัวไม่มีทีวี จึงเล่นข้างนอกและฟังเรื่องเล่าจากคุณปู่ตอนกลางคืน"
          },
          {
            question: "How does the writer likely feel about the farm becoming a guesthouse?",
            choices: ["Completely indifferent", "A mix of nostalgia and mild sentimentality", "Very angry", "Excited to never visit again"],
            answerIndex: 1,
            explanation: "ผู้เขียนบอกว่ารู้สึก nostalgic ทุกครั้งที่ไปเยี่ยม แสดงว่ามีความรู้สึกคิดถึงอดีตปนอยู่แม้สถานที่จะเปลี่ยนไป"
          }
        ]
      },
      speaking: {
        prompt: "ลองเล่าเหตุการณ์ในวัยเด็กของคุณโดยใช้ 'used to' เพื่อพูดถึงสิ่งที่เคยทำเป็นประจำ และใช้ Past Continuous กับ Past Simple เพื่อเล่าเหตุการณ์หนึ่งที่น่าจดจำเป็นพิเศษ",
        targetPhrase: "I used to visit my grandparents every weekend, and one time, while we were having dinner, the lights suddenly went out."
      },
      quiz: [
        { type: "mcq", question: "Choose the correct sentence about a past habit.", choices: ["I use to wake up early.", "I used to wake up early.", "I am used to wake up early.", "I was use to wake up early."], answerIndex: 1, explanation: "โครงสร้างที่ถูกต้องคือ used to + verb ช่องที่ 1" },
        { type: "mcq", question: "Complete: 'While I ___ dinner, the phone rang.'", choices: ["cooked", "was cooking", "cook", "have cooked"], answerIndex: 1, explanation: "เหตุการณ์ที่กำลังดำเนินอยู่ในอดีตใช้ Past Continuous (was cooking) ส่วนเหตุการณ์สั้นที่มาขัดจังหวะใช้ Past Simple (rang)" },
        { type: "mcq", question: "What does 'nostalgic' mean?", choices: ["ตื่นเต้น", "คิดถึงอดีต", "โกรธ", "สับสน"], answerIndex: 1, explanation: "nostalgic แปลว่า รู้สึกคิดถึง/อาลัยอาวรณ์ถึงอดีต" },
        { type: "mcq", question: "'Upbringing' refers to...", choices: ["สถานที่ทำงาน", "การเลี้ยงดูในวัยเด็ก", "อาหารเช้า", "การเดินทาง"], answerIndex: 1, explanation: "upbringing หมายถึงการเลี้ยงดูหรือการอบรมสั่งสอนตั้งแต่วัยเด็ก" },
        { type: "mcq", question: "Which sentence is grammatically correct?", choices: ["She didn't used to like tea.", "She didn't use to like tea.", "She not used to like tea.", "She don't used to like tea."], answerIndex: 1, explanation: "ในรูปปฏิเสธของ used to เราใช้ didn't use to (ไม่มี d ท้าย use)" },
        { type: "mcq", question: "What happened while the family was sitting around the fire?", choices: ["A storm suddenly started.", "They fell asleep.", "The television broke.", "Their grandfather left."], answerIndex: 0, explanation: "บทความระบุว่าขณะนั่งอยู่รอบกองไฟ เกิดพายุขึ้นอย่างกะทันหัน" },
        { type: "mcq", question: "Why does the writer feel nostalgic when visiting the farm now?", choices: ["Because the farm looks exactly the same as before.", "Because it has changed into a guesthouse, unlike how it used to be.", "Because she never visits anymore.", "Because her grandparents still live there."], answerIndex: 1, explanation: "ฟาร์มได้เปลี่ยนเป็นเกสต์เฮาส์ ทำให้ผู้เขียนคิดถึงช่วงเวลาที่เรียบง่ายในอดีต" }
      ]
    },
    {
      week: 3,
      levelTag: "B1",
      title: "Future Plans & Predictions",
      objectives: [
        "แยกความแตกต่างการใช้ will, going to และ present continuous เพื่อพูดถึงอนาคต",
        "ใช้คำศัพท์เกี่ยวกับการวางแผนและการคาดการณ์อนาคตได้อย่างเหมาะสม",
        "ฝึกพูดถึงแผนการและการคาดการณ์ของตนเองในอนาคตอันใกล้"
      ],
      grammar: {
        point: "Will vs. Going to vs. Present Continuous (Future)",
        explanationTh: "เราใช้ 'will' สำหรับการตัดสินใจในทันทีหรือการคาดเดา/สัญญา เช่น I think it will rain. ใช้ 'going to' เมื่อมีแผนหรือหลักฐานบ่งชี้ล่วงหน้า เช่น She is going to have a baby. ส่วน Present Continuous (is/am/are + Ving) ใช้กับแผนที่นัดหมายไว้แน่นอนแล้ว มักมีเวลาที่ชัดเจน เช่น I'm meeting my client at 5 PM tomorrow.",
        examples: [
          "I think it will rain later today.",
          "We are going to launch the new product next month.",
          "I'm meeting my client at 5 PM tomorrow.",
          "She's going to study abroad next year."
        ]
      },
      vocabulary: [
        { en: "intend", th: "ตั้งใจ / มีความประสงค์", example: "I intend to finish this project by Friday." },
        { en: "forecast", th: "พยากรณ์ / คาดการณ์", example: "The weather forecast predicts heavy rain tomorrow." },
        { en: "resolution", th: "ความตั้งใจ / ปณิธาน", example: "My New Year's resolution is to exercise more." },
        { en: "anticipate", th: "คาดการณ์ล่วงหน้า", example: "We anticipate strong demand for this product." },
        { en: "upcoming", th: "ที่กำลังจะมาถึง", example: "Are you ready for the upcoming exam?" },
        { en: "arrangement", th: "การนัดหมาย / การจัดเตรียม", example: "I've made arrangements to meet him at the airport." },
        { en: "prospect", th: "แนวโน้ม / ความเป็นไปได้", example: "The prospect of a promotion excites her." },
        { en: "likely", th: "มีแนวโน้ม / น่าจะเป็นไปได้", example: "It's likely to rain this afternoon." },
        { en: "tendency", th: "แนวโน้ม / นิสัยที่มักจะทำ", example: "He has a tendency to arrive late." },
        { en: "aim", th: "เป้าหมาย / มุ่งหมาย", example: "Our aim is to expand into new markets." }
      ],
      reading: {
        passage: "Wichai has big plans for the future. Next month, he is going to move to Bangkok to start a new job at a tech company. He has already made arrangements to rent an apartment near his office. His main aim is to save enough money to study for a master's degree abroad within the next three years. Experts anticipate that the tech industry will keep growing, so Wichai believes his career prospects look bright. On Saturday, he is meeting his old university friends for a farewell dinner before he leaves his hometown.",
        questions: [
          {
            question: "What is Wichai's main aim for the future?",
            choices: ["To open his own restaurant", "To save money for a master's degree abroad", "To move back to his hometown", "To become a farmer"],
            answerIndex: 1,
            explanation: "บทความระบุชัดว่า aim หลักของเขาคือเก็บเงินไปเรียนปริญญาโทที่ต่างประเทศ"
          },
          {
            question: "Why does Wichai feel optimistic about his career prospects?",
            choices: ["Because he has already saved enough money.", "Because experts predict the tech industry will keep growing.", "Because his friends told him to be positive.", "Because he has worked in tech for many years already."],
            answerIndex: 1,
            explanation: "บทความบอกว่าผู้เชี่ยวชาญคาดการณ์ว่าอุตสาหกรรมเทคโนโลยีจะเติบโตต่อไป ทำให้ Wichai มองว่าอนาคตด้านอาชีพของเขาสดใส"
          }
        ]
      },
      speaking: {
        prompt: "ลองพูดถึงแผนการในอนาคตของคุณ 3 ข้อ โดยเลือกใช้ will, going to หรือ present continuous ให้เหมาะสมกับสถานการณ์ เช่น แผนที่นัดหมายไว้แล้ว แผนที่ตั้งใจไว้ หรือการคาดเดาเกี่ยวกับอนาคต",
        targetPhrase: "I'm going to apply for a new job next month, and I'm meeting a career counselor on Friday to get some advice."
      },
      quiz: [
        { type: "mcq", question: "Choose the best sentence for a fixed appointment tomorrow at 3 PM.", choices: ["I will meet the dentist tomorrow at 3 PM.", "I'm meeting the dentist tomorrow at 3 PM.", "I meet the dentist tomorrow at 3 PM.", "I meeting the dentist tomorrow."], answerIndex: 1, explanation: "นัดหมายที่แน่นอนแล้วในอนาคตนิยมใช้ Present Continuous" },
        { type: "mcq", question: "Which sentence expresses a spontaneous decision?", choices: ["I'm going to answer the phone.", "I'll answer the phone.", "I am answering the phone tomorrow.", "I answered the phone."], answerIndex: 1, explanation: "'will' ใช้กับการตัดสินใจในทันที ณ ขณะพูด" },
        { type: "mcq", question: "'Anticipate' means...", choices: ["ลืม", "คาดการณ์ล่วงหน้า", "ปฏิเสธ", "เสียใจ"], answerIndex: 1, explanation: "anticipate แปลว่า คาดการณ์หรือคาดหวังล่วงหน้า" },
        { type: "mcq", question: "Choose the meaning of 'resolution' in this context.", choices: ["การแก้ปัญหาทางเทคนิค", "ความตั้งใจหรือปณิธาน", "ความละเอียดของภาพ", "การประชุม"], answerIndex: 1, explanation: "ในบริบทนี้ resolution หมายถึงความตั้งใจ/ปณิธาน เช่น New Year's resolution" },
        { type: "mcq", question: "Complete: 'Look at those clouds! It ___ rain soon.'", choices: ["will", "is going to", "is meeting", "used to"], answerIndex: 1, explanation: "เมื่อมีหลักฐานให้เห็นชัดเจน (เมฆดำ) เราใช้ going to เพื่อคาดการณ์" },
        { type: "mcq", question: "What has Wichai already arranged?", choices: ["A dinner in Bangkok", "An apartment near his office", "A scholarship abroad", "A new job in his hometown"], answerIndex: 1, explanation: "บทความระบุว่าเขาได้จัดเตรียม (arrangements) เช่าอพาร์ตเมนต์ใกล้ที่ทำงานไว้แล้ว" },
        { type: "mcq", question: "What is Wichai doing on Saturday?", choices: ["Moving to Bangkok", "Meeting his university friends for dinner", "Starting his new job", "Applying for a master's program"], answerIndex: 1, explanation: "บทความบอกว่าวันเสาร์เขานัดเจอเพื่อนมหาวิทยาลัยเพื่อทานอาหารเย็นก่อนออกจากบ้านเกิด" }
      ]
    },
    {
      week: 4,
      levelTag: "B1",
      title: "Work & Careers",
      objectives: [
        "แยกความแตกต่างการใช้ Present Perfect และ Past Simple ในบริบทการทำงาน",
        "ใช้คำศัพท์เกี่ยวกับอาชีพการงานได้อย่างถูกต้อง",
        "ฝึกเล่าประวัติการทำงานและประสบการณ์ในอาชีพของตนเอง"
      ],
      grammar: {
        point: "Present Perfect vs. Past Simple",
        explanationTh: "Present Perfect (have/has + V3) ใช้พูดถึงประสบการณ์หรือเหตุการณ์ที่ไม่ระบุเวลาแน่นอน และยังเชื่อมโยงกับปัจจุบัน เช่น I have worked here for two years (ยังทำงานอยู่) ส่วน Past Simple ใช้พูดถึงเหตุการณ์ที่จบไปแล้วในอดีต มักมีการระบุเวลาที่ชัดเจน เช่น I worked there in 2019 (ไม่ได้ทำงานที่นั่นแล้ว) ควรสังเกตคำบ่งบอกเวลา เช่น for, since ใช้กับ Present Perfect ส่วน ago, last year ใช้กับ Past Simple",
        examples: [
          "I have worked at this company for three years.",
          "I worked at a bank before I joined this company in 2018.",
          "She has just received a promotion.",
          "He resigned from his job last month."
        ]
      },
      vocabulary: [
        { en: "promotion", th: "การเลื่อนตำแหน่ง", example: "She received a promotion after two years of hard work." },
        { en: "colleague", th: "เพื่อนร่วมงาน", example: "My colleague helped me finish the report on time." },
        { en: "resign", th: "ลาออก", example: "He decided to resign from his position last week." },
        { en: "qualification", th: "คุณสมบัติ / วุฒิการศึกษา", example: "This job requires a strong qualification in finance." },
        { en: "workload", th: "ปริมาณงาน", example: "My workload has increased a lot this year." },
        { en: "deadline", th: "กำหนดส่ง / เส้นตาย", example: "We have to meet the deadline by Friday." },
        { en: "negotiate", th: "เจรจาต่อรอง", example: "I negotiated a higher salary during the interview." },
        { en: "salary", th: "เงินเดือน", example: "The salary for this position is quite competitive." },
        { en: "internship", th: "การฝึกงาน", example: "She did an internship at a marketing firm last summer." },
        { en: "resume", th: "ประวัติย่อสมัครงาน", example: "You should update your resume before applying for the job." }
      ],
      reading: {
        passage: "Somsri has had an interesting career so far. She graduated from university in 2015 and got her first job as a marketing assistant. Two years later, she resigned from that job to do an internship at a bigger company, hoping to gain more experience. Since then, she has worked her way up and has received two promotions. Last year, she successfully negotiated a higher salary after taking on extra responsibilities. Now she has more than five years of experience and manages a small team, though she says her workload has never been heavier.",
        questions: [
          {
            question: "Why did Somsri resign from her first job?",
            choices: ["She was fired.", "To do an internship at a bigger company for more experience.", "She wanted to retire.", "She moved to another country."],
            answerIndex: 1,
            explanation: "บทความระบุว่าเธอลาออกเพื่อไปฝึกงานที่บริษัทใหญ่ขึ้นเพื่อหาประสบการณ์เพิ่ม"
          },
          {
            question: "What can we infer about Somsri's current job situation regarding workload?",
            choices: ["She finds her job too easy now.", "She is currently dealing with a heavier workload than before.", "She has stopped working entirely.", "She regrets her career choices."],
            answerIndex: 1,
            explanation: "บทความบอกว่า workload ของเธอไม่เคยหนักเท่านี้มาก่อน แสดงว่าปัจจุบันเธอมีภาระงานที่หนักมาก"
          }
        ]
      },
      speaking: {
        prompt: "ลองเล่าประวัติการทำงานของคุณโดยใช้ Present Perfect เพื่อพูดถึงประสบการณ์รวมที่ผ่านมา และใช้ Past Simple เพื่อเล่าเหตุการณ์เฉพาะเจาะจง เช่น เริ่มงานเมื่อไหร่ หรือเปลี่ยนงานตอนไหน",
        targetPhrase: "I have worked in customer service for four years, but I changed companies in 2022 to get better opportunities."
      },
      quiz: [
        { type: "mcq", question: "Choose the correct sentence.", choices: ["I have worked here since 2020.", "I have worked here in 2020.", "I work here since 2020.", "I working here since 2020."], answerIndex: 0, explanation: "'since' ใช้กับ Present Perfect เพื่อระบุจุดเริ่มต้นของช่วงเวลาที่ยังต่อเนื่องถึงปัจจุบัน" },
        { type: "mcq", question: "Which time expression is used with Past Simple?", choices: ["since", "for", "yet", "last year"], answerIndex: 3, explanation: "'last year' ระบุเวลาที่ชัดเจนในอดีต จึงใช้กับ Past Simple" },
        { type: "mcq", question: "What does 'resign' mean?", choices: ["ได้รับการเลื่อนตำแหน่ง", "ลาออกจากงาน", "สมัครงาน", "เข้าประชุม"], answerIndex: 1, explanation: "resign แปลว่า ลาออกจากตำแหน่งหรือหน้าที่การงาน" },
        { type: "mcq", question: "'Negotiate' most closely means...", choices: ["ปฏิเสธ", "เจรจาต่อรอง", "ลาออก", "ประกาศ"], answerIndex: 1, explanation: "negotiate แปลว่า เจรจาต่อรองเพื่อหาข้อตกลงร่วมกัน" },
        { type: "mcq", question: "Complete: 'She ___ her job three months ago.'", choices: ["has left", "left", "leaves", "has leave"], answerIndex: 1, explanation: "เมื่อระบุเวลาที่แน่นอนในอดีต (three months ago) ต้องใช้ Past Simple" },
        { type: "mcq", question: "How many promotions has Somsri received?", choices: ["One", "Two", "Three", "None"], answerIndex: 1, explanation: "บทความระบุว่าเธอได้รับการเลื่อนตำแหน่งสองครั้ง" },
        { type: "mcq", question: "What did Somsri successfully do last year?", choices: ["She resigned from her job.", "She negotiated a higher salary.", "She started an internship.", "She graduated from university."], answerIndex: 1, explanation: "บทความบอกว่าปีที่แล้วเธอเจรจาต่อรองขอเงินเดือนที่สูงขึ้นได้สำเร็จ" }
      ]
    },
    {
      week: 5,
      levelTag: "B1",
      title: "Describing People & Places",
      objectives: [
        "ใช้ Relative Clauses (who/which/that/where) เพื่อบรรยายบุคคลและสถานที่ได้อย่างละเอียด",
        "ใช้คำศัพท์เกี่ยวกับลักษณะเฉพาะของคนและสถานที่",
        "ฝึกบรรยายบุคคลหรือสถานที่ที่ประทับใจโดยใช้ประโยคที่ซับซ้อนขึ้น"
      ],
      grammar: {
        point: "Relative Clauses (who / which / that / where)",
        explanationTh: "Relative Clause ใช้เชื่อมประโยคเพื่อให้ข้อมูลเพิ่มเติมเกี่ยวกับคำนาม โดย 'who' ใช้กับคน 'which' ใช้กับสิ่งของหรือสัตว์ 'that' ใช้ได้ทั้งคนและสิ่งของ (โดยเฉพาะใน defining clause) และ 'where' ใช้กับสถานที่ เช่น The woman who lives next door is a doctor. หรือ This is the town where I grew up. การใช้ Relative Clause ช่วยให้ประโยคซับซ้อนและเป็นธรรมชาติมากขึ้น",
        examples: [
          "The woman who lives next door is a doctor.",
          "This is the café which serves the best coffee in town.",
          "I met a man that used to work with my father.",
          "This is the village where I grew up."
        ]
      },
      vocabulary: [
        { en: "characteristic", th: "ลักษณะเฉพาะ", example: "Kindness is one of her best characteristics." },
        { en: "landmark", th: "สถานที่สำคัญ / จุดสังเกต", example: "The old temple is a famous landmark in this city." },
        { en: "atmosphere", th: "บรรยากาศ", example: "The café has a cozy atmosphere." },
        { en: "resident", th: "ผู้อยู่อาศัย", example: "Local residents enjoy walking in this park every morning." },
        { en: "scenery", th: "ทัศนียภาพ / ทิวทัศน์", example: "The scenery along the coast is breathtaking." },
        { en: "community", th: "ชุมชน", example: "This community is known for being friendly and welcoming." },
        { en: "diverse", th: "หลากหลาย", example: "The city has a diverse population from many countries." },
        { en: "vibrant", th: "มีชีวิตชีวา / คึกคัก", example: "The night market has a vibrant atmosphere." },
        { en: "remote", th: "ห่างไกล", example: "They live in a remote village in the mountains." },
        { en: "picturesque", th: "สวยงามราวภาพวาด", example: "The picturesque village attracts many tourists." }
      ],
      reading: {
        passage: "Chiang Khan is a small riverside town in Loei province that has become popular with tourists in recent years. It's a place where visitors can enjoy picturesque wooden houses along the Mekong River. The residents, who are mostly friendly and welcoming, still maintain a traditional way of life despite the growing number of tourists. In the evening, the old street, which is lined with small shops and restaurants, becomes vibrant with local food vendors. Many people who visit Chiang Khan say the peaceful atmosphere is what makes the town so special.",
        questions: [
          {
            question: "What is Chiang Khan known for?",
            choices: ["Its modern skyscrapers", "Its picturesque wooden houses along the river", "Its large shopping malls", "Its busy international airport"],
            answerIndex: 1,
            explanation: "บทความบอกว่า Chiang Khan มีบ้านไม้ที่สวยงามริมแม่น้ำโขง"
          },
          {
            question: "What does the passage suggest is the main reason tourists love visiting Chiang Khan?",
            choices: ["Its cheap flights", "Its peaceful and traditional atmosphere", "Its large hotels", "Its modern nightlife"],
            answerIndex: 1,
            explanation: "บทความสรุปว่าสิ่งที่ทำให้เมืองนี้พิเศษคือบรรยากาศที่สงบและวิถีชีวิตแบบดั้งเดิม"
          }
        ]
      },
      speaking: {
        prompt: "ลองบรรยายบุคคลหนึ่งที่คุณชื่นชม หรือสถานที่หนึ่งที่คุณประทับใจ โดยใช้ Relative Clause อย่างน้อย 2 ประโยค เช่น อธิบายว่าใครเป็นคนแบบไหน หรือสถานที่นั้นมีลักษณะอย่างไร",
        targetPhrase: "My hometown is a small town where everyone knows each other, and the people who live there are always very friendly."
      },
      quiz: [
        { type: "mcq", question: "Choose the correct relative pronoun: 'This is the house ___ I was born.'", choices: ["who", "which", "where", "that"], answerIndex: 2, explanation: "'where' ใช้กับสถานที่ในประโยค Relative Clause" },
        { type: "mcq", question: "Choose the correct relative pronoun: 'The man ___ called you is my brother.'", choices: ["which", "who", "where", "whose"], answerIndex: 1, explanation: "'who' ใช้กับคนในฐานะประธานของ Relative Clause" },
        { type: "mcq", question: "What does 'vibrant' mean?", choices: ["เงียบสงบ", "มีชีวิตชีวา", "น่าเบื่อ", "เก่าแก่"], answerIndex: 1, explanation: "vibrant แปลว่ามีชีวิตชีวา คึกคัก" },
        { type: "mcq", question: "'Picturesque' is best used to describe...", choices: ["a boring meeting", "a beautiful scenic place", "a difficult exam", "an angry person"], answerIndex: 1, explanation: "picturesque ใช้บรรยายสถานที่ที่สวยงามราวกับภาพวาด" },
        { type: "mcq", question: "Which sentence correctly uses a relative clause?", choices: ["I have a friend which lives in Bangkok.", "I have a friend who lives in Bangkok.", "I have a friend where lives in Bangkok.", "I have a friend whose lives in Bangkok."], answerIndex: 1, explanation: "'who' ใช้กับคน ส่วน 'which' ใช้กับสิ่งของ ประโยคนี้พูดถึงเพื่อนซึ่งเป็นคน จึงต้องใช้ who" },
        { type: "mcq", question: "According to the passage, what do the local residents maintain?", choices: ["A modern lifestyle", "A traditional way of life", "A large tourism industry", "A strict local government"], answerIndex: 1, explanation: "บทความระบุว่าชาวบ้านยังคงรักษาวิถีชีวิตแบบดั้งเดิมไว้" },
        { type: "mcq", question: "What happens on the old street in the evening?", choices: ["It becomes quiet and empty.", "It becomes vibrant with food vendors.", "It closes completely.", "Tourists are not allowed to enter."], answerIndex: 1, explanation: "บทความบอกว่าถนนเก่าจะคึกคักไปด้วยพ่อค้าแม่ค้าขายอาหารท้องถิ่นในตอนเย็น" }
      ]
    },
    {
      week: 6,
      levelTag: "B2",
      title: "Giving Opinions & Agreeing/Disagreeing",
      objectives: [
        "ใช้ modal verbs เพื่อแสดงความคิดเห็นอย่างสุภาพและมั่นใจ เช่น I would say, I might argue",
        "ใช้โครงสร้าง 'So do I' และ 'Neither do I' เพื่อแสดงความเห็นด้วย",
        "ฝึกแสดงความคิดเห็น เห็นด้วย และไม่เห็นด้วยในหัวข้อที่มีข้อถกเถียง"
      ],
      grammar: {
        point: "Modals of Opinion; So do I / Neither do I",
        explanationTh: "เมื่อแสดงความคิดเห็นอย่างสุภาพหรือไม่ฟันธงเกินไป เรามักใช้ modal verbs เช่น I would say, I might argue, It could be argued that... ส่วนโครงสร้าง 'So + auxiliary + subject' ใช้แสดงความเห็นด้วยกับประโยคบอกเล่า เช่น I like tea. – So do I. และ 'Neither + auxiliary + subject' ใช้แสดงความเห็นด้วยกับประโยคปฏิเสธ เช่น I don't like coffee. – Neither do I. โครงสร้างนี้ช่วยให้การสนทนาแสดงความคิดเห็นเป็นธรรมชาติมากขึ้น",
        examples: [
          "I would say that social media has more disadvantages than advantages.",
          "It could be argued that working from home increases productivity.",
          "I don't really enjoy spicy food. – Neither do I.",
          "I think this policy is a good idea. – So do I."
        ]
      },
      vocabulary: [
        { en: "perspective", th: "มุมมอง", example: "From my perspective, this decision was necessary." },
        { en: "controversial", th: "เป็นที่ถกเถียง", example: "Climate change policy is a controversial topic." },
        { en: "convince", th: "ทำให้เชื่อ / โน้มน้าว", example: "He tried to convince me to change my mind." },
        { en: "argument", th: "ข้อโต้แย้ง / เหตุผล", example: "She made a strong argument in favor of the new law." },
        { en: "standpoint", th: "จุดยืน", example: "From an economic standpoint, the plan makes sense." },
        { en: "skeptical", th: "ไม่เชื่อ / สงสัย", example: "I'm skeptical about whether this plan will actually work." },
        { en: "biased", th: "มีอคติ / ลำเอียง", example: "The report seemed biased toward one political party." },
        { en: "valid", th: "สมเหตุสมผล / ใช้ได้", example: "That's a valid point, but I still disagree." },
        { en: "compromise", th: "การประนีประนอม", example: "We reached a compromise after a long discussion." },
        { en: "assert", th: "ยืนยัน / กล่าวอย่างมั่นใจ", example: "She asserted that the new policy would help small businesses." }
      ],
      reading: {
        passage: "During the debate club meeting, Pim and Aran disagreed about whether social media does more harm than good. Pim asserted that social media has damaged people's mental health and made them addicted to comparing themselves with others. Aran, however, argued from a different standpoint, claiming that social media has connected people across the world and given small businesses a platform to grow. Pim admitted that Aran made some valid points, but she remained skeptical about the overall impact. In the end, they reached a compromise: social media itself isn't inherently good or bad, but how people use it makes all the difference.",
        questions: [
          {
            question: "What did Aran argue in the debate?",
            choices: ["Social media only harms people's mental health.", "Social media has connected people and helped small businesses.", "Social media should be banned.", "Social media has no effect on society."],
            answerIndex: 1,
            explanation: "บทความระบุว่า Aran โต้แย้งว่าโซเชียลมีเดียเชื่อมโยงผู้คนทั่วโลกและช่วยธุรกิจขนาดเล็ก"
          },
          {
            question: "What can we infer about Pim's final position after the debate?",
            choices: ["She completely changed her mind to agree with Aran.", "She still had some doubts but acknowledged Aran had good points.", "She refused to listen to any of Aran's arguments.", "She stopped believing social media has any negative effects."],
            answerIndex: 1,
            explanation: "บทความบอกว่า Pim ยอมรับว่า Aran มีประเด็นที่สมเหตุสมผล แต่เธอยังคงสงสัยอยู่ (skeptical) แสดงว่าเธอไม่ได้เปลี่ยนใจทั้งหมด"
          }
        ]
      },
      speaking: {
        prompt: "ลองเลือกหัวข้อที่มีข้อถกเถียง เช่น การทำงานจากบ้าน หรือการใช้โซเชียลมีเดีย แล้วฝึกแสดงความคิดเห็นของคุณโดยใช้ modal verbs และฝึกใช้ 'So do I' หรือ 'Neither do I' เพื่อเห็นด้วยกับคู่สนทนา",
        targetPhrase: "I would argue that remote work improves work-life balance, even though it could be argued that it reduces teamwork."
      },
      quiz: [
        { type: "mcq", question: "Choose the correct response: 'I don't trust online reviews.' – ___", choices: ["So do I.", "Neither do I.", "So I do.", "Neither I do."], answerIndex: 1, explanation: "เมื่อประโยคแรกเป็นปฏิเสธ (don't) ต้องตอบด้วย 'Neither + auxiliary + subject'" },
        { type: "mcq", question: "Choose the correct response: 'I really enjoy debating.' – ___", choices: ["So do I.", "Neither do I.", "So I do.", "Neither am I."], answerIndex: 0, explanation: "เมื่อประโยคแรกเป็นบอกเล่า (enjoy) ต้องตอบด้วย 'So + auxiliary + subject'" },
        { type: "mcq", question: "What does 'skeptical' mean?", choices: ["มั่นใจอย่างมาก", "ไม่เชื่อ / สงสัย", "ยินดี", "ประหลาดใจ"], answerIndex: 1, explanation: "skeptical แปลว่า ไม่เชื่อง่ายๆ หรือมีความสงสัย" },
        { type: "mcq", question: "'Compromise' means...", choices: ["การทะเลาะกัน", "การประนีประนอม", "การหลีกเลี่ยง", "การโกหก"], answerIndex: 1, explanation: "compromise หมายถึงการประนีประนอมหรือหาข้อตกลงร่วมกัน" },
        { type: "mcq", question: "Which sentence politely expresses an opinion?", choices: ["This is definitely wrong.", "I would say this approach has some drawbacks.", "You are completely wrong.", "This is a fact, not an opinion."], answerIndex: 1, explanation: "'I would say' เป็นการใช้ modal เพื่อแสดงความเห็นอย่างสุภาพ ไม่ฟันธงเกินไป" },
        { type: "mcq", question: "What did Pim and Aran finally agree on?", choices: ["Social media should be banned completely.", "It depends on how people use social media.", "Social media is entirely harmful.", "They never reached any agreement."], answerIndex: 1, explanation: "บทความบอกว่าพวกเขาประนีประนอมกันว่าขึ้นอยู่กับวิธีที่คนใช้โซเชียลมีเดีย" },
        { type: "mcq", question: "What was Pim's main concern about social media?", choices: ["It costs too much money.", "It has damaged people's mental health.", "It is too complicated to use.", "It is only used by young people."], answerIndex: 1, explanation: "บทความระบุว่า Pim ยืนยันว่าโซเชียลมีเดียทำร้ายสุขภาพจิตของผู้คน" }
      ]
    },
    {
      week: 7,
      levelTag: "B2",
      title: "Hypothetical Situations",
      objectives: [
        "แยกความแตกต่างระหว่าง First Conditional และ Second Conditional",
        "ใช้คำศัพท์เกี่ยวกับสถานการณ์สมมติและผลลัพธ์ที่อาจเกิดขึ้น",
        "ฝึกพูดถึงสถานการณ์สมมติทั้งที่เป็นไปได้จริงและที่ไม่น่าเป็นไปได้"
      ],
      grammar: {
        point: "First & Second Conditionals",
        explanationTh: "First Conditional (If + Present Simple, will + V1) ใช้พูดถึงสถานการณ์ที่มีความเป็นไปได้จริงในอนาคต เช่น If it rains, I will stay home. ส่วน Second Conditional (If + Past Simple, would + V1) ใช้พูดถึงสถานการณ์สมมติที่ไม่จริงหรือไม่น่าจะเกิดขึ้นในปัจจุบัน/อนาคต เช่น If I won the lottery, I would travel the world. การเลือกใช้ขึ้นอยู่กับว่าสถานการณ์นั้นมีความเป็นไปได้มากน้อยเพียงใด",
        examples: [
          "If it rains tomorrow, I will cancel the picnic.",
          "If I had more free time, I would learn to play the guitar.",
          "If she studies hard, she will pass the exam.",
          "If I were you, I would accept the job offer."
        ]
      },
      vocabulary: [
        { en: "hypothetical", th: "สมมติ", example: "Let's consider a hypothetical situation for a moment." },
        { en: "scenario", th: "สถานการณ์สมมติ", example: "In this scenario, what would you do?" },
        { en: "consequence", th: "ผลที่ตามมา", example: "Every decision has consequences." },
        { en: "alternative", th: "ทางเลือกอื่น", example: "If this plan fails, we need an alternative." },
        { en: "dilemma", th: "สถานการณ์กลืนไม่เข้าคายไม่ออก", example: "She faced a difficult dilemma about which job to choose." },
        { en: "assume", th: "สันนิษฐาน / สมมติ", example: "Let's assume the meeting starts at 9 AM." },
        { en: "suppose", th: "สมมติว่า / คาดว่า", example: "Suppose you lost your job tomorrow, what would you do?" },
        { en: "circumstance", th: "สถานการณ์ / สภาพแวดล้อม", example: "Under these circumstances, I would make the same decision." },
        { en: "outcome", th: "ผลลัพธ์", example: "We are still waiting for the outcome of the negotiation." },
        { en: "regret", th: "เสียใจ / เสียดาย", example: "I would regret it if I didn't take this opportunity." }
      ],
      reading: {
        passage: "Imagine a hypothetical scenario: if you found a wallet full of money on the street, what would you do? This dilemma was actually presented to a group of students in a recent survey. Most students said that if they found a wallet, they would try to return it to its owner, even though it might be tempting to keep it. However, some admitted that if there were no identification inside, they wouldn't know how to find the owner and would probably donate the money to charity instead. The survey shows that most people's decisions depend heavily on the circumstances of the situation.",
        questions: [
          {
            question: "What did most students say they would do if they found a wallet?",
            choices: ["Keep all the money for themselves.", "Try to return it to the owner.", "Ignore it and walk away.", "Give it to the police immediately."],
            answerIndex: 1,
            explanation: "บทความระบุว่านักเรียนส่วนใหญ่บอกว่าจะพยายามคืนกระเป๋าเงินให้เจ้าของ"
          },
          {
            question: "What does the survey suggest about people's honesty?",
            choices: ["People are honest only when it is convenient.", "People's decisions can depend on the specific circumstances, not just fixed rules.", "Nobody would ever return a lost wallet.", "Everyone always keeps money they find."],
            answerIndex: 1,
            explanation: "บทความสรุปว่าการตัดสินใจของคนขึ้นอยู่กับสถานการณ์ เช่น มีบัตรประจำตัวอยู่ในกระเป๋าหรือไม่ ไม่ใช่กฎตายตัวเสมอไป"
          }
        ]
      },
      speaking: {
        prompt: "ลองพูดถึงสถานการณ์สมมติสองแบบ: หนึ่งที่มีความเป็นไปได้จริง (First Conditional) เช่น ถ้าฝนตกพรุ่งนี้จะทำอย่างไร และอีกหนึ่งที่ไม่น่าเป็นไปได้ (Second Conditional) เช่น ถ้าคุณถูกลอตเตอรี่จะทำอย่างไร",
        targetPhrase: "If I won a large amount of money, I would invest most of it and use the rest to travel around the world."
      },
      quiz: [
        { type: "mcq", question: "Choose the correct sentence.", choices: ["If I have time, I would help you.", "If I had time, I would help you.", "If I have time, I will help you.", "If I had time, I will help you."], answerIndex: 1, explanation: "Second Conditional ใช้ If + Past Simple, would + V1 สำหรับสถานการณ์สมมติที่ไม่น่าเป็นไปได้" },
        { type: "mcq", question: "Which conditional describes a realistic future possibility?", choices: ["First Conditional", "Second Conditional", "Third Conditional", "Zero Conditional only"], answerIndex: 0, explanation: "First Conditional ใช้พูดถึงสถานการณ์ที่มีความเป็นไปได้จริงในอนาคต" },
        { type: "mcq", question: "What does 'dilemma' mean?", choices: ["ทางออกที่ง่าย", "สถานการณ์ที่ยากจะตัดสินใจ", "ความสำเร็จ", "ของขวัญ"], answerIndex: 1, explanation: "dilemma หมายถึงสถานการณ์กลืนไม่เข้าคายไม่ออก ตัดสินใจยาก" },
        { type: "mcq", question: "'Consequence' most closely means...", choices: ["ผลที่ตามมา", "สาเหตุ", "ทางเลือก", "ความสงสัย"], answerIndex: 0, explanation: "consequence แปลว่าผลที่ตามมาจากการกระทำหรือการตัดสินใจ" },
        { type: "mcq", question: "Complete: 'If she ___ harder, she would pass the exam.'", choices: ["studies", "studied", "will study", "has studied"], answerIndex: 1, explanation: "Second Conditional ใช้ Past Simple ในประโยคเงื่อนไข (if-clause)" },
        { type: "mcq", question: "What would some students do with the money if there was no identification?", choices: ["Keep it forever", "Donate it to charity", "Give it to the police", "Spend it immediately"], answerIndex: 1, explanation: "บทความบอกว่าถ้าไม่มีข้อมูลเจ้าของ พวกเขาจะบริจาคเงินให้การกุศลแทน" },
        { type: "mcq", question: "What is the main point of the passage?", choices: ["Everyone would keep the money they find.", "People's decisions in hypothetical situations often depend on circumstances.", "Students never think about honesty.", "Money should always be given to the police."], answerIndex: 1, explanation: "บทความเน้นว่าการตัดสินใจในสถานการณ์สมมติขึ้นอยู่กับสถานการณ์แวดล้อมที่แตกต่างกัน" }
      ]
    },
    {
      week: 8,
      levelTag: "B2",
      title: "News & Media",
      objectives: [
        "ใช้ Passive Voice ในการพูดถึงข่าวสารและเหตุการณ์ที่เน้นผลลัพธ์มากกว่าผู้กระทำ",
        "ใช้คำศัพท์เกี่ยวกับข่าวและสื่อมวลชนได้อย่างถูกต้อง",
        "ฝึกอ่านและวิเคราะห์ข่าวสั้นโดยใช้โครงสร้างประโยค Passive Voice"
      ],
      grammar: {
        point: "Passive Voice",
        explanationTh: "Passive Voice ใช้เมื่อต้องการเน้นการกระทำหรือผลลัพธ์มากกว่าผู้กระทำ โครงสร้างคือ Subject + be + Verb ช่องที่ 3 เช่น The news was reported by a local journalist. เรามักใช้ Passive Voice ในข่าวและบทความทางการ เพราะไม่จำเป็นต้องระบุผู้กระทำ หรือผู้กระทำไม่สำคัญเท่าผลลัพธ์ เช่น The bridge was built in 1990 แทนที่จะบอกว่าใครเป็นคนสร้าง",
        examples: [
          "The news was reported by several major outlets.",
          "This article was published yesterday.",
          "The event is being covered live by three TV stations.",
          "Many facts in the story have been exaggerated."
        ]
      },
      vocabulary: [
        { en: "headline", th: "พาดหัวข่าว", example: "The headline caught everyone's attention immediately." },
        { en: "journalist", th: "นักข่าว", example: "The journalist interviewed several witnesses at the scene." },
        { en: "broadcast", th: "การออกอากาศ / ถ่ายทอด", example: "The match was broadcast live on national television." },
        { en: "coverage", th: "การรายงานข่าว / การนำเสนอข่าว", example: "The election received extensive media coverage." },
        { en: "publish", th: "เผยแพร่ / ตีพิมพ์", example: "The report was published in a major newspaper." },
        { en: "censorship", th: "การเซ็นเซอร์ / การควบคุมสื่อ", example: "Some countries are known for strict media censorship." },
        { en: "source", th: "แหล่งข่าว / แหล่งที่มา", example: "The journalist refused to reveal her source." },
        { en: "reliable", th: "น่าเชื่อถือ", example: "It's important to check whether a news source is reliable." },
        { en: "exaggerate", th: "พูดเกินจริง", example: "The headline seemed to exaggerate the actual situation." },
        { en: "outlet", th: "สำนักข่าว / ช่องทางเผยแพร่", example: "The story was picked up by several major news outlets." }
      ],
      reading: {
        passage: "Last week, a story about a new medical breakthrough was published by several news outlets. The research was reported to have found a possible new treatment for a common illness. However, some journalists later pointed out that certain claims in the article had been exaggerated by the original source. As a result, corrections were issued by two major outlets. This case is often cited as an example of why readers should check whether a piece of news comes from a reliable source before sharing it, especially when the headline sounds too good to be true.",
        questions: [
          {
            question: "What happened after some journalists pointed out exaggerated claims?",
            choices: ["The story was completely ignored.", "Corrections were issued by two major outlets.", "The journalists were fired.", "Nothing changed at all."],
            answerIndex: 1,
            explanation: "บทความระบุว่ามีการออกคำแก้ไข (corrections) โดยสำนักข่าวใหญ่สองแห่ง"
          },
          {
            question: "What lesson does this passage suggest for readers?",
            choices: ["All news headlines are completely accurate.", "Readers should verify whether news comes from a reliable source before sharing it.", "Medical research should never be reported.", "Journalists always exaggerate stories on purpose."],
            answerIndex: 1,
            explanation: "บทความสรุปว่าผู้อ่านควรตรวจสอบว่าข่าวมาจากแหล่งที่น่าเชื่อถือหรือไม่ก่อนแชร์ต่อ โดยเฉพาะถ้าพาดหัวข่าวดูดีเกินจริง"
          }
        ]
      },
      speaking: {
        prompt: "ลองเลือกข่าวหนึ่งเรื่องที่คุณเพิ่งอ่านหรือได้ยินมา แล้วเล่าให้ฟังโดยใช้ Passive Voice เพื่อเน้นเหตุการณ์หรือผลลัพธ์ เช่น เหตุการณ์นั้นถูกรายงานอย่างไร หรือถูกเผยแพร่ที่ไหน",
        targetPhrase: "The story was reported by several news outlets, but some of the details were later found to be exaggerated."
      },
      quiz: [
        { type: "mcq", question: "Choose the correct passive sentence.", choices: ["The report was written by a journalist.", "The report wrote by a journalist.", "The journalist was written the report.", "The report has write by a journalist."], answerIndex: 0, explanation: "Passive Voice ที่ถูกต้องคือ Subject + be + V3 (+ by + ผู้กระทำ)" },
        { type: "mcq", question: "Which sentence is in the passive voice?", choices: ["They broadcast the game live.", "The game was broadcast live.", "They are broadcasting the game.", "They will broadcast the game."], answerIndex: 1, explanation: "ประโยคนี้เน้น 'the game' เป็นประธานที่ถูกกระทำ ตามด้วย was + V3 จึงเป็น passive voice" },
        { type: "mcq", question: "What does 'reliable' mean?", choices: ["น่าเชื่อถือ", "น่าสงสัย", "น่ากลัว", "ธรรมดา"], answerIndex: 0, explanation: "reliable แปลว่าน่าเชื่อถือ ไว้วางใจได้" },
        { type: "mcq", question: "'Exaggerate' means...", choices: ["พูดตามความจริง", "พูดเกินจริง", "พูดน้อยเกินไป", "ปฏิเสธ"], answerIndex: 1, explanation: "exaggerate แปลว่าพูดหรือทำให้ดูเกินจริงกว่าความเป็นจริง" },
        { type: "mcq", question: "Complete: 'The article ___ yesterday.'", choices: ["published", "was published", "publishes", "has publish"], answerIndex: 1, explanation: "เนื่องจากบทความ (the article) เป็นผู้ถูกกระทำ (ถูกตีพิมพ์) จึงต้องใช้ passive voice: was published" },
        { type: "mcq", question: "What was the story originally about?", choices: ["A new sports record", "A new medical treatment breakthrough", "A political scandal", "A natural disaster"], answerIndex: 1, explanation: "บทความระบุว่าข่าวนี้เกี่ยวกับการค้นพบวิธีรักษาโรคใหม่ที่อาจเป็นไปได้" },
        { type: "mcq", question: "Who first exaggerated the claims, according to the passage?", choices: ["The journalists who reported corrections", "The original source of the research", "The readers who shared the story", "The news outlets that issued corrections"], answerIndex: 1, explanation: "บทความบอกว่าข้อมูลถูกพูดเกินจริงโดยแหล่งข้อมูลต้นฉบับ (the original source)" }
      ]
    },
    {
      week: 9,
      levelTag: "B2",
      title: "Technology & Society",
      objectives: [
        "ใช้ Reported Speech เพื่อถ่ายทอดคำพูดของผู้อื่นเกี่ยวกับเทคโนโลยีและสังคม",
        "ใช้คำศัพท์เกี่ยวกับเทคโนโลยีและผลกระทบต่อสังคม",
        "ฝึกเปลี่ยนประโยคคำพูดตรงให้เป็นคำพูดรายงาน (reported speech)"
      ],
      grammar: {
        point: "Reported Speech",
        explanationTh: "Reported Speech ใช้ถ่ายทอดสิ่งที่คนอื่นพูดโดยไม่ต้องพูดคำต่อคำ เมื่อเปลี่ยนจากคำพูดตรง (direct speech) เป็นคำพูดรายงาน กริยาในประโยคมักจะถอยไปหนึ่งขั้นเวลา (backshift) เช่น 'I am happy' กลายเป็น She said (that) she was happy หรือ 'I will call you' กลายเป็น He said he would call me สรรพนามและคำบอกเวลา/สถานที่บางคำก็ต้องเปลี่ยนตามบริบทด้วย เช่น today อาจกลายเป็น that day",
        examples: [
          "She said that technology had changed the way we communicate.",
          "He told me that he would upgrade his phone soon.",
          "They said they were worried about screen addiction.",
          "She mentioned that artificial intelligence was becoming more common in daily life."
        ]
      },
      vocabulary: [
        { en: "innovation", th: "นวัตกรรม", example: "This company is known for its constant innovation." },
        { en: "addiction", th: "การเสพติด", example: "Smartphone addiction is a growing concern among teenagers." },
        { en: "artificial", th: "ประดิษฐ์ / เทียม", example: "Artificial intelligence is used in many modern apps." },
        { en: "convenience", th: "ความสะดวกสบาย", example: "Online shopping offers great convenience." },
        { en: "dependence", th: "การพึ่งพา", example: "Our dependence on technology has increased significantly." },
        { en: "breakthrough", th: "ความก้าวหน้าครั้งสำคัญ", example: "Scientists announced a major breakthrough in battery technology." },
        { en: "obsolete", th: "ล้าสมัย", example: "Many old devices have become obsolete." },
        { en: "algorithm", th: "อัลกอริทึม", example: "The app's algorithm recommends videos based on your interests." },
        { en: "privacy", th: "ความเป็นส่วนตัว", example: "People are becoming more concerned about online privacy." },
        { en: "interact", th: "มีปฏิสัมพันธ์", example: "Children today interact with screens more than with people." }
      ],
      reading: {
        passage: "During a recent panel discussion, a technology researcher said that artificial intelligence had made incredible progress in the last decade. She mentioned that this breakthrough had brought great convenience to everyday life, from voice assistants to personalized recommendations. However, she also warned that people's growing dependence on technology could lead to problems such as addiction and reduced face-to-face interaction. When asked about privacy, she said that many algorithms collected more personal data than most users realized. She concluded by saying that society needed to find a balance between enjoying innovation and protecting personal privacy.",
        questions: [
          {
            question: "What did the researcher say about AI's progress?",
            choices: ["It had made little progress recently.", "It had made incredible progress in the last decade.", "It had become completely obsolete.", "It had stopped developing."],
            answerIndex: 1,
            explanation: "บทความระบุว่านักวิจัยบอกว่า AI มีความก้าวหน้าอย่างมากในทศวรรษที่ผ่านมา"
          },
          {
            question: "What is the researcher's overall attitude toward technology?",
            choices: ["She believes technology is entirely bad and should be avoided.", "She sees both benefits and risks, and calls for balance.", "She thinks privacy concerns are not important at all.", "She believes people should stop using algorithms completely."],
            answerIndex: 1,
            explanation: "บทความสรุปว่าเธอเห็นทั้งข้อดี (ความสะดวกสบาย) และความเสี่ยง (การเสพติด ความเป็นส่วนตัว) และเรียกร้องให้หาสมดุล"
          }
        ]
      },
      speaking: {
        prompt: "ลองนึกถึงคำพูดของเพื่อนหรือคนในข่าวเกี่ยวกับเทคโนโลยี แล้วฝึกเล่าคำพูดนั้นใหม่โดยใช้ Reported Speech เช่น เขาพูดว่าอะไรเกี่ยวกับการใช้สมาร์ทโฟนหรือโซเชียลมีเดีย",
        targetPhrase: "My friend said that she was trying to reduce her screen time because she felt she had become too dependent on her phone."
      },
      quiz: [
        { type: "mcq", question: "Change to reported speech: 'I am tired,' she said.", choices: ["She said that she is tired.", "She said that she was tired.", "She said that she has been tired.", "She said that she will be tired."], answerIndex: 1, explanation: "เมื่อเปลี่ยนเป็น reported speech กริยา 'am' ต้องถอยเวลาเป็น 'was'" },
        { type: "mcq", question: "Change to reported speech: 'I will call you,' he said.", choices: ["He said he will call me.", "He said he would call me.", "He said he calls me.", "He said he is calling me."], answerIndex: 1, explanation: "'will' ในคำพูดตรงจะเปลี่ยนเป็น 'would' ใน reported speech" },
        { type: "mcq", question: "What does 'dependence' mean?", choices: ["ความเป็นอิสระ", "การพึ่งพา", "ความสงสัย", "การปฏิเสธ"], answerIndex: 1, explanation: "dependence แปลว่าการพึ่งพาหรือพึ่งพิงสิ่งใดสิ่งหนึ่ง" },
        { type: "mcq", question: "'Obsolete' most closely means...", choices: ["ทันสมัยที่สุด", "ล้าสมัย", "มีราคาแพง", "ใหม่เอี่ยม"], answerIndex: 1, explanation: "obsolete แปลว่าล้าสมัย ไม่ถูกใช้งานแล้ว" },
        { type: "mcq", question: "Complete: 'She said that she ___ worried about her privacy.'", choices: ["is", "was", "be", "will be"], answerIndex: 1, explanation: "ในรูป reported speech กริยา 'is' ต้อง backshift เป็น 'was'" },
        { type: "mcq", question: "What did the researcher warn about regarding algorithms?", choices: ["They are too slow.", "They collect more personal data than users realize.", "They never work correctly.", "They are becoming obsolete."], answerIndex: 1, explanation: "บทความบอกว่าเธอเตือนว่าอัลกอริทึมเก็บข้อมูลส่วนตัวมากกว่าที่ผู้ใช้ส่วนใหญ่ตระหนัก" },
        { type: "mcq", question: "What did the researcher conclude at the end of her talk?", choices: ["Technology should be banned.", "Society needs to balance innovation and privacy protection.", "Privacy is not an important issue.", "AI development should stop immediately."], answerIndex: 1, explanation: "บทความสรุปว่าเธอบอกว่าสังคมต้องหาสมดุลระหว่างการใช้ประโยชน์จากนวัตกรรมกับการปกป้องความเป็นส่วนตัว" }
      ]
    },
    {
      week: 10,
      levelTag: "B2",
      title: "Environment & Global Issues",
      objectives: [
        "ใช้ Third Conditional เพื่อพูดถึงสถานการณ์สมมติในอดีตที่ไม่ได้เกิดขึ้นจริง",
        "ใช้ modals of speculation (must have / might have / could have) เพื่อคาดเดาเหตุการณ์ในอดีต",
        "ใช้คำศัพท์เกี่ยวกับสิ่งแวดล้อมและปัญหาระดับโลกได้อย่างเหมาะสม"
      ],
      grammar: {
        point: "Third Conditional & Modals of Speculation (must have / might have)",
        explanationTh: "Third Conditional (If + Past Perfect, would have + V3) ใช้พูดถึงเหตุการณ์สมมติในอดีตที่ไม่ได้เกิดขึ้นจริง มักแสดงความเสียใจหรือการคาดเดาย้อนหลัง เช่น If we had acted sooner, we would have prevented the damage. ส่วน modals of speculation เช่น must have, might have, could have + V3 ใช้คาดเดาเหตุการณ์ในอดีตที่เราไม่แน่ใจ 100% เช่น The drought must have been caused by climate change (มั่นใจมาก) เทียบกับ It might have been caused by other factors (ไม่แน่ใจ)",
        examples: [
          "If governments had acted sooner, they would have reduced the damage from climate change.",
          "The forest fire must have been caused by extreme heat and drought.",
          "If we had recycled more, we could have reduced plastic waste significantly.",
          "The unusual weather might have been a result of rising global temperatures."
        ]
      },
      vocabulary: [
        { en: "sustainable", th: "ยั่งยืน", example: "We need to develop more sustainable sources of energy." },
        { en: "pollution", th: "มลพิษ", example: "Air pollution is a serious problem in many big cities." },
        { en: "emission", th: "การปล่อยมลพิษ / ก๊าซ", example: "The factory has reduced its carbon emissions significantly." },
        { en: "drought", th: "ภัยแล้ง", example: "The region suffered a severe drought last year." },
        { en: "ecosystem", th: "ระบบนิเวศ", example: "Cutting down forests damages the entire ecosystem." },
        { en: "renewable", th: "หมุนเวียน / นำกลับมาใช้ใหม่ได้", example: "Solar power is a popular renewable energy source." },
        { en: "deforestation", th: "การตัดไม้ทำลายป่า", example: "Deforestation has destroyed many natural habitats." },
        { en: "catastrophe", th: "หายนะ / ภัยพิบัติร้ายแรง", example: "Scientists warned that inaction could lead to an environmental catastrophe." },
        { en: "mitigate", th: "บรรเทา / ลดผลกระทบ", example: "New policies aim to mitigate the effects of climate change." },
        { en: "awareness", th: "ความตระหนักรู้", example: "The campaign helped raise public awareness about pollution." }
      ],
      reading: {
        passage: "Last year, a severe drought affected large parts of the region, damaging crops and harming the local ecosystem. Scientists believe the drought must have been made worse by years of deforestation and rising carbon emissions. If local authorities had invested in sustainable water management earlier, they could have mitigated much of the damage. Environmental groups have since launched campaigns to raise awareness about renewable energy and reduce dependence on fossil fuels. Experts warn that without stronger action, similar disasters might have an even greater impact on future generations, potentially leading to a larger environmental catastrophe.",
        questions: [
          {
            question: "What do scientists believe made the drought worse?",
            choices: ["Too much rainfall in previous years", "Years of deforestation and rising carbon emissions", "A sudden increase in renewable energy use", "Improved water management systems"],
            answerIndex: 1,
            explanation: "บทความระบุว่านักวิทยาศาสตร์เชื่อว่าภัยแล้งรุนแรงขึ้นจากการตัดไม้ทำลายป่าและการปล่อยคาร์บอนที่เพิ่มขึ้น"
          },
          {
            question: "What does the passage suggest could have reduced the damage from the drought?",
            choices: ["Doing nothing and waiting for rain", "Earlier investment in sustainable water management", "Increasing deforestation", "Ignoring carbon emissions completely"],
            answerIndex: 1,
            explanation: "บทความบอกว่าถ้าหน่วยงานท้องถิ่นลงทุนด้านการจัดการน้ำอย่างยั่งยืนตั้งแต่เนิ่นๆ ก็จะสามารถบรรเทาความเสียหายได้มาก"
          }
        ]
      },
      speaking: {
        prompt: "ลองพูดถึงปัญหาสิ่งแวดล้อมหนึ่งเรื่อง แล้วใช้ Third Conditional เพื่อพูดถึงสิ่งที่น่าจะเกิดขึ้นถ้ามีการแก้ไขปัญหานั้นเร็วกว่านี้ และใช้ modals of speculation เพื่อคาดเดาสาเหตุของปัญหานั้น",
        targetPhrase: "If more people had used renewable energy sooner, we might have avoided some of the damage caused by climate change."
      },
      quiz: [
        { type: "mcq", question: "Choose the correct third conditional sentence.", choices: ["If they had invested earlier, they would have reduced the damage.", "If they invested earlier, they would have reduced the damage.", "If they had invested earlier, they would reduce the damage.", "If they invest earlier, they would have reduced the damage."], answerIndex: 0, explanation: "Third Conditional คือ If + Past Perfect, would have + V3" },
        { type: "mcq", question: "Which modal expresses strong certainty about a past event?", choices: ["might have", "could have", "must have", "may have"], answerIndex: 2, explanation: "'must have' ใช้แสดงความมั่นใจสูงในการคาดเดาเหตุการณ์ในอดีต" },
        { type: "mcq", question: "What does 'deforestation' mean?", choices: ["การปลูกป่า", "การตัดไม้ทำลายป่า", "การอนุรักษ์น้ำ", "การผลิตพลังงาน"], answerIndex: 1, explanation: "deforestation แปลว่าการตัดไม้ทำลายป่า" },
        { type: "mcq", question: "'Sustainable' most closely means...", choices: ["ยั่งยืน ใช้ได้ในระยะยาว", "สิ้นเปลือง", "เป็นพิษ", "ชั่วคราว"], answerIndex: 0, explanation: "sustainable แปลว่ายั่งยืน สามารถดำเนินต่อไปได้ในระยะยาวโดยไม่ทำลายทรัพยากร" },
        { type: "mcq", question: "Complete: 'The fire ___ started by lightning; the sky was very stormy that night.'", choices: ["must have been", "must be", "must had been", "must having been"], answerIndex: 0, explanation: "การคาดเดาเหตุการณ์ในอดีตด้วยความมั่นใจสูงใช้โครงสร้าง must have + V3" },
        { type: "mcq", question: "What have environmental groups launched since the drought?", choices: ["Campaigns against renewable energy", "Campaigns to raise awareness about renewable energy", "Programs to increase deforestation", "Plans to stop all farming"], answerIndex: 1, explanation: "บทความระบุว่ากลุ่มอนุรักษ์สิ่งแวดล้อมได้เริ่มแคมเปญเพื่อสร้างความตระหนักรู้เกี่ยวกับพลังงานหมุนเวียน" },
        { type: "mcq", question: "What do experts warn could happen without stronger action?", choices: ["The environment will automatically improve.", "Similar disasters could have a greater impact in the future.", "Droughts will completely stop occurring.", "Fossil fuels will become more sustainable."], answerIndex: 1, explanation: "บทความเตือนว่าหากไม่มีมาตรการที่เข้มแข็งกว่านี้ ภัยพิบัติในลักษณะเดียวกันอาจส่งผลกระทบรุนแรงขึ้นในอนาคต" }
      ]
    },
    {
      week: 11,
      levelTag: "B2",
      title: "Business & Professional Communication",
      objectives: [
        "ใช้ภาษาทางการ (formal register) ในการสื่อสารทางธุรกิจ เช่น อีเมลหรือการประชุม",
        "ใช้คำเชื่อมประโยคขั้นสูง เช่น however, therefore, moreover เพื่อเชื่อมความคิดอย่างเป็นเหตุเป็นผล",
        "ฝึกใช้คำศัพท์ทางธุรกิจในการสื่อสารอย่างมืออาชีพ"
      ],
      grammar: {
        point: "Formal Register & Linking Words (however, therefore, moreover)",
        explanationTh: "ในการสื่อสารทางธุรกิจ เรามักใช้ภาษาที่เป็นทางการมากกว่าภาษาพูดทั่วไป เช่น หลีกเลี่ยงการย่อคำ (I'm → I am) และใช้คำเชื่อมที่แสดงเหตุผลหรือความขัดแย้งอย่างชัดเจน คำว่า 'however' ใช้แสดงความขัดแย้งหรือตรงข้าม 'therefore' ใช้แสดงผลลัพธ์หรือข้อสรุป และ 'moreover' ใช้เพิ่มเติมข้อมูลที่สนับสนุนแนวคิดเดิม การใช้คำเชื่อมเหล่านี้ช่วยให้การเขียนหรือพูดในที่ทำงานดูเป็นมืออาชีพและมีเหตุผลมากขึ้น",
        examples: [
          "Sales have declined this quarter. However, we expect improvement next month.",
          "The proposal was well-received; therefore, we will proceed with implementation.",
          "The new system saves time. Moreover, it reduces the risk of errors.",
          "We regret to inform you that the meeting has been postponed."
        ]
      },
      vocabulary: [
        { en: "stakeholder", th: "ผู้มีส่วนได้ส่วนเสีย", example: "We need to consult all stakeholders before making a decision." },
        { en: "proposal", th: "ข้อเสนอ", example: "The manager submitted a proposal for the new project." },
        { en: "revenue", th: "รายได้", example: "The company's revenue increased by ten percent this year." },
        { en: "negotiation", th: "การเจรจา", example: "The negotiation between the two companies lasted several hours." },
        { en: "correspondence", th: "การติดต่อสื่อสารทางจดหมาย/อีเมล", example: "Please keep a record of all correspondence with the client." },
        { en: "agenda", th: "วาระการประชุม", example: "The first item on the agenda is the budget review." },
        { en: "feedback", th: "ข้อเสนอแนะ / ความคิดเห็นตอบกลับ", example: "We would appreciate your feedback on this proposal." },
        { en: "procurement", th: "การจัดซื้อจัดจ้าง", example: "The procurement department is responsible for ordering supplies." },
        { en: "delegate", th: "มอบหมายงาน", example: "A good manager knows how to delegate tasks effectively." },
        { en: "prioritize", th: "จัดลำดับความสำคัญ", example: "We need to prioritize the most urgent tasks first." }
      ],
      reading: {
        passage: "Dear Team, I am writing to update you on the progress of our new client proposal. The initial negotiation went well; therefore, we are optimistic about securing the contract. However, several stakeholders have raised concerns about the proposed budget, and we will need to address this before finalizing the agreement. Moreover, the procurement department has requested additional time to review supplier costs. I would like to delegate the task of preparing a revised proposal to the finance team by Friday. Please prioritize this task, as it is the main item on next week's agenda. I welcome any feedback before then.",
        questions: [
          {
            question: "What did several stakeholders raise concerns about?",
            choices: ["The meeting schedule", "The proposed budget", "The office location", "The company's revenue report"],
            answerIndex: 1,
            explanation: "บทความระบุว่าผู้มีส่วนได้ส่วนเสียหลายคนแสดงความกังวลเกี่ยวกับงบประมาณที่เสนอ"
          },
          {
            question: "What can we infer about the overall tone of the email?",
            choices: ["It is casual and unprofessional.", "It is formal and aims to keep the team informed and organized.", "It expresses that the deal has completely failed.", "It ignores the client's needs entirely."],
            answerIndex: 1,
            explanation: "อีเมลใช้ภาษาทางการ (I am writing, however, therefore, moreover) และมีโครงสร้างชัดเจนเพื่อแจ้งความคืบหน้าและมอบหมายงาน แสดงถึงความเป็นมืออาชีพ"
          }
        ]
      },
      speaking: {
        prompt: "ลองฝึกพูดสรุปสถานการณ์ทางธุรกิจสมมติหนึ่งเรื่อง โดยใช้ภาษาทางการและคำเชื่อม เช่น however, therefore, moreover เพื่อเชื่อมโยงความคิดอย่างมีเหตุผล เหมือนกำลังรายงานในที่ประชุม",
        targetPhrase: "Our revenue has increased this quarter; however, costs have also risen. Therefore, we must prioritize reducing unnecessary expenses."
      },
      quiz: [
        { type: "mcq", question: "Which word is used to show contrast between two ideas?", choices: ["therefore", "moreover", "however", "because"], answerIndex: 2, explanation: "'however' ใช้แสดงความขัดแย้งหรือตรงข้ามระหว่างสองความคิด" },
        { type: "mcq", question: "Which word is used to add supporting information?", choices: ["moreover", "however", "but", "despite"], answerIndex: 0, explanation: "'moreover' ใช้เพิ่มเติมข้อมูลที่สนับสนุนแนวคิดเดิม" },
        { type: "mcq", question: "What does 'stakeholder' mean?", choices: ["ลูกค้าเท่านั้น", "ผู้มีส่วนได้ส่วนเสีย", "พนักงานใหม่", "คู่แข่งทางธุรกิจ"], answerIndex: 1, explanation: "stakeholder หมายถึงผู้มีส่วนได้ส่วนเสียในองค์กรหรือโครงการ" },
        { type: "mcq", question: "'Delegate' most closely means...", choices: ["ปฏิเสธงาน", "มอบหมายงานให้ผู้อื่น", "ทำงานคนเดียว", "ยกเลิกงาน"], answerIndex: 1, explanation: "delegate แปลว่ามอบหมายงานหรือความรับผิดชอบให้ผู้อื่นทำ" },
        { type: "mcq", question: "Choose the more formal sentence.", choices: ["I'm gonna send it soon.", "I will send it as soon as possible.", "I'll send it later, no worries.", "Sending it, don't worry."], answerIndex: 1, explanation: "ภาษาทางการหลีกเลี่ยงการย่อคำและคำพูดแบบไม่เป็นทางการ" },
        { type: "mcq", question: "What has the procurement department requested?", choices: ["More staff", "Additional time to review supplier costs", "A new office", "A reduction in revenue"], answerIndex: 1, explanation: "บทความระบุว่าฝ่ายจัดซื้อจัดจ้างขอเวลาเพิ่มเติมเพื่อทบทวนต้นทุนของซัพพลายเออร์" },
        { type: "mcq", question: "What is the writer asking the finance team to do?", choices: ["Cancel the client proposal", "Prepare a revised proposal by Friday", "Delay the negotiation indefinitely", "Fire the procurement department"], answerIndex: 1, explanation: "บทความระบุว่าผู้เขียนต้องการมอบหมายให้ฝ่ายการเงินจัดทำข้อเสนอฉบับปรับปรุงให้เสร็จภายในวันศุกร์" }
      ]
    },
    {
      week: 12,
      levelTag: "B2",
      title: "Debate & Presentation Skills",
      objectives: [
        "ใช้คำเชื่อมขั้นสูงเพื่อการโต้แย้งและการนำเสนออย่างมีเหตุผล",
        "ทบทวนโครงสร้างไวยากรณ์ทั้งหมดที่เรียนมาตลอด 11 สัปดาห์",
        "ฝึกพูดโต้แย้งและนำเสนอความคิดเห็นอย่างมั่นใจในสถานการณ์จำลอง"
      ],
      grammar: {
        point: "Advanced Connectors & Comprehensive Review",
        explanationTh: "สัปดาห์นี้เป็นการทบทวนไวยากรณ์ทั้งหมดที่เรียนมา ตั้งแต่ Present Perfect, Past Habits, Future Forms, Relative Clauses, Modals of Opinion, Conditionals, Passive Voice, Reported Speech, จนถึง Modals of Speculation และภาษาทางการ นอกจากนี้ยังเรียนรู้คำเชื่อมขั้นสูงสำหรับการโต้แย้งและนำเสนอ เช่น 'furthermore' (ยิ่งไปกว่านั้น), 'nevertheless' (อย่างไรก็ตาม), 'in contrast' (ในทางตรงกันข้าม), และ 'as a result' (ดังนั้น/เป็นผลให้) ซึ่งช่วยให้การนำเสนอความคิดเห็นซับซ้อนและน่าเชื่อถือมากขึ้น",
        examples: [
          "Furthermore, studies have shown that remote work increases productivity.",
          "Nevertheless, some employees still prefer working in an office.",
          "In contrast, younger workers tend to value flexibility more than job security.",
          "As a result, many companies have adopted hybrid working models."
        ]
      },
      vocabulary: [
        { en: "persuasive", th: "โน้มน้าวใจ", example: "She gave a persuasive speech that convinced the audience." },
        { en: "rebuttal", th: "การโต้แย้งกลับ", example: "His rebuttal weakened the opposing team's argument." },
        { en: "evidence", th: "หลักฐาน", example: "You need strong evidence to support your argument." },
        { en: "articulate", th: "พูดได้ชัดเจน / แสดงความคิดได้ดี", example: "She is very articulate when explaining complex ideas." },
        { en: "coherent", th: "มีเหตุผลสอดคล้องกัน / เป็นระเบียบ", example: "His presentation was clear and coherent from start to finish." },
        { en: "emphasize", th: "เน้นย้ำ", example: "The speaker emphasized the importance of teamwork." },
        { en: "summarize", th: "สรุป", example: "Let me summarize the main points before we finish." },
        { en: "audience", th: "ผู้ฟัง / ผู้ชม", example: "The audience asked several challenging questions after the presentation." },
        { en: "rhetoric", th: "วาทศิลป์ / การใช้ภาษาโน้มน้าว", example: "Politicians often use powerful rhetoric to win support." },
        { en: "concede", th: "ยอมรับข้อโต้แย้ง / ยอมแพ้", example: "After hearing the evidence, she conceded that her opponent had a valid point." }
      ],
      reading: {
        passage: "In the final round of the debate competition, Nueng argued persuasively that schools should reduce homework, citing evidence that students who have used to studying under less pressure often perform just as well academically. Her opponent, Fah, offered a strong rebuttal, arguing that if homework were reduced, students would have less practice and could fall behind. Nevertheless, Nueng remained coherent and articulate, emphasizing that quality of study time matters more than quantity. In contrast, Fah insisted that without sufficient practice, students would struggle in exams. As a result, the judges concluded that both speakers had made compelling arguments, though Nueng was praised for how clearly she had summarized her points at the end.",
        questions: [
          {
            question: "What was Fah's main argument in the debate?",
            choices: ["Homework should be completely eliminated.", "Reducing homework would cause students to fall behind due to less practice.", "Students never need to study.", "Exams should be canceled entirely."],
            answerIndex: 1,
            explanation: "บทความระบุว่า Fah โต้แย้งว่าหากลดการบ้านลง นักเรียนจะฝึกฝนน้อยลงและอาจตามไม่ทันในการสอบ"
          },
          {
            question: "What can we infer about why Nueng was praised at the end?",
            choices: ["Because she gave up during the debate.", "Because she communicated her ideas clearly and summarized them effectively.", "Because she agreed completely with Fah.", "Because she refused to answer any questions."],
            answerIndex: 1,
            explanation: "บทความระบุว่า Nueng ได้รับคำชมเพราะเธอสามารถสรุปประเด็นของตนเองได้อย่างชัดเจนในตอนท้าย ซึ่งแสดงถึงทักษะการนำเสนอที่ดี"
          }
        ]
      },
      speaking: {
        prompt: "ลองเลือกหัวข้อโต้แย้งหนึ่งเรื่อง เช่น การบ้านในโรงเรียนควรลดลงหรือไม่ แล้วฝึกนำเสนอความคิดเห็นของคุณโดยใช้คำเชื่อมขั้นสูง เช่น furthermore, nevertheless, in contrast, as a result และพยายามใช้ไวยากรณ์ที่เรียนมาตลอดคอร์สให้ครบถ้วน",
        targetPhrase: "Furthermore, if schools reduced homework, students would have more time for other activities; nevertheless, they would still need enough practice to perform well in exams."
      },
      quiz: [
        { type: "mcq", question: "Which connector means 'in addition to what was already said'?", choices: ["nevertheless", "furthermore", "in contrast", "although"], answerIndex: 1, explanation: "'furthermore' ใช้เพื่อเพิ่มเติมข้อมูลหรือเหตุผลที่สนับสนุนสิ่งที่พูดไปแล้ว" },
        { type: "mcq", question: "Which connector shows an unexpected contrast?", choices: ["as a result", "therefore", "nevertheless", "moreover"], answerIndex: 2, explanation: "'nevertheless' ใช้แสดงความขัดแย้งหรือสิ่งที่ไม่คาดคิดหลังจากข้อความก่อนหน้า" },
        { type: "mcq", question: "What does 'concede' mean?", choices: ["ปฏิเสธอย่างสิ้นเชิง", "ยอมรับว่าอีกฝ่ายมีเหตุผล", "โกรธเคือง", "หลีกเลี่ยงการตอบ"], answerIndex: 1, explanation: "concede แปลว่ายอมรับว่าอีกฝ่ายมีประเด็นที่ถูกต้องหรือสมเหตุสมผล" },
        { type: "mcq", question: "Choose the correct sentence using a relative clause.", choices: ["This is the topic which we debated it yesterday.", "This is the topic that we debated yesterday.", "This is the topic who we debated yesterday.", "This is the topic where we debated yesterday."], answerIndex: 1, explanation: "'that' ใช้แทนสิ่งของ (the topic) ในประโยค Relative Clause ได้อย่างถูกต้อง และไม่ต้องมี it ซ้ำ" },
        { type: "mcq", question: "Choose the correct conditional: 'If the school ___ homework, students would have had more free time.'", choices: ["reduced", "had reduced", "reduces", "will reduce"], answerIndex: 1, explanation: "Third Conditional ใช้ If + Past Perfect (had reduced), would have + V3 เพื่อพูดถึงสถานการณ์สมมติในอดีต" },
        { type: "mcq", question: "What did the judges conclude about the debate?", choices: ["Fah's argument was completely wrong.", "Both speakers made compelling arguments.", "Nueng lost the debate entirely.", "Homework should definitely be eliminated."], answerIndex: 1, explanation: "บทความระบุว่ากรรมการสรุปว่าทั้งสองฝ่ายต่างมีข้อโต้แย้งที่น่าเชื่อถือ" },
        { type: "mcq", question: "What quality of Nueng's speech impressed the judges the most?", choices: ["Her loud voice", "How clearly she summarized her points at the end", "Her use of complicated vocabulary", "Her refusal to listen to Fah"], answerIndex: 1, explanation: "บทความระบุว่า Nueng ได้รับคำชมเพราะสามารถสรุปประเด็นของตัวเองได้อย่างชัดเจนในตอนท้าย" }
      ]
    }
  ]
};
