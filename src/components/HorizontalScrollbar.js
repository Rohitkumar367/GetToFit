import React, {useContext} from 'react'
import { Box, Typography } from '@mui/material'
import BodyPart from './BodyPart'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="left-arrow" />
      </Typography>
    );
};
  
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
    return (
        <Box width="100%" overflow="hidden">
            <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                {data.map((eachItem) => (
                    <Box
                        key={eachItem.id || eachItem}
                        itemId={eachItem.id || eachItem}
                        title={eachItem.id || eachItem}
                        m="0 40px"
                    >
                        <BodyPart item={eachItem} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                    </Box>
                ))}
            </ScrollMenu>
        </Box>
    );
};

export default HorizontalScrollbar
