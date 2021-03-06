import React from 'react';
import { Element } from '../components';
import { ContentViewProps } from '../types';

function ContentViewRenderer(props: ContentViewProps, ref: React.ForwardedRef<HTMLElement>) {
	const { children, renderContentView, style, ...otherProps } = props;
	return (
		<Element
			ref={ref}
			childKey={'contentView'}
			childStyle={style}
			renderer={renderContentView}
			{...otherProps}
		>
			{children}
		</Element>
	);
}

const ContentView = React.forwardRef<HTMLElement, ContentViewProps>(ContentViewRenderer);
ContentView.displayName = 'ContentView';
export default ContentView;
