
export default class Product {

    constructor(
        {
            id = 0,
            name = '',
            variety = '',
            year = '',
            wine_type = '',
            batch_number = '',
            photo_url = '',
            quality_data_id = '',
            production_process_id = '',
            stock_id = '',
            distribution_id = ''
        }
    )
    {
        this.id = id;
        this.name = name;
        this.variety = variety;
        this.year = year;
        this.wine_type = wine_type;
        this.batch_number = batch_number;
        this.photo_url = photo_url;
        this.quality_data_id = quality_data_id;
        this.production_process_id = production_process_id;
        this.stock_id = stock_id;
        this.distribution_id = distribution_id;
    }
}