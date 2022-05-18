
export interface NavItem {
    label: string,
    href: string,
    className?: string
}

export const NavItems = [
    {
        label: "Accueil",
        href: "/",
        className: ""
    },
    {
        label: "Galerie photo",
        href: "/shootings",
        className: ""
    },
    {
        label: "Contact",
        href: "/contact",
        className: ""
    }
]