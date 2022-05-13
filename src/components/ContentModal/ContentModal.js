// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import './ContentModal.css';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: "90%",
//   bgcolor: '#39445a',
//   // border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function ContentModal({children, media_type, id}) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const fetchInfo = async () => {
//     const {data} = await axios.get(
//       `https://api.themoviedb.org/3/${media_type}/${id}?api_key=e002f08f46e0049891b3812857957fab&language=en-US`
//     )
//   }










//   return (
//     <div>
//       <Button onClick={handleOpen} className='media'> {children} </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }
































import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './ContentModal.css';
import axios from 'axios';
import { img_500, unavailable, unavailableLandscape } from '../../config/config';







const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  bgcolor: '#39445a',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};






export default function ContentModal({children, media_type, id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [contents, set_contents] = React.useState();
  const [loading, set_loading] = React.useState(false);
  const [loading2, set_loading2] = React.useState(false);
  const [trailer, set_trailer] = React.useState('')


console.log(id)
  const fetchInfo = async () => {
    // set_loading(true)
    // const {data} = await axios.get(
    //   `https://api.themoviedb.org/3/movie/3?api_key=e002f08f46e0049891b3812857957fab&language=en-US`);

    // set_loading(false);
    // set_contents(data);
    // console.log(data)


  }


  // const fetchTrailer = async () => {
    // set_loading2(true)
    // const {data} = await axios.get(
    //   `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=e002f08f46e0049891b3812857957fab&language=en-US`);


    // console.log(data.results[0]?.key)
    // set_loading2(false);
    // set_contents(data.results[0]?.key);
  // }

  React.useEffect(() => {
    fetchInfo();

    // fetchTrailer()
  }, [])

  
















  return (
    <div>
      <Button onClick={handleOpen} className='media'> {children} </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {
          contents &&
          <div className="content_modal">
            <img src={contents.poster_path ? `${img_500}/${contents.poster_path}`: unavailable} />

          </div>



          }
        </Box>
      </Modal>
    </div>
  );
}