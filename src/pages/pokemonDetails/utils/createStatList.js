export const createStatLists = (stats) => {
    if (!Array.isArray(stats)) return []

    return stats.map(({base_stat, stat})=>({
        statName:stat.name,
        statValue:base_stat
    }))
}