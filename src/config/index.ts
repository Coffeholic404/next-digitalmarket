export const PRODUCT_CATEGORIES = [
    {
        label: "UI kits",
        value: "ui_kits" as const,
        feature: [
            {
                name: "Editor picks",
                herf: '#',
                imageSrc: '/nav/ui-kits/mixed.jpg'
            },
            {
                name: "New Arrivals",
                herf: '#',
                imageSrc: '/nav/ui-kits/blue.jpg'
            },
            {
                name: "Bestsellers",
                herf: '#',
                imageSrc: '/nav/ui-kits/purple.jpg'
            },
        ],
    },
    {
        label: "Icons",
        value: "icons" as const,
        feature: [
            {
                name: "Favorite Icon Picks",
                herf: '#',
                imageSrc: '/nav/icons/picks.jpg'
            },
            {
                name: "New Arrivals",
                herf: '#',
                imageSrc: '/nav/icons/new.jpg'
            },
            {
                name: "Bestselling Icons",
                herf: '#',
                imageSrc: '/nav/icons/bestsellers.jpg'
            },
        ],
    },
]