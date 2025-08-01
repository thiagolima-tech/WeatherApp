export default function LateralBar() {
  return (
    <section>
      <div className="flex fixed top-0 left-0 h-2/4 w-3/4 bg-white shadow-xl z-2 px-6">
        <ul className="flex flex-col gap-8 list-none absolute top-28 left-5 text-5xl font-bold mt-5">
          <li>
            <a href="#Home">Início</a>
          </li>
          <li>
            <a href="#Nordeste">Nordeste</a>
          </li>
          <li>
            <a href="Sudeste">Sudeste</a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
      </div>
      <div className="fixed h-full w-full  bg-gray-950/25 z-1"></div>
    </section>
  );
}
