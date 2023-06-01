export const createStatLists = (stats) => {
    if (!Array.isArray(stats)) return []

    return stats.map(({title, value})=>({
        title:title,
        value:value
    }))
}