import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import Apple from '../components/Navbar/apple.svg'
import Play from '../components/Navbar/play.svg'
import { useAuth } from "../../contexts/AuthContextProvider"

const Footer = () => {
  return (

    <div className="footer">
      <div className="container2">
        <hr />
        <div className="row">
          <div className="col">
            <h4 className='mar_h4'>О нас</h4>
            <ul className="list-unstyled">
              <li className='list__type'>О компании</li>
              <li className='list__type'>Вакансии</li>
              <li className='list__type'>Программа бета-тестирования</li>
              </ul>
          </div>
          {/* Column2 */}
          <div className="col1">
            <h4 className='mar_h4'>Разделы</h4>
            <ul className="list-unstyled">
              <li className='list__type'>Мой Иви</li>
              <li className='list__type'>Фильмы</li>
              <li className='list__type'>Сериалы</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col2">
            <h4 className='mar_h4'>Служба поддержки</h4>
            <ul className="list-unstyled">
              <li className='list__type'>Мы всегда готовы вам помочь.<br/>Наши операторы онлайн 24/7</li>
            </ul>
              <button className='typeChat'>Написать в чате</button><br />
              <EmailIcon className='emailicon'></EmailIcon>
              <LocalPhoneIcon className='localicon'></LocalPhoneIcon>
          </div>
          <div className='col3'>
            <button className='campainicon'><CampaignOutlinedIcon className='campainicon2' fontSize='large'/></button>
          </div>
        </div>
        <hr />
        <div className="row">
            <div>
            <img className='imgg__poisk' src={Apple} alt="" href="https://www.apple.com/store"/>
            <img className='imgg__poisk' src={Play} alt="" href="https://play.google.com/store/games?hl=ru"/>
            </div>
          <p className="col-sm">
            {/* &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy */}
            © 2022 «book.kg»
          </p>
          <p className="col-sm">
          HBO ® and related service marks are the property of Home Box Office, Inc
          </p>
        </div>
      </div>
    </div>

  )
}

export default Footer