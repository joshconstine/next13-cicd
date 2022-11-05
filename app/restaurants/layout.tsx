import classes from "./layout.module.css";

async function RestaurantsLayout({ children }: any) {
  const restaurants = [
    {
      id: 1,
    },
  ];

  return (
    <div className={classes.layout}>
      <aside className={classes.sidebar}>hello</aside>
      {children}
    </div>
  );
}

export default RestaurantsLayout;
