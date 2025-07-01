export function resolvePublicPath(filePath) {
  if (!filePath) return '';

  const cleaned = filePath.startsWith('/public')
    ? filePath.replace('/public', '')
    : filePath;

  const result = cleaned.startsWith('/') ? cleaned : '/' + cleaned;
  console.log('xxxxxxxxxxxxxxxxxxxxxx', result);
  return result;
}
