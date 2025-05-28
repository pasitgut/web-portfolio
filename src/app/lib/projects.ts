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
        description: "The MoneyFlow is app for money management",
        image: "https://picsum.photos/200/300",
        category: "Mobile App",
    },
    {
        id: 2,
        title: "Restaurant Management System",
        description: "This is description for restaurant management system",
        image: "https://picsum.photos/200/300",
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