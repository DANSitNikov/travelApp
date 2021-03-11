import { SetLanguage } from '../types';

export const SET_LANGUAGE = 'SET_LANGUAGE';

export const setLanguage = (currentLang: string): SetLanguage => {
  return {
    type: SET_LANGUAGE,
    payload: currentLang,
  };
};
