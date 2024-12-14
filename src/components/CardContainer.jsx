import { CORE_CONCEPTS } from "./data";
import Card from "./Card"; 

export default function CardContainer() {
  return (
    <ul>
      {CORE_CONCEPTS.map((concept) => (
        <Card key={concept.title} {...concept} />
      ))}
    </ul>
  );
}