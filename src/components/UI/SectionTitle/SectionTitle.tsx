import { ReactNode } from 'react';
import './SectionTitle.scss';


interface ISectionTitle {
  children: ReactNode
}

const SectionTitle = ({children}: ISectionTitle) => {
  return (
      <h2 className="items__title">{children}</h2>
  );
};

export default SectionTitle;
