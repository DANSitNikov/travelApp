export const setLanguage = (currentLang: string) => {
  return {
    type: 'SET_LANGUAGE',
    payload: currentLang,
  };
};
