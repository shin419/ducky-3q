<template>
  <div class="p-4">
    <input type="file" accept="image/*" @change="handleFile" />
    <div v-if="loading">Đang nhận diện...</div>
    <pre v-if="text">{{ text }}</pre>
    <q-input outlined v-model="value" label="Outlined" class="q-mt-md" />
    <q-btn color="primary" label="Click"  class="q-mt-md" @click="test()"/>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyB9xd60S19iYc1gB6CDDb0VRrOgyf0qDz4");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const text = ref("")
const value = ref("")
const loading = ref(false)

async function handleFile (e) {
  const file = e.target.files[0]
  if (!file) return
  speak(await extractTextFromImage(file));
}

async function test() {
  const result = await model.generateContent(this.value);

  speak(result.response.text());
}

async function extractTextFromImage(file) {
  const imageBase64 = await toBase64(file);

  const result = await model.generateContent([
    { inlineData: { mimeType: file.type, data: imageBase64.split(",")[1] } },
    "Hình ảnh này bao gồm các tướng trong tam quốc diễn nghĩa. " +
    "Mỗi tướng tương ứng với 1 thẻ bài và tên tướng được mô tả trong hình. " +
    "Hình ảnh tôi gửi có thể bao gồm nhiều thẻ bài là nhiều nhiều tướng đó. " +
    "Hãy giúp tôi liệt kê các tướng có trong hình"
  ]);

  return result.response.text();
}

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function speak (text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'vi-VN';           // Ngôn ngữ: tiếng Việt
  utterance.pitch = 1;                // Độ cao (0 - 2)
  utterance.rate = 1;                 // Tốc độ (0.1 - 10)
  utterance.volume = 1;               // Âm lượng (0 - 1)
  speechSynthesis.speak(utterance);
}
</script>
