import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqItems = [
    { question: 'Q1: What is Jankalyan Bank?', answer: 'A1: Jankalyan Bank is a cooperative bank...', isOpen: false },
    { question: 'Q2: How can I open an account?', answer: 'A2: To open an account, visit our nearest branch...', isOpen: false },
    { question: 'Q1: What is the IFSC code for Jankalyan Urban Cooperative Bank Ltd JANKALYAN URBAN COOPERATIVE BANK LTD branch?', answer: 'A1: The IFSC Code of Jankalyan Urban Cooperative Bank Ltd JANKALYAN URBAN COOPERATIVE BANK LTD branch is ICIC00JKUCB, and the same code can also be found on a cheque and bank passbook of Jankalyan Urban Cooperative Bank Ltd bank JANKALYAN URBAN COOPERATIVE BANK LTD branch. The IFSC code: ICIC00JKUCB is used for RTGS, NEFT, and IMPS transactions.', isOpen: false },
    { question: 'Q2: What are the bank timings for Jankalyan Urban Cooperative Bank Ltd, JANKALYAN URBAN COOPERATIVE BANK LTD branch?', answer: 'A2: The JANKALYAN URBAN COOPERATIVE BANK LTD branch of Jankalyan Urban Cooperative Bank Ltd operates from Mondays to Saturdays, and the timings are from 10 AM to 4 PM IST (tentatively). However, 2nd and 4th Saturdays will be bank holidays.', isOpen: false },
    { question: 'Q3: What is the address of Jankalyan Urban Cooperative Bank Ltd, JANKALYAN URBAN COOPERATIVE BANK LTD branch?', answer: 'A3: The address of the Jankalyan Urban Cooperative Bank Ltd JANKALYAN URBAN COOPERATIVE BANK LTD Branch is DHOKI ROAD KALAMB TQ KALAMB DIST OSMANABAD 413501, KALAMB, MAHARASHTRA.', isOpen: false },
    { question: 'Q4: What is the branch code of JANKALYAN URBAN COOPERATIVE BANK LTD Jankalyan Urban Cooperative Bank Ltd?', answer: 'A4: 0JKUCB is the branch code of JANKALYAN URBAN COOPERATIVE BANK LTD Jankalyan Urban Cooperative Bank Ltd.', isOpen: false },
    { question: 'Q5: Where can I check Jankalyan Urban Cooperative Bank Ltd, JANKALYAN URBAN COOPERATIVE BANK LTD branch holidays?', answer: 'A5: Bank holidays may vary from state to state across India. To know the details of bank holidays for each state, you can visit the bank\'s official website and click on the bank holidays section.', isOpen: false },
    { question: 'Q6: What is the format of the IFSC Code of Jankalyan Urban Cooperative Bank Ltd JANKALYAN URBAN COOPERATIVE BANK LTD branch?', answer: 'A6: The IFSC code ICIC00JKUCB is an 11-character code. The first four alphabetic characters indicate the bank name, the fifth character is 0 (zero), reserved for future use, and the last six characters (either numerical or alphabetical) specify the branch. The format of ICIC00JKUCB is as follows:\n\nICIC : bank code\n0 : Reserved for future use\n0JKUCB : branch code', isOpen: false },
    { question: 'Q7: How can I contact Jankalyan Urban Cooperative Bank Ltd, JANKALYAN URBAN COOPERATIVE BANK LTD branch?', answer: 'A7: If you are a customer of Jankalyan Urban Cooperative Bank Ltd, JANKALYAN URBAN COOPERATIVE BANK LTD branch, you can physically visit the branch on working days. The bank also provides customer support through phone and email, so you may call or email using the following contact details:\n\nBank: Jankalyan Urban Cooperative Bank Ltd\nBank Group: Co-operative\nLandline / Mobile Number: 8698989697\nFax Number: NA\nBank Toll Free Number: NA\nEmail Id: NA\nBank Website: NA\n\nIt\'s recommended to visit the branch unless it is urgent.', isOpen: false },
  ];
  
  toggleFaq(item: any) {
    item.isOpen = !item.isOpen;
  }
}
