import React = require("react");

interface SplitButtonItemProps {
    menuitem?: any;
}

export class SplitButtonItem extends React.Component<SplitButtonItemProps,any> {}

interface SplitButtonProps {
    id?: string;
    label?: string;
    icon?: string;
    model?: Array<any>;
    disabled?: boolean;
    style?: string;
    className?: string;
    menuStyle?: string;
    menuClassName?: string;
    tabIndex?: string;
    onClick?(): void;
}

export class SplitButton extends React.Component<SplitButtonProps,any> {}