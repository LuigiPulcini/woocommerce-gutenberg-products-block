/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Icon, grid } from '@woocommerce/icons';
import { previewProducts } from '@woocommerce/resource-previews';

/**
 * Holds default config for this collection of blocks.
 */
export default {
	category: 'woocommerce',
	keywords: [ __( 'WooCommerce', 'woo-gutenberg-products-block' ) ],
	icon: {
		src: <Icon srcElement={ grid } />,
		foreground: '#96588a',
	},
	supports: {
		html: false,
	},
	parent: [ 'woocommerce/all-products' ],
	attributes: {
		product: {
			type: 'object',
			default: previewProducts[ 0 ],
		},
	},
	save() {},
};
