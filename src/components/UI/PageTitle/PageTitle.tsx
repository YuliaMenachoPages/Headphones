import './PageTitle.scss';
import { ReactNode } from 'react';

interface IPageTitleProps {
  children: ReactNode;
}

const PageTitle = ({children}: IPageTitleProps ) => {
  return (
    <h2 className="page__title">{children}</h2>
  );
};

export default PageTitle;
