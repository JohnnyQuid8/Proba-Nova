import { Form, Input, Select, Modal, Button } from "antd";
import { Character, FavoritesContext } from "../../AppMain";
import React from "react";

type Props = {
  children?: React.ReactNode;
  character: Character;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isModalVisible: boolean;
};

const EditCharacter = ({
  character,
  isModalVisible,
  setIsModalVisible,
}: Props) => {
  const [characterToEdit, setCharacterToEdit] = React.useState(character);
  const favoritesContext = React.useContext(FavoritesContext);
  console.log(characterToEdit)
  return (
    <Modal
      open={isModalVisible}
      onOk={() => setIsModalVisible(false)}
      onCancel={() => setIsModalVisible(false)}
    >
      <Form onFinish={() => favoritesContext.updateCharacter(characterToEdit)}>
        <Input
          name="Name"
          onChange={(event) =>
            setCharacterToEdit({ ...characterToEdit, name: event.target.value })
          }
          value={characterToEdit!.name}
        ></Input>
        <Input
          onChange={(event) =>
            setCharacterToEdit({
              ...characterToEdit,
              species: event.target.value,
            })
          }
          value={characterToEdit!.species}
        ></Input>
        <Select
          defaultValue={character.status}
          style={{ width: 120 }}
          onChange={(value) =>
            setCharacterToEdit({ ...characterToEdit, status: value })
          }
          options={[
            { value: "dead", label: "dead" },
            { value: "alive", label: "alive" },
          ]}
        />
        <Select
          defaultValue={character.gender}
          style={{ width: 120 }}
          onChange={(value) =>
            setCharacterToEdit({ ...characterToEdit, gender: value })
          }
          options={[
            { value: "male", label: "male" },
            { value: "female", label: "female" },
          ]}
        />
        <Button htmlType="submit">CHANGE</Button>
      </Form>
    </Modal>
  );
};
export default EditCharacter;
