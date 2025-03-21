
import React from 'react';
import { Shield, CreditCard, Users } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="p-4 rounded-lg bg-white shadow-lg">
    <div className="rounded-full bg-sholom-primary/10 w-12 h-12 flex items-center justify-center mb-4">
      <div className="text-sholom-primary">{icon}</div>
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sholom-muted">{description}</p>
  </div>
);

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Logements vérifiés",
      description: "Sélectionnés pour leur qualité et confort"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Paiements sécurisés",
      description: "Transactions protégées par cryptage avancé"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Support local",
      description: "Notre équipe est toujours disponible"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif font-bold text-sholom-dark mb-3">Votre expérience de logement supérieure</h2>
          <p className="text-sholom-muted max-w-2xl mx-auto">Des logements de qualité avec des services exceptionnels</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
