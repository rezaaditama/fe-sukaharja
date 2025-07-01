export const resolvePublicPath = (filePath) => {
  // Jika path diawali dengan "/public", hapus bagian itu
  if (filePath.startsWith('/public')) {
    return filePath.replace('/public', '');
  }

  // Kalau tidak diawali "/public", biarkan saja
  console.log('xxxx', filePath);
  return filePath;
};
