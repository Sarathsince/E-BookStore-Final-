// // SlidePanel.js
// import React, { useState } from 'react';
// import { Drawer, List, ListItem, ListItemText } from '@mui/material';

// const SlidePanel = () => {
//   const [isSlidePanelOpen, setSlidePanelOpen] = useState(false);

//   const toggleSlidePanel = () => {
//     setSlidePanelOpen(!isSlidePanelOpen);
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <nav>
//         <div style={{ background: '#333', padding: '1rem', color: 'white' }}>
//           <span onClick={toggleSlidePanel} style={{ cursor: 'pointer' }}>
//             ☰ Open Slide Panel
//           </span>
//         </div>
//       </nav>

//       {/* Slide Panel */}
//       <Drawer anchor="left" open={isSlidePanelOpen} onClose={toggleSlidePanel}>
//         <List>
//           <ListItem button>
//             <ListItemText primary="Item 1" />
//           </ListItem>
//           <ListItem button>
//             <ListItemText primary="Item 2" />
//           </ListItem>
//           <ListItem button>
//             <ListItemText primary="Item 3" />
//           </ListItem>
//         </List>
//       </Drawer>
//     </div>
//   );
// };

// export default SlidePanel;
