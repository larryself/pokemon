import { Container, InputField } from "./style";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useAction } from "../../store";
import { useDebounce } from "../../hooks/useDebounce";

interface Props {
	placeholder: string;
	value?: string;
}

export const Input: FC<Props> = ({ placeholder, value }) => {
	const { setName } = useAction();
	const [inputValue, setInputValue] = useState<string>(value || "");
	const handleInput = (e: ChangeEvent) => {
		const value = (e.target as HTMLInputElement).value;
		debugger;
		setInputValue(value);
	};
	const debouncedSearchValue = useDebounce(inputValue, 600);

	useEffect(() => {
		if (debouncedSearchValue) {
			setName(debouncedSearchValue);
		} else {
			setName("");
		}
	}, [debouncedSearchValue, setName]);
	return (
		<Container>
			<InputField
				type="text"
				placeholder={placeholder}
				value={inputValue}
				onChange={handleInput}
			/>
		</Container>
	);
};
