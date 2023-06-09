export const createAbilityList = (abilities) => {
    if (!Array.isArray(abilities)) return []

    return abilities.map(({title, description})=>({
        title:title,
        description:description
    }))
};