const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);

}

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.order.payment = 50;
  pedidoPizza = Object.keys(order.order.pizza);
  pedidoBebida = Object.values(order.order.drinks.coke);
  console.log(`olá ${order.name}, o total do seu pedido de ${pedidoPizza}, ${pedidoBebida[0]} é R$${order.order.payment},00`);

}

orderModifier(order);