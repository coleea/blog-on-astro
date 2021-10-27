import React from 'react' ;
import '../aboutme.css';

export default () => {
    return (
        <div className='aboutMeWrapper'>

            <style jsx>{`
                  * {
                        font-size : 2rem ;
                        font-weight : 500 ;
                  }

                  a {
                        text-decoration: none;
                        color : inherit;
                  }

                  .aboutMeWrapper {
                        text-align : center ;
                        /* width : 300px ; */
                  }

                  table {
                        margin : 0 auto 0 auto ;
                        /* margin-right: auto; */
                  }

            `}</style>

            <div className='inner'>
               <h1>About Me</h1>
                <table cellPadding='10px'>
                        <tbody>
                              <tr>
                                    <td><img src="https://img.shields.io/badge/Gmail-f??style=plastic&logo=gmail&&color=RED" height='70px' /></td>
                                    <td>tmwlak@gmail.com</td>
                              </tr>
                              <tr>
                                    <td> <img src="https://img.shields.io/badge/OldBlog-f??style=plastic&logo=naver&&color=03C75A"  height='70px'  /></td>
                                    <td> <a href="https://blog.naver.com/coleea2">이전블로그</a></td>
                              </tr>
                              <tr>
                                    <td> <img src="https://img.shields.io/badge/youtube-f??style=plastic&logo=youtube&&color=RED" height='70px'  /></td>
                                    <td> <a href="https://www.youtube.com/channel/UCq2GSQmfVIClSp1YqjnDpZQ" height='42px' >youtube 채널 </a></td>
                              </tr>
                              <tr>
                                    <td> <img src='https://img.shields.io/badge/Linkedin-f??style=plastic&logo=linkedin&&color=0A66C2' height='70px'  /> </td>
                                    <td><a href='https://www.linkedin.com/in/leekb86/'>링크드인</a></td>
                              </tr>
                              <tr>
                                    <td><img src="https://img.shields.io/badge/Twitter-f??style=plastic&logo=twitter&&color=ffffff" height='70px'  />             </td>
                                    <td><a href="twitter.com/tmwlak2">@tmwlak2</a></td>
                              </tr>
                        </tbody>
                  </table>
              </div>
              <br/>
              <hr/>
              <a href='/'>[홈으로]</a>
        </div>
      )
}