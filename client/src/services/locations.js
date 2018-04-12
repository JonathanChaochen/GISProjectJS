export function fetchLocatons(set) {
    return fetch('/api/locations/' + set)
        .then((res) => res.json())
        .catch((err) => console.log(err));
}