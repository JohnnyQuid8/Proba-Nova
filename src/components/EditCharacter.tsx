import {Form, Input, Select, Modal} from "antd"
import { Character } from "../pages/CharacterListPage"


type Props = {
    children?: React.ReactNode,
    character: Character,
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    isModalVisible: boolean,
}

const EditCharacter = ({ character, isModalVisible, setIsModalVisible }: Props) => {
    return(
        <Form>
            <Modal
             open={isModalVisible}
            >
            <Input value={character!.name}></Input>
            <Input value={character!.name}></Input>
            <Select>{character!.status}</Select>
            <Select>{character!.gender}</Select>
            </Modal>
        </Form>
    )
}
export default EditCharacter