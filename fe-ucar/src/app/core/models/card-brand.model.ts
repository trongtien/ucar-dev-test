export interface ITableCardBrandItem {
    id: number;
    avatar: string;
    name: string;
    description: string;
    number_model: number;
    last_update: string;
    status: number;
    checked: boolean;
    expand: boolean;
}


export interface IRequestCardBrandItem{
    name: string;
    logo: string;
    description: string;
    status: number
}