import React from 'react' ;
import './css/aboutme.css';

export default () => {
    return (
        <div>
            <p id='aboutMeWrapper'>
               <h1>About Me</h1>
                <table cellPadding='10px'>
                        <tbody>
                              <tr>
                                    <td><img src="" height='42px'  /></td>
                                    {/* <td><img src="icon_gmail.svg" height='42px'  /></td> */}
                                    <td>tmwlak@gmail.com</td>
                              </tr>
                              <tr>
                                    <td> <img src="https://img.shields.io/badge/TechBlog-f??style=plastic&logo=naver&&color=03C75A"  height='42px'  />                     </td>
                                    <td> <a href="https://blog.naver.com/coleea2">blog.naver.com/coleea2</a></td>
                              </tr>
                              <tr>
                                    <td> <img src="" height='42px'  />                        </td>
                                    {/* <td> <img src="icon_youtube.svg" height='42px'  />                        </td> */}
                                    <td> <a href="https://www.youtube.com/channel/UCq2GSQmfVIClSp1YqjnDpZQ" height='42px' >youtube ch. </a></td>
                              </tr>
                              <tr>
                                    <td> <img src='https://img.shields.io/badge/Linkedin-f??style=plastic&logo=linkedin&&color=0A66C2' height='42px'  /> </td>
                                    <td><a href='https://www.linkedin.com/in/leekb86/' >Linkedin</a></td>
                              </tr>
                              <tr>
                                    <td><img src="https://img.shields.io/badge/Twitter-f??style=plastic&logo=twitter&&color=ffffff" height='42px'  />             </td>
                                    <td><a href="twitter.com/tmwlak2">@tmwlak2</a></td>
                              </tr>
                              <tr>
                                    <td></td>
                                    <td></td>
                              </tr>

                        </tbody>
                  </table>
              </p>
        </div>
      )
}