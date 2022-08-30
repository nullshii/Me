import React, { FC } from "react";

interface IcoLinkProps {
    icon: FC<React.SVGProps<SVGSVGElement>>;
    onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const IcoLink: FC<IcoLinkProps> = (props) => (
    <div className={'bg-neutral-800 flex items-center justify-center mx-1 rounded-full w-10 h-10 hover:cursor-pointer hover:bg-neutral-700 transition-all duration-200'}
        onClick={props.onClick}>
        <props.icon />
    </div>
);
