import React from "react";

export interface IMainProps {
    empty: boolean; 
    error: any;
    loading: boolean;
    children: React.ReactNode;
    title: React.ReactElement
}
