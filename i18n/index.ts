import { enTranslations } from "./locales/en";
import { esTranslations } from "./locales/es";

export type SupportedLocale = "en" | "es";

export const locales: SupportedLocale[] = ["en", "es"];

export const translations = {
  en: enTranslations,
  es: esTranslations,
} as const;

export type TranslationKey = keyof typeof translations;

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export type TranslationPath = NestedKeyOf<(typeof translations)["en"]>;

export function getTranslation(
  locale: SupportedLocale,
  path: TranslationPath,
): string {
  // Comentario: Resuelve una clave de traducción anidada usando notación de puntos.
  const segments = path.split(".");
  let current: unknown = translations[locale];

  for (const segment of segments) {
    if (
      typeof current === "object" &&
      current !== null &&
      Object.prototype.hasOwnProperty.call(current, segment)
    ) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      current = (current as any)[segment];
    } else {
      return path;
    }
  }

  if (typeof current === "string") {
    return current;
  }

  return path;
}

