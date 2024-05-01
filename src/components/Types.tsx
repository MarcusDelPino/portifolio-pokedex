import Image from "next/image";

interface TypesProps {
  typeOne: any;
  typeTwo?: any;
}

export default function Types({ typeOne, typeTwo }: TypesProps) {
  const translate = (type: string) => {
    switch (type) {
      case "normal":
        return {
          name: "Normal",
          color: "text-amber-800",
          typeEl: "/assets/pic/normal.png",
        };
      case "fire":
        return {
          name: "Fogo",
          color: "text-red-800",
          typeEl: "/assets/pic/fogo.png",
        };
      case "poison":
        return {
          name: "Venenoso",
          color: "text-red-400",
          typeEl: "/assets/pic/poison.png",
        };
      case "grass":
        return {
          name: "Planta",
          color: "text-lime-400",
          typeEl: "/assets/pic/grama.png",
        };
      case "bug":
        return {
          name: "Inseto",
          color: "text-green-400",
          typeEl: "/assets/pic/inseto.png",
        };
      case "flying":
        return {
          name: "Voador",
          color: "text-blue-800",
          typeEl: "/assets/pic/voador.png",
        };
      case "water":
        return {
          name: "Aquático",
          color: "text-blue-400",
          typeEl: "/assets/pic/agua.png",
        };
      case "electric":
        return {
          name: "Elétrico",
          color: "text-yellow-400",
          typeEl: "/assets/pic/eletrico.png",
        };
      case "psychic":
        return {
          name: "Psíquico",
          color: "text-purple-600",
          typeEl: "/assets/pic/psiquico.png",
        };
      case "ghost":
        return {
          name: "Fantasma",
          color: "text-pink-500",
          typeEl: "/assets/pic/fantasma.png",
        };
      case "fighting":
        return {
          name: "Lutador",
          color: "text-red-600",
          typeEl: "/assets/pic/lutador.png",
        };
      case "ground":
        return {
          name: "Terra",
          color: "text-amber-400",
          typeEl: "/assets/pic/terra.png",
        };
      case "ice":
        return {
          name: "Gelo",
          color: "text-blue-200",
          typeEl: "/assets/pic/gelo.png",
        };
      case "dragon":
        return {
          name: "Dragão",
          color: "text-red-950",
          typeEl: "/assets/pic/dragao.png",
        };
      case "fairy":
        return {
          name: "Fada",
          color: "text-yellow-400",
          typeEl: "/assets/pic/fada.png",
        };
      case "rock":
        return {
          name: "Pedra",
          color: "text-gray-400",
          typeEl: "/assets/pic/pedra.png",
        };
      case "steel":
        return {
          name: "Metal",
          color: "text-gray-400",
          typeEl: "/assets/pic/metal.png",
        };
      default:
        return { name: "", color: "", typeEl: "" };
    }
  };

  const typeOneFinal = translate(typeOne);
  const typeTwoFinal = typeTwo ? translate(typeTwo) : null;

  return (
    <>
      <div
        className={`flex gap-2 items-center justify-center 
                  ${typeOneFinal.color}`}
      >
        {typeOneFinal.name}
        <Image
          src={typeOneFinal.typeEl}
          alt="pokemons"
          width={10}
          height={10}
          priority
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      {typeTwoFinal && (
        <div
          className={`flex gap-2 items-center justify-center ${typeTwoFinal.color}`}
        >
          <span className="ml-1 text-black"> | </span>
          {typeTwoFinal.name}
          <Image
            src={typeTwoFinal.typeEl}
            alt="pokemons"
            width={10}
            height={10}
            priority
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      )}
    </>
  );
}
