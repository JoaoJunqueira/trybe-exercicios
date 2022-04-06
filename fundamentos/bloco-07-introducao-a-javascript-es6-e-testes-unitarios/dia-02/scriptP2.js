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
        marguerita: {
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
    // Adicione abaixo as informações necessárias.
    console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const alteracao = {
        order: {
            pizza: {
              marguerita: {
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
              deliveryPerson: 'Luiz Silva',
              price: 5,
            }
          },
          payment: {
            total: 50,
          },
    }
    console.log(`Olá ${order.order.delivery.deliveryPerson}, o total do seu pedido de ${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} e ${Object.values(order.order.drinks.coke)[0]} é R$ ${order.payment.total},00.`);    
}
  
  orderModifier(order);