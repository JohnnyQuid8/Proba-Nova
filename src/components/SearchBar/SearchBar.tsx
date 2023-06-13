import { Button } from "antd";
import React from "react";
import { Character } from "../../AppMain";
import { DebounceInput } from "react-debounce-input";
import "../../styles/main.scss";
import "./_searchBar.scss"

const HEADER_BUTTON_CONFIG = [
  { categoryName: "name", categoryLabel: "NAME" },
  { categoryName: "species", categoryLabel: "SPECIES" },
  { categoryName: "status", categoryLabel: "STATUS" },
  { categoryName: "gender", categoryLabel: "GENDER" },
];

type Props = {
  characters: Character[];
  setFilteredCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
};

const SearchBar = ({ characters, setFilteredCharacters }: Props) => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [category, setCategory] = React.useState<keyof Character>("name");

  return (
    <div className="categories">
      <div className="categories__buttons">
        {HEADER_BUTTON_CONFIG.map((btnConfig) => (
          <Button
            onClick={() =>
              setCategory(btnConfig.categoryLabel as keyof Character)
            }
          >
            {btnConfig.categoryName}
          </Button>
        ))}
      </div>
      <DebounceInput
        className="search-bar"
        debounceTimeout={1000}
        minLength={0}
        value={searchTerm}
        placeholder="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value.toLowerCase());
          setFilteredCharacters(
            characters.filter((item) => {
              switch (category) {
                case "name":
                case "gender":
                case "species":
                case "status": {
                  return item[category]
                    .toLowerCase()
                    .trim()
                    .includes(searchTerm.toLowerCase().trim());
                }
                default:
                  return false;
              }
            })
          );
        }}
      ></DebounceInput>
    </div>
  );
};
export default SearchBar;
