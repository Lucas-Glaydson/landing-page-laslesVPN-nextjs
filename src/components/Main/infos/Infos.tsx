import InfoData from "./InfoData";

export default function Infos() {
  return (
    <section className="flex shadow-xl w-[331px] h-16 justify-around rounded-xl m-auto items-center py-11 my-8 lg:w-[820px] lg:h-[114px]">
      <InfoData image="/icons/user.svg" title="Users" value="90+" />
      <div className="h-[50%] text-black">|</div>
      <InfoData image="/icons/location.svg" title="Location" value="90+"/>
      <div className="h-[50%] text-black">|</div>
      <InfoData image="/icons/servers.svg" title="Servers" value="90+" />
    </section>
  );
}
