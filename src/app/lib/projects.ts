export type Projects = {
    id: number
    title: string 
    description: string
    image: string 
    category: 'Mobile App' | 'Web App' | 'Others'
    link?: string
};

export const projects: Projects[] = [
    {
        id: 1,
        title: "MoneyFlow",
        description: "MoneyFlow is a personal money management app.",
        image: "",
        category: "Mobile App",
    },
    {
        id: 2,
        title: "ScanToDine",
        description: "ScanToDine is a small restaurant management system with food ordering system via QR Code scanning.",
        image: "",
        category: "Web App"
    },
    {
        id: 3,
        title: "Others projects",
        description: "This is description for others projects",
        image: "https://picsum.photos/200/300",
        category: "Others",
    }
];