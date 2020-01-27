import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Modal } from '@patternfly/react-core';
import FormRenderer from '../common/form-renderer';
import editApprovalWorkflowSchema from '../../forms/edit-workflow_form.schema';
import {
  listWorkflowsForObject,
  updateWorkflows
} from '../../redux/actions/approval-actions';
import { APP_NAME } from '../../utilities/constants';
import { loadWorkflowOptions } from '../../helpers/approval/approval-helper';
import { WorkflowLoader } from '../../presentational-components/shared/loader-placeholders';
import useQuery from '../../utilities/use-query';
import useEnhancedHistory from '../../utilities/use-enhanced-history';

const initialState = {
  isFetching: true
};

const approvalState = (state, action) => {
  switch (action.type) {
    case 'setFetching':
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
};

const EditApprovalWorkflow = ({
  closeUrl,
  objectType,
  removeQuery,
  objectName = () => objectType
}) => {
  const [{ isFetching }, stateDispatch] = useReducer(
    approvalState,
    initialState
  );
  const { data, meta } = useSelector(
    ({ approvalReducer: { resolvedWorkflows } }) => resolvedWorkflows
  );
  const dispatch = useDispatch();
  const history = useEnhancedHistory(removeQuery);
  const { search } = useLocation();
  const [{ portfolio }] = useQuery(['portfolio']);
  const pushParam = {
    pathname: closeUrl,
    search
  };

  useEffect(() => {
    dispatch(
      listWorkflowsForObject(
        { objectType, appName: APP_NAME[objectType], objectId: portfolio },
        meta
      )
    ).then(() => stateDispatch({ type: 'setFetching', payload: false }));
  }, []);

  const onSubmit = (formData, formApi) => {
    const initialWorkflows = formApi.getState().initialValues.selectedWorkflows;
    history.push(pushParam);
    const toUnlinkWorkflows = initialWorkflows.filter(
      (wf) => formData.selectedWorkflows.findIndex((w) => w === wf) < 0
    );
    const toLinkWorkflows = formData.selectedWorkflows.filter(
      (wf) => initialWorkflows.findIndex((w) => w === wf) < 0
    );

    if (toUnlinkWorkflows || toLinkWorkflows) {
      dispatch(
        updateWorkflows(toUnlinkWorkflows, toLinkWorkflows, {
          object_type: objectType,
          app_name: APP_NAME[objectType],
          object_id: portfolio
        })
      );
    }
  };

  return (
    <Modal
      title={`Set approval process for ${objectName(portfolio)}`}
      isOpen
      onClose={() => history.push(pushParam)}
      isSmall
    >
      {!isFetching ? (
        <FormRenderer
          initialValues={{
            selectedWorkflows: data ? data.map((wf) => wf.id) : undefined
          }}
          onSubmit={onSubmit}
          onCancel={() => history.push(pushParam)}
          schema={editApprovalWorkflowSchema(loadWorkflowOptions)}
          formContainer="modal"
          buttonsLabels={{ submitLabel: 'Save' }}
        />
      ) : (
        <WorkflowLoader />
      )}
    </Modal>
  );
};

EditApprovalWorkflow.propTypes = {
  closeUrl: PropTypes.string.isRequired,
  objectType: PropTypes.string.isRequired,
  objectName: PropTypes.func,
  removeQuery: PropTypes.bool
};

export default EditApprovalWorkflow;
