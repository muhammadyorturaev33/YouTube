import './HomePhotoPage3.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

import { Right } from '../Lib/rightt'
import { Left } from '../Lib/leftt'
import { Themes } from '../../Localization/Themes';
import { Context as ContextThemes } from '../../Context/Themes';

function HomePhotoPage3 () {

    const [photos, setPhotos] = React.useState([])
    const {theme} = React.useContext(ContextThemes)

    React.useEffect(() => {

        (async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos')
            const data = await response.json()
            const dataSlice = data.slice(9, 15)
    
            if (dataSlice?.length > 0) {
                setPhotos([...dataSlice])
            }
          } catch (err) {
            console.log(err)
            }
        })()
            
      },[])

    return (
        <>
          <div>
            <div>
              <div className='right_left_box'>
              <button className='right_left_box_btn'>
                Subscribe 2.3m
              </button>
                <Right color={Themes[theme].darkColors}/>
                <Left color={Themes[theme].darkColors}/>
              </div>
              <div className='photos_box'>
                {
                  photos.length > 0 &&
                  photos.map((photo) => (
                    <div key={photo.id}>
                      <ul>
                        <li className='user_list_item'>
                          <NavLink to={'/photo/' + photo.id}>
                            <img className='photo_list_item_img' src={photo.thumbnailUrl} alt={'online_image'} width={220} height={120}/>
                          </NavLink>
                        </li>
                        <li>
                          <h5 className={`${theme === 'light' ? 'user_list_item_title' : 'user_list_item_titlew'}`}>
                            Lorem, ipsum dolor.
                          </h5>
                          <div className='user_list_item_box'>
                            <p className='m-0 p-0 user_item_box_text'>
                              240k views  ·  4 months
                            </p>
                            <p className='m-0 p-0 user_item_box_text'>
                              Food & Drink
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </>
    )
}
export { HomePhotoPage3 }