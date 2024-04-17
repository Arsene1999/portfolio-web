export type ActiveItem =
  | 'home'
  | 'about'
  | 'experience'
  | 'my-works'
  | 'contact';

export const isActiveItem = (item: string): item is ActiveItem => {
  return ['home', 'about', 'experience', 'my-works', 'contact'].includes(item);
};
