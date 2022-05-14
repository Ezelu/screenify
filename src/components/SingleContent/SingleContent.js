// import React from 'react';
// import './SingleContent.css'
// import { img_300, unavailable } from '../../config/config'
// import { Badge } from '@material-ui/core'


// export default function SingleContent(props) {

//   const {id, poster, title, date, media_type, vote_average} = props;




//   return (
//     <div className='media'>
//         <Badge badgeContent={vote_average} 
//         color={vote_average > 6 ? 'primary' : 'secondary' }/>
        
//         <img src={ poster ? `${img_300}${poster}` : unavailable } alt={title} className='poster'/>
//         <b className='title'> {title} </b>
//         <span className='subtitle'>
//         <span className='type'> {media_type === 'movie' ? 'Movie' : 'TV Series'} </span>
//         <span className='date'> {date} </span>
//       </span>

//     </div>
//   )
// }





































import React from 'react';
import './SingleContent.css'
import { img_300, unavailable } from '../../config/config'
import { Badge } from '@material-ui/core'
import ContentModal from '../ContentModal/ContentModal';
import { Add } from '@mui/icons-material';


export default function SingleContent(props) {

  const {id, poster, title, date, media_type, vote_average} = props;

  console.log(id)
  return (
    <div className='media' media_type={media_type} id={id}>
        <Badge badgeContent={vote_average} 
        color={vote_average > 6 ? 'primary' : 'secondary' }/>
        
        <img src={ poster ? `${img_300}${poster}` : unavailable } alt={title} className='poster'/>
        <b className='title'> {title} </b>
        <span className='subtitle'>
        <span className='type'> {media_type === 'movie' ? 'Movie' : 'TV Series'} </span>
        <span className='date'> {date} </span>
      </span>


      <ContentModal>
        <Add className="button" style={{
          background: 'orange',
          position: 'absolute',
          bottom: 5,
          left: 5,
          borderRadius: '100%'
        }}> More... </Add>
      </ContentModal>
    </div>
  )
}
