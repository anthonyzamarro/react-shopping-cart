import style from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = style.div`
    margin: 40px;
`;

export const StyledButton = style(IconButton)`
    position: fixed;
    z-index: 100;
    right: 20px;
    top: 20px;
`;