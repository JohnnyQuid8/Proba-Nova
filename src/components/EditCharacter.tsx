import {Form, Input, Select} from "antd"

const EditCharacter = () => {
    return(
        <Form>
            <Input>Name</Input>
            <Input>Species</Input>
            <Select>Status</Select>
            <Select>Gender</Select>

        </Form>
    )
}
export default EditCharacter