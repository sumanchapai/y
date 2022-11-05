import { testdata } from "../lib/buildData";

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
