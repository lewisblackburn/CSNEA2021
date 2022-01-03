import React from 'react';
import {AppProps} from 'next/app';
import 'tailwindcss/tailwind.css';
import '../styles/index.css';

export default function App({Component, pageProps}: AppProps) {
	return <Component {...pageProps} />;
}
