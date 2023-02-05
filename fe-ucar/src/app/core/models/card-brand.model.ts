export interface ITableCardBrandItem {
    id: number;
    logo: string | null;
    name: string ;
    description: string | null;
    number_model: number;
    last_update: string;
    status: number;
    checked: boolean;
    expand: boolean;
    updated_at: any;
    created_at: any;
}

export interface IFilterTable {
    page?: string
    limit?: string
    search?: string
}

export interface IRequestCardBrandItem{
    name: string;
    logo: string | null;
    description: string | null;
    status: number
}