import { Card } from "./ImegCard.styled";

export const ImegCard = ({ imeg }) => {
    return (
        <Card>
            <img src={`${imeg.webformatURL}`} alt="" />
        </Card>
    );
};