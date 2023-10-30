import {
    Card,
    Container,
    Imeg,
    ImegContainer
} from "./ImegCard.styled";
import Modal from 'react-modal';
import { Component } from 'react';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export class ImegCard extends Component {
    state = {
        isModalOpen: false,
    };

    openModal = () => {
        this.setState({ isModalOpen: true });
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        const { isModalOpen } = this.state;
        const { imeg } = this.props;

        return (
            <Container>
                <Card onClick={this.openModal}>
                    <Imeg src={`${imeg.webformatURL}`} alt="" />
                </Card>

                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <ImegContainer>
                        <Imeg src={`${imeg.largeImageURL}`} alt="" />
                    </ImegContainer>
                    <button onClick={this.closeModal}>close</button>
                </Modal>
            </Container>
        );
    }
}

// export const ImegCard = ({ imeg }) => {
//     return (
//         <Card>
//             <img src={`${imeg.webformatURL}`} alt="" />
//         </Card>
//     );
// };