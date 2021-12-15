import style from 'styled-components';

export const Wrapper = style.div`
    display: flex;
    justify-content: space-between;
    font-family: Arial;
    border-bottom: 1px solid lightblue;
    padding-bottom: 20px;

    div {
        flex: 1;
    }

    .information,
    .buttons {
        display: flex;
        justify-content: space-between;
    }

    img {
        max-width: 80px;
        margin-left: 40px;
        object-fit: cover;
    }
`;