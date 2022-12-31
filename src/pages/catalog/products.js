const products = {
  33: {
    name: "Camisa do Flamengo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://cf.shopee.com.br/file/e9893fd2964c9f074c5a8f61d785ab50",
      "https://cf.shopee.com.br/file/e9893fd2964c9f074c5a8f61d785ab50",
      "https://cf.shopee.com.br/file/e9893fd2964c9f074c5a8f61d785ab50",
    ],
    price: 399.99,
    categories: [1, 2, 3],
  },
  1: {
    name: "Camisa do Vasco",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://static.dafiti.com.br/p/braziline-Camisa-Vasco-Hide-Preta-2077-7149327-1-zoom.jpg",
      "https://static.dafiti.com.br/p/braziline-Camisa-Vasco-Hide-Preta-2077-7149327-1-zoom.jpg",
      "https://static.dafiti.com.br/p/braziline-Camisa-Vasco-Hide-Preta-2077-7149327-1-zoom.jpg",
    ],
    price: 299.99,
    promo_price: 199.99,
    percent: 15,
    categories: [1, 2],
  },
  4: {
    name: "Camisa do Fluminense",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://cf.shopee.com.br/file/23c8298804a8e492d75927d48ec17cc2",
      "https://cf.shopee.com.br/file/23c8298804a8e492d75927d48ec17cc2",
      "https://cf.shopee.com.br/file/23c8298804a8e492d75927d48ec17cc2",
    ],
    price: 299.99,
    categories: [1, 3],
  },
  2: {
    name: "Camisa do Botafogo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus lacus vel lectus dictum aliquam. In laoreet, arcu in porttitor semper, magna diam consectetur arcu, vel condimentum risus erat vel lacus. Duis ut viverra est, a facilisis augue. Integer feugiat risus risus. Curabitur facilisis ipsum at libero ullamcorper, id porta sapien rutrum. Integer egestas egestas quam, non venenatis quam lacinia sit amet. Ut massa metus, volutpat sit amet feugiat dapibus, tincidunt non est. Cras pharetra ut massa eu porta. Phasellus velit magna, pretium eleifend turpis in, dictum vehicula nunc.",
    images: [
      "https://cf.shopee.com.br/file/93d4407e1c389eb303408f3614f276d2",
      "https://cf.shopee.com.br/file/93d4407e1c389eb303408f3614f276d2",
      "https://cf.shopee.com.br/file/93d4407e1c389eb303408f3614f276d2",
    ],
    price: 299.99,
    promo_price: 199.99,
    percent: 15,
    categories: [1, 3, 4],
  },
};

const categories = {
  1: { name: "Roupas" },
  2: { name: "Acessórios" },
  3: { name: "Calçados" },
  4: { name: "Jóias" }
};

module.exports = {
  products,
  categories,
};
