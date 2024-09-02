import Logo from "./assets/logo.png";
const Header = () => {
  return (
    <>
      <div className="h-16 ">
        <img
          className="mt-[13px] ml-[89px] h-[39.11px] w-[87px]"
          src={Logo}
          alt=""
        />
      </div>
    </>
  );
};
export default Header;
