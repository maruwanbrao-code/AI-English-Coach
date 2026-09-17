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
        examples: ["I am a student.", "She is from Thailand.", "They are teachers.", "He is my friend."]
      },
      vocabulary: [
        { en: "name", th: "ชื่อ", example: "What is your name?" },
        { en: "hello", th: "สวัสดี", example: "Hello, how are you?" },
        { en: "goodbye", th: "ลาก่อน", example: "Goodbye, see you tomorrow!" },
        { en: "friend", th: "เพื่อน", example: "This is my friend, Tom." },
        { en: "teacher", th: "ครู", example: "My teacher is very kind." },
        { en: "student", th: "นักเรียน", example: "I am a student at this school." },
        { en: "country", th: "ประเทศ", example: "Which country are you from?" },
        { en: "meet", th: "พบ, เจอ", example: "Nice to meet you." },
        { en: "morning", th: "ตอนเช้า", example: "Good morning, everyone!" },
        { en: "nice", th: "ดี, น่ายินดี", example: "It's nice to meet you." }
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
        examples: ["This is my mother.", "What is her name?", "Where is your brother?", "Who is that man?"]
      },
      vocabulary: [
        { en: "mother", th: "แม่", example: "This is my mother." },
        { en: "father", th: "พ่อ", example: "My father works in Bangkok." },
        { en: "sister", th: "พี่สาว หรือ น้องสาว", example: "I have one sister." },
        { en: "brother", th: "พี่ชาย หรือ น้องชาย", example: "My brother is ten years old." },
        { en: "family", th: "ครอบครัว", example: "I love my family." },
        { en: "son", th: "ลูกชาย", example: "He is their son." },
        { en: "daughter", th: "ลูกสาว", example: "She is my daughter." },
        { en: "age", th: "อายุ", example: "What is your age?" },
        { en: "address", th: "ที่อยู่", example: "What is your address?" },
        { en: "phone number", th: "เบอร์โทรศัพท์", example: "Can I have your phone number?" }
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
        examples: ["There is a clock on the wall.", "There are seven days in a week.", "I have class at nine o'clock.", "My birthday is in June."]
      },
      vocabulary: [
        { en: "today", th: "วันนี้", example: "What day is it today?" },
        { en: "tomorrow", th: "พรุ่งนี้", example: "See you tomorrow." },
        { en: "yesterday", th: "เมื่อวาน", example: "It rained yesterday." },
        { en: "week", th: "สัปดาห์", example: "There are seven days in a week." },
        { en: "month", th: "เดือน", example: "There are twelve months in a year." },
        { en: "o'clock", th: "นาฬิกา (บอกเวลาเต็มชั่วโมง)", example: "It is three o'clock." },
        { en: "weekend", th: "วันหยุดสุดสัปดาห์", example: "I relax on the weekend." },
        { en: "birthday", th: "วันเกิด", example: "My birthday is in June." },
        { en: "appointment", th: "นัดหมาย", example: "I have an appointment at ten o'clock." },
        { en: "holiday", th: "วันหยุด", example: "Tomorrow is a holiday." }
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
        examples: ["I wake up at six o'clock.", "She doesn't drink coffee.", "Do you go to school every day?", "He goes to work by bus."]
      },
      vocabulary: [
        { en: "wake up", th: "ตื่นนอน", example: "I wake up at six o'clock." },
        { en: "get up", th: "ลุกจากเตียง", example: "He gets up early every day." },
        { en: "brush teeth", th: "แปรงฟัน", example: "I brush my teeth every morning." },
        { en: "take a shower", th: "อาบน้ำ", example: "She takes a shower in the morning." },
        { en: "have breakfast", th: "รับประทานอาหารเช้า", example: "We have breakfast at seven." },
        { en: "go to work", th: "ไปทำงาน", example: "He goes to work by bus." },
        { en: "go to school", th: "ไปโรงเรียน", example: "They go to school on foot." },
        { en: "go to bed", th: "เข้านอน", example: "I go to bed at ten o'clock." },
        { en: "usually", th: "โดยปกติ", example: "I usually eat rice for lunch." },
        { en: "every day", th: "ทุกวัน", example: "She exercises every day." }
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
        examples: ["There is some rice in the bowl.", "There aren't any apples.", "Do you want some water?", "I don't have any sugar."]
      },
      vocabulary: [
        { en: "rice", th: "ข้าว", example: "There is some rice in the bowl." },
        { en: "water", th: "น้ำ", example: "Do you want some water?" },
        { en: "apple", th: "แอปเปิ้ล", example: "There aren't any apples." },
        { en: "bread", th: "ขนมปัง", example: "I eat bread for breakfast." },
        { en: "milk", th: "นม", example: "She drinks milk every morning." },
        { en: "sugar", th: "น้ำตาล", example: "I don't have any sugar." },
        { en: "vegetable", th: "ผัก", example: "We should eat more vegetables." },
        { en: "fruit", th: "ผลไม้", example: "Fruit is good for your health." },
        { en: "meal", th: "มื้ออาหาร", example: "Breakfast is an important meal." },
        { en: "hungry", th: "หิว", example: "I am very hungry." }
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
        examples: ["The bank is next to the hospital.", "Turn left at the corner.", "Go straight ahead.", "The park is between the school and the market."]
      },
      vocabulary: [
        { en: "hospital", th: "โรงพยาบาล", example: "The hospital is next to the bank." },
        { en: "bank", th: "ธนาคาร", example: "I need to go to the bank." },
        { en: "market", th: "ตลาด", example: "The market is near my house." },
        { en: "park", th: "สวนสาธารณะ", example: "We walked in the park." },
        { en: "corner", th: "มุมถนน", example: "Turn left at the corner." },
        { en: "turn left", th: "เลี้ยวซ้าย", example: "Turn left at the traffic light." },
        { en: "turn right", th: "เลี้ยวขวา", example: "Turn right after the bridge." },
        { en: "straight ahead", th: "ตรงไปข้างหน้า", example: "Go straight ahead for two blocks." },
        { en: "next to", th: "ติดกับ", example: "The bank is next to the hospital." },
        { en: "between", th: "ระหว่าง", example: "The park is between the school and the market." }
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
        examples: ["I visited my grandmother last week.", "She went to the market yesterday.", "They saw a movie last night.", "We didn't go swimming because it rained."]
      },
      vocabulary: [
        { en: "last night", th: "เมื่อคืนนี้", example: "They saw a movie last night." },
        { en: "last week", th: "สัปดาห์ที่แล้ว", example: "I visited my grandmother last week." },
        { en: "ago", th: "ที่แล้ว (นับจากปัจจุบัน)", example: "She left two hours ago." },
        { en: "visited", th: "(ไป)เยี่ยม (อดีตของ visit)", example: "We visited a beautiful beach." },
        { en: "arrived", th: "มาถึง (อดีตของ arrive)", example: "We arrived at the hotel at noon." },
        { en: "bought", th: "ซื้อ (อดีตของ buy)", example: "She bought a souvenir for her friend." },
        { en: "trip", th: "การเดินทาง ทริป", example: "It was a wonderful trip." },
        { en: "vacation", th: "วันหยุดพักผ่อน", example: "We went on a vacation to Phuket." },
        { en: "souvenir", th: "ของที่ระลึก", example: "We bought some souvenirs." },
        { en: "camera", th: "กล้องถ่ายรูป", example: "He took photos with his camera." }
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
        examples: ["This shirt is cheaper than that one.", "These shoes are more expensive than those sandals.", "That bag is bigger than this bag.", "This dress is prettier than that dress."]
      },
      vocabulary: [
        { en: "price", th: "ราคา", example: "What is the price of this shirt?" },
        { en: "expensive", th: "แพง", example: "This bag is very expensive." },
        { en: "cheap", th: "ถูก", example: "That dress is cheaper than this one." },
        { en: "discount", th: "ส่วนลด", example: "We have a big discount today." },
        { en: "receipt", th: "ใบเสร็จ", example: "Can I have a receipt, please?" },
        { en: "cashier", th: "พนักงานเก็บเงิน", example: "I paid the cashier." },
        { en: "size", th: "ขนาด", example: "Do you have a smaller size?" },
        { en: "color", th: "สี", example: "What color do you want?" },
        { en: "try on", th: "ลองสวมใส่", example: "Can I try on this shirt?" },
        { en: "pay", th: "จ่ายเงิน", example: "I will pay by cash." }
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
        examples: ["It is raining now.", "I usually play football on weekends.", "She is reading a book right now, but she doesn't read every day.", "Look! It's snowing."]
      },
      vocabulary: [
        { en: "sunny", th: "แดดออก", example: "It is sunny today." },
        { en: "rainy", th: "ฝนตก", example: "I don't like rainy days." },
        { en: "cloudy", th: "มีเมฆมาก", example: "It is cloudy this afternoon." },
        { en: "windy", th: "ลมแรง", example: "It is very windy today." },
        { en: "hot", th: "ร้อน", example: "Summer in Thailand is very hot." },
        { en: "cold", th: "หนาว", example: "It is cold in the mountains." },
        { en: "umbrella", th: "ร่ม", example: "Bring an umbrella; it might rain." },
        { en: "hobby", th: "งานอดิเรก", example: "My hobby is reading books." },
        { en: "season", th: "ฤดูกาล", example: "My favorite season is summer." },
        { en: "relax", th: "พักผ่อน", example: "I relax at home on rainy days." }
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
        examples: ["I am going to travel to Japan next month.", "She can speak English very well.", "He can't drive a car.", "We are going to take a taxi to the airport."]
      },
      vocabulary: [
        { en: "airport", th: "สนามบิน", example: "We are going to the airport." },
        { en: "ticket", th: "ตั๋ว", example: "I bought a plane ticket." },
        { en: "passport", th: "หนังสือเดินทาง", example: "Don't forget your passport." },
        { en: "flight", th: "เที่ยวบิน", example: "Our flight leaves at noon." },
        { en: "luggage", th: "กระเป๋าเดินทาง", example: "She can pack her own luggage." },
        { en: "platform", th: "ชานชาลา", example: "The train is on platform two." },
        { en: "taxi", th: "แท็กซี่", example: "We are going to take a taxi." },
        { en: "departure", th: "การออกเดินทาง", example: "Check the departure time." },
        { en: "delay", th: "ความล่าช้า", example: "There is a delay of one hour." },
        { en: "train station", th: "สถานีรถไฟ", example: "Meet me at the train station." }
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
        examples: ["You should drink more water.", "You shouldn't stay up late.", "I have to see a doctor today.", "You don't have to take medicine for a small cold."]
      },
      vocabulary: [
        { en: "headache", th: "ปวดหัว", example: "I have a headache today." },
        { en: "fever", th: "ไข้", example: "She has a high fever." },
        { en: "stomachache", th: "ปวดท้อง", example: "He has a stomachache." },
        { en: "medicine", th: "ยา", example: "Take this medicine twice a day." },
        { en: "doctor", th: "หมอ", example: "You should see a doctor." },
        { en: "rest", th: "พักผ่อน", example: "You should rest at home." },
        { en: "cough", th: "ไอ", example: "He has a bad cough." },
        { en: "sore throat", th: "เจ็บคอ", example: "I have a sore throat." },
        { en: "exercise", th: "ออกกำลังกาย", example: "You should exercise every day." },
        { en: "healthy", th: "มีสุขภาพดี", example: "Eating vegetables keeps you healthy." }
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
        examples: ["I will call you tomorrow.", "She will help you with your homework.", "We will travel together next year.", "I promise I will not be late."]
      },
      vocabulary: [
        { en: "plan", th: "แผนการ", example: "What is your plan for the weekend?" },
        { en: "decide", th: "ตัดสินใจ", example: "I will decide tomorrow." },
        { en: "promise", th: "สัญญา", example: "I promise I will help you." },
        { en: "invite", th: "เชิญ", example: "I will invite my friends to the party." },
        { en: "celebrate", th: "เฉลิมฉลอง", example: "We will celebrate my birthday." },
        { en: "party", th: "งานปาร์ตี้", example: "We are going to have a party." },
        { en: "congratulations", th: "ขอแสดงความยินดี", example: "Congratulations on your new job!" },
        { en: "future", th: "อนาคต", example: "What will you do in the future?" },
        { en: "dream", th: "ความฝัน", example: "My dream is to travel the world." },
        { en: "cake", th: "เค้ก", example: "I will buy a cake for the party." }
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
