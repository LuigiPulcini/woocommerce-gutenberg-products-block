/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { stripePromise } from '../../stripe-utils';
import { StripeCreditCard } from './payment-method';
import { PAYMENT_METHOD_NAME } from './constants';

const EditPlaceHolder = () => <div>TODO: Card edit preview soon...</div>;

console.log( stripePromise );

const stripeCcPaymentMethod = {
	id: PAYMENT_METHOD_NAME,
	label: (
		<strong>
			{ __( 'Credit/Debit Card', 'woo-gutenberg-products-block' ) }
		</strong>
	),
	content: <StripeCreditCard />,
	edit: <EditPlaceHolder />,
	canMakePayment: stripePromise,
	ariaLabel: __(
		'Stripe Credit Card payment method',
		'woo-gutenberg-products-block'
	),
};

export default stripeCcPaymentMethod;
