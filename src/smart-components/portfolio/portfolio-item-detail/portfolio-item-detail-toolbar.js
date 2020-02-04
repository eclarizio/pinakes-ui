import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import {
  Level,
  LevelItem,
  Text,
  TextContent,
  TextVariants,
  Button,
  Flex
} from '@patternfly/react-core';

import DetailToolbarActions from './detail-toolbar-actions';
import { CATALOG_API_BASE } from '../../../utilities/constants';
import CardIcon from '../../../presentational-components/shared/card-icon';
import TopToolbar from '../../../presentational-components/shared/top-toolbar';
import IconUpload from './icon-upload';
import ButtonWithSpinner from '../../../presentational-components/shared/button-with-spinner';

const PortfolioItemIconItem = ({ uploadIcon, id, sourceId }) => (
  <IconUpload uploadIcon={uploadIcon}>
    <CardIcon
      src={`${CATALOG_API_BASE}/portfolio_items/${id}/icon`}
      sourceId={sourceId}
      height={64}
    />
  </IconUpload>
);

PortfolioItemIconItem.propTypes = {
  uploadIcon: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  sourceId: PropTypes.string.isRequired
};

export const PortfolioItemDetailToolbar = ({
  url,
  isOpen,
  product,
  setOpen,
  isFetching,
  uploadIcon
}) => (
  <TopToolbar breadcrumbsSpacing={false}>
    <Level>
      <LevelItem className="pf-l-flex flex-align-end">
        <PortfolioItemIconItem
          uploadIcon={uploadIcon}
          id={product.id}
          sourceId={product.service_offering_source_ref}
        />
        <TextContent className="pf-u-ml-md">
          <Text component={TextVariants.h1}>{product.name}</Text>
        </TextContent>
      </LevelItem>
      <LevelItem style={{ minHeight: 36 }}>
        <Level>
          <Route
            exact
            path={url}
            render={(...args) => (
              <DetailToolbarActions
                isOpen={isOpen}
                setOpen={(open) => setOpen(open)}
                orderUrl={`${url}/order`}
                editUrl={`${url}/edit`}
                copyUrl={`${url}/copy`}
                editSurveyUrl={`${url}/edit-survey`}
                workflowUrl={`${url}/edit-workflow`}
                isFetching={isFetching}
                {...args}
              />
            )}
          />
        </Level>
      </LevelItem>
    </Level>
    <Level>
      <LevelItem>
        <TextContent>
          <Text component={TextVariants.small}>{product.distributor}</Text>
        </TextContent>
      </LevelItem>
    </Level>
  </TopToolbar>
);

PortfolioItemDetailToolbar.propTypes = {
  url: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  product: PropTypes.shape({
    distributor: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    service_offering_source_ref: PropTypes.string.isRequired
  }).isRequired,
  setOpen: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  uploadIcon: PropTypes.func.isRequired
};

PortfolioItemDetailToolbar.defaultProps = {
  isFetching: false
};

export const SurveyEditingToolbar = ({
  uploadIcon,
  product,
  handleSaveSurvey,
  closeUrl,
  search,
  isFetching
}) => (
  <TopToolbar breadcrumbsSpacing={false} breadcrumbs={true}>
    <Level>
      <LevelItem className="pf-l-flex flex-align-end">
        <PortfolioItemIconItem
          uploadIcon={uploadIcon}
          id={product.id}
          sourceId={product.service_offering_source_ref}
        />
        <TextContent className="pf-u-ml-md">
          <Text component={TextVariants.h1}>
            Editing survey: {product.name}
          </Text>
        </TextContent>
      </LevelItem>
      <LevelItem>
        <Flex>
          <ButtonWithSpinner
            variant="primary"
            showSpinner={isFetching}
            isDisabled={isFetching}
            onClick={handleSaveSurvey}
          >
            Save
          </ButtonWithSpinner>
          <Link
            to={{
              pathname: closeUrl,
              search
            }}
          >
            <Button variant="link">Cancel</Button>
          </Link>
        </Flex>
      </LevelItem>
    </Level>
  </TopToolbar>
);

SurveyEditingToolbar.propTypes = {
  uploadIcon: PropTypes.func.isRequired,
  product: PropTypes.object,
  handleSaveSurvey: PropTypes.func.isRequired,
  closeUrl: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  isFetching: PropTypes.bool
};
