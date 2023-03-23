export default function hashtagExtractor(text: string): string[] | null {
  return text.match(/#[a-z0-9а-я_]+/gi);
}
