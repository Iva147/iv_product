type Mods = Record<string, boolean | string>

//mods for { hovered: true, selected: true etc}
export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([classnames, value]) => Boolean(value))
      .map(([classnames]) => classnames)
  ].join(" ")
}