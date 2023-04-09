const MasterBanner = ({ img, classes }) => {
  return (
    <div style={{ height:'70vh' }}>
      <div
        className={`home ${classes ? classes : "text-center"}`}
        style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' , height:'95%' }}
      ></div>
    </div>
  );
};



export default MasterBanner;
