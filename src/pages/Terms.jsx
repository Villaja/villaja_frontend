import React from 'react';
import Header from '../components/Layout/Header';
import VillajaFooter from '../components/VillajaFooter/VillajaFooter';

const TermsAndConditions = () => {
  return (
    <div>
        <Header/>
        <div className="container block mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Terms and Conditions for Using www.villaja.com</h1>
      
      <p className="mb-4">Effective Date: 8th of November 2023</p>

      <p className="mb-4">
        Please read these <span className="font-bold">Terms and Conditions</span> ("Terms") carefully before using 
        <span className="font-bold"> www.villaja.com</span> (the "Website"). These Terms govern your use of the Website and 
        your interactions with the Website's services, including, but not limited to, buying and selling products. 
        By using the Website, you agree to comply with and be bound by these Terms.
      </p>

      <p className="mb-4 font-bold">1. Acceptance of Terms</p>
      <p className="mb-4">
        By using the Website, you acknowledge that you have read and understood these Terms and agree to abide by them. 
        If you do not agree with these Terms, please do not use the Website.
      </p>

      <p className="mb-4 font-bold">2. Registration and User Accounts</p>
      <p className="mb-4">
        2.1. You may be required to create a user account to access certain features of the Website. When creating your 
        user account, you agree to provide accurate and up-to-date information. You are responsible for maintaining the 
        confidentiality of your account information and are fully responsible for any activities that occur under your account.
      </p>
      <p className="mb-4">
        2.2. You must be at least 18 years old or the legal age of majority in your jurisdiction to use the Website. 
        By using the Website, you represent that you meet this requirement.
      </p>

      <p className="mb-4 font-bold">3. Seller Responsibilities</p>
      <p className="mb-4">
        3.1. If you are a seller on the Website, you agree to provide accurate and truthful information about the products you list for sale.
      </p>
      <p className="mb-4">
        3.2. Serial Numbers: Sellers are required to input the serial number of the products they want to upload to the Website. 
        This serial number will not be visible to the general public on the Website, but it will be stored securely by the Website for verification purposes.
      </p>
      <p className="mb-4">
        3.3. Originality of Products: The serial numbers will be used in the event of a customer disputing the originality of the product. 
        Sellers agree to cooperate with the Website and provide necessary information, including the originality and authenticity of the product, to resolve any such disputes.
      </p>
      <p className="mb-4">
        3.4. Prohibited Items: Sellers are prohibited from listing counterfeit, stolen, or illegal products on the Website.
      </p>

      <p className="mb-4 font-bold">4. Buyer Responsibilities</p>
      <p className="mb-4">
        4.1. Buyers are responsible for reviewing product listings, descriptions, and seller information before making a purchase.
      </p>
      <p className="mb-4">
        4.2. In the event of a dispute regarding the originality or authenticity of a product, buyers may contact the Website's customer support for assistance, providing any necessary information and evidence.
      </p>

      <p className="mb-4 font-bold">5. Privacy</p>
      <p className="mb-4">
        Your use of the Website is also governed by our Privacy Policy.
      </p>

      <p className="mb-4 font-bold">6. Termination</p>
      <p className="mb-4">
        We reserve the right to terminate or suspend your account or access to the Website, with notice, for any reason, including if you violate these Terms or fraudulent activities have been found in the usage of your account or in association with any fraudulent activities.
      </p>

      <p className="mb-4 font-bold">7. Changes to Terms</p>
      <p className="mb-4">
        We reserve the right to update or change these Terms at any time. Any changes to these Terms will be posted on the Website with the effective date. Your continued use of the Website after any changes constitute your acceptance of the new Terms.
      </p>

      <p className="mb-4 font-bold">8. Limitation of Liability</p>
      <p className="mb-4">
        To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
      </p>

      <p className="mb-4 font-bold">9. Governing Law</p>
      <p className="mb-4">
        These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.
      </p>

      <p className="mb-4 font-bold">10. Contact Information</p>
      <p className="mb-4">
        For any questions or concerns regarding these Terms, please contact us at 
        email: <span className="underline">villajamarketplace@gmail.com</span> or Instagram: 
        <span className="underline">@villajatech</span>.
      </p>

      <p className="mb-4">
        By using the Website, you acknowledge that you have read and understood these Terms and agree to abide by them. 
        These Terms represent the entire understanding between you and www.villaja.com regarding your use of the Website.
      </p>
    </div>
    <VillajaFooter/>
    </div>

    
  );
};

export default TermsAndConditions;
