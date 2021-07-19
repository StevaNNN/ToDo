import React, { useState, useEffect, forwardRef } from "react"
import classNames from "classnames";

export type RESPONSIVE_PROPS = {
  lg?: string,
  md?: string,
  sm?: string
}

export type CONTAINER_PROPS = {
  scope?: string,
  // tabindex for cmp
  tabIndex?: number,
  // aria hidden cmp prop
  ariaHidden?: "true" | "false",
  // key cmp prop
  cmpKey?: string,
  // aria labeledby for cmp
  ariaLabeledBy?: string,
  // role attribute for cmp
  role?: string,
  // Responsive configuration for component
  responsive?: RESPONSIVE_PROPS,
  // HTML Element which will be presented in DOM instead default one
  htmlTag?: string,
  // Element id attribute
  id?: string,
  // Element aria label
  ariaLabel?: string
  // CSS class which will be attached to this container
  className?: string,
  // inherited docs
  children?: any
  // This is equivalent to `display: flex`. It defines a flex container and enables a flex context for all its direct children. Think of flex items as primarily laying out either in horizontal rows or vertical columns.
  displayFlex?: boolean,
  // This is equivalent to `display: inline-flex`. It defines a flex container and enables a flex context for all its direct children. Think of flex items as primarily laying out either in horizontal rows or vertical columns.
  displayInlineFlex?: boolean,
  // This is equivalent to `display: flex` and `flex-direction: row`.
  hBox?: boolean,
  // This is equivalent to `display: flex` and `flex-direction: column`.
  vBox?: boolean,
  // This is equivalent to `flex-direction: row`. This establishes the main-axis to be horizontal, thus defining the direction flex items are placed in the flex container: left to right in `ltr`; right to left in `rtl`.
  flexDirectionRow?: boolean,
  // This is equivalent to `flex-direction: row-reverse`. This establishes the main-axis to be horizontal, thus defining the direction flex items are placed in the flex container: right to left in `ltr`; left to right in `rtl`.
  flexDirectionRowReverse?: boolean
  // This is equivalent to `flex-direction: column`. This establishes the main-axis to be vertical, thus defining the direction flex items are placed in the flex container: top to bottom.
  flexDirectionColumn?: boolean,
  // This is equivalent to `flex-direction: column-reverse`. This establishes the main-axis to be vertical, thus defining the direction flex items are placed in the flex container: bottom to top.
  flexDirectionColumnReverse?: boolean,
  // This is equivalent to `flex-wrap: wrap`. It allows flex items to wrap as needed onto multiple lines, from top to bottom.
  wrap?: boolean,
  // This is equivalent to `flex-wrap: nowrap`. All flex items will be on one line.
  noWrap?: boolean
  // This is equivalent to `flex-wrap: wrap-reverse`. It allows flex items to wrap as needed onto multiple lines, from bottom to top.
  wrapReverse?: boolean,
  // This is the same as `flex: initial;` and the shorthand for the default value: `flex: 0 1 auto`. It sizes the item based on its `width`/`height` properties (or its content if not set). It makes the flex item inflexible when there is some free space left, but allows it to shrink to its minimum when there is not enough space. The alignment abilities or `auto` margins can be used to align flex items along the main axis.
  flexInitial?: boolean
  // This is equivalent to `flex: 1 1 0%`. It sizes the item not based on its `width`/`height` properties, but based on the available space. This is similar to `flex: 1 1 auto` execpt it is allowed to shrink beyond its initial size.
  flex1?: boolean,
  // This is equivalent to `flex: 1 1 auto`. Beware, this is not the default value. It sizes the item based on its `width`/`height` properties, but makes it fully flexible so that they absorb any extra space along the main axis. If all items are either `flex: auto`, `flex: initial`, or `flex: none`, any remaining space after the items have been sized will be distributed evenly to the items with `flex: auto`.
  flexAuto?: boolean,
  // This is equivalent to `flex: 0 0 auto`. It sizes the item according to its `width`/`height` properties, but makes it fully inflexible. This is similar to `flex: initial` except it is not allowed to shrink, even in an overflow situation.
  flexNone?: boolean,
  // This is equivalent to `flex-grow: 1`. It defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.
  flexGrow?: boolean,
  // This is equivalent to `flex-grow: 0`. The item will not grow.
  flexGrow0?: boolean,
  // This is equivalent to `flex-shrink: 1`. It determines how much the flex item will shrink relative to the rest of the flex items in the flex container when there isn't enough space on the row.
  flexShrink?: boolean,
  // This is equivalent to `flex-shrink: 0`. The item will not shrink.
  flexShrink0?: boolean,
  // This is equivalent to `flex-basis: auto`. It specifies the initial size of the flex item, before any available space is distributed according to the flex factors. It sizes the element according to its size property.
  flexBasisAuto?: boolean,
  // This is equivalent to `flex-basis: 0`. It specifies the initial size of the flex item, before any available space is distributed according to the flex factors. It disregards the element' size property.
  flexBasis0?: boolean,
  // This aligns items vertically in flex container to the top
  alignItemsStart?: boolean,
  // This aligns items vertically in flex container to the bottom
  alignItemsEnd?: boolean,
  // This aligns items vertically in flex container in center
  alignItemsCenter?: boolean,
  // This stretches items in flex container to match flex container height by vertically
  alignItemsStretch?: boolean,
  // This aligns items vertically as per their baselines align
  alignItemsBaseLine?: boolean,
  // This aligns items horizontally to the left
  justifyContentStart?: boolean,
  // This aligns items horizontally to the right
  justifyContentEnd?: boolean,
  // This aligns items horizontally in center
  justifyContentCenter?: boolean,
  // This aligns items horizontally first item is on the left, last item is on the right between is nothing but they are divided like that
  justifyContentBetween?: boolean,
  // Items are evenly distributed in the line with equal space around them
  justifyContentAround?: boolean,
  // Items are distributed so that the spacing between any two adjacent alignment subjects, before the first alignment subject, and after the last alignment subject is the same
  justifyContentEvenly?: boolean,
};

