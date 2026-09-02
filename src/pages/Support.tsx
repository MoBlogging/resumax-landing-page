import { Link } from "react-router-dom";
import { ArrowLeft, Mail, HelpCircle } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Resumax Support</h1>
          </div>

          <p className="text-lg text-muted-foreground mb-10">
            Need help with Resumax, have a question, or found a bug? We're glad to help.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact us</h2>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border">
              <Mail className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Email us and we'll get back to you as soon as we can.
                </p>
                <a
                  href="mailto:mounirrouissi2@gmail.com"
                  className="text-primary hover:underline font-medium"
                >
                  mounirrouissi2@gmail.com
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Common questions</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  My download failed or the app says my CV wasn't processed.
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Try again on a stable connection — resume processing calls out to an AI service and can occasionally time out on the first attempt. If it keeps failing, email us with your device type and iOS version and we'll take a look.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  How do I restore a purchase on a new device?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Open Resumax, go to the Pricing screen, and tap "Restore Purchases." This uses your Apple ID to restore any active Pro access.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  How do I cancel my subscription?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Manage or cancel any subscription directly through your device: Settings → [your name] → Subscriptions on iOS, or the Play Store's Subscriptions page on Android.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Where's your privacy policy?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You can read it at{" "}
                  <Link to="/privacy-policy" className="text-primary hover:underline font-medium">
                    resumax.app/privacy-policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Support;
