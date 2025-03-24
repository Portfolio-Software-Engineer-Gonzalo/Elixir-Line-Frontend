
export class Customer {

    constructor(
        {
            id = 0,
            person_name = '',
            dni = '',
            email = '',
            business_name = '',
            phone = '',
            address = '',
            country = '',
            city = '',
            ruc = '',
            registration_date = '',
            customer_type = ''
        }
    )
    {
        this.id = id;
        this.person_name = person_name;
        this.dni = dni;
        this.email = email;
        this.business_name = business_name;
        this.phone = phone;
        this.address = address;
        this.country = country;
        this.city = city;
        this.ruc = ruc;
        this.registration_date = registration_date;
        this.customer_type = customer_type;
    }
}