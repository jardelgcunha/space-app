import styled from 'styled-components';
import tags from './tags.json';

const TagContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    margin-top: 50px;
    margin-bottom: 10px;
`;

const TagTitulo = styled.h3`
    color: #d9d9d9;
    font-size: 24px;
    font-weight: 400;
    margin: 0;
    margin-right: 30px;
`;

const BotaoEstilizado = styled.button`
    font-size: 24px;
    color: #ffffff;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    border: 2px solid transparent;
    &:hover {
        border-color: #c98cf1;
    }
`;

const Tags = () => {
    return (
        <TagContainer>
            <TagTitulo>Busque por tags:</TagTitulo>
            {tags.map((tag) => (
                <BotaoEstilizado key={tag.id}>{tag.titulo}</BotaoEstilizado>
            ))}
        </TagContainer>
    );
};

export default Tags;
