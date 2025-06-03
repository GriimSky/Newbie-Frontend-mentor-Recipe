import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-amber-100 flex flex-col items-center justify-center h-auto w-screen mt-0">
      <div className="p-7 h-auto w-[85%] rounded-2xl bg-white mt-10 text-black">
        <Image
          src="/Omelette de base.jpg"
          alt="main"
          width={1200}
          height={800}
          className="w-full rounded-2xl mb-10"
        />

        <h1 className="text-4xl mb-10 font-bold text-orange-800">
          Simple Omelette Receipe
        </h1>
        <p className="mb-10">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <div className="bg-pink-300 pl-10 p-5 w-[95%] rounded-2xl mb-10">
          <h4 className="mb-5 text-2xl font-bold text-pink-900">
            Preparation Time
          </h4>
          <ul className="list-disc ml-5">
            <li className="mb-2">
              <strong>Total:</strong> Approximately 10 minutes
            </li>
            <li className="mb-2">
              <strong>Preparation: </strong> 5 minutes
            </li>
            <li>
              <strong>Cooking: </strong> 5 minutes
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl mb-5 font-bold text-orange-800">
            Ingredients
          </h2>
          <ul className="list-disc ml-5">
            <li className="mb-2">2-3 large eggs</li>
            <li className="mb-2">Salt, to taste</li>
            <li className="mb-2">Pepper, to taste</li>
            <li className="mb-2">1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>

        <div className="border-1 w-[90%] ml-2 border-black rounded-2xl mt-10 mb-10 "></div>

        <div>
          <h2 className="text-3xl mb-5 font-bold text-orange-800">
            Instructions
          </h2>

          <ol className="list-decimal ml-5 text-black">
            <li className="mb-3">
              <strong>Beat the eggs: </strong> In a bowl, beat the eggs with a
              pinch of salt and peper until they are well mixed. You can add a
              tablespoon of water or milk for a flutter texture.
            </li>
            <li className="mb-3">
              <strong>Heat the pan: </strong>Place a non-stick frying pan over
              medium heat and add butter or oil.
            </li>
            <li className="mb-3">
              <strong>Cook the omelette: </strong> Once the butter is melted and
              bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
              coat the surface.
            </li>
            <li className="mb-3">
              <strong>Add fillings (optinal):</strong> When the eggs begin to
              set the edges but are still slightly runny in the middle, sprinkle
              your chosen fillings over one half of the omelette.
            </li>
            <li className="mb-3">
              <strong>Fold and serve:</strong> As the omelette continues to
              cook, carefully lift one edge and fold it oer the fillings. Let it
              cook for another minute, then slide it onto a plate.{" "}
            </li>
            <li>
              <strong>Enjoy:</strong> Setve hot, with additional salt and pepper
              if needed.{" "}
            </li>
          </ol>
        </div>

        <div className="border-1 w-[90%] ml-2 border-black rounded-2xl mt-10 mb-10 "></div>

        <div>
          <h2 className="text-3xl mb-5 font-bold text-orange-800">Nutrition</h2>

          <p className="mb-10">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>

          <div className="flex items-center justify-center gap-50 border-b-1 border-black pb-3 mb-5">
            <p>Calories</p>
            <p className="font-bold text-orange-800">277kcal</p>
          </div>

          <div className="flex items-center justify-center gap-63 border-b-1 border-black pb-3 mb-5">
            <p>Carbs</p>
            <p className="font-bold text-orange-800">0g</p>
          </div>

          <div className="flex items-center justify-center gap-58 border-b-1 border-black pb-3 mb-5">
            <p>Protein</p>
            <p className="font-bold text-orange-800">20g</p>
          </div>

          <div className="flex items-center justify-center gap-64 border-b-1 border-black pb-3 mb-5">
            <p>Fat</p>
            <p className="font-bold text-orange-800">22g</p>
          </div>
        </div>
      </div>
    </main>
  );
}
