import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';

const ExpandableStory = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);
  const sectionRef = useRef(null);

  const fullStory = `She didn't arrive in the UAE as a tourist.
She came as a dreamer —
With a vision in her heart, and a visit visa in her hand, issued by us.

No office.
No network.
Just ambition in her eyes — and complete trust in our hands.

From the very beginning, we stood beside her.
Together, we transformed ideas into action — and dreams into deliverables.

We helped her establish her very first company — just as she envisioned it.
✅ Trade Name Reservation
✅ Initial Approval
✅ MOA Drafting
✅ Tenancy Contract
✅ Government Submissions
✅ Payment Voucher Settlement

Every step — professionally managed.
No delays. No confusion. Just clear, seamless execution.

Next came the foundation:
Her Establishment Card, Labour File, Personal Code, and E-signature.

When it was time to secure her stay —
We handled her Investor Visa, Medical Test, Emirates ID, and Visa Stamping —
Flawlessly. No queues. No stress.

And then, her business began to flourish.

We opened her Corporate Bank Account.
Integrated Online Payment Gateways.
Activated Tabby and Tamara.
Installed POS Systems.
Registered her for VAT and Customs.
Built a custom Website.
And even Trademarked her brand.

She was no longer a newcomer —
She was becoming a recognised name in the market.

Soon, others took notice.
Partners wanted in. Talented professionals joined.
We amended licenses, added shareholders, and ensured legal compliance —
Quickly. Cleanly. Completely.

As her company grew, so did her team — and so did our support.

We managed the full hiring process:
✅ Labour Quotas
✅ Offer Letters
✅ Employment Contracts
✅ Health Insurance
✅ Work Permits
✅ Skilled & Unskilled Visas

We arranged Medical Tests, Emirates IDs, and even doorstep deliveries.

She expanded across Emirates.
Opened branches.
Launched kiosks in major malls.

And we remained her trusted partner —
Handling permits, renewals, legalities, and every critical document in between.

Then came a life-changing milestone.

She invested in real estate — valued at over AED 2 million.
We processed her Golden Visa application.
And within just seven working days, she received a 10-year UAE residency in her name.

But she didn't stop there.

Her husband, children, and parents — all received Golden Visas,
With premium health insurance arranged by us.

Her proudest success?

She brought her people forward.

Her top team members earning over AED 30,000/month?
We secured Golden Visas for them and their families.
We facilitated Certificate Equivalency from the Ministry of Education — ensuring complete eligibility.

For the rest of her workforce, we provided:
✅ 2-year Employment Visas
✅ Family Sponsorship Assistance for spouses, children, parents, and siblings

They too began to grow — one by one.
Inspired by her journey. Empowered by our support.

Many of them launched their own businesses —
In mainland and free zones,
Across sectors: fashion, food, tech, trading —
We helped each one start with strength.

They bought vehicles — and we supported every step:
✅ Vehicle Insurance
✅ Registration
✅ Advertising Permits on Commercial Vehicles

Today, they are more than companies.
They are a community.
A network of bold entrepreneurs.
A family of visionaries.

And at the heart of it all is one unwavering belief:
That no dream is too big,
And no detail is too small.

We are 44 Digital Business Services.
We don't just process documents.
We build legacies.
We turn visitors into visionaries.

And your story could be next.`;

  const previewLines = [
    "She didn't arrive in the UAE as a tourist.",
    "She came as a dreamer —",
    "With a vision in her heart, and a visit visa in her hand, issued by us."
  ];

  const handleExpand = () => {
    // Save current scroll position
    setSavedScrollPosition(window.scrollY);
    setIsExpanded(true);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
    // Restore scroll position after a brief delay to allow DOM to update
    setTimeout(() => {
      window.scrollTo({
        top: savedScrollPosition,
        behavior: 'smooth'
      });
    }, 100);
  };

  const formatStoryText = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('✅')) {
        return (
          <div key={index} className="flex items-center space-x-2 ml-4 my-1">
            <span className="text-green-500 font-bold">✅</span>
            <span className="text-gray-700">{line.substring(2).trim()}</span>
          </div>
        );
      }
      
      if (line.trim() === '') {
        return <br key={index} />;
      }
      
      return (
        <p key={index} className="text-gray-700 mb-2 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            From Visitor to Visionary
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A real UAE success story powered by 44 Digital Business Services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 card-shadow">
            {!isExpanded ? (
              // Preview Mode
              <div>
                {previewLines.map((line, index) => (
                  <p key={index} className="text-lg text-gray-700 mb-2 leading-relaxed italic">
                    {line}
                  </p>
                ))}
                <div className="mt-6 text-center">
                  <button
                    onClick={handleExpand}
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
                  >
                    Read Full Story
                    <ChevronDown className="ml-2" size={20} />
                  </button>
                </div>
              </div>
            ) : (
              // Full Story Mode
              <div>
                <div className="prose prose-lg max-w-none">
                  {formatStoryText(fullStory)}
                </div>
                <div className="mt-8 text-center">
                  <button
                    onClick={handleCollapse}
                    className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200"
                  >
                    Show Less
                    <ChevronUp className="ml-2" size={20} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-primary text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                Your Story Could Be Next
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Ready to turn your vision into reality? Let's start your UAE success story today.
              </p>
              <Link
                to="/contact"
                className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                Start Your Journey
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpandableStory;
