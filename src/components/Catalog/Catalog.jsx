import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { loadAdverts } from '../../redux/slices/advertSlice';
import AdvertCard from '../AdvertCard/AdvertCard';
import FilterBar from '../Filter/FilterBar';
import { getAdverts } from '../../services/api';
import { persistor } from '../../redux/store';
import * as Styled from './Catalog.styled';

const Catalog = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(state => state.adverts.adverts);
  const [displayedAdverts, setDisplayedAdverts] = useState([]);
  const [loadedCount, setLoadedCount] = useState(12);
  const [filtersApplied, setFiltersApplied] = useState(false);
  const [loadMoreClickCount, setLoadMoreClickCount] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    getAdverts(1, loadedCount)
      .then(advertsData => {
        dispatch(loadAdverts(advertsData));
        setDisplayedAdverts(advertsData);
      })
      .catch(error => {
        console.error('Error fetching adverts:', error);
      });
  }, [dispatch, loadedCount]);

  const handleLoadMore = () => {
    if (loadMoreClickCount < 2) {
      getAdverts(loadedCount / 12 + 1, 12)
        .then(advertsData => {
          dispatch(loadAdverts(adverts.concat(advertsData)));
          setLoadedCount(loadedCount + 12);
          setLoadMoreClickCount(loadMoreClickCount + 1);
        })
        .catch(error => {
          console.error('Error fetching more adverts:', error);
        });
    } else {
      setIsButtonDisabled(true);
    }
  };

  const applyFilters = filteredAdverts => {
    setDisplayedAdverts(filteredAdverts);
    setFiltersApplied(true);
  };

  return (
    <PersistGate loading={null} persistor={persistor}>
      <div>
        <FilterBar
          applyFilters={filteredAdverts => {
            applyFilters(filteredAdverts);
          }}
        />
        <Styled.CatalogConteiner>
          {displayedAdverts.map(advert => (
            <AdvertCard key={advert.id} advert={advert} />
          ))}
        </Styled.CatalogConteiner>
        {!filtersApplied && (
          <Styled.LoadMoreBtn
            onClick={handleLoadMore}
            disabled={isButtonDisabled}
          >
            {isButtonDisabled ? 'No More Adverts' : 'Load More'}
          </Styled.LoadMoreBtn>
        )}
      </div>
    </PersistGate>
  );
};

export default Catalog;
