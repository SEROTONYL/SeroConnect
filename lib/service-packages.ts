export type ServicePackage = {
  id: string;
  name: string;
  price: string;
  duration: string;
  devices: string;
  description: string;
  featured?: boolean;
};

export const servicePackages: ServicePackage[] = [
  {
    id: "mini",
    name: "Mini",
    price: "99 ₽",
    duration: "30 дней",
    devices: "1 устройство",
    description:
      "Компактный пакет услуг для личного безопасного интернет-подключения на одном устройстве.",
  },
  {
    id: "standard",
    name: "Standard",
    price: "189 ₽",
    duration: "30 дней",
    devices: "До 3 устройств",
    description:
      "Сбалансированный пакет для ежедневного использования дома, в поездках и на рабочих устройствах.",
    featured: true,
  },
  {
    id: "family",
    name: "Family",
    price: "299 ₽",
    duration: "30 дней",
    devices: "До 5 устройств",
    description:
      "Расширенный пакет услуг для семьи или нескольких персональных устройств с единым периодом действия.",
  },
];
