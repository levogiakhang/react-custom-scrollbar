import React from 'react';

export type Style = { [key: string]: React.CSSProperties };

export type ChildRendererParams = {
	style: Style;
};

export type FunctionalRenderer = (params: ChildRendererParams) => React.ReactElement;

export type Children = React.ReactNode | Array<React.ReactNode>;

export interface IScrollbar {
	getClientHeight(): number;
	getScrollHeight(): number;
	getScrollTop(): number;
	scrollToBottom(): void;
	scrollTop(top: number): void;
	scrollToTop(): void;
}

export type ScrollValues = {
	left: number;
	top: number;
	scrollLeft: number;
	scrollTop: number;
	scrollWidth: number;
	scrollHeight: number;
	clientWidth: number;
	clientHeight: number;
};

export type ScrollbarProps = {
	children?: React.ReactNode;
	containerStyle?: Style;
	containerTagName?: 'div';
	hideTracksWhenNotNeeded?: boolean;
	minThumbSize?: number;
	onScroll?(event: React.UIEvent<HTMLElement>): void;
	onUpdate?(values: ScrollValues): void;
	renderContentView?: FunctionalRenderer;
	renderVerticalThumb?: FunctionalRenderer;
	renderVerticalTrack?: FunctionalRenderer;
	thumbSize?: number;
};

export type ScrollbarPropsWithChildren = ScrollbarProps & { children: Children };

export type InternalScrollbarProps = {
	containerStyle?: Style;
	containerTagName: 'div';
	renderContentView: FunctionalRenderer;
	renderVerticalThumb: FunctionalRenderer;
	renderVerticalTrack: FunctionalRenderer;
};

export type InternalScrollbarPropsWithChildren = InternalScrollbarProps & { children: Children };

export type ContainerProps = InternalScrollbarPropsWithChildren;

export type ElementProps = {
	childStyle?: Style;
	childKey?: string;
	children?: Children;
	renderer: FunctionalRenderer;
};

export type VerticalThumbProps = Pick<InternalScrollbarPropsWithChildren, 'renderVerticalThumb'> &
	Partial<ChildRendererParams> &
	React.HTMLAttributes<HTMLElement>;

export type VerticalTrackProps = Pick<
	InternalScrollbarPropsWithChildren,
	'renderVerticalTrack' | 'children'
> &
	Partial<ChildRendererParams> &
	React.HTMLAttributes<HTMLElement>;

export type ContentViewProps = Pick<
	InternalScrollbarPropsWithChildren,
	'renderContentView' | 'children'
> &
	Partial<ChildRendererParams> &
	React.HTMLAttributes<HTMLElement>;
