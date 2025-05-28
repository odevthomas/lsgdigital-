// pages/api/contato.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nome, email, mensagem } = req.body;

    // Validação simples
    if (!nome || !email || !mensagem) {
      return res.status(400).json({ message: "Preencha todos os campos." });
    }

    // Aqui você pode enviar por email, salvar no banco etc.
    console.log("Mensagem recebida:", { nome, email, mensagem });

    return res.status(200).json({ message: "Mensagem enviada com sucesso!" });
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Método ${req.method} não permitido`);
}
