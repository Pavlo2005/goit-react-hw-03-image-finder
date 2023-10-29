import { ImegCard } from "components/ImegCard/ImegCard";
import { List, ListItem } from "./ImegeGallery.styled";

export const ImegeGallery = ({ imeges }) => {
    return (
        <List>
            {imeges.map(imeg => (
                <ListItem key={imeg.id}>
                    <ImegCard imeg={imeg}></ImegCard>
                </ListItem>
            ))}
        </List>
    );
};