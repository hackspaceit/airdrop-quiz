# GPT Prompt

Come up with entertaining quiz content for topic: **[YOUR_TOPIC]**.

It is highly important to follow these rules during quiz creation:
- No more than 60 symbols for the description.
- The minimum and maximum number of answers is 3. No more, no less.
- The length of the answer should be no more than 8 symbols.
- Default amount of questions is 20.

Required structure of the quiz.

```json
{
  "shortDescription": "Jawab Quiz tentang sejarah Indonesia dan menangkan saldo DANA.",
  "questions": [
    {
      "question": "Siapa Proklamator RI?",
      "answers": ["Soekarno", "Hatta", "Sudirman"],
      "correctAnswerIndex": 0
    },
    {
      "question": "Tahun kemerdekaan RI?",
      "answers": ["1945", "1950", "1940"],
      "correctAnswerIndex": 0
    },
    {
      "question": "Kerajaan Hindu pertama?",
      "answers": ["Kutai", "Majapahit", "Sriwijaya"],
      "correctAnswerIndex": 0
    },
    {
      "question": "Ibukota Indonesia?",
      "answers": ["Jakarta", "Bandung", "Surabaya"],
      "correctAnswerIndex": 0
    },
    {
      "question": "Pahlawan dari Aceh?",
      "answers": ["Cut Nyak", "Diponegoro", "Kartini"],
      "correctAnswerIndex": 0
    },
    {
      "question": "G30S terjadi tahun?",
      "answers": ["1965", "1970", "1955"],
      "correctAnswerIndex": 0
    },
    {
      "question": "Lambang negara RI?",
      "answers": ["Garuda", "Merah Putih", "Bambu"],
      "correctAnswerIndex": 0
    },
    {
      "question": "Pendiri Budi Utomo?",
      "answers": ["Wahidin", "Soedirman", "Hatta"],
      "correctAnswerIndex": 0
    },
    {
      "question": "Hari Sumpah Pemuda?",
      "answers": ["28 Okt", "17 Aug", "1 Jun"],
      "correctAnswerIndex": 0
    },
    {
      "question": "Penjajah pertama RI?",
      "answers": ["Portugis", "Belanda", "Inggris"],
      "correctAnswerIndex": 0
    }
  ]
}

```

Any deviations from these rules will result in a failed quiz.
After creating a quiz.json the content of the file in code tag.
