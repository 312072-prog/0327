// 定義生成的資料庫
const templates = {
    happy: [
        "今天關於「{topic}」的一切都顯得那麼美好。陽光灑落，感覺心靈都被治癒了！",
        "生活就像{topic}，充滿了驚喜與色彩，讓我們一起享受這份快樂吧。"
    ],
    sad: [
        "窗外下著雨，我不禁想起了「{topic}」。那些細碎的往事，終究在時間裡慢慢淡去。",
        "有時候，「{topic}」帶來的不是答案，而是更深沉的思考與寂寞。"
    ],
    pro: [
        "針對「{topic}」的發展趨勢，我們必須從多維度進行分析，以確保其核心價值極大化。",
        "本報告旨在探討「{topic}」在現代社會中的定位與潛在影響力。"
    ],
    funny: [
        "如果「{topic}」會說話，它一定會叫我趕快去睡覺，不要在那邊亂想。",
        "這世界上只有兩件事最難懂：一個是宇宙，另一個就是「{topic}」。"
    ]
};

// 選取 DOM 元素
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const topicInput = document.getElementById('topic');
const moodSelect = document.getElementById('mood');
const resultArea = document.getElementById('result-area');

// 生成邏輯
generateBtn.addEventListener('click', () => {
    const topic = topicInput.value || "某件事";
    const mood = moodSelect.value;
    
    resultArea.innerText = "✨ 正在構思精采內容...";
    
    setTimeout(() => {
        const selectedList = templates[mood];
        const randomText = selectedList[Math.floor(Math.random() * selectedList.length)];
        // 取代關鍵字
        resultArea.innerText = randomText.replace("{topic}", topic);
    }, 600);
});

// 複製邏輯
copyBtn.addEventListener('click', () => {
    const text = resultArea.innerText;
    if (text.includes("生成的短文")) return;
    
    navigator.clipboard.writeText(text).then(() => {
        const originalBtnText = copyBtn.innerText;
        copyBtn.innerText = "✅ 已複製！";
        setTimeout(() => copyBtn.innerText = originalBtnText, 2000);
    });
});
