import React from "react";

export interface FoldableProps {
    title: string;
    content: React.ReactNode;
    iconOpen: React.ReactNode;
    iconClosed: React.ReactNode;
}