import { defineStore } from "pinia";

export const homeStore = defineStore("homeStore", {
    state: () => {
        return {
            faqs: [
                {
                    question: "What is this service?",
                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    open: false,
                },
                {
                    question: "How can I make a reservation?",
                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    open: false,
                },
                {
                    question: "Are there any additional fees?",
                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    open: false,
                },
                {
                    question: "How do I cancel a reservation?",
                    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    open: false,
                },
            ],
        };
    },
    actions: {
        toggleFAQ(index) {
            this.faqs.forEach((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }
            });
        },
    },
});
