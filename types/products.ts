

export interface Product {
    _id :string;
    title : string;
    _type : "product";
    productimage? : {
        asset :{
            _ref : string;
            _type : "image";
        }
    };
    price : number;
    description?: string;
    slug : {
        _type : "slug"
        current : string;
    };
    inventory : number;
}