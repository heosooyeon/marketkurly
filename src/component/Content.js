import '../App.css'
import RecomProd from '../RecomProd';

export default function Content() {
    const RecomProdEl = RecomProd.map(d => {
        return (
          <li>
              <div style={{textAlign:'left', padding:'5px'}}>
                <div className='prodImgAndFunc'>
                  
                  { d.descripCard ? <div className="card-descrip-badge" ><p>{d.descripCard}</p></div> : ""}
                  <img className='card--badge' src={"https://s3.ap-northeast-2.amazonaws.com/res.kurly.com/kurly/ico/2021/cart_white_45_45.svg"}></img>
                  <img className="prodImg" style={{width:'249px', height:'320px'}} src={process.env.PUBLIC_URL+ `/image/banner_product/${d.img}.png`}></img>
                </div>
                <p style={{ marginTop:'10px', marginBottom:'5px',fontWeight:'530'}}>{d.title}</p>
                <span style={{fontSize:'16px',fontWeight:'bold', color:'orangered', marginRight:'5px'}}>{d.discount}%</span>
                <span style={{fontSize:'16px', fontWeight:'bold'}}>{d.price}원</span>
                <p style={{marginTop:'2.5px' ,fontWeight:'normal', textDecoration:'line-through', color:'gray'}}>{d.originalPrice}원</p>
              </div>
            </li>
        )
      })
    
    
      return (
      <div className="Content">
        <div class="cropped">
          <img src={process.env.PUBLIC_URL+'/image/banner/1.webp'}/>
        </div>
        <br></br>
        <br></br>
        <p style={{marginTop:'35px', fontSize:'28px', fontWeight:'550'}}>이 상품 어때요?</p>
        <ul style={{listStyleType:'none', paddingTop:'35px', paddingBottom:'40px'}}>
          {RecomProdEl}
        </ul>
        <img className="ad" src={process.env.PUBLIC_URL+"/advertise.png"}></img>
        </div>
      );
}