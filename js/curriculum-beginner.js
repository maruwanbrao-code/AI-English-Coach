const BEGINNER_CURRICULUM = {
  id: "beginner",
  name: "Beginner (A1 → A2)",
  levelRange: ["A1", "A2"],
  weeks: [
    {
      week: 1,
      levelTag: "A1",
      title: "Greetings & Introductions",
      objectives: [
        "ทักทายและแนะนำตัวเองเป็นภาษาอังกฤษได้",
        "ใช้กริยา \"to be\" (am/is/are) ได้อย่างถูกต้อง",
        "บอกชื่อ อาชีพ และประเทศของตนเองและผู้อื่นได้"
      ],
      grammar: {
        point: "Verb 'to be' (am/is/are)",
        explanationTh: "กริยา 'to be' ในภาษาอังกฤษมีสามรูปคือ am, is และ are ขึ้นอยู่กับประธานของประโยค เราใช้ am กับ I ใช้ is กับ he, she, it หรือชื่อคนคนเดียว และใช้ are กับ you, we, they หรือคนหลายคน กริยา to be ใช้บอกว่าใครเป็นใคร มาจากไหน หรือมีลักษณะอย่างไร เช่น I am a student แปลว่า ฉันเป็นนักเรียน",
        examples: [
          { en: "I am a student.", th: "ฉันเป็นนักเรียน", highlight: "am" },
          { en: "She is from Thailand.", th: "เธอมาจากประเทศไทย", highlight: "is" },
          { en: "They are teachers.", th: "พวกเขาเป็นครู", highlight: "are" },
          { en: "He is my friend.", th: "เขาเป็นเพื่อนของฉัน", highlight: "is" }
        ]
      },
      vocabulary: [
        { en: "name", th: "ชื่อ", example: "What is your name?", exampleTh: "ชื่อของคุณคืออะไร" },
        { en: "hello", th: "สวัสดี", example: "Hello, how are you?", exampleTh: "สวัสดี คุณเป็นอย่างไรบ้าง" },
        { en: "goodbye", th: "ลาก่อน", example: "Goodbye, see you tomorrow!", exampleTh: "ลาก่อน แล้วเจอกันพรุ่งนี้นะ" },
        { en: "friend", th: "เพื่อน", example: "This is my friend, Tom.", exampleTh: "นี่คือเพื่อนของฉัน ทอม" },
        { en: "teacher", th: "ครู", example: "My teacher is very kind.", exampleTh: "ครูของฉันใจดีมาก" },
        { en: "student", th: "นักเรียน", example: "I am a student at this school.", exampleTh: "ฉันเป็นนักเรียนที่โรงเรียนนี้" },
        { en: "country", th: "ประเทศ", example: "Which country are you from?", exampleTh: "คุณมาจากประเทศอะไร" },
        { en: "meet", th: "พบ, เจอ", example: "Nice to meet you.", exampleTh: "ยินดีที่ได้พบคุณ" },
        { en: "morning", th: "ตอนเช้า", example: "Good morning, everyone!", exampleTh: "สวัสดีตอนเช้าทุกคน" },
        { en: "nice", th: "ดี, น่ายินดี", example: "It's nice to meet you.", exampleTh: "ยินดีที่ได้รู้จักคุณ" }
      ],
      reading: {
        passage: "Hello! My name is Anna. I am from Canada. I am a teacher at a small school. This is my friend, Tom. He is a student, not a teacher. We are very happy to meet new people.",
        questions: [
          { question: "What is Anna's job?", choices: ["Teacher", "Student", "Friend", "Doctor"], answerIndex: 0, explanation: "ในบทอ่านบอกว่า Anna เป็นครู (a teacher) ที่โรงเรียนเล็กๆ" },
          { question: "Where is Anna from?", choices: ["Thailand", "Canada", "Japan", "France"], answerIndex: 1, explanation: "บทอ่านระบุว่า Anna มาจากประเทศแคนาดา (I am from Canada)" }
        ]
      },
      speaking: {
        prompt: "ลองแนะนำตัวเองเป็นภาษาอังกฤษ โดยบอกชื่อของคุณและกล่าวคำทักทายอย่างสุภาพ ฝึกออกเสียงให้ชัดเจนทีละคำ",
        targetPhrase: "Hi, my name is Anna. Nice to meet you."
      },
      story: {
        title: "สุนัขน้อยผู้ขี้อาย",
        sentences: [
          { en: "This is Max.", th: "นี่คือแม็กซ์" },
          { en: "Max is a small dog.", th: "แม็กซ์เป็นสุนัขตัวเล็ก" },
          { en: "He is very shy.", th: "เขาขี้อายมาก" },
          { en: "Every morning, Max meets a cat named Lily.", th: "ทุกเช้า แม็กซ์เจอแมวชื่อลิลลี่" },
          { en: "\"Hello, Max!\" says Lily.", th: "\"สวัสดี แม็กซ์!\" ลิลลี่พูด" },
          { en: "Max says nothing. He is too shy.", th: "แม็กซ์ไม่พูดอะไรเลย เขาขี้อายเกินไป" },
          { en: "One day, Lily says, \"Nice to meet you, Max.\"", th: "วันหนึ่ง ลิลลี่พูดว่า \"ยินดีที่ได้รู้จักนะ แม็กซ์\"" },
          { en: "Max smiles and says, \"Hello! My name is Max.\"", th: "แม็กซ์ยิ้มแล้วพูดว่า \"สวัสดี! ผมชื่อแม็กซ์\"" },
          { en: "Lily is very happy.", th: "ลิลลี่ดีใจมาก" },
          { en: "Now Max and Lily are good friends.", th: "ตอนนี้แม็กซ์และลิลลี่เป็นเพื่อนที่ดีต่อกัน" },
          { en: "They say hello every morning.", th: "พวกเขาทักทายกันทุกเช้า" },
          { en: "Goodbye is never sad, because they meet again tomorrow.", th: "คำว่าลาก่อนไม่เคยเศร้าเลย เพราะพวกเขาจะได้เจอกันอีกในวันพรุ่งนี้" }
        ]
      },
      quiz: [
        { type: "mcq", question: "Choose the correct word: I ___ a student.", choices: ["am", "is", "are", "be"], answerIndex: 0, explanation: "ใช้ am กับประธาน I เสมอ" },
        { type: "mcq", question: "Choose the correct word: She ___ from Thailand.", choices: ["am", "is", "are", "be"], answerIndex: 1, explanation: "ใช้ is กับประธานเอกพจน์ เช่น she, he, it" },
        { type: "mcq", question: "Choose the correct word: They ___ teachers.", choices: ["am", "is", "are", "be"], answerIndex: 2, explanation: "ใช้ are กับประธานพหูพจน์ เช่น they, we, you" },
        { type: "mcq", question: "What does 'goodbye' mean?", choices: ["สวัสดี", "ลาก่อน", "ขอบคุณ", "ขอโทษ"], answerIndex: 1, explanation: "'Goodbye' แปลว่า ลาก่อน ใช้ตอนจากลากัน" },
        { type: "mcq", question: "Which word means 'ครู' in English?", choices: ["Student", "Friend", "Teacher", "Country"], answerIndex: 2, explanation: "'Teacher' แปลว่า ครู" },
        { type: "mcq", question: "According to the passage, what is Anna's job?", choices: ["Teacher", "Student", "Doctor", "Friend"], answerIndex: 0, explanation: "บทอ่านบอกว่า Anna เป็นครู" },
        { type: "mcq", question: "Is Tom a teacher or a student?", choices: ["Teacher", "Student", "Both", "Neither"], answerIndex: 1, explanation: "บทอ่านบอกว่า Tom เป็นนักเรียน ไม่ใช่ครู" }
      ]
    },
    {
      week: 2,
      levelTag: "A1",
      title: "Family & Personal Info",
      objectives: [
        "ใช้คำสรรพนามแสดงความเป็นเจ้าของ (my/your/his/her) ได้ถูกต้อง",
        "ถามและตอบคำถามด้วย who, what, where ได้",
        "แนะนำสมาชิกในครอบครัวเป็นภาษาอังกฤษได้"
      ],
      grammar: {
        point: "Possessive adjectives (my/your/his/her) and question words (who/what/where)",
        explanationTh: "คำสรรพนามแสดงความเป็นเจ้าของ เช่น my (ของฉัน) your (ของคุณ) his (ของเขา ผู้ชาย) her (ของเธอ ผู้หญิง) ใช้วางหน้าคำนามเพื่อบอกว่าสิ่งนั้นเป็นของใคร ส่วนคำคำถาม who ใช้ถามว่า 'ใคร' what ใช้ถามว่า 'อะไร' และ where ใช้ถามว่า 'ที่ไหน' เรามักใช้คำถามเหล่านี้นำหน้าประโยคคำถาม เช่น Who is that? แปลว่า นั่นใคร",
        examples: [
          { en: "This is my mother.", th: "นี่คือแม่ของฉัน", highlight: "my" },
          { en: "What is her name?", th: "เธอชื่ออะไร", highlight: "her" },
          { en: "Where is your brother?", th: "พี่ชายของคุณอยู่ที่ไหน", highlight: "Where" },
          { en: "Who is that man?", th: "ผู้ชายคนนั้นคือใคร", highlight: "Who" }
        ]
      },
      vocabulary: [
        { en: "mother", th: "แม่", example: "This is my mother.", exampleTh: "นี่คือแม่ของฉัน" },
        { en: "father", th: "พ่อ", example: "My father works in Bangkok.", exampleTh: "พ่อของฉันทำงานที่กรุงเทพฯ" },
        { en: "sister", th: "พี่สาว หรือ น้องสาว", example: "I have one sister.", exampleTh: "ฉันมีพี่สาวหรือน้องสาวหนึ่งคน" },
        { en: "brother", th: "พี่ชาย หรือ น้องชาย", example: "My brother is ten years old.", exampleTh: "น้องชายของฉันอายุสิบขวบ" },
        { en: "family", th: "ครอบครัว", example: "I love my family.", exampleTh: "ฉันรักครอบครัวของฉัน" },
        { en: "son", th: "ลูกชาย", example: "He is their son.", exampleTh: "เขาเป็นลูกชายของพวกเขา" },
        { en: "daughter", th: "ลูกสาว", example: "She is my daughter.", exampleTh: "เธอเป็นลูกสาวของฉัน" },
        { en: "age", th: "อายุ", example: "What is your age?", exampleTh: "คุณอายุเท่าไหร่" },
        { en: "address", th: "ที่อยู่", example: "What is your address?", exampleTh: "ที่อยู่ของคุณคืออะไร" },
        { en: "phone number", th: "เบอร์โทรศัพท์", example: "Can I have your phone number?", exampleTh: "ขอเบอร์โทรศัพท์ของคุณได้ไหม" }
      ],
      reading: {
        passage: "This is my family. My father's name is John, and my mother's name is Lisa. I have one sister and one brother. My sister is ten years old, and my brother is five years old. We live in Bangkok with our grandmother.",
        questions: [
          { question: "How many siblings does the speaker have?", choices: ["One", "Two", "Three", "Four"], answerIndex: 1, explanation: "ผู้พูดมีทั้งพี่สาว/น้องสาว 1 คน และพี่ชาย/น้องชาย 1 คน รวมเป็นพี่น้อง 2 คน" },
          { question: "Who else lives with the family?", choices: ["Their teacher", "Their grandmother", "Their friend", "Their neighbor"], answerIndex: 1, explanation: "บทอ่านบอกว่าครอบครัวอาศัยอยู่กับคุณยาย (grandmother)" }
        ]
      },
      speaking: {
        prompt: "ลองแนะนำสมาชิกในครอบครัวของคุณเป็นภาษาอังกฤษ โดยใช้โครงสร้าง This is my... และบอกชื่อของเขา",
        targetPhrase: "This is my mother. Her name is Lisa."
      },
      story: {
        title: "ใครอยู่ในกล่องนี้?",
        sentences: [
          { en: "This is my family.", th: "นี่คือครอบครัวของฉัน" },
          { en: "My father's name is John.", th: "พ่อของฉันชื่อจอห์น" },
          { en: "One day, John brings home a big box.", th: "วันหนึ่ง จอห์นเอากล่องใบใหญ่กลับบ้าน" },
          { en: "\"What is in the box?\" asks my sister.", th: "\"ในกล่องมีอะไร\" พี่สาวของฉันถาม" },
          { en: "\"Who knows?\" says my mother with a smile.", th: "\"ใครจะรู้ล่ะ\" แม่ของฉันพูดพร้อมยิ้ม" },
          { en: "My brother is very curious, so he opens the box.", th: "น้องชายของฉันอยากรู้มาก เขาจึงเปิดกล่อง" },
          { en: "Inside the box is a small puppy!", th: "ในกล่องมีลูกสุนัขตัวเล็กๆ" },
          { en: "\"Where did you find him?\" asks my sister.", th: "\"คุณเจอมันที่ไหน\" พี่สาวของฉันถาม" },
          { en: "\"He was near our house,\" says my father.", th: "\"มันอยู่ใกล้บ้านเรา\" พ่อของฉันพูด" },
          { en: "Now the puppy is part of our family too.", th: "ตอนนี้ลูกสุนัขก็เป็นส่วนหนึ่งของครอบครัวเราด้วย" }
        ]
      },
      quiz: [
        { type: "mcq", question: "___ mother is a doctor.", choices: ["I", "My", "Me", "Mine"], answerIndex: 1, explanation: "ใช้ My นำหน้าคำนามเพื่อแสดงความเป็นเจ้าของ" },
        { type: "mcq", question: "\"What is her name?\" is used to ask about...", choices: ["A place", "A name", "A time", "A number"], answerIndex: 1, explanation: "What ใช้ถามหาข้อมูล ในที่นี้ถามชื่อ" },
        { type: "mcq", question: "Which question word asks about a person?", choices: ["Where", "What", "Who", "When"], answerIndex: 2, explanation: "Who ใช้ถามถึงบุคคล" },
        { type: "mcq", question: "'พี่สาว/น้องสาว' in English is:", choices: ["Brother", "Sister", "Mother", "Daughter"], answerIndex: 1, explanation: "Sister แปลว่า พี่สาวหรือน้องสาว" },
        { type: "mcq", question: "Which word means 'ที่อยู่'?", choices: ["Age", "Address", "Family", "Son"], answerIndex: 1, explanation: "Address แปลว่า ที่อยู่" },
        { type: "mcq", question: "How old is the brother in the passage?", choices: ["Five", "Ten", "Fifteen", "Twenty"], answerIndex: 0, explanation: "บทอ่านบอกว่าน้องชายอายุ 5 ขวบ" },
        { type: "mcq", question: "Where does the family live?", choices: ["Chiang Mai", "Phuket", "Bangkok", "Krabi"], answerIndex: 2, explanation: "บทอ่านระบุว่าครอบครัวอาศัยอยู่ที่กรุงเทพฯ" }
      ]
    },
    {
      week: 3,
      levelTag: "A1",
      title: "Numbers, Time & Days",
      objectives: [
        "ใช้โครงสร้าง there is / there are บอกสิ่งที่มีอยู่ได้",
        "ใช้คำบุพบทของเวลา at, on, in ได้อย่างถูกต้อง",
        "บอกวัน เวลา และกำหนดการง่ายๆ เป็นภาษาอังกฤษได้"
      ],
      grammar: {
        point: "There is/are and prepositions of time (at/on/in)",
        explanationTh: "เราใช้ There is กับคำนามเอกพจน์ และ There are กับคำนามพหูพจน์ เพื่อบอกว่ามีสิ่งใดอยู่ที่ไหน ส่วนคำบุพบทของเวลานั้น ใช้ at กับเวลาที่เจาะจง เช่น at nine o'clock ใช้ on กับวัน เช่น on Monday และใช้ in กับเดือน ฤดูกาล หรือช่วงเวลานานๆ เช่น in June หรือ in the morning",
        examples: [
          { en: "There is a clock on the wall.", th: "มีนาฬิกาอยู่บนผนัง", highlight: "There is" },
          { en: "There are seven days in a week.", th: "หนึ่งสัปดาห์มีเจ็ดวัน", highlight: "There are" },
          { en: "I have class at nine o'clock.", th: "ฉันมีเรียนตอนเก้าโมง", highlight: "at" },
          { en: "My birthday is in June.", th: "วันเกิดของฉันอยู่ในเดือนมิถุนายน", highlight: "in" }
        ]
      },
      vocabulary: [
        { en: "today", th: "วันนี้", example: "What day is it today?", exampleTh: "วันนี้วันอะไร" },
        { en: "tomorrow", th: "พรุ่งนี้", example: "See you tomorrow.", exampleTh: "แล้วเจอกันพรุ่งนี้" },
        { en: "yesterday", th: "เมื่อวาน", example: "It rained yesterday.", exampleTh: "เมื่อวานฝนตก" },
        { en: "week", th: "สัปดาห์", example: "There are seven days in a week.", exampleTh: "หนึ่งสัปดาห์มีเจ็ดวัน" },
        { en: "month", th: "เดือน", example: "There are twelve months in a year.", exampleTh: "หนึ่งปีมีสิบสองเดือน" },
        { en: "o'clock", th: "นาฬิกา (บอกเวลาเต็มชั่วโมง)", example: "It is three o'clock.", exampleTh: "ตอนนี้เวลาสามนาฬิกา" },
        { en: "weekend", th: "วันหยุดสุดสัปดาห์", example: "I relax on the weekend.", exampleTh: "ฉันพักผ่อนในวันหยุดสุดสัปดาห์" },
        { en: "birthday", th: "วันเกิด", example: "My birthday is in June.", exampleTh: "วันเกิดของฉันอยู่ในเดือนมิถุนายน" },
        { en: "appointment", th: "นัดหมาย", example: "I have an appointment at ten o'clock.", exampleTh: "ฉันมีนัดหมายตอนสิบโมง" },
        { en: "holiday", th: "วันหยุด", example: "Tomorrow is a holiday.", exampleTh: "พรุ่งนี้เป็นวันหยุด" }
      ],
      reading: {
        passage: "There are seven days in a week. My favorite day is Saturday because there is no school. I usually wake up at eight o'clock on Saturday. In the evening, I watch TV with my family. My birthday is in June, and it is always on a holiday this year.",
        questions: [
          { question: "What is the speaker's favorite day?", choices: ["Monday", "Friday", "Saturday", "Sunday"], answerIndex: 2, explanation: "บทอ่านระบุว่าวันเสาร์เป็นวันโปรดของผู้พูดเพราะไม่ต้องไปโรงเรียน" },
          { question: "What time does the speaker wake up on Saturday?", choices: ["Six o'clock", "Seven o'clock", "Eight o'clock", "Nine o'clock"], answerIndex: 2, explanation: "บทอ่านบอกว่าตื่นตอนแปดโมงเช้า (eight o'clock)" }
        ]
      },
      speaking: {
        prompt: "ลองพูดถึงตารางกิจกรรมประจำสัปดาห์ของคุณ โดยบอกว่ามีกิจกรรมอะไรในวันไหนและเวลาใด",
        targetPhrase: "I have English class on Monday at nine o'clock."
      },
      story: {
        title: "เต่าที่มาสาย",
        sentences: [
          { en: "There is a turtle named Toto.", th: "มีเต่าตัวหนึ่งชื่อโตโต้" },
          { en: "Toto has an appointment every Monday.", th: "โตโต้มีนัดหมายทุกวันจันทร์" },
          { en: "His appointment is at nine o'clock.", th: "นัดของเขาคือเก้าโมงเช้า" },
          { en: "But Toto is always slow.", th: "แต่โตโต้เดินช้าเสมอ" },
          { en: "Yesterday, he arrived at ten o'clock.", th: "เมื่อวานเขามาถึงตอนสิบโมง" },
          { en: "Today, his friend Rabbit helps him.", th: "วันนี้เพื่อนของเขา กระต่าย ช่วยเขา" },
          { en: "\"Wake up early tomorrow,\" says Rabbit.", th: "\"พรุ่งนี้ตื่นแต่เช้านะ\" กระต่ายพูด" },
          { en: "There is a clock next to Toto's bed now.", th: "ตอนนี้มีนาฬิกาอยู่ข้างเตียงของโตโต้" },
          { en: "On the weekend, Toto practices waking up early.", th: "ในวันหยุดสุดสัปดาห์ โตโต้ฝึกตื่นแต่เช้า" },
          { en: "Finally, Toto arrives at nine o'clock!", th: "ในที่สุด โตโต้ก็มาถึงตอนเก้าโมง!" },
          { en: "\"There are seven days in a week, and today is a good day,\" says Toto happily.", th: "\"หนึ่งสัปดาห์มีเจ็ดวัน และวันนี้เป็นวันที่ดี\" โตโต้พูดอย่างมีความสุข" }
        ]
      },
      quiz: [
        { type: "mcq", question: "There ___ a clock on the wall.", choices: ["is", "are", "am", "be"], answerIndex: 0, explanation: "clock เป็นคำนามเอกพจน์ จึงใช้ is" },
        { type: "mcq", question: "There ___ seven days in a week.", choices: ["is", "are", "am", "was"], answerIndex: 1, explanation: "days เป็นพหูพจน์ จึงใช้ are" },
        { type: "mcq", question: "I have class ___ nine o'clock.", choices: ["on", "in", "at", "of"], answerIndex: 2, explanation: "ใช้ at กับเวลาที่เจาะจง" },
        { type: "mcq", question: "My birthday is ___ June.", choices: ["at", "on", "in", "of"], answerIndex: 2, explanation: "ใช้ in กับเดือน" },
        { type: "mcq", question: "'สัปดาห์' in English is:", choices: ["Day", "Week", "Month", "Year"], answerIndex: 1, explanation: "Week แปลว่า สัปดาห์" },
        { type: "mcq", question: "Why does the speaker like Saturday?", choices: ["No school", "No homework", "It's a holiday", "It's his birthday"], answerIndex: 0, explanation: "บทอ่านบอกว่าวันเสาร์ไม่มีโรงเรียน (no school)" },
        { type: "mcq", question: "In which month is the speaker's birthday?", choices: ["May", "June", "July", "August"], answerIndex: 1, explanation: "บทอ่านระบุว่าวันเกิดอยู่ในเดือนมิถุนายน" }
      ]
    },
    {
      week: 4,
      levelTag: "A1",
      title: "Daily Routines",
      objectives: [
        "ใช้ present simple บอกกิจวัตรประจำวันได้",
        "สร้างประโยคปฏิเสธและคำถามในรูป present simple ได้",
        "อธิบายกิจวัตรประจำวันของตนเองและผู้อื่นเป็นภาษาอังกฤษได้"
      ],
      grammar: {
        point: "Present simple (positive, negative, questions)",
        explanationTh: "Present simple ใช้พูดถึงสิ่งที่ทำเป็นประจำหรือเป็นความจริงทั่วไป ประธาน I, you, we, they ใช้กริยาช่องที่ 1 เหมือนเดิม แต่ประธาน he, she, it ต้องเติม s หรือ es ท้ายกริยา เช่น He goes ประโยคปฏิเสธใช้ don't หรือ doesn't วางหน้ากริยา เช่น She doesn't drink coffee ส่วนประโยคคำถามใช้ Do หรือ Does ขึ้นต้นประโยค เช่น Do you go to school every day?",
        examples: [
          { en: "I wake up at six o'clock.", th: "ฉันตื่นนอนตอนหกโมง", highlight: "wake up" },
          { en: "She doesn't drink coffee.", th: "เธอไม่ดื่มกาแฟ", highlight: "doesn't drink" },
          { en: "Do you go to school every day?", th: "คุณไปโรงเรียนทุกวันไหม", highlight: "Do you go" },
          { en: "He goes to work by bus.", th: "เขาไปทำงานโดยรถบัส", highlight: "goes" }
        ]
      },
      vocabulary: [
        { en: "wake up", th: "ตื่นนอน", example: "I wake up at six o'clock.", exampleTh: "ฉันตื่นนอนตอนหกโมง" },
        { en: "get up", th: "ลุกจากเตียง", example: "He gets up early every day.", exampleTh: "เขาลุกจากเตียงแต่เช้าทุกวัน" },
        { en: "brush teeth", th: "แปรงฟัน", example: "I brush my teeth every morning.", exampleTh: "ฉันแปรงฟันทุกเช้า" },
        { en: "take a shower", th: "อาบน้ำ", example: "She takes a shower in the morning.", exampleTh: "เธออาบน้ำตอนเช้า" },
        { en: "have breakfast", th: "รับประทานอาหารเช้า", example: "We have breakfast at seven.", exampleTh: "เรารับประทานอาหารเช้าตอนเจ็ดโมง" },
        { en: "go to work", th: "ไปทำงาน", example: "He goes to work by bus.", exampleTh: "เขาไปทำงานโดยรถบัส" },
        { en: "go to school", th: "ไปโรงเรียน", example: "They go to school on foot.", exampleTh: "พวกเขาไปโรงเรียนโดยการเดิน" },
        { en: "go to bed", th: "เข้านอน", example: "I go to bed at ten o'clock.", exampleTh: "ฉันเข้านอนตอนสี่ทุ่ม" },
        { en: "usually", th: "โดยปกติ", example: "I usually eat rice for lunch.", exampleTh: "ฉันมักกินข้าวเป็นอาหารกลางวัน" },
        { en: "every day", th: "ทุกวัน", example: "She exercises every day.", exampleTh: "เธอออกกำลังกายทุกวัน" }
      ],
      reading: {
        passage: "Somchai wakes up at six o'clock every morning. He takes a shower and has breakfast. Then he goes to work by bus. He doesn't eat lunch at home because his office is far away. In the evening, he watches TV and goes to bed at ten o'clock.",
        questions: [
          { question: "What does Somchai do after he wakes up?", choices: ["He goes to bed", "He takes a shower", "He goes to work", "He watches TV"], answerIndex: 1, explanation: "บทอ่านบอกว่าหลังตื่นนอนเขาอาบน้ำ (takes a shower)" },
          { question: "Does Somchai eat lunch at home?", choices: ["Yes, he does", "No, he doesn't", "Sometimes", "Only on weekends"], answerIndex: 1, explanation: "บทอ่านบอกว่า He doesn't eat lunch at home เพราะที่ทำงานอยู่ไกล" }
        ]
      },
      speaking: {
        prompt: "ลองเล่ากิจวัตรประจำวันของคุณตั้งแต่ตื่นนอนจนถึงเข้านอน โดยใช้ present simple",
        targetPhrase: "I wake up at six o'clock and go to work by bus."
      },
      story: {
        title: "หุ่นยนต์ตัวใหม่",
        sentences: [
          { en: "Robo is a new robot.", th: "โรโบเป็นหุ่นยนต์ตัวใหม่" },
          { en: "He lives with a boy named Ben.", th: "เขาอาศัยอยู่กับเด็กชายชื่อเบน" },
          { en: "Every day, Robo watches Ben's routine.", th: "ทุกวัน โรโบสังเกตกิจวัตรของเบน" },
          { en: "Ben wakes up at six o'clock.", th: "เบนตื่นนอนตอนหกโมง" },
          { en: "He brushes his teeth and takes a shower.", th: "เขาแปรงฟันแล้วอาบน้ำ" },
          { en: "Then he has breakfast with his family.", th: "จากนั้นเขารับประทานอาหารเช้ากับครอบครัว" },
          { en: "Robo wants to help, so he learns too.", th: "โรโบอยากช่วย เขาจึงเรียนรู้ด้วย" },
          { en: "\"Do you go to school every day?\" Robo asks.", th: "\"คุณไปโรงเรียนทุกวันไหม\" โรโบถาม" },
          { en: "\"Yes, I do,\" says Ben.", th: "\"ใช่ ฉันไปทุกวัน\" เบนตอบ" },
          { en: "Robo doesn't go to school, but he goes to work with Ben's father instead.", th: "โรโบไม่ได้ไปโรงเรียน แต่เขาไปทำงานกับพ่อของเบนแทน" },
          { en: "At night, everyone goes to bed at ten o'clock.", th: "ตอนกลางคืน ทุกคนเข้านอนตอนสี่ทุ่ม" },
          { en: "Robo usually dreams about being a real helper.", th: "โรโบมักฝันว่าได้เป็นผู้ช่วยตัวจริง" }
        ]
      },
      quiz: [
        { type: "mcq", question: "She ___ (drink) coffee every morning.", choices: ["drink", "drinks", "drinking", "to drink"], answerIndex: 1, explanation: "ประธาน she ต้องเติม s ท้ายกริยาในรูป present simple" },
        { type: "mcq", question: "She ___ drink coffee. (negative)", choices: ["don't", "doesn't", "not", "isn't"], answerIndex: 1, explanation: "ประธาน she ใช้ doesn't ในประโยคปฏิเสธ" },
        { type: "mcq", question: "___ you go to school every day?", choices: ["Do", "Does", "Are", "Is"], answerIndex: 0, explanation: "ประธาน you ใช้ Do ขึ้นต้นประโยคคำถาม" },
        { type: "mcq", question: "'ตื่นนอน' in English is:", choices: ["Go to bed", "Wake up", "Take a shower", "Have breakfast"], answerIndex: 1, explanation: "Wake up แปลว่า ตื่นนอน" },
        { type: "mcq", question: "'ทุกวัน' in English is:", choices: ["Usually", "Every day", "Today", "Tomorrow"], answerIndex: 1, explanation: "Every day แปลว่า ทุกวัน" },
        { type: "mcq", question: "What time does Somchai go to bed?", choices: ["Eight o'clock", "Nine o'clock", "Ten o'clock", "Eleven o'clock"], answerIndex: 2, explanation: "บทอ่านระบุว่าเขาเข้านอนตอนสี่ทุ่ม (ten o'clock)" },
        { type: "mcq", question: "How does Somchai go to work?", choices: ["By car", "By bus", "By bike", "On foot"], answerIndex: 1, explanation: "บทอ่านบอกว่าเขาไปทำงานโดยรถบัส (by bus)" }
      ]
    },
    {
      week: 5,
      levelTag: "A1",
      title: "Food & Drink",
      objectives: [
        "แยกความแตกต่างระหว่างคำนามนับได้และนับไม่ได้",
        "ใช้ some และ any ในประโยคบอกเล่า ปฏิเสธ และคำถามได้",
        "สั่งอาหารและพูดถึงสิ่งที่ต้องการเป็นภาษาอังกฤษได้"
      ],
      grammar: {
        point: "Countable/uncountable nouns and some/any",
        explanationTh: "คำนามนับได้ เช่น apple, egg สามารถเติม s เพื่อทำให้เป็นพหูพจน์ได้ ส่วนคำนามนับไม่ได้ เช่น rice, water, sugar จะไม่เติม s เรามักใช้ some ในประโยคบอกเล่าทั้งกับคำนามนับได้และนับไม่ได้ เช่น There is some rice ส่วน any มักใช้ในประโยคปฏิเสธและคำถาม เช่น There aren't any apples หรือ Do you have any water?",
        examples: [
          { en: "There is some rice in the bowl.", th: "มีข้าวอยู่ในชามบ้าง", highlight: "some" },
          { en: "There aren't any apples.", th: "ไม่มีแอปเปิ้ลเลย", highlight: "any" },
          { en: "Do you want some water?", th: "คุณอยากได้น้ำบ้างไหม", highlight: "some" },
          { en: "I don't have any sugar.", th: "ฉันไม่มีน้ำตาลเลย", highlight: "any" }
        ]
      },
      vocabulary: [
        { en: "rice", th: "ข้าว", example: "There is some rice in the bowl.", exampleTh: "มีข้าวอยู่ในชามบ้าง" },
        { en: "water", th: "น้ำ", example: "Do you want some water?", exampleTh: "คุณอยากได้น้ำบ้างไหม" },
        { en: "apple", th: "แอปเปิ้ล", example: "There aren't any apples.", exampleTh: "ไม่มีแอปเปิ้ลเลย" },
        { en: "bread", th: "ขนมปัง", example: "I eat bread for breakfast.", exampleTh: "ฉันกินขนมปังเป็นอาหารเช้า" },
        { en: "milk", th: "นม", example: "She drinks milk every morning.", exampleTh: "เธอดื่มนมทุกเช้า" },
        { en: "sugar", th: "น้ำตาล", example: "I don't have any sugar.", exampleTh: "ฉันไม่มีน้ำตาลเลย" },
        { en: "vegetable", th: "ผัก", example: "We should eat more vegetables.", exampleTh: "เราควรกินผักให้มากขึ้น" },
        { en: "fruit", th: "ผลไม้", example: "Fruit is good for your health.", exampleTh: "ผลไม้ดีต่อสุขภาพของคุณ" },
        { en: "meal", th: "มื้ออาหาร", example: "Breakfast is an important meal.", exampleTh: "อาหารเช้าเป็นมื้ออาหารที่สำคัญ" },
        { en: "hungry", th: "หิว", example: "I am very hungry.", exampleTh: "ฉันหิวมาก" }
      ],
      reading: {
        passage: "Every morning, my mother goes to the market. She buys some rice, fresh vegetables, and fruit. She doesn't buy any meat because we don't eat meat. At home, she cooks a delicious meal for the family. We are always hungry after school, so we love her cooking.",
        questions: [
          { question: "What does the mother buy at the market?", choices: ["Meat and bread", "Rice, vegetables, and fruit", "Milk and sugar", "Bread and milk"], answerIndex: 1, explanation: "บทอ่านบอกว่าแม่ซื้อข้าว ผัก และผลไม้" },
          { question: "Does the mother buy any meat?", choices: ["Yes, she does", "No, she doesn't", "Sometimes", "Only on weekends"], answerIndex: 1, explanation: "บทอ่านบอกว่า she doesn't buy any meat เพราะครอบครัวไม่กินเนื้อสัตว์" }
        ]
      },
      speaking: {
        prompt: "ลองฝึกสั่งอาหารโดยใช้ some เพื่อขอสิ่งที่ต้องการ",
        targetPhrase: "Can I have some rice and vegetables, please?"
      },
      story: {
        title: "หนูน้อยผู้หิวโหย",
        sentences: [
          { en: "There is a small mouse named Mimi.", th: "มีหนูตัวเล็กชื่อมีมี่" },
          { en: "Mimi is very hungry today.", th: "วันนี้มีมี่หิวมาก" },
          { en: "She looks in the kitchen for food.", th: "เธอมองหาอาหารในครัว" },
          { en: "There is some rice on the table.", th: "มีข้าวอยู่บนโต๊ะบ้าง" },
          { en: "There is some bread too.", th: "มีขนมปังอยู่ด้วย" },
          { en: "But there aren't any apples.", th: "แต่ไม่มีแอปเปิ้ลเลย" },
          { en: "\"Do you want some milk?\" asks her friend, a little bird.", th: "\"อยากได้นมบ้างไหม\" เพื่อนของเธอ นกตัวเล็ก ถาม" },
          { en: "\"Yes, please!\" says Mimi happily.", th: "\"เอาสิ ขอบคุณนะ!\" มีมี่พูดอย่างมีความสุข" },
          { en: "They eat bread, rice, and milk together.", th: "พวกเขากินขนมปัง ข้าว และนมด้วยกัน" },
          { en: "Mimi is not hungry anymore.", th: "มีมี่ไม่หิวอีกต่อไปแล้ว" },
          { en: "\"This is a wonderful meal,\" she says.", th: "\"นี่เป็นมื้ออาหารที่วิเศษมาก\" เธอพูด" }
        ]
      },
      quiz: [
        { type: "mcq", question: "There is ___ rice in the bowl.", choices: ["some", "any", "a", "an"], answerIndex: 0, explanation: "ใช้ some ในประโยคบอกเล่า" },
        { type: "mcq", question: "There aren't ___ apples.", choices: ["some", "any", "a", "much"], answerIndex: 1, explanation: "ใช้ any ในประโยคปฏิเสธ" },
        { type: "mcq", question: "Which is an uncountable noun?", choices: ["Apple", "Egg", "Water", "Banana"], answerIndex: 2, explanation: "Water เป็นคำนามนับไม่ได้ ไม่สามารถเติม s ได้" },
        { type: "mcq", question: "'ผัก' in English is:", choices: ["Fruit", "Vegetable", "Rice", "Bread"], answerIndex: 1, explanation: "Vegetable แปลว่า ผัก" },
        { type: "mcq", question: "'หิว' in English is:", choices: ["Thirsty", "Hungry", "Tired", "Full"], answerIndex: 1, explanation: "Hungry แปลว่า หิว" },
        { type: "mcq", question: "Why doesn't the mother buy meat?", choices: ["It is expensive", "The family doesn't eat meat", "The market has none", "She forgot"], answerIndex: 1, explanation: "บทอ่านบอกว่าครอบครัวไม่กินเนื้อสัตว์" },
        { type: "mcq", question: "Who cooks the meal at home?", choices: ["The father", "The mother", "The children", "The neighbor"], answerIndex: 1, explanation: "บทอ่านระบุว่าแม่เป็นคนทำอาหารให้ครอบครัว" }
      ]
    },
    {
      week: 6,
      levelTag: "A1",
      title: "Places & Directions",
      objectives: [
        "ใช้คำบุพบทบอกสถานที่ (next to, between, near) ได้ถูกต้อง",
        "ใช้ประโยคคำสั่ง (imperatives) บอกทิศทางได้",
        "ถามทางและบอกทางเป็นภาษาอังกฤษได้"
      ],
      grammar: {
        point: "Prepositions of place and imperatives",
        explanationTh: "คำบุพบทบอกสถานที่ เช่น next to (ติดกับ) between (ระหว่าง) near (ใกล้กับ) ใช้บอกตำแหน่งของสิ่งของหรือสถานที่ ส่วนประโยคคำสั่ง (imperative) ใช้กริยาขึ้นต้นประโยคโดยไม่มีประธาน เช่น Turn left หรือ Go straight ใช้บอกทิศทางหรือสั่งให้ทำสิ่งใดสิ่งหนึ่ง",
        examples: [
          { en: "The bank is next to the hospital.", th: "ธนาคารอยู่ติดกับโรงพยาบาล", highlight: "next to" },
          { en: "Turn left at the corner.", th: "เลี้ยวซ้ายที่มุมถนน", highlight: "Turn left" },
          { en: "Go straight ahead.", th: "ตรงไปข้างหน้า", highlight: "Go straight ahead" },
          { en: "The park is between the school and the market.", th: "สวนสาธารณะอยู่ระหว่างโรงเรียนกับตลาด", highlight: "between" }
        ]
      },
      vocabulary: [
        { en: "hospital", th: "โรงพยาบาล", example: "The hospital is next to the bank.", exampleTh: "โรงพยาบาลอยู่ติดกับธนาคาร" },
        { en: "bank", th: "ธนาคาร", example: "I need to go to the bank.", exampleTh: "ฉันต้องไปธนาคาร" },
        { en: "market", th: "ตลาด", example: "The market is near my house.", exampleTh: "ตลาดอยู่ใกล้บ้านของฉัน" },
        { en: "park", th: "สวนสาธารณะ", example: "We walked in the park.", exampleTh: "เราเดินเล่นในสวนสาธารณะ" },
        { en: "corner", th: "มุมถนน", example: "Turn left at the corner.", exampleTh: "เลี้ยวซ้ายที่มุมถนน" },
        { en: "turn left", th: "เลี้ยวซ้าย", example: "Turn left at the traffic light.", exampleTh: "เลี้ยวซ้ายที่สัญญาณไฟจราจร" },
        { en: "turn right", th: "เลี้ยวขวา", example: "Turn right after the bridge.", exampleTh: "เลี้ยวขวาหลังจากสะพาน" },
        { en: "straight ahead", th: "ตรงไปข้างหน้า", example: "Go straight ahead for two blocks.", exampleTh: "ตรงไปข้างหน้าอีกสองช่วงตึก" },
        { en: "next to", th: "ติดกับ", example: "The bank is next to the hospital.", exampleTh: "ธนาคารอยู่ติดกับโรงพยาบาล" },
        { en: "between", th: "ระหว่าง", example: "The park is between the school and the market.", exampleTh: "สวนสาธารณะอยู่ระหว่างโรงเรียนกับตลาด" }
      ],
      reading: {
        passage: "Excuse me, where is the post office? Go straight ahead and turn left at the corner. The post office is next to the bank. It is between the bank and the market, so you can't miss it! It only takes five minutes to walk there.",
        questions: [
          { question: "Where is the post office located?", choices: ["Next to the hospital", "Between the bank and the market", "Near the park", "Next to the school"], answerIndex: 1, explanation: "บทอ่านระบุว่าไปรษณีย์อยู่ระหว่างธนาคารกับตลาด" },
          { question: "What should you do at the corner?", choices: ["Turn right", "Go straight", "Turn left", "Stop"], answerIndex: 2, explanation: "บทอ่านบอกให้เลี้ยวซ้ายที่มุมถนน (turn left at the corner)" }
        ]
      },
      speaking: {
        prompt: "ลองฝึกถามทางและบอกทางไปยังสถานที่ใกล้บ้านของคุณ",
        targetPhrase: "Go straight ahead and turn left at the corner."
      },
      story: {
        title: "แมวที่หลงทาง",
        sentences: [
          { en: "Coco the cat is lost.", th: "โคโค่แมวตัวนั้นหลงทาง" },
          { en: "She wants to go home.", th: "เธออยากกลับบ้าน" },
          { en: "A friendly dog helps her.", th: "สุนัขใจดีตัวหนึ่งช่วยเธอ" },
          { en: "\"Go straight ahead,\" says the dog.", th: "\"ตรงไปข้างหน้า\" สุนัขพูด" },
          { en: "\"Then turn left at the corner.\"", th: "\"แล้วเลี้ยวซ้ายที่มุมถนน\"" },
          { en: "Coco walks past the market.", th: "โคโค่เดินผ่านตลาด" },
          { en: "The market is between the park and the bank.", th: "ตลาดอยู่ระหว่างสวนสาธารณะกับธนาคาร" },
          { en: "\"Your house is next to the hospital,\" the dog says.", th: "\"บ้านของคุณอยู่ติดกับโรงพยาบาล\" สุนัขพูด" },
          { en: "Coco turns right after the bridge.", th: "โคโค่เลี้ยวขวาหลังจากสะพาน" },
          { en: "Finally, she sees her house next to the hospital!", th: "ในที่สุด เธอก็เห็นบ้านของเธอที่อยู่ติดกับโรงพยาบาล!" },
          { en: "\"Thank you so much!\" Coco says happily.", th: "\"ขอบคุณมากนะ!\" โคโค่พูดอย่างมีความสุข" }
        ]
      },
      quiz: [
        { type: "mcq", question: "The bank is ___ the hospital. (ติดกับ)", choices: ["between", "next to", "under", "far"], answerIndex: 1, explanation: "Next to แปลว่า ติดกับ" },
        { type: "mcq", question: "___ left at the corner.", choices: ["You turn", "Turn", "Turning", "To turn"], answerIndex: 1, explanation: "ประโยคคำสั่งขึ้นต้นด้วยกริยาโดยไม่มีประธาน" },
        { type: "mcq", question: "The park is ___ the school and the market.", choices: ["next to", "between", "on", "at"], answerIndex: 1, explanation: "Between ใช้บอกตำแหน่งระหว่างสองสิ่ง" },
        { type: "mcq", question: "'ธนาคาร' in English is:", choices: ["Hospital", "Market", "Bank", "Park"], answerIndex: 2, explanation: "Bank แปลว่า ธนาคาร" },
        { type: "mcq", question: "'มุมถนน' in English is:", choices: ["Corner", "Between", "Straight", "Next to"], answerIndex: 0, explanation: "Corner แปลว่า มุมถนน" },
        { type: "mcq", question: "What is next to the post office?", choices: ["The hospital", "The bank", "The park", "The school"], answerIndex: 1, explanation: "บทอ่านบอกว่าไปรษณีย์อยู่ติดกับธนาคาร" },
        { type: "mcq", question: "How long does it take to walk to the post office?", choices: ["Two minutes", "Five minutes", "Ten minutes", "Fifteen minutes"], answerIndex: 1, explanation: "บทอ่านระบุว่าใช้เวลาเดินห้านาที" }
      ]
    },
    {
      week: 7,
      levelTag: "A2",
      title: "Past Events",
      objectives: [
        "ใช้ past simple พูดถึงเหตุการณ์ที่เกิดขึ้นในอดีตได้",
        "ผันกริยาปกติและกริยาไม่ปกติในรูปอดีตได้ถูกต้อง",
        "เล่าประสบการณ์หรือการเดินทางในอดีตเป็นภาษาอังกฤษได้"
      ],
      grammar: {
        point: "Past simple (regular and irregular verbs)",
        explanationTh: "Past simple ใช้พูดถึงเหตุการณ์ที่เกิดขึ้นและจบลงแล้วในอดีต กริยาปกติ (regular verbs) จะเติม ed ท้ายคำ เช่น visit เป็น visited ส่วนกริยาไม่ปกติ (irregular verbs) จะเปลี่ยนรูปไม่แน่นอน เช่น go เป็น went หรือ see เป็น saw ในประโยคปฏิเสธใช้ didn't ตามด้วยกริยาช่องที่ 1 เสมอ เช่น She didn't go to school",
        examples: [
          { en: "I visited my grandmother last week.", th: "ฉันไปเยี่ยมคุณยายเมื่อสัปดาห์ที่แล้ว", highlight: "visited" },
          { en: "She went to the market yesterday.", th: "เธอไปตลาดเมื่อวานนี้", highlight: "went" },
          { en: "They saw a movie last night.", th: "พวกเขาดูหนังเมื่อคืนนี้", highlight: "saw" },
          { en: "We didn't go swimming because it rained.", th: "เราไม่ได้ไปว่ายน้ำเพราะฝนตก", highlight: "didn't go" }
        ]
      },
      vocabulary: [
        { en: "last night", th: "เมื่อคืนนี้", example: "They saw a movie last night.", exampleTh: "พวกเขาดูหนังเมื่อคืนนี้" },
        { en: "last week", th: "สัปดาห์ที่แล้ว", example: "I visited my grandmother last week.", exampleTh: "ฉันไปเยี่ยมคุณยายเมื่อสัปดาห์ที่แล้ว" },
        { en: "ago", th: "ที่แล้ว (นับจากปัจจุบัน)", example: "She left two hours ago.", exampleTh: "เธอออกไปเมื่อสองชั่วโมงที่แล้ว" },
        { en: "visited", th: "(ไป)เยี่ยม (อดีตของ visit)", example: "We visited a beautiful beach.", exampleTh: "เราไปเที่ยวชายหาดที่สวยงาม" },
        { en: "arrived", th: "มาถึง (อดีตของ arrive)", example: "We arrived at the hotel at noon.", exampleTh: "เรามาถึงโรงแรมตอนเที่ยง" },
        { en: "bought", th: "ซื้อ (อดีตของ buy)", example: "She bought a souvenir for her friend.", exampleTh: "เธอซื้อของที่ระลึกให้เพื่อน" },
        { en: "trip", th: "การเดินทาง ทริป", example: "It was a wonderful trip.", exampleTh: "มันเป็นทริปที่ยอดเยี่ยม" },
        { en: "vacation", th: "วันหยุดพักผ่อน", example: "We went on a vacation to Phuket.", exampleTh: "เราไปพักผ่อนที่ภูเก็ต" },
        { en: "souvenir", th: "ของที่ระลึก", example: "We bought some souvenirs.", exampleTh: "เราซื้อของที่ระลึกบางอย่าง" },
        { en: "camera", th: "กล้องถ่ายรูป", example: "He took photos with his camera.", exampleTh: "เขาถ่ายรูปด้วยกล้องของเขา" }
      ],
      reading: {
        passage: "Last month, my family went on a vacation to Phuket. We arrived at the hotel in the afternoon. The next day, we visited a beautiful beach and took many photos with my camera. We bought some souvenirs before we went home. It was a wonderful trip!",
        questions: [
          { question: "Where did the family go on vacation?", choices: ["Chiang Mai", "Phuket", "Krabi", "Pattaya"], answerIndex: 1, explanation: "บทอ่านระบุว่าครอบครัวไปพักผ่อนที่ภูเก็ต" },
          { question: "What did they do before they went home?", choices: ["They visited a temple", "They bought souvenirs", "They took a flight", "They cooked food"], answerIndex: 1, explanation: "บทอ่านบอกว่าก่อนกลับบ้านพวกเขาซื้อของที่ระลึก" }
        ]
      },
      speaking: {
        prompt: "ลองเล่าเหตุการณ์หรือการเดินทางในอดีตของคุณโดยใช้ past simple",
        targetPhrase: "Last month, I went to Phuket with my family."
      },
      story: {
        title: "ทริปที่ไม่คาดฝัน",
        sentences: [
          { en: "Last week, Nok went on a trip to the mountains.", th: "สัปดาห์ที่แล้ว นกไปเที่ยวภูเขา" },
          { en: "She visited a small village near a lake.", th: "เธอไปเยี่ยมหมู่บ้านเล็กๆ ใกล้ทะเลสาบ" },
          { en: "She arrived at the village in the morning.", th: "เธอมาถึงหมู่บ้านตอนเช้า" },
          { en: "An old man said, \"I visited this village three years ago.\"", th: "ชายชราคนหนึ่งพูดว่า \"ผมเคยมาเยี่ยมหมู่บ้านนี้เมื่อสามปีก่อน\"" },
          { en: "Nok took many photos with her camera.", th: "นกถ่ายรูปมากมายด้วยกล้องของเธอ" },
          { en: "Last night, she saw beautiful stars in the sky.", th: "เมื่อคืนนี้ เธอเห็นดวงดาวสวยงามบนท้องฟ้า" },
          { en: "She bought a souvenir for her sister.", th: "เธอซื้อของที่ระลึกให้น้องสาว" },
          { en: "They didn't go swimming because the lake was too cold.", th: "พวกเขาไม่ได้ไปว่ายน้ำเพราะทะเลสาบเย็นเกินไป" },
          { en: "Instead, they walked around the village and talked with the villagers.", th: "แทนที่จะทำอย่างนั้น พวกเขาเดินเที่ยวรอบหมู่บ้านและพูดคุยกับชาวบ้าน" },
          { en: "It was a wonderful vacation.", th: "มันเป็นวันหยุดพักผ่อนที่ยอดเยี่ยม" }
        ]
      },
      quiz: [
        { type: "mcq", question: "Last week, I ___ (visit) my grandmother.", choices: ["visit", "visits", "visited", "visiting"], answerIndex: 2, explanation: "visit เป็นกริยาปกติ เติม ed เป็น visited" },
        { type: "mcq", question: "Yesterday, she ___ (go) to the market.", choices: ["go", "goes", "went", "going"], answerIndex: 2, explanation: "go เป็นกริยาไม่ปกติ เปลี่ยนเป็น went ในรูปอดีต" },
        { type: "mcq", question: "We ___ (not/go) swimming because it rained.", choices: ["don't go", "doesn't go", "didn't go", "not go"], answerIndex: 2, explanation: "ประโยคปฏิเสธในอดีตใช้ didn't ตามด้วยกริยาช่องที่ 1" },
        { type: "mcq", question: "'ของที่ระลึก' in English is:", choices: ["Camera", "Souvenir", "Vacation", "Trip"], answerIndex: 1, explanation: "Souvenir แปลว่า ของที่ระลึก" },
        { type: "mcq", question: "'มาถึง' (past tense) in English is:", choices: ["Arrive", "Arrived", "Arriving", "Arrives"], answerIndex: 1, explanation: "Arrived เป็นรูปอดีตของ arrive แปลว่า มาถึงแล้ว" },
        { type: "mcq", question: "What did the family do on the second day?", choices: ["They flew home", "They visited a beach", "They went shopping", "They stayed at the hotel"], answerIndex: 1, explanation: "บทอ่านบอกว่าวันถัดมาพวกเขาไปเที่ยวชายหาด" },
        { type: "mcq", question: "How did the family feel about the trip?", choices: ["Boring", "Wonderful", "Tiring", "Expensive"], answerIndex: 1, explanation: "บทอ่านสรุปว่า It was a wonderful trip (เป็นทริปที่ยอดเยี่ยม)" }
      ]
    },
    {
      week: 8,
      levelTag: "A2",
      title: "Shopping & Money",
      objectives: [
        "เปรียบเทียบสิ่งของโดยใช้ comparatives (bigger, cheaper) ได้",
        "ใช้ this/that/these/those ชี้สิ่งของได้ถูกต้อง",
        "พูดคุยเรื่องราคาและการซื้อของเป็นภาษาอังกฤษได้"
      ],
      grammar: {
        point: "Comparatives and this/that/these/those",
        explanationTh: "เราใช้ comparative เพื่อเปรียบเทียบสิ่งของสองสิ่ง โดยเติม er ท้ายคำคุณศัพท์สั้นๆ เช่น cheap เป็น cheaper และใช้ more นำหน้าคำคุณศัพท์ยาวๆ เช่น more expensive ส่วน this และ these ใช้ชี้สิ่งของที่อยู่ใกล้ (this สำหรับเอกพจน์ these สำหรับพหูพจน์) ในขณะที่ that และ those ใช้ชี้สิ่งของที่อยู่ไกล (that สำหรับเอกพจน์ those สำหรับพหูพจน์)",
        examples: [
          { en: "This shirt is cheaper than that one.", th: "เสื้อตัวนี้ถูกกว่าตัวนั้น", highlight: "cheaper" },
          { en: "These shoes are more expensive than those sandals.", th: "รองเท้าคู่นี้แพงกว่ารองเท้าแตะคู่นั้น", highlight: "more expensive" },
          { en: "That bag is bigger than this bag.", th: "กระเป๋าใบนั้นใหญ่กว่ากระเป๋าใบนี้", highlight: "bigger" },
          { en: "This dress is prettier than that dress.", th: "ชุดนี้สวยกว่าชุดนั้น", highlight: "prettier" }
        ]
      },
      vocabulary: [
        { en: "price", th: "ราคา", example: "What is the price of this shirt?", exampleTh: "เสื้อตัวนี้ราคาเท่าไหร่" },
        { en: "expensive", th: "แพง", example: "This bag is very expensive.", exampleTh: "กระเป๋าใบนี้แพงมาก" },
        { en: "cheap", th: "ถูก", example: "That dress is cheaper than this one.", exampleTh: "ชุดนั้นถูกกว่าชุดนี้" },
        { en: "discount", th: "ส่วนลด", example: "We have a big discount today.", exampleTh: "วันนี้เรามีส่วนลดก้อนใหญ่" },
        { en: "receipt", th: "ใบเสร็จ", example: "Can I have a receipt, please?", exampleTh: "ขอใบเสร็จได้ไหมคะ/ครับ" },
        { en: "cashier", th: "พนักงานเก็บเงิน", example: "I paid the cashier.", exampleTh: "ฉันจ่ายเงินให้พนักงานเก็บเงิน" },
        { en: "size", th: "ขนาด", example: "Do you have a smaller size?", exampleTh: "คุณมีไซส์ที่เล็กกว่านี้ไหม" },
        { en: "color", th: "สี", example: "What color do you want?", exampleTh: "คุณต้องการสีอะไร" },
        { en: "try on", th: "ลองสวมใส่", example: "Can I try on this shirt?", exampleTh: "ฉันขอลองสวมเสื้อตัวนี้ได้ไหม" },
        { en: "pay", th: "จ่ายเงิน", example: "I will pay by cash.", exampleTh: "ฉันจะจ่ายเป็นเงินสด" }
      ],
      reading: {
        passage: "Nan wants to buy a new dress. She sees two dresses at the shop. This red dress is more expensive than that blue dress. The blue dress is cheaper, but the red one is prettier. Nan tries on both dresses. Finally, she buys the red dress and pays the cashier.",
        questions: [
          { question: "Which dress is cheaper?", choices: ["The red dress", "The blue dress", "Both are the same price", "Neither dress"], answerIndex: 1, explanation: "บทอ่านบอกว่ากระโปรงสีฟ้าถูกกว่า (The blue dress is cheaper)" },
          { question: "Which dress does Nan buy?", choices: ["The red dress", "The blue dress", "Both dresses", "Neither dress"], answerIndex: 0, explanation: "บทอ่านบอกว่าในที่สุด Nan ซื้อกระโปรงสีแดง" }
        ]
      },
      speaking: {
        prompt: "ลองฝึกบทสนทนาการซื้อของ โดยถามราคาและขอลองไซส์อื่น",
        targetPhrase: "How much is this? Do you have a smaller size?"
      },
      story: {
        title: "กระเป๋าสองใบ",
        sentences: [
          { en: "Ploy went to the market to buy a new bag.", th: "พลอยไปตลาดเพื่อซื้อกระเป๋าใบใหม่" },
          { en: "She saw two bags she liked.", th: "เธอเห็นกระเป๋าสองใบที่เธอชอบ" },
          { en: "This bag is bigger than that bag.", th: "กระเป๋าใบนี้ใหญ่กว่ากระเป๋าใบนั้น" },
          { en: "But that bag is cheaper.", th: "แต่กระเป๋าใบนั้นถูกกว่า" },
          { en: "\"What is the price of this one?\" Ploy asked.", th: "\"ใบนี้ราคาเท่าไหร่คะ\" พลอยถาม" },
          { en: "\"It's on discount today,\" said the cashier.", th: "\"วันนี้มีส่วนลดค่ะ\" พนักงานเก็บเงินตอบ" },
          { en: "Ploy tried on a matching hat too.", th: "พลอยลองสวมหมวกที่เข้าชุดกันด้วย" },
          { en: "\"Do you have a smaller size?\" she asked.", th: "\"มีไซส์ที่เล็กกว่านี้ไหมคะ\" เธอถาม" },
          { en: "Finally, she chose the bigger bag because it was prettier.", th: "ในที่สุด เธอเลือกกระเป๋าใบใหญ่เพราะมันสวยกว่า" },
          { en: "She paid by cash and got a receipt.", th: "เธอจ่ายเป็นเงินสดและได้รับใบเสร็จ" },
          { en: "Ploy left the market with a big smile.", th: "พลอยออกจากตลาดพร้อมรอยยิ้มกว้าง" }
        ]
      },
      quiz: [
        { type: "mcq", question: "This dress is ___ (cheap) than that one.", choices: ["cheap", "cheaper", "more cheap", "cheapest"], answerIndex: 1, explanation: "cheap เป็นคำสั้น เติม er เป็น cheaper" },
        { type: "mcq", question: "That bag is ___ (expensive) than this one.", choices: ["expensiver", "more expensive", "expensive", "most expensive"], answerIndex: 1, explanation: "expensive เป็นคำยาว ใช้ more นำหน้า" },
        { type: "mcq", question: "___ shoes (near me) are new.", choices: ["That", "Those", "This", "These"], answerIndex: 3, explanation: "ใช้ These กับของพหูพจน์ที่อยู่ใกล้" },
        { type: "mcq", question: "'ส่วนลด' in English is:", choices: ["Price", "Discount", "Receipt", "Size"], answerIndex: 1, explanation: "Discount แปลว่า ส่วนลด" },
        { type: "mcq", question: "'ลองสวมใส่' in English is:", choices: ["Pay", "Try on", "Buy", "Sell"], answerIndex: 1, explanation: "Try on แปลว่า ลองสวมใส่" },
        { type: "mcq", question: "Why does Nan buy the red dress?", choices: ["It is cheaper", "It is prettier", "It is bigger", "It is on discount"], answerIndex: 1, explanation: "บทอ่านบอกว่ากระโปรงสีแดงสวยกว่า (prettier) แม้จะแพงกว่า" },
        { type: "mcq", question: "Who does Nan pay?", choices: ["The manager", "The cashier", "Her friend", "The tailor"], answerIndex: 1, explanation: "บทอ่านระบุว่า Nan จ่ายเงินให้พนักงานเก็บเงิน (cashier)" }
      ]
    },
    {
      week: 9,
      levelTag: "A2",
      title: "Weather & Free Time",
      objectives: [
        "แยกความแตกต่างระหว่าง present simple และ present continuous ได้",
        "พูดถึงสภาพอากาศเป็นภาษาอังกฤษได้",
        "บอกกิจกรรมยามว่างและสิ่งที่กำลังทำอยู่ในขณะนี้ได้"
      ],
      grammar: {
        point: "Present continuous vs present simple",
        explanationTh: "Present simple ใช้พูดถึงสิ่งที่ทำเป็นประจำ เช่น I play football on weekends ส่วน present continuous ใช้พูดถึงสิ่งที่กำลังเกิดขึ้นอยู่ในขณะนี้ โดยใช้ am/is/are เติม verb-ing เช่น I am playing football now เราสามารถใช้สองรูปนี้ในประโยคเดียวกันเพื่อเปรียบเทียบสิ่งที่ทำเป็นประจำกับสิ่งที่กำลังทำอยู่ตอนนี้ได้",
        examples: [
          { en: "It is raining now.", th: "ตอนนี้ฝนกำลังตก", highlight: "is raining" },
          { en: "I usually play football on weekends.", th: "ฉันมักเล่นฟุตบอลในวันหยุดสุดสัปดาห์", highlight: "usually play" },
          { en: "She is reading a book right now, but she doesn't read every day.", th: "ตอนนี้เธอกำลังอ่านหนังสืออยู่ แต่เธอไม่ได้อ่านทุกวัน", highlight: "is reading" },
          { en: "Look! It's snowing.", th: "ดูสิ! หิมะกำลังตก", highlight: "It's snowing" }
        ]
      },
      vocabulary: [
        { en: "sunny", th: "แดดออก", example: "It is sunny today.", exampleTh: "วันนี้แดดออก" },
        { en: "rainy", th: "ฝนตก", example: "I don't like rainy days.", exampleTh: "ฉันไม่ชอบวันที่ฝนตก" },
        { en: "cloudy", th: "มีเมฆมาก", example: "It is cloudy this afternoon.", exampleTh: "บ่ายนี้ท้องฟ้ามีเมฆมาก" },
        { en: "windy", th: "ลมแรง", example: "It is very windy today.", exampleTh: "วันนี้ลมแรงมาก" },
        { en: "hot", th: "ร้อน", example: "Summer in Thailand is very hot.", exampleTh: "ฤดูร้อนในประเทศไทยร้อนมาก" },
        { en: "cold", th: "หนาว", example: "It is cold in the mountains.", exampleTh: "บนภูเขาอากาศหนาว" },
        { en: "umbrella", th: "ร่ม", example: "Bring an umbrella; it might rain.", exampleTh: "พกร่มไปด้วยนะ เผื่อฝนตก" },
        { en: "hobby", th: "งานอดิเรก", example: "My hobby is reading books.", exampleTh: "งานอดิเรกของฉันคือการอ่านหนังสือ" },
        { en: "season", th: "ฤดูกาล", example: "My favorite season is summer.", exampleTh: "ฤดูที่ฉันชอบที่สุดคือฤดูร้อน" },
        { en: "relax", th: "พักผ่อน", example: "I relax at home on rainy days.", exampleTh: "ฉันพักผ่อนอยู่บ้านในวันที่ฝนตก" }
      ],
      reading: {
        passage: "Today it is raining, so Ben is staying at home. He is reading a book right now. Usually, on sunny days, he plays football with his friends in the park. His favorite season is summer because he loves swimming. He hopes it will be sunny again tomorrow.",
        questions: [
          { question: "What is Ben doing right now?", choices: ["Playing football", "Reading a book", "Swimming", "Walking in the park"], answerIndex: 1, explanation: "บทอ่านบอกว่าตอนนี้ Ben กำลังอ่านหนังสืออยู่ (is reading a book right now)" },
          { question: "What does Ben usually do on sunny days?", choices: ["He stays at home", "He plays football", "He reads books", "He watches TV"], answerIndex: 1, explanation: "บทอ่านบอกว่าปกติวันที่แดดออก Ben จะเล่นฟุตบอลกับเพื่อน" }
        ]
      },
      speaking: {
        prompt: "ลองพูดถึงสภาพอากาศวันนี้และสิ่งที่คุณกำลังทำอยู่ตอนนี้",
        targetPhrase: "It's raining today, so I'm staying at home and reading a book."
      },
      story: {
        title: "วันที่ฝนไม่หยุดตก",
        sentences: [
          { en: "Today it is raining very hard.", th: "วันนี้ฝนตกหนักมาก" },
          { en: "Mali is looking out the window.", th: "มาลีกำลังมองออกไปนอกหน้าต่าง" },
          { en: "She usually plays badminton on sunny days.", th: "ปกติแล้วเธอเล่นแบดมินตันในวันที่แดดออก" },
          { en: "But today, she is staying inside.", th: "แต่วันนี้เธออยู่แต่ในบ้าน" },
          { en: "Her cat is sleeping on the sofa right now.", th: "ตอนนี้แมวของเธอกำลังนอนหลับอยู่บนโซฟา" },
          { en: "\"Look! It's raining even harder now,\" Mali says.", th: "\"ดูสิ! ตอนนี้ฝนตกหนักขึ้นอีก\" มาลีพูด" },
          { en: "She decides to relax and read a book instead.", th: "เธอตัดสินใจพักผ่อนและอ่านหนังสือแทน" },
          { en: "Reading is her favorite hobby.", th: "การอ่านหนังสือเป็นงานอดิเรกที่เธอชอบที่สุด" },
          { en: "Suddenly, the wind becomes very windy outside.", th: "ทันใดนั้น ลมข้างนอกก็แรงขึ้นมาก" },
          { en: "Mali grabs her umbrella just in case.", th: "มาลีหยิบร่มไว้เผื่อไว้ก่อน" },
          { en: "Her favorite season is summer, but she doesn't mind a rainy day at home.", th: "ฤดูที่เธอชอบที่สุดคือฤดูร้อน แต่เธอก็ไม่ว่าอะไรกับวันที่ฝนตกอยู่บ้าน" }
        ]
      },
      quiz: [
        { type: "mcq", question: "It ___ (rain) right now.", choices: ["rain", "rains", "is raining", "rained"], answerIndex: 2, explanation: "เหตุการณ์กำลังเกิดขึ้นตอนนี้ ใช้ present continuous คือ is raining" },
        { type: "mcq", question: "I usually ___ (play) football on weekends.", choices: ["play", "plays", "am playing", "played"], answerIndex: 0, explanation: "สิ่งที่ทำเป็นประจำใช้ present simple คือ play" },
        { type: "mcq", question: "Look! It ___ (snow).", choices: ["snows", "is snowing", "snow", "snowed"], answerIndex: 1, explanation: "คำว่า Look! บ่งบอกว่าเหตุการณ์กำลังเกิดขึ้นตอนนี้ ใช้ is snowing" },
        { type: "mcq", question: "'มีเมฆมาก' in English is:", choices: ["Sunny", "Rainy", "Cloudy", "Windy"], answerIndex: 2, explanation: "Cloudy แปลว่า มีเมฆมาก" },
        { type: "mcq", question: "'งานอดิเรก' in English is:", choices: ["Season", "Hobby", "Relax", "Weather"], answerIndex: 1, explanation: "Hobby แปลว่า งานอดิเรก" },
        { type: "mcq", question: "Why is Ben staying at home today?", choices: ["It is hot", "It is raining", "It is a holiday", "He is sick"], answerIndex: 1, explanation: "บทอ่านบอกว่าวันนี้ฝนตก Ben จึงอยู่บ้าน" },
        { type: "mcq", question: "What is Ben's favorite season?", choices: ["Spring", "Summer", "Autumn", "Winter"], answerIndex: 1, explanation: "บทอ่านระบุว่าฤดูร้อนเป็นฤดูโปรดของ Ben เพราะชอบว่ายน้ำ" }
      ]
    },
    {
      week: 10,
      levelTag: "A2",
      title: "Travel & Transport",
      objectives: [
        "ใช้ going to พูดถึงแผนการในอนาคตได้",
        "ใช้ can/can't บอกความสามารถได้ถูกต้อง",
        "พูดเกี่ยวกับการเดินทางและการขนส่งเป็นภาษาอังกฤษได้"
      ],
      grammar: {
        point: "'Going to' future and can/can't for ability",
        explanationTh: "เราใช้ going to พูดถึงแผนหรือสิ่งที่ตั้งใจจะทำในอนาคต โดยมีโครงสร้าง am/is/are + going to + กริยาช่องที่ 1 เช่น I am going to travel next month ส่วน can ใช้บอกความสามารถว่าทำสิ่งใดได้ และ can't ใช้บอกว่าทำสิ่งนั้นไม่ได้ เช่น She can speak English แต่ He can't drive a car",
        examples: [
          { en: "I am going to travel to Japan next month.", th: "ฉันจะไปเที่ยวญี่ปุ่นเดือนหน้า", highlight: "am going to" },
          { en: "She can speak English very well.", th: "เธอพูดภาษาอังกฤษได้ดีมาก", highlight: "can speak" },
          { en: "He can't drive a car.", th: "เขาขับรถไม่เป็น", highlight: "can't drive" },
          { en: "We are going to take a taxi to the airport.", th: "เราจะนั่งแท็กซี่ไปสนามบิน", highlight: "are going to" }
        ]
      },
      vocabulary: [
        { en: "airport", th: "สนามบิน", example: "We are going to the airport.", exampleTh: "เรากำลังจะไปสนามบิน" },
        { en: "ticket", th: "ตั๋ว", example: "I bought a plane ticket.", exampleTh: "ฉันซื้อตั๋วเครื่องบิน" },
        { en: "passport", th: "หนังสือเดินทาง", example: "Don't forget your passport.", exampleTh: "อย่าลืมหนังสือเดินทางของคุณ" },
        { en: "flight", th: "เที่ยวบิน", example: "Our flight leaves at noon.", exampleTh: "เที่ยวบินของเราออกตอนเที่ยง" },
        { en: "luggage", th: "กระเป๋าเดินทาง", example: "She can pack her own luggage.", exampleTh: "เธอสามารถจัดกระเป๋าเดินทางของตัวเองได้" },
        { en: "platform", th: "ชานชาลา", example: "The train is on platform two.", exampleTh: "รถไฟอยู่ที่ชานชาลาสอง" },
        { en: "taxi", th: "แท็กซี่", example: "We are going to take a taxi.", exampleTh: "เราจะนั่งแท็กซี่" },
        { en: "departure", th: "การออกเดินทาง", example: "Check the departure time.", exampleTh: "ตรวจสอบเวลาออกเดินทาง" },
        { en: "delay", th: "ความล่าช้า", example: "There is a delay of one hour.", exampleTh: "มีความล่าช้าหนึ่งชั่วโมง" },
        { en: "train station", th: "สถานีรถไฟ", example: "Meet me at the train station.", exampleTh: "มาเจอฉันที่สถานีรถไฟ" }
      ],
      reading: {
        passage: "Next week, Mai is going to visit her friend in Chiang Mai. She is going to take a flight from Bangkok. She can pack her own luggage very well, but she can't find her passport. She is going to look for it tonight before she packs her bag.",
        questions: [
          { question: "How is Mai going to travel to Chiang Mai?", choices: ["By bus", "By train", "By flight", "By car"], answerIndex: 2, explanation: "บทอ่านบอกว่า Mai จะเดินทางโดยเครื่องบิน (take a flight)" },
          { question: "What problem does Mai have?", choices: ["She lost her ticket", "She can't find her passport", "Her flight is delayed", "She can't pack her bag"], answerIndex: 1, explanation: "บทอ่านบอกว่าเธอหาหนังสือเดินทางไม่เจอ (can't find her passport)" }
        ]
      },
      speaking: {
        prompt: "ลองพูดถึงแผนการเดินทางของคุณในอนาคตอันใกล้ โดยใช้ going to",
        targetPhrase: "I am going to travel to Chiang Mai next week."
      },
      story: {
        title: "การผจญภัยที่สนามบิน",
        sentences: [
          { en: "Tom is going to travel to Japan next month.", th: "ทอมจะไปเที่ยวญี่ปุ่นเดือนหน้า" },
          { en: "He can speak a little Japanese.", th: "เขาพูดภาษาญี่ปุ่นได้นิดหน่อย" },
          { en: "This morning, he is going to the airport.", th: "เช้านี้เขากำลังจะไปสนามบิน" },
          { en: "He checks his luggage and his passport.", th: "เขาตรวจกระเป๋าเดินทางและหนังสือเดินทางของเขา" },
          { en: "\"Where is my ticket?\" Tom asks nervously.", th: "\"ตั๋วของฉันอยู่ไหนนะ\" ทอมถามอย่างกังวล" },
          { en: "He can't find it in his bag.", th: "เขาหามันไม่เจอในกระเป๋า" },
          { en: "Suddenly, he finds it in his pocket!", th: "ทันใดนั้น เขาก็เจอมันในกระเป๋ากางเกง!" },
          { en: "There is a delay of one hour for his flight.", th: "เที่ยวบินของเขาล่าช้าไปหนึ่งชั่วโมง" },
          { en: "Tom decides to take a taxi to get a coffee nearby.", th: "ทอมตัดสินใจนั่งแท็กซี่ไปซื้อกาแฟใกล้ๆ" },
          { en: "Finally, he hears the departure announcement.", th: "ในที่สุด เขาก็ได้ยินประกาศการออกเดินทาง" },
          { en: "Tom is going to have a great trip to Japan.", th: "ทอมกำลังจะมีทริปที่ยอดเยี่ยมที่ญี่ปุ่น" }
        ]
      },
      quiz: [
        { type: "mcq", question: "I ___ going to travel next month.", choices: ["am", "is", "are", "be"], answerIndex: 0, explanation: "ประธาน I ใช้ am นำหน้า going to" },
        { type: "mcq", question: "She ___ (can) speak English very well.", choices: ["can", "cans", "canning", "could"], answerIndex: 0, explanation: "can ไม่เปลี่ยนรูปตามประธาน ใช้ can ได้กับทุกประธาน" },
        { type: "mcq", question: "He ___ (can't) drive a car.", choices: ["can", "can't", "cans", "could"], answerIndex: 1, explanation: "can't ใช้บอกว่าไม่มีความสามารถทำสิ่งนั้น" },
        { type: "mcq", question: "'หนังสือเดินทาง' in English is:", choices: ["Ticket", "Passport", "Luggage", "Flight"], answerIndex: 1, explanation: "Passport แปลว่า หนังสือเดินทาง" },
        { type: "mcq", question: "'ความล่าช้า' in English is:", choices: ["Delay", "Departure", "Platform", "Airport"], answerIndex: 0, explanation: "Delay แปลว่า ความล่าช้า" },
        { type: "mcq", question: "Where is Mai going to visit?", choices: ["Bangkok", "Chiang Mai", "Phuket", "Krabi"], answerIndex: 1, explanation: "บทอ่านระบุว่า Mai จะไปเยี่ยมเพื่อนที่เชียงใหม่" },
        { type: "mcq", question: "What can Mai do very well?", choices: ["Find her passport", "Pack her luggage", "Book a flight", "Drive a car"], answerIndex: 1, explanation: "บทอ่านบอกว่าเธอสามารถจัดกระเป๋าเดินทางได้ดีมาก" }
      ]
    },
    {
      week: 11,
      levelTag: "A2",
      title: "Health & Body",
      objectives: [
        "ใช้ should/shouldn't ให้คำแนะนำเกี่ยวกับสุขภาพได้",
        "ใช้ have to/don't have to บอกข้อบังคับหรือสิ่งที่ไม่จำเป็นต้องทำได้",
        "พูดถึงอาการป่วยและขอคำแนะนำเป็นภาษาอังกฤษได้"
      ],
      grammar: {
        point: "Should/shouldn't and have to/don't have to",
        explanationTh: "Should ใช้ให้คำแนะนำว่าควรทำสิ่งใด และ shouldn't ใช้บอกว่าไม่ควรทำสิ่งนั้น เช่น You should drink more water ส่วน have to ใช้บอกว่าจำเป็นต้องทำสิ่งนั้น เหมือนเป็นข้อบังคับ เช่น I have to see a doctor และ don't have to ใช้บอกว่าไม่จำเป็นต้องทำสิ่งนั้นก็ได้ เช่น You don't have to take medicine for a small cold",
        examples: [
          { en: "You should drink more water.", th: "คุณควรดื่มน้ำให้มากขึ้น", highlight: "should" },
          { en: "You shouldn't stay up late.", th: "คุณไม่ควรนอนดึก", highlight: "shouldn't" },
          { en: "I have to see a doctor today.", th: "ฉันต้องไปหาหมอวันนี้", highlight: "have to" },
          { en: "You don't have to take medicine for a small cold.", th: "คุณไม่จำเป็นต้องกินยาสำหรับหวัดเล็กน้อย", highlight: "don't have to" }
        ]
      },
      vocabulary: [
        { en: "headache", th: "ปวดหัว", example: "I have a headache today.", exampleTh: "วันนี้ฉันปวดหัว" },
        { en: "fever", th: "ไข้", example: "She has a high fever.", exampleTh: "เธอมีไข้สูง" },
        { en: "stomachache", th: "ปวดท้อง", example: "He has a stomachache.", exampleTh: "เขาปวดท้อง" },
        { en: "medicine", th: "ยา", example: "Take this medicine twice a day.", exampleTh: "กินยานี้วันละสองครั้ง" },
        { en: "doctor", th: "หมอ", example: "You should see a doctor.", exampleTh: "คุณควรไปหาหมอ" },
        { en: "rest", th: "พักผ่อน", example: "You should rest at home.", exampleTh: "คุณควรพักผ่อนที่บ้าน" },
        { en: "cough", th: "ไอ", example: "He has a bad cough.", exampleTh: "เขาไอหนักมาก" },
        { en: "sore throat", th: "เจ็บคอ", example: "I have a sore throat.", exampleTh: "ฉันเจ็บคอ" },
        { en: "exercise", th: "ออกกำลังกาย", example: "You should exercise every day.", exampleTh: "คุณควรออกกำลังกายทุกวัน" },
        { en: "healthy", th: "มีสุขภาพดี", example: "Eating vegetables keeps you healthy.", exampleTh: "การกินผักช่วยให้คุณมีสุขภาพดี" }
      ],
      reading: {
        passage: "Nid has a headache and a sore throat today. She should rest at home and drink warm water. She doesn't have to go to work, but she has to call her boss to explain. If she doesn't feel better tomorrow, she should see a doctor and take some medicine.",
        questions: [
          { question: "What symptoms does Nid have?", choices: ["Fever and cough", "Headache and sore throat", "Stomachache and fever", "Cough and stomachache"], answerIndex: 1, explanation: "บทอ่านระบุว่า Nid ปวดหัวและเจ็บคอ (headache and sore throat)" },
          { question: "What does Nid have to do?", choices: ["Go to work", "See a doctor immediately", "Call her boss", "Take medicine now"], answerIndex: 2, explanation: "บทอ่านบอกว่าเธอต้องโทรบอกเจ้านาย (has to call her boss)" }
        ]
      },
      speaking: {
        prompt: "ลองฝึกพูดบอกอาการป่วยของตนเองและขอคำแนะนำ",
        targetPhrase: "I have a headache. I think I should rest today."
      },
      story: {
        title: "วันที่ปวดหัวของหมี",
        sentences: [
          { en: "Boonmee the bear has a headache today.", th: "หมีบุญมีปวดหัววันนี้" },
          { en: "He also has a small cough.", th: "เขายังไอเล็กน้อยด้วย" },
          { en: "His friend Rabbit visits him.", th: "เพื่อนของเขา กระต่าย มาเยี่ยม" },
          { en: "\"You should rest at home,\" says Rabbit.", th: "\"คุณควรพักผ่อนที่บ้านนะ\" กระต่ายพูด" },
          { en: "\"You shouldn't go to work today,\" Rabbit adds.", th: "\"วันนี้คุณไม่ควรไปทำงานนะ\" กระต่ายพูดเสริม" },
          { en: "Boonmee doesn't have a fever, so he doesn't have to see a doctor yet.", th: "บุญมีไม่มีไข้ เขาจึงยังไม่ต้องไปหาหมอ" },
          { en: "He drinks warm water and takes some medicine.", th: "เขาดื่มน้ำอุ่นและกินยาบางอย่าง" },
          { en: "Rabbit brings him healthy soup with vegetables.", th: "กระต่ายเอาซุปที่มีประโยชน์ใส่ผักมาให้เขา" },
          { en: "\"Thank you, I feel better already,\" says Boonmee.", th: "\"ขอบคุณนะ ฉันรู้สึกดีขึ้นแล้ว\" บุญมีพูด" },
          { en: "He promises to exercise every day when he is healthy again.", th: "เขาสัญญาว่าจะออกกำลังกายทุกวันเมื่อเขาแข็งแรงอีกครั้ง" }
        ]
      },
      quiz: [
        { type: "mcq", question: "You ___ drink more water.", choices: ["should", "shouldn't", "have to", "can't"], answerIndex: 0, explanation: "should ใช้ให้คำแนะนำในเชิงบวก" },
        { type: "mcq", question: "You ___ stay up late.", choices: ["should", "shouldn't", "have to", "can"], answerIndex: 1, explanation: "shouldn't ใช้บอกว่าไม่ควรทำสิ่งนั้น" },
        { type: "mcq", question: "I ___ see a doctor today. (necessity)", choices: ["should", "have to", "can", "might"], answerIndex: 1, explanation: "have to ใช้บอกความจำเป็นที่ต้องทำ" },
        { type: "mcq", question: "'ปวดหัว' in English is:", choices: ["Fever", "Headache", "Cough", "Stomachache"], answerIndex: 1, explanation: "Headache แปลว่า ปวดหัว" },
        { type: "mcq", question: "'พักผ่อน' in English is:", choices: ["Exercise", "Rest", "Cough", "Medicine"], answerIndex: 1, explanation: "Rest แปลว่า พักผ่อน" },
        { type: "mcq", question: "What should Nid do at home?", choices: ["Exercise", "Rest and drink warm water", "Cook dinner", "Watch TV"], answerIndex: 1, explanation: "บทอ่านบอกว่าเธอควรพักผ่อนและดื่มน้ำอุ่นที่บ้าน" },
        { type: "mcq", question: "What should Nid do if she doesn't feel better tomorrow?", choices: ["Go to work", "See a doctor", "Call her friend", "Sleep all day"], answerIndex: 1, explanation: "บทอ่านบอกว่าถ้ายังไม่ดีขึ้นพรุ่งนี้ เธอควรไปหาหมอ" }
      ]
    },
    {
      week: 12,
      levelTag: "A2",
      title: "Making Plans & Review",
      objectives: [
        "ใช้ will พูดถึงการตัดสินใจหรือแผนการในอนาคตได้",
        "ทบทวนโครงสร้างไวยากรณ์ที่เรียนมาตลอด 11 สัปดาห์",
        "สื่อสารเรื่องแผนการและการนัดหมายเป็นภาษาอังกฤษได้อย่างมั่นใจ"
      ],
      grammar: {
        point: "'Will' future and review of Weeks 1-11",
        explanationTh: "เราใช้ will พูดถึงการตัดสินใจในทันที คำสัญญา หรือการคาดเดาเกี่ยวกับอนาคต โดยมีโครงสร้าง will ตามด้วยกริยาช่องที่ 1 เสมอ ไม่ว่าประธานจะเป็นใคร เช่น I will call you tomorrow สัปดาห์นี้เป็นการทบทวนไวยากรณ์ทั้งหมดที่เรียนมา ทั้ง to be, present simple, past simple, going to, should และ have to เพื่อให้ผู้เรียนใช้ภาษาอังกฤษได้อย่างมั่นใจมากขึ้น",
        examples: [
          { en: "I will call you tomorrow.", th: "ฉันจะโทรหาคุณพรุ่งนี้", highlight: "will call" },
          { en: "She will help you with your homework.", th: "เธอจะช่วยคุณทำการบ้าน", highlight: "will help" },
          { en: "We will travel together next year.", th: "เราจะเดินทางไปด้วยกันปีหน้า", highlight: "will travel" },
          { en: "I promise I will not be late.", th: "ฉันสัญญาว่าจะไม่มาสาย", highlight: "will not be" }
        ]
      },
      vocabulary: [
        { en: "plan", th: "แผนการ", example: "What is your plan for the weekend?", exampleTh: "แผนของคุณสำหรับวันหยุดสุดสัปดาห์คืออะไร" },
        { en: "decide", th: "ตัดสินใจ", example: "I will decide tomorrow.", exampleTh: "ฉันจะตัดสินใจพรุ่งนี้" },
        { en: "promise", th: "สัญญา", example: "I promise I will help you.", exampleTh: "ฉันสัญญาว่าจะช่วยคุณ" },
        { en: "invite", th: "เชิญ", example: "I will invite my friends to the party.", exampleTh: "ฉันจะเชิญเพื่อนๆ มางานปาร์ตี้" },
        { en: "celebrate", th: "เฉลิมฉลอง", example: "We will celebrate my birthday.", exampleTh: "เราจะฉลองวันเกิดของฉัน" },
        { en: "party", th: "งานปาร์ตี้", example: "We are going to have a party.", exampleTh: "เรากำลังจะจัดงานปาร์ตี้" },
        { en: "congratulations", th: "ขอแสดงความยินดี", example: "Congratulations on your new job!", exampleTh: "ขอแสดงความยินดีกับงานใหม่ของคุณ!" },
        { en: "future", th: "อนาคต", example: "What will you do in the future?", exampleTh: "คุณจะทำอะไรในอนาคต" },
        { en: "dream", th: "ความฝัน", example: "My dream is to travel the world.", exampleTh: "ความฝันของฉันคือการเดินทางไปทั่วโลก" },
        { en: "cake", th: "เค้ก", example: "I will buy a cake for the party.", exampleTh: "ฉันจะซื้อเค้กสำหรับงานปาร์ตี้" }
      ],
      reading: {
        passage: "Next Saturday, my friends and I will have a party to celebrate my birthday. Last year, we went to a restaurant, but this year we are going to cook at home. I am excited because all of my friends are going to come. I will buy a cake and some drinks for the party. I hope everyone will have a wonderful time.",
        questions: [
          { question: "What did they do last year for the birthday?", choices: ["Cooked at home", "Went to a restaurant", "Had no party", "Traveled abroad"], answerIndex: 1, explanation: "บทอ่านบอกว่าปีที่แล้วพวกเขาไปฉลองที่ร้านอาหาร" },
          { question: "What will the speaker buy for the party?", choices: ["A gift and flowers", "A cake and some drinks", "New clothes", "Party decorations only"], answerIndex: 1, explanation: "บทอ่านระบุว่าผู้พูดจะซื้อเค้กและเครื่องดื่มสำหรับงานปาร์ตี้" }
        ]
      },
      speaking: {
        prompt: "ลองพูดถึงแผนการในอนาคตของคุณ เช่น การจัดงานเลี้ยงหรือการฉลองโอกาสพิเศษ โดยใช้ will",
        targetPhrase: "I will have a party next Saturday to celebrate my birthday."
      },
      story: {
        title: "ปาร์ตี้เซอร์ไพรส์",
        sentences: [
          { en: "Next Saturday, we will celebrate our teacher's birthday.", th: "วันเสาร์หน้า เราจะฉลองวันเกิดของครูของเรา" },
          { en: "It will be a surprise party.", th: "มันจะเป็นงานปาร์ตี้เซอร์ไพรส์" },
          { en: "\"I will invite all the students,\" says Mai.", th: "\"ฉันจะเชิญนักเรียนทุกคน\" ไมพูด" },
          { en: "\"I promise I will bring a cake,\" says Ben.", th: "\"ฉันสัญญาว่าจะเอาเค้กมา\" เบนพูด" },
          { en: "They decide to meet after school to plan.", th: "พวกเขาตัดสินใจเจอกันหลังเลิกเรียนเพื่อวางแผน" },
          { en: "\"She will help us decorate the room,\" Mai says about Nid.", th: "\"เธอจะช่วยเราตกแต่งห้อง\" ไมพูดถึงหนิด" },
          { en: "On Saturday morning, everyone arrives early.", th: "เช้าวันเสาร์ ทุกคนมาถึงแต่เช้า" },
          { en: "When the teacher walks in, everyone shouts, \"Congratulations!\"", th: "เมื่อครูเดินเข้ามา ทุกคนตะโกนว่า \"ขอแสดงความยินดี!\"" },
          { en: "The teacher is very surprised and happy.", th: "ครูรู้สึกประหลาดใจและมีความสุขมาก" },
          { en: "\"Thank you all. I will remember this day forever,\" she says.", th: "\"ขอบคุณทุกคนนะ ฉันจะจดจำวันนี้ไปตลอดกาล\" เธอพูด" },
          { en: "It was a wonderful plan, and everyone had a great time.", th: "มันเป็นแผนที่ยอดเยี่ยม และทุกคนก็สนุกกันมาก" }
        ]
      },
      quiz: [
        { type: "mcq", question: "I ___ call you tomorrow.", choices: ["will", "would", "going to", "can"], answerIndex: 0, explanation: "will ใช้พูดถึงการตัดสินใจหรือแผนในอนาคต" },
        { type: "mcq", question: "She will ___ (help) you with your homework.", choices: ["helps", "help", "helping", "helped"], answerIndex: 1, explanation: "หลัง will ต้องตามด้วยกริยาช่องที่ 1 เสมอ ไม่เติม s" },
        { type: "mcq", question: "Last year, we ___ (go) to a restaurant.", choices: ["go", "goes", "went", "will go"], answerIndex: 2, explanation: "เหตุการณ์ในอดีตใช้ past simple คือ went" },
        { type: "mcq", question: "'เฉลิมฉลอง' in English is:", choices: ["Invite", "Celebrate", "Decide", "Promise"], answerIndex: 1, explanation: "Celebrate แปลว่า เฉลิมฉลอง" },
        { type: "mcq", question: "'สัญญา' in English is:", choices: ["Promise", "Plan", "Dream", "Future"], answerIndex: 0, explanation: "Promise แปลว่า สัญญา" },
        { type: "mcq", question: "When will the party be?", choices: ["Next Friday", "Next Saturday", "Next Sunday", "Tomorrow"], answerIndex: 1, explanation: "บทอ่านระบุว่างานปาร์ตี้จะจัดขึ้นวันเสาร์หน้า" },
        { type: "mcq", question: "Why is the speaker excited?", choices: ["It's a holiday", "All friends are going to come", "They will travel", "The food is free"], answerIndex: 1, explanation: "บทอ่านบอกว่าผู้พูดตื่นเต้นเพราะเพื่อนทุกคนจะมาร่วมงาน" }
      ]
    }
  ]
};
