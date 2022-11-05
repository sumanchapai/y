export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <div>header comes here</div>
                {children}
            </body>
            <div>footer comes here</div>
        </html>
    );
}
