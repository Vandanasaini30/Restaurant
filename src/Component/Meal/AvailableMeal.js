import classes from './AvailableMeal.css';
import Card from '../UI/Card';
import MealItem from './MealItems/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Panner Tikka',
    description: 'soft panner with gravy',
    price: 400,
  },
  {
    id: 'm2',
    name: 'Rajma chawal',
    description: 'Rajama with stream rice',
    price: 350,
  },
  {
    id: 'm3',
    name: 'Masala Dosa',
    description: 'South Indian dish',
    price: 250,
  },
  {
    id: 'm4',
    name: 'Dal Makhani',
    description: 'mix pulses with tadka',
    price: 350,
  },
];

const AvailableMeal = () => {
  const meals = DUMMY_MEALS.map((meal) => <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);

  return (
    
    <section className={classes.meals}>
      <Card>
      <ul>{meals}</ul>
      </Card>
    </section>
    
  );
};

export default AvailableMeal;
