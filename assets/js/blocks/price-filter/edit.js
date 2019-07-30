/**
 * External dependencies
 */
import { Fragment } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Block from './block.js';

export default function( { attributes } ) {
	return (
		<Fragment>
			<Block attributes={ attributes } isPreview />
		</Fragment>
	);
}
