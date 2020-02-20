/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import { __, sprintf } from '@wordpress/i18n';
import {
	SHIPPING_COUNTRIES,
	SHIPPING_STATES,
} from '@woocommerce/block-settings';
import { decodeEntities } from '@wordpress/html-entities';

/**
 * Shows a formatted shipping location.
 */
const ShippingLocation = ( { address } ) => {
	const formattedCountry =
		typeof SHIPPING_COUNTRIES[ address.country ] === 'string'
			? decodeEntities( SHIPPING_COUNTRIES[ address.country ] )
			: '';

	const formattedState =
		typeof SHIPPING_STATES[ address.country ] === 'object' &&
		typeof SHIPPING_STATES[ address.country ][ address.state ] === 'string'
			? decodeEntities(
					SHIPPING_STATES[ address.country ][ address.state ]
			  )
			: address.state;

	const addressParts = [];

	addressParts.push( address.postcode.toUpperCase() );
	addressParts.push( address.city );
	addressParts.push( formattedState );
	addressParts.push( formattedCountry );

	const formattedLocation = addressParts.filter( Boolean ).join( ', ' );

	return (
		formattedLocation && (
			<span className="wc-block-cart__shipping-address">
				{ sprintf(
					/* Translators: %s location. */
					__( 'Shipping to %s', 'woo-gutenberg-products-block' ),
					formattedLocation
				) + ' ' }
			</span>
		)
	);
};

ShippingLocation.propTypes = {
	address: PropTypes.shape( {
		city: PropTypes.string,
		state: PropTypes.string,
		postcode: PropTypes.string,
		country: PropTypes.string,
	} ),
};

export default ShippingLocation;