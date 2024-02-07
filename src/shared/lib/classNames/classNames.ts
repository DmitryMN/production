type Mods = Record<string, boolean | string>

export const classNames = (cls: string, mods: Mods = {}, additional: Array<string | undefined> = []): string => {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
        .filter(([cls, value]) => Boolean(value)).map(([cls]) => cls)
    ].join(' ');
}
