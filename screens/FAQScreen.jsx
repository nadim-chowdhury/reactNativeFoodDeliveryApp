import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FAQScreen = () => {
  const faqs = [
    {
      question: 'How to track my order?',
      answer: 'You can track your order through the order tracking section in the app.',
    },
    {
      question: 'How to contact support?',
      answer: 'You can contact support via chat, email, or phone by visiting the support section.',
    },
    {
      question: 'How can I apply a discount code?',
      answer: 'You can apply a discount code at the checkout screen before placing the order.',
    },
    {
      question: 'What are the payment options available?',
      answer: 'We accept credit/debit cards, PayPal, and cash on delivery.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Frequently Asked Questions</Text>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faq}>
          <Text style={styles.question}>{faq.question}</Text>
          <Text style={styles.answer}>{faq.answer}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  faq: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  answer: {
    fontSize: 16,
    color: '#666',
  },
});

export default FAQScreen;
