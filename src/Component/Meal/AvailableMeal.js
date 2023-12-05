import classes from './AvailableMeal.css';

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
  const meals = DUMMY_MEALS.map((meal) => <li key={meal.id}>{meal.name}</li>);

  return (
    <section className={classes.meals}>
      <ul>{meals}</ul>
    </section>
  );
};

export default AvailableMeal;
