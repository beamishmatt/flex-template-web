/**
 * This is a wrapper component for different Layouts.
 * Navigational 'aside' content should be added to this wrapper.
 */
import React from 'react';
import { node, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { LayoutWrapperSideNav } from '../../components';

const LayoutWrapperAccountSettingsSideNav = props => {
  const { currentTab } = props;

  const tabs = [
    {
      text: <FormattedMessage id="PaymentMethodsPage.contactDetailsTabTitle" />,
      selected: currentTab === 'ContactDetailsPage',
      linkProps: {
        name: 'ContactDetailsPage',
      },
    },
    {
      text: <FormattedMessage id="PaymentMethodsPage.passwordTabTitle" />,
      selected: currentTab === 'PasswordChangePage',
      linkProps: {
        name: 'PasswordChangePage',
      },
    },
    {
      text: <FormattedMessage id="PaymentMethodsPage.paymentsTabTitle" />,
      selected: currentTab === 'PayoutPreferencesPage',
      linkProps: {
        name: 'PayoutPreferencesPage',
      },
    },
    {
      text: <FormattedMessage id="PaymentMethodsPage.paymentMethodsTabTitle" />,
      selected: currentTab === 'PaymentMethodsPage',
      linkProps: {
        name: 'PaymentMethodsPage',
      },
    },
  ];

  return <LayoutWrapperSideNav tabs={tabs} />;
};

LayoutWrapperAccountSettingsSideNav.defaultProps = {
  className: null,
  rootClassName: null,
  children: null,
  currentTab: null,
};

LayoutWrapperAccountSettingsSideNav.propTypes = {
  children: node,
  className: string,
  rootClassName: string,
  currentTab: string,
};

export default LayoutWrapperAccountSettingsSideNav;
