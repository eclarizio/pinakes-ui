import React, { useEffect, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  DataList,
  Grid,
  GridItem,
  Title,
  Bullseye,
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  Flex,
  EmptyStateSecondaryActions,
  Button
} from '@patternfly/react-core';
import Section from '@redhat-cloud-services/frontend-components/components/Section';
import PrimaryToolbar from '@redhat-cloud-services/frontend-components/components/PrimaryToolbar';
import EmptyTable from '@redhat-cloud-services/frontend-components/components/EmptyTable';
import TableToolbar from '@redhat-cloud-services/frontend-components/components/TableToolbar';
import { SearchIcon } from '@patternfly/react-icons';

import { fetchOrders } from '../../redux/actions/order-actions';
import { fetchPlatforms } from '../../redux/actions/platform-actions';
import { ListLoader } from '../../presentational-components/shared/loader-placeholders';
import OrderItem from './order-item';
import AsyncPagination from '../common/async-pagination';
import asyncFormValidator from '../../utilities/async-form-validator';
import { defaultSettings } from '../../helpers/shared/pagination';

const debouncedFilter = asyncFormValidator(
  (filterType, value, meta = defaultSettings, dispatch, filteringCallback) => {
    filteringCallback(true);
    dispatch(fetchOrders(filterType, value, meta)).then(() =>
      filteringCallback(false)
    );
  },
  1000
);

const initialState = {
  filterValue: '',
  isOpen: false,
  isFetching: true,
  isFiltering: false,
  filterType: 'state'
};

const ordersListState = (state, action) => {
  switch (action.type) {
    case 'setFetching':
      return { ...state, isFetching: action.payload };
    case 'setFilterValue':
      return { ...state, filterValue: action.payload };
    case 'setFilteringFlag':
      return { ...state, isFiltering: action.payload };
    case 'setFilterType':
      return { ...state, filterType: action.payload, filterValue: '' };
  }

  return state;
};

const OrdersList = () => {
  const [
    { isFetching, filterValue, isFiltering, filterType },
    stateDispatch
  ] = useReducer(ordersListState, initialState);
  const { data, meta } = useSelector(({ orderReducer }) => orderReducer.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    stateDispatch({ type: 'setFetching', payload: true });
    Promise.all([
      dispatch(fetchOrders(filterType, filterValue, meta)),
      dispatch(fetchPlatforms())
    ]).then(() => stateDispatch({ type: 'setFetching', payload: false }));
  }, []);

  const handlePagination = (_apiProps, pagination) => {
    stateDispatch({ type: 'setFetching', payload: true });
    return dispatch(fetchOrders(filterType, filterValue, pagination))
      .then(() => stateDispatch({ type: 'setFetching', payload: false }))
      .catch(() => stateDispatch({ type: 'setFetching', payload: false }));
  };

  const handleFilterItems = (value) => {
    stateDispatch({ type: 'setFilterValue', payload: value });
    debouncedFilter(filterType, value, meta, dispatch, (isFiltering) =>
      stateDispatch({ type: 'setFilteringFlag', payload: isFiltering })
    );
  };

  return (
    <Grid gutter="md">
      <GridItem>
        <Section type="content">
          {!meta.noData && (
            <PrimaryToolbar
              {...(filterValue && {
                activeFiltersConfig: {
                  filters: [
                    {
                      name: filterValue
                    }
                  ],
                  onDelete: () => {
                    stateDispatch({ type: 'setFilterValue', payload: '' });
                    handleFilterItems('');
                  }
                }
              })}
              filterConfig={{
                onChange: (_e, value) => {
                  stateDispatch({ type: 'setFilterType', payload: value });
                  if (filterValue.length > 0) {
                    handleFilterItems('');
                  }
                },
                value: filterType,
                items: [
                  {
                    filterValues: {
                      value: filterValue,
                      onChange: (_e, value) => handleFilterItems(value)
                    },
                    label: 'State',
                    value: 'state'
                  },
                  {
                    filterValues: {
                      value: filterValue,
                      onChange: (_e, value) => handleFilterItems(value)
                    },
                    label: 'Owner',
                    value: 'owner'
                  }
                ]
              }}
              pagination={
                <AsyncPagination
                  isDisabled={isFetching || isFiltering}
                  apiRequest={handlePagination}
                  meta={meta}
                  isCompact
                />
              }
            />
          )}
          <DataList aria-label="order-list">
            {isFiltering || isFetching ? (
              <ListLoader />
            ) : data.length > 0 ? (
              data.map((item, index) => (
                <OrderItem key={item.id} index={index} item={item} />
              ))
            ) : (
              <EmptyTable>
                <Bullseye>
                  <EmptyState>
                    <Bullseye>
                      <EmptyStateIcon icon={SearchIcon} />
                    </Bullseye>
                    <Title size="lg">
                      {meta.noData ? 'No orders' : 'No results found'}
                    </Title>
                    <EmptyStateBody>
                      {meta.noData
                        ? 'No orders have been created.'
                        : 'No results match the filter criteria. Remove all filters or clear all filters to show results.'}
                    </EmptyStateBody>

                    <EmptyStateSecondaryActions>
                      {!meta.noData && (
                        <Button
                          variant="link"
                          onClick={() => {
                            stateDispatch({
                              type: 'setFilteringFlag',
                              payload: true
                            });
                            handleFilterItems('');
                          }}
                        >
                          Clear all filters
                        </Button>
                      )}
                    </EmptyStateSecondaryActions>
                  </EmptyState>
                </Bullseye>
              </EmptyTable>
            )}
          </DataList>
          <TableToolbar>
            <div className="bottom-pagination-container">
              <Flex
                className="example-border"
                breakpointMods={[{ modifier: 'justify-content-flex-end' }]}
              >
                {meta.count > 0 && (
                  <AsyncPagination
                    className="pf-u-mt-0"
                    isDisabled={isFetching || isFiltering}
                    apiRequest={handlePagination}
                    meta={meta}
                  />
                )}
              </Flex>
            </div>
          </TableToolbar>
        </Section>
      </GridItem>
    </Grid>
  );
};

export default OrdersList;
