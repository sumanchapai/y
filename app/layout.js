async function testdata() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
        next: { revalidate: 10 },
    });
    return res.json();
}


export default async function RootLayout({ children }) {
    const data = await testdata();
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
