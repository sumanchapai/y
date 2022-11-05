export async function testdata() {
    return await (
        await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        )
    ).json();
}
