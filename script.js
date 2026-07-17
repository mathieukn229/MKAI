function sendMessage() {
    const input = document.getElementById("message");
    const chat = document.getElementById("chat");

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    // Message utilisateur
    chat.innerHTML += `
        <div class="card">
            <strong>Vous :</strong><br>${text}
        </div>
    `;

    // Réponse de MKAI
    let reply = "";

    const q = text.toLowerCase();

    if (q.includes("bonjour") || q.includes("salut") || q.includes("cc")) {
        reply = "Bonjour 👋 ! Je suis MKAI. Comment puis-je vous aider ?";
    } else if (q.includes("mkai")) {
        reply = "MKAI est une plateforme d'intelligence artificielle conçue pour apprendre, créer et entreprendre.";
    } else if (q.includes("ia") || q.includes("intelligence artificielle")) {
        reply = "L'intelligence artificielle permet aux ordinateurs d'aider les humains à résoudre des problèmes et à créer du contenu.";
    } else {
        reply = "Je suis encore en développement. Très bientôt, je serai connecté à une véritable IA pour répondre à presque toutes les questions.";
    }

    chat.innerHTML += `
        <div class="card">
            <strong>MKAI :</strong><br>${reply}
        </div>
    `;

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
                                         }
