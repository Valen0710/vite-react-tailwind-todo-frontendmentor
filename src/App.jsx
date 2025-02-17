import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/MoonIcon";

const App = () => {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
            Todo
          </h1>
          <button>
            <MoonIcon />
          </button>
        </div>
        <form className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 mt-8">
          <span className="inline-block h-5 w-5 rounded-full border-2 border-gray-200"></span>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="w-full outline-none text-gray-400"
          />
        </form>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <div className="bg-white rounded-md [&>article]:p-4">
          <article className="flex gap-4 border-b-gray-400 border-b">
            <button className="flex-none inline-block h-5 w-5 rounded-full border-2 border-gray-200"></button>
            <p className="text-gray-600 grow">Complete online Javascript curse in bluuweb</p>
            <button className="flex-none">
                <CrossIcon />
            </button>
          </article>

          <article className="flex gap-4 border-b-gray-400 border-b">
            <button className="flex-none inline-block h-5 w-5 rounded-full border-2 border-gray-200"></button>
            <p className="text-gray-600 grow">Complete online Javascript curse in bluuweb</p>
            <button className="flex-none">
                <CrossIcon />
            </button>
          </article>
          
          <article className="flex gap-4 border-b-gray-400 border-b">
            <button className="flex-none inline-block h-5 w-5 rounded-full border-2 border-gray-200"></button>
            <p className="text-gray-600 grow">Complete online Javascript curse in bluuweb</p>
            <button className="flex-none">
                <CrossIcon />
            </button>
          </article>

          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear Completed</button>
          </section>
        </div>
      </main>
      <section className="container mx-auto px-4 mt-8">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
            <button className="text-blue-600">All</button>
            <button className="hover:text-blue-600">Active</button>
            <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>
      <p className="text-center mt-8">Drag and drop to reorder list</p>
    </div>
  );
};

export default App;
