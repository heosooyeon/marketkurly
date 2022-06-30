import '../NavBar.css'

export default function NavBar() {
    return (
        <div className='NavBar'>
            <header>
            <div className="alertbtn">
                <div style={{padding:'2.5px 7.5px 2.5px 7.5px'}}>
                    <span style={{color:'purple', fontWeight:'bold'}}>{"샛별택배 "}</span>
                    <span>{"배송안내 >"}</span>
                </div>
            </div>
            <nav>
                <ul class="list_menu">
                    <li>
                    <a style={{color:'purple'}}>회원가입</a>
                    </li>
                    <li>
                        <a>로그인</a>
                    </li>
                    <li>
                        <a>고객센터▼</a>
                    </li>
                </ul>
            </nav>
            
        </header>
        <h1 className="logo">
                <img className="logoImg" src={process.env.PUBLIC_URL+ "/로고-아이콘.jpg"}></img>
            </h1>
        <div className="funcmenu">
            <ul style={{marginLeft:'-60px'}}>
                <li><img style={{marginRight:'8px'}} src={process.env.PUBLIC_URL+"/ico_gnb_all_off.webp"}></img><a>전체카테고리</a></li>
                <li><a>신상품</a></li>
                <li><a>베스트</a></li>
                <li><a>알뜰쇼핑</a></li>
                <li><a>특가/혜택</a></li>
                <li className="iconmenu">
                    <ul>
                        <li><div style={{marginTop:'-5px'}} className="inputBox"><input id = "search" placeholder="검색어를 입력해주세요."></input><img className="searchicon"src={process.env.PUBLIC_URL+'/search.webp'}></img></div></li>
                        <li><img style={{marginTop:'-5px'}} src={ process.env.PUBLIC_URL+ "/ico_delivery_setting.svg"}></img></li>
                        <li><img style={{marginTop:'-5px'}} src={process.env.PUBLIC_URL+ "/btn-heart-off.svg"}></img></li>
                        <li><img style={{marginTop:'-5px'}} src={process.env.PUBLIC_URL+"/ico_cart.svg"}></img></li>
                    </ul>
                </li>
            </ul>
        </div>
        </div>
    )
}