import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="fw-bold mb-4">Terms &amp; Conditions</h1>
            <p className="text-secondary">
              Welcome to QTick. These terms outline the rules and regulations for the use of our website and services. By accessing or using QTick, you agree to comply with these terms.
            </p>
            <h2 className="h4 mt-4">1. Vendor Responsibilities</h2>
            <p className="text-secondary">
              Vendors are responsible for ensuring the accuracy of their business information, maintaining compliance with applicable laws, and responding to customer enquiries in a timely manner.
            </p>
            <h2 className="h4 mt-4">2. Customer Conduct</h2>
            <p className="text-secondary">
              Customers agree to provide truthful reviews, refrain from abusive behaviour, and respect vendor policies. Misuse of the platform may result in account suspension.
            </p>
            <h2 className="h4 mt-4">3. Payments &amp; Promotions</h2>
            <p className="text-secondary">
              Paid promotions and featured placements are clearly labelled. All promotional content must follow QTick&apos;s advertising guidelines.
            </p>
            <h2 className="h4 mt-4">4. Privacy</h2>
            <p className="text-secondary">
              We respect your privacy. Please review our <Link href="/privacy-policy">Privacy Policy</Link> to learn how we collect, use, and safeguard your personal information.
            </p>
            <p className="text-secondary mt-4">
              For questions about these terms, contact our support team at <a href="mailto:support@qtick.example">support@qtick.example</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
