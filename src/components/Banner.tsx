interface IBannerImg{
  img:string
}
const Banner = ({img}:IBannerImg)=>{
  return(
    <div className="banner_container component">
      <img src={img}alt="Banner" />
    </div>
  );
}
export default Banner;