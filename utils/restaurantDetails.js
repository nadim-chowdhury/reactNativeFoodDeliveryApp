export const restaurantDetails = {
  id: 1,
  name: 'Pizza Palace',
  rating: 4.5,
  address: '123 Pizza St, Food City',
  operatingHours: '10:00 AM - 10:00 PM',
  menu: [
    {
      id: 1,
      name: 'Margherita',
      price: '$10',
      description: 'Classic cheese and tomato pizza',
    },
    {
      id: 2,
      name: 'Pepperoni',
      price: '$12',
      description: 'Pepperoni pizza with extra cheese',
    },
    // Add more menu items
  ],
  reviews: [
    {id: 1, user: 'John Doe', rating: 5, comment: 'Great pizza!'},
    {id: 2, user: 'Jane Smith', rating: 4, comment: 'Good but a bit pricey.'},
    // Add more reviews
  ],
};
