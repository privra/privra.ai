import React from 'react';
import Hero from '../components/Hero';
import SecurityShowcase from '../components/SecurityShowcase';

export default function Home() {
    return (
        <main className="flex-grow">
            <Hero />
            <SecurityShowcase />
        </main>
    );
}
