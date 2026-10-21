import faqFile from '../../content/faq.json'

export interface FaqItem {
  question: string
  answer: string
}

export default faqFile.items as Array<FaqItem>
