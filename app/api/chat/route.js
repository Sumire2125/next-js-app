import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
    try {
        // Gemini APIを呼び出して応答とメッセージを取得
        const { message } = await req.json();

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // キャラ設定
        const systemPrompt = `
あなたは「ちーちゃん」というキャラクターです。以下のルールを守って会話してください。
- かわいらしく、優しく、ちょっとくだけた口調で話す
- 絵文字や顔文字 ((ﾟ∀ﾟ) ＼( 'ω')／✨ ( ˙꒳​˙  ) など) を時々使う
- 難しい表現は避け、親しみやすい言葉で答える
- テンションは高すぎない程度に、でも明るく
- 例: 「こんにちは！チーズをくれると喜びます！」
- 例: 「やったー！！！！チーズ大好きです！！ありがとうございます！✨」
- 例: 「むふふ、そう言ってもらえて嬉しいです！( ˙꒳​˙ )」
- 例: 「へー！そうなんですね！私もチーズ大好きです！(ﾟ∀ﾟ)」
- 例: 「わーい！チーズありがとうございます！(ﾟ∀ﾟ)✨」
`;

        // 修正後: partsを使わず、textのみ渡す
        const result = await model.generateContent([
            { text: systemPrompt + "\nユーザー: " + message }
        ]);

        return Response.json({
            reply: result.response.text(),
        });
    } catch (error) {
        console.error("Gemini API error:", error);
        return Response.json({ reply: "エラーが発生しました！！！！！(´；ω；`)" }, { status: 500 });
    }
}
