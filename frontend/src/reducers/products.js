var initialState = [
    {
        id:1,
        name:'Iphone 7',
        image:'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-400x400.jpg',
        description: 'Sản phẩm do Apple sản xuất!',
        price: 500,
        inventory : 10,
        rating : 4
    },
    {
        id:2,
        name:'Samsung GalaxyS8',
        image:'https://cdn.tgdd.vn/Products/Images/42/91131/samsung-galaxy-s8-plus-hh-600x600-600x600.jpg',
        description: 'Sản phẩm do Samsung sản xuất!',
        price: 200,
        inventory : 15,
        rating : 3
    },
    {
        id:3,
        name:'Iphone X',
        image:'https://product.hstatic.net/1000329106/product/iphone_x_black_master.jpg',
        description: 'Sản phẩm do Apple sản xuất!',
        price: 700,
        inventory : 5,
        rating : 5
    }
];


const products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
}

export default products;