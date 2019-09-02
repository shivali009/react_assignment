export interface ICategory{
    category_list:{category_id: string, category_name: string, category_image: string}[],
    heading:string
    }

export interface IProductList{
    products:IProduct[]
}

export interface IProduct{
    name: string,
    base_product_name: string,
    flavour: string,
    sku: string,
    id: number,
    type_id: string,
    product_category_content: string,
    orig_url: string,
    url:string,
    price: number,
    final_price: number,
    tagline:string,
    weight: number,
    weight_unit:string,
    is_in_stock: boolean,
    is_fragrance: boolean,
    has_variants: boolean,
    no_of_products_in_shipment:number,
    image_urls: {string:string}

}