import React = require("react");

interface InputMaskProps {
    id?: string;
    type?: string;
    mask?: string;
    slotChar?: string;
    autoClear?: boolean;
    unmask?: boolean;
    style?: string;
    className?: string;
    placeholder?: string;
    size?: number;
    maxlength?: number;
    tabindex?: number;
    disabled?: boolean;
    readonly?: boolean;
    name?: string;
    onComplete?(originalEvent: Event): void;
}

export class InputMask extends React.Component<InputMaskProps,any> {}