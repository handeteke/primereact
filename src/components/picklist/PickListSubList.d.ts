import React = require("react");

interface PickListSubListProps {
    list?: Array<any>;
    selection?: Array<any>;
    header?: string;
    className?: string;
    listClassName?: string;
    style?: object;
    showControls?: boolean;
    itemTemplate?(): void;
    onItemClick?(): void;
    onSelectionChange?(event: Event, value: Array<any>): void;
}

export class PickListSubList extends React.Component<PickListSubListProps,any> {}