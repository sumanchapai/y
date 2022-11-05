export async function testdata() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
        next: { revalidate: 10 },
    });
    return res.json();
}
