import homepageImg from "/img1.jpg";
import imgHeader from "/imgHeader.jpg";
import imgHeader2 from "/imgHeader2.jpg";
export default function Banner() {
  return (
    <div className="Banner">
      <div className="Banner__left">
        <img src={homepageImg} alt="" className="imgItem" />
      </div>
      <div className="Banner__right">
        <img src={imgHeader} alt="" className="smallImg" />
        <img src={imgHeader2} alt="" className="smallImg" />
      </div>
    </div>
  );
}
