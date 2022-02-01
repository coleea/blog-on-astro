import React from 'react' ;

const infos = [                        
      {
            img : 'https://img.shields.io/badge/Linkedin-f??style=plastic&logo=linkedin&&color=0A66C2',
            url : 'https://www.linkedin.com/in/leekb86/',
            content : '링크드인'
      },
      {
            img : `https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white`,
            // img : "https://img.shields.io/badge/youtube-f??style=plastic&logo=youtube&&color=RED",
            url : "https://www.youtube.com/channel/UCq2GSQmfVIClSp1YqjnDpZQ",
            content : 'youtube 채널'
      },
      {
            img : 'https://img.shields.io/badge/Gmail-f??style=plastic&logo=gmail&&color=RED',
            url : '',
            content : 'tmwlak@gmail.com',
      },
]

export default () => {

    return (
        <div className='aboutMeWrapper'>
            <div class="title">About Me</div>
            <table class="table" cellPadding='10px'>
                  <tbody>
                  {infos.map((info, index) => (
                        <tr>
                              <td><img src={info.img} height='30px' /></td>
                              <td><a class='bannerTitle'  href={info.url}>{info.content}</a></td>
                        </tr>)
                  )}
                  </tbody>
            </table>
            <h3>관심분야</h3>
            <ul>
                  <li>웹 프론트엔드</li>
            </ul>
            <div>
                  <h3>이력서</h3>
                  <ul>                        
                        <li><a href="http://resume.devkr.info/">여기를 참조</a></li>
                  </ul>
            </div>
            <div>
                  <h3>현재 관심사</h3>
                  <div class="intereted" style={{lineHeight : "90px"}}>
                        <div >
                              <img src="/rescript_logo.png" height={"80px"}></img>
                        </div>
                        <div>
                              <img src="/remix_logo.png" height={"80px"}></img>
                        </div>                                                           
                  </div>
            </div>
            <hr/>
            <footer>
                  <a href='/'>홈으로</a>
            </footer>
        </div>
      )
}