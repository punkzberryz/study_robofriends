import Card from "./Card";

interface Props {
  robots: {
    id: number;
    name: string;
    email: string;
  }[];
}

const CardList = ({ robots }: Props) => {
  const cardComponent = robots.map((robot) => {
    return (
      <Card
        key={robot.id}
        id={robot.id}
        name={robot.name}
        email={robot.email}
      />
    );
  });

  return <>{cardComponent}</>;
};
export default CardList;
