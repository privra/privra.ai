import React, { useEffect } from 'react';
import SecurityShowcase from '../components/SecurityShowcase';

export default function Showcase() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="flex-grow pt-24 bg-[#0b1120]">
            <SecurityShowcase />
        </main>
    );
}
