import { useSelector, useDispatch } from 'react-redux';

import { addFilterContacts } from 'redux/filter/filter-slice';

import css from './filter.module.css';

function Filter() {
  const filter = useSelector(store => store.filter);
  const { items } = useSelector(store => store.contacts);

  const dispatch = useDispatch();

  const addFilter = e => {
    dispatch(addFilterContacts(e.target.value));
  };

  return (
    <>
      {Boolean(items.length) && (
        <div className={css.filterWrapper}>
          <label htmlFor="filter">
            Find contact by name
            <input
              value={filter}
              type="text"
              name="filter"
              id="filter"
              onChange={addFilter}
            />
          </label>
        </div>
      )}
    </>
  );
}

export default Filter;
