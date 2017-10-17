import React = require("react");

interface TooltipProps {
    for?: any;
    title?: string;
    tooltipPosition?: string;
    tooltipEvent?: string;
    appendTo?: string;
    positionStyle?: string;
    tooltipStyleClass?: string;
    tooltipDisabled?: boolean;
    escape?: boolean;
    hideDelay?: number;
    showDelay?: number;
    onBeforeShow?(originalEvent: Event): void;
}

export class Tooltip extends React.Component<TooltipProps,any> {}