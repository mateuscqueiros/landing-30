import "./App.css";

const items = [
  {
    title: "Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "/dog-2.png",
  },
  {
    title: "Title 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "/cat.png",
  },
  {
    title: "Title 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    img: "/dog-3.png",
  },
];

interface CardItemProps {
  title: string;
  description: string;
  img: string;
}

function CardItem({ title, description, img }: CardItemProps) {
  return (
    <div className="flex flex-row space-x-5">
      <img src={img} className="w-24 h-24 object-cover" />
      <div>
        <h2 className="text-2xl text-black font-bold">{title}</h2>
        <span className="text-sm leading-[0.5rem] text-black">
          {description}
        </span>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="bg-hero-pattern">
        <div className="relative flex px-10 pt-10 pb-20 mx-auto max-w-[1500px]">
          <div className="flex-1 flex flex-col justify-center space-y-10 ">
            <h1 className="text-[5rem] leading-[5.5rem] font-bold">
              We take good care of your pet
            </h1>
            <p className="text-xl leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </p>
            <button className="bg-blue-300 text-lg py-4 px-16 rounded-full w-fit">
              Schedule a visit
            </button>
          </div>
          <div className="flex-1">
            <div className="relative bg-main-pattern w-full h-[700px] bg-no-repeat">
              <img
                className="bg-asterisk-pattern absolute bg-no-repeat bottom-20 right-24"
                src="/Asterisk.png"
              />
            </div>
          </div>
          <div className="flex flex-row p-10 absolute w-[80%] max-w-[1200px] h-[156px] bg-gray-200 rounded-xl bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%] space-x-3">
            {items.map((i) => (
              <CardItem
                title={i.title}
                description={i.description}
                img={i.img}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
