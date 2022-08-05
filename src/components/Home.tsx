import React from 'react';
import { GenresProvider } from '../context/GenresContext';

import { SideBar } from './SideBar';
import { Content } from './Content';

import '../styles/content.scss';
import '../styles/sidebar.scss';

export function Home() {
    return (
        <GenresProvider>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <SideBar />
                <Content />
            </div>
        </GenresProvider>
    )
}