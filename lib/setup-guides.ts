export type SetupPlatformSlug = "ios" | "android" | "pc";

export type SetupGuideStep = {
  id: string;
  number: number;
  title: string;
  text: string;
  link?: {
    label: string;
    href: string;
  };
  imagePath: string;
  imageAlt: string;
};

export type SetupPlatformGuide = {
  slug: SetupPlatformSlug;
  shortTitle: string;
  title: string;
  description: string;
  selectionDescription: string;
  helperText: string;
  metaTitle: string;
  metaDescription: string;
  icon: SetupPlatformSlug;
  href: string;
  steps: SetupGuideStep[];
};

type SetupGuideSeed = Omit<SetupPlatformGuide, "href" | "steps"> & {
  steps: Array<{
    title: string;
    text: string;
    link?: {
      label: string;
      href: string;
    };
  }>;
};

const setupGuideSeeds: SetupGuideSeed[] = [
  {
    slug: "ios",
    shortTitle: "iPhone / iPad",
    title: "Подключение VPN на iPhone / iPad",
    description:
      "Следуйте этим шагам, чтобы быстро подключить VPN на устройстве Apple.",
    selectionDescription:
      "Подключение через Streisand, импорт ссылки и подтверждение VPN-профиля на iPhone или iPad.",
    helperText: "iPhone / iPad -> выберите iOS",
    metaTitle: "Как подключить VPN на iPhone / iPad",
    metaDescription:
      "Пошаговая инструкция по подключению VPN на iPhone и iPad после оплаты.",
    icon: "ios",
    steps: [
      {
        title: "Скопируйте выданную ссылку",
        text: "После оплаты вам выдаётся ссылка для подключения. Нажмите на неё или на кнопку копирования, чтобы ссылка сохранилась в буфере обмена.",
      },
      {
        title: "Установите приложение Streisand",
        text: "Скачайте и установите приложение Streisand из App Store, если оно ещё не установлено.",
      },
      {
        title: "Откройте Streisand",
        text: "Запустите приложение Streisand на iPhone или iPad.",
      },
      {
        title: "Добавьте конфигурацию",
        text: "В приложении нажмите кнопку добавления конфигурации и вставьте скопированную ссылку. После этого сохраните подключение.",
      },
      {
        title: "Разрешите VPN-конфигурацию",
        text: "Если iPhone покажет системное окно, подтвердите добавление VPN-профиля с помощью Face ID, Touch ID или код-пароля.",
      },
      {
        title: "Подключитесь",
        text: "Выберите добавленный сервер и включите VPN. После успешного подключения в системе появится значок VPN.",
      },
    ],
  },
  {
    slug: "android",
    shortTitle: "Android",
    title: "Подключение VPN на Android",
    description:
      "Следуйте инструкции ниже, чтобы подключить VPN на Android-смартфоне.",
    selectionDescription:
      "Установка приложения, импорт ссылки и запуск VPN на Android-смартфоне.",
    helperText: "Android-смартфон -> выберите Android",
    metaTitle: "Как подключить VPN на Android",
    metaDescription:
      "Пошаговая инструкция по подключению VPN на Android после оплаты.",
    icon: "android",
    steps: [
      {
        title: "Скопируйте ссылку",
        text: "После оплаты скопируйте выданную ссылку подключения.",
      },
      {
        title: "Установите нужное приложение",
        text: "Установите рекомендуемое приложение для подключения VPN. Название приложения можно указать в инструкции или в сообщении после оплаты.",
      },
      {
        title: "Откройте приложение",
        text: "Запустите установленное приложение на Android.",
      },
      {
        title: "Импортируйте ссылку",
        text: "Добавьте новую конфигурацию и вставьте ранее скопированную ссылку.",
      },
      {
        title: "Разрешите подключение VPN",
        text: "Подтвердите системный запрос Android на создание VPN-подключения.",
      },
      {
        title: "Включите VPN",
        text: "Выберите сервер и активируйте подключение.",
      },
    ],
  },
  {
    slug: "pc",
    shortTitle: "ПК",
    title: "Подключение VPN на ПК",
    description:
      "Следуйте этим шагам, чтобы подключить VPN на компьютере.",
    selectionDescription:
      "Инструкция для Windows и macOS: установка приложения, импорт конфигурации и подключение.",
    helperText: "Windows / macOS -> выберите ПК",
    metaTitle: "Как подключить VPN на ПК",
    metaDescription:
      "Пошаговая инструкция по подключению VPN на компьютере после оплаты.",
    icon: "pc",
    steps: [
      {
        title: "Скопируйте ссылку",
        text: "После оплаты скопируйте выданную ссылку подключения.",
      },
      {
        title: "Установите приложение",
        text: "Установите v2rayN с GitHub.",
        link: {
          label: "Скачать v2rayN",
          href: "https://github.com/2dust/v2rayN/releases/tag/7.18.0",
        },
      },
      {
        title: "Разархивируйте приложение",
        text: "Скачайте архив, разархивируйте приложение в пустую папку и запустите его.",
      },
      {
        title: "Добавьте конфигурацию",
        text: "Создайте новое подключение или импортируйте конфигурацию через ссылку.",
      },
      {
        title: "Измените тип охвата VPN",
        text: "Измените тип охвата VPN в настройках клиента.",
        link: {
          label: "Гайд по routing / VPN mode",
          // TODO: Replace with the final external v2rayN routing/VPN mode guide URL.
          href: "https://example.com/todo-v2rayn-routing-guide",
        },
      },
    ],
  },
];

export const setupGuides: SetupPlatformGuide[] = setupGuideSeeds.map((guide) => ({
  ...guide,
  href: `/setup/${guide.slug}`,
  steps: guide.steps.map((step, index) => ({
    id: `${guide.slug}-step-${index + 1}`,
    number: index + 1,
    title: step.title,
    text: step.text,
    link: step.link,
    imagePath: `/guides/${guide.slug}/step-${index + 1}.png`,
    imageAlt: `${guide.title}: шаг ${index + 1} - ${step.title}`,
  })),
}));

export function getSetupGuide(slug: string) {
  return setupGuides.find((guide) => guide.slug === slug) ?? null;
}
