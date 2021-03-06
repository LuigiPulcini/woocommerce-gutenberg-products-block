const OptionLayout = ( {
	label,
	secondaryLabel,
	description,
	secondaryDescription,
	id,
} ) => {
	return (
		<div className="wc-block-radio-control__option-layout">
			{ label && (
				<span
					id={ id ? `${ id }__label` : null }
					className="wc-block-radio-control__label"
				>
					{ label }
				</span>
			) }
			{ secondaryLabel && (
				<span
					id={ id ? `${ id }__secondary-label` : null }
					className="wc-block-radio-control__secondary-label"
				>
					{ secondaryLabel }
				</span>
			) }
			{ description && (
				<span
					id={ id ? `${ id }__description` : null }
					className="wc-block-radio-control__description"
				>
					{ description }
				</span>
			) }
			{ secondaryDescription && (
				<span
					id={ id ? `${ id }__secondary-description` : null }
					className="wc-block-radio-control__secondary-description"
				>
					{ secondaryDescription }
				</span>
			) }
		</div>
	);
};

export default OptionLayout;
