import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight } from 'lucide-react';

export function ContactCTA() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-full text-sm font-medium text-primary mb-4 shadow-lg">
            <MessageCircle className="h-4 w-4" />
            Estamos aquí para ayudarte
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            ¿Necesitas ayuda con tecnología o trámites?
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo podemos simplificar tu vida digital
            y administrativa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white group">
              <Link href="/contact">
                Contáctanos Ahora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href="https://wa.me/5491128583157"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