// Returns the width and height of the window
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const Container = forwardRef((props: CONTAINER_PROPS, ref: any) => {

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    // cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {
    scope,
    ariaHidden,
    ariaLabeledBy,
    ariaLabel,
    role,
    tabIndex,
    cmpKey,
    responsive,
    htmlTag,
    id,
    className,
    children,
    displayFlex,
    displayInlineFlex,
    hBox,
    vBox,
    flexDirectionRow,
    flexDirectionRowReverse,
    flexDirectionColumn,
    flexDirectionColumnReverse,
    wrap,
    noWrap,
    wrapReverse,
    flexInitial,
    flex1,
    flexAuto,
    flexNone,
    flexGrow,
    flexGrow0,
    flexShrink,
    flexShrink0,
    flexBasisAuto,
    flexBasis0,
    alignItemsStart,
    alignItemsEnd,
    alignItemsCenter,
    alignItemsStretch,
    alignItemsBaseLine,
    justifyContentStart,
    justifyContentEnd,
    justifyContentCenter,
    justifyContentBetween,
    justifyContentAround,
    justifyContentEvenly
  } = props;

  const containerClasses = classNames(
    className,
    {
      'k-d-flex': displayFlex,
      'k-d-inline-flex': displayInlineFlex,
      'k-d-flex-row': hBox,
      'k-d-flex-col': vBox,
      'k-flex-row': flexDirectionRow,
      'k-flex-row-reverse': flexDirectionRowReverse,
      'k-flex-col': flexDirectionColumn,
      'k-flex-col-reverse': flexDirectionColumnReverse,
      'k-flex-wrap': wrap,
      'k-flex-nowrap': noWrap,
      'k-flex-wrap-reverse': wrapReverse,
      'k-flex-initial': flexInitial,
      'k-flex-1': flex1,
      'k-flex-auto': flexAuto,
      'k-flex-none': flexNone,
      'k-flex-grow': flexGrow,
      'k-flex-grow-0': flexGrow0,
      'k-flex-shrink': flexShrink,
      'k-flex-shrink-0': flexShrink0,
      'k-flex-basis-auto': flexBasisAuto,
      'k-flex-basis-0': flexBasis0,
      'k-align-items-start': alignItemsStart,
      'k-align-items-end': alignItemsEnd,
      'k-align-items-center': alignItemsCenter,
      'k-align-items-stretch': alignItemsStretch,
      'k-align-items-baseline': alignItemsBaseLine,
      'k-justify-content-start': justifyContentStart,
      'k-justify-content-end': justifyContentEnd,
      'k-justify-content-center': justifyContentCenter,
      'k-justify-content-between': justifyContentBetween,
      'k-justify-content-around': justifyContentAround,
      'k-justify-content-evenly': justifyContentEvenly,
      // @ts-ignore
      [responsive && responsive.lg] : responsive && responsive.lg && windowDimensions.width < 1200,
      // @ts-ignore
      [responsive && responsive.md] : responsive && responsive.lg && windowDimensions.width < 992,
      // @ts-ignore
      [responsive && responsive.sm] : responsive && responsive.lg && windowDimensions.width < 768
    }
  );

  return(
    React.createElement(
      `${htmlTag ? htmlTag: 'div'}`,
      {
        "scope": scope,
        "aria-hidden": ariaHidden,
        tabIndex: tabIndex,
        key: cmpKey,
        ref: ref,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabeledBy,
        className: containerClasses,
        id: id,
        "role": role,
      },
      [children]
    )
  );
});

export default Container;