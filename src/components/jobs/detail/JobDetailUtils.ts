
export const translateDomain = (domain: string) => {
  const domains: {[key: string]: string} = {
    'residential_security': 'Sécurité résidentielle',
    'bodyguard': 'Garde du corps',
    'private_property': 'Propriétés privées',
    'industrial_security': 'Sécurité industrielle',
    'office_security': 'Sécurité de bureau',
    'event_security': 'Sécurité événementielle',
    'k9_security': 'Maître-chien',
    'housing_offer': 'Offre de logement'
  };
  
  return domains[domain] || domain;
};

export const translateContract = (contract: string) => {
  const contracts: {[key: string]: string} = {
    'full_time': 'CDI',
    'part_time': 'Temps partiel',
    'contract': 'CDD'
  };
  
  return contracts[contract] || contract;
};

export const formatPriceFCFA = (priceEUR: number): string => {
  const priceFCFA = Math.round(priceEUR * 655.957);
  return priceFCFA.toLocaleString('fr-FR');
};

export const getDomainImage = (domain: string) => {
  switch(domain) {
    case 'residential_security':
      return 'https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?q=80&w=786&auto=format&fit=crop';
    case 'bodyguard':
      return 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=774&auto=format&fit=crop';
    case 'private_property':
      return 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=773&auto=format&fit=crop';
    case 'industrial_security':
      return 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop';
    case 'housing_offer':
      return 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=870&auto=format&fit=crop';
    default:
      return 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=2070&auto=format&fit=crop';
  }
};
