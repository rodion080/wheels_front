import { LanguagesTypes } from '../store/type/lang';
import ru from '../locales/ru.json';
import de from '../locales/de.json';
import en from '../locales/en.json';
// @ts-ignore
import enImg from '../images/en.jpg';
// @ts-ignore
import deImg from '../images/de.jpg';
// @ts-ignore
import ruImg from '../images/ru.jpg';

export const toBase64 = (file:File) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

export const langImages = {
  [LanguagesTypes.RU]: ruImg,
  [LanguagesTypes.DE]: deImg,
  [LanguagesTypes.EN]: enImg,
};

export const locales = {
  [LanguagesTypes.RU]: ru,
  [LanguagesTypes.DE]: de,
  [LanguagesTypes.EN]: en,
};
