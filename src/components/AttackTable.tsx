import { Pokemon, PokemonAttackInterface } from "@/interfaces/PokemonInterface";

export default function AttackTable({
  pokemonAtk,
  attackType,
}: {
  pokemonAtk: PokemonAttackInterface[];
  attackType: string;
}) {
  return (
    <div className="pt-4 space-y-2 w-[60%]">
      <span className="text-xl font-bold underline">{attackType} Attack</span>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Damage</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
          {pokemonAtk.map((attack, index) => (
            <tr key={index}>
              <td>{attack.name}</td>
              <td>{attack.type}</td>
              <td>{attack.damage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
