import { AiOutlineVerticalAlignTop } from "react-icons/ai";
import { BsSortDown } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

export const RightSideMenu = () => {
  const { t } = useTranslation();

  return (
    <div className='options'>
      <div className='options__search'>
        <label htmlFor='' className='options__title'>
          {t('right-side-menu.search')}
        </label>
        <div className='options__search_input'>
          <input
            type='search'
            id=''
            name=''
            className=''
            placeholder={t('right-side-menu.search-placeholder')}
          />
          <button>
            <div className='icon-search'></div>
          </button>
        </div>
      </div>

      <div className='sort'>
        <p className='options__title'>{t('right-side-menu.sort')}</p>
        <div className='sort__item'>
          <p className=''>{t('right-side-menu.sort-by-date')}</p>
          <BsSortDown />
        </div>
        <div className='sort__item'>
          <p className=''>{t('right-side-menu.sort-by-popularity')}</p>
          <BsSortDown />
        </div>
      </div>

      <div className='theme'>
        <p className='options__title'>{t('right-side-menu.topics')}</p>
        <div className='theme__item'>
          <AiOutlineVerticalAlignTop />
          <div className=''>{t('right-side-menu.traveling')}</div>
        </div>
        <div className='theme__item'>
          <AiOutlineVerticalAlignTop />
          <div className=''>{t('right-side-menu.education')}</div>
        </div>
        <div className='theme__item'>
          <AiOutlineVerticalAlignTop />
          <div className=''>{t('right-side-menu.sport')}</div>
        </div>
        <div className='theme__item'>
          <AiOutlineVerticalAlignTop />
          <div className=''>{t('right-side-menu.health')}</div>
        </div>
      </div>
    </div>
  );
};
