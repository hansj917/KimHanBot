class Chatbot {
    constructor() {
        this.chatMessages = document.getElementById('chatMessages');
        this.userInput = document.getElementById('userInput');
        this.sendButton = document.getElementById('sendButton');

        this.setupEventListeners();
        this.addBotMessage('전 김한봇입니다만, 궁금하신게 있으신가요?');
    }

    setupEventListeners() {
        this.sendButton.addEventListener('click', () => this.sendMessage());

        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        })
    }

    sendMessage() {
        const message = this.userInput.value.trim();
        if (message === '') return;

        this.addUserMessage(message);
        this.userInput.value = '';

        setTimeout(() => {
            const botResponse = this.generateBotResponse(message);
            this.addBotMessage(botResponse);
        }, 1000);
    }

    addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.ClassName = 'message user-message';
        messageDiv.textContent = message;
        this.chatMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }

    generateBotResponse(usermessage) {
        const responses = {
            '검색 해줘': '검색 결과를 보여드릴게요!',
            '날씨': '오늘 날씨는 맑습니다',
            '시간': `현재 시간은 ${new Date().toLocaleTimeString()}`,
            '도움말': 'HTML, CSS, JavaScript에 대해 질문해보세요!'
        };

        for (let keyword in responses) {
            if (usermessage.includes(keyword)) {
                return responses[keyword];
            }
        }
    }

    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Chatbot();
});
