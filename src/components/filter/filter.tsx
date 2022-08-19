import { Container, Inner, Burger, Blur, Line, Button } from "./style";
import { InputRange, InputCheckbox, Close, Input } from "components";
import React, { useState } from "react";
import { useAction, usePokemonSelector } from "store";
export const Filter = () => {
	const { setAttack, setExp } = useAction();
	const { filter } = usePokemonSelector();
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleAttackRange = (type: string, from: number, to: number) => {
		if (type === "Attack") {
			setAttack([from, to]);
		}
		if (type === "Experience") {
			setExp([from, to]);
		}
	};
	return (
		<>
			<Container>
				<Input placeholder={"Encounter to pokemon..."} value={filter.name} />
				<Burger
					isOpen={isOpen}
					onClick={() => setIsOpen((prevState) => !prevState)}
				>
					Filter
				</Burger>
				<Inner isOpen={isOpen}>
					<Button type={"button"} onClick={() => setIsOpen(false)}>
						<Close />
					</Button>
					<InputCheckbox title={"Type"} />
					<Line />
					<InputRange
						title={"Attack"}
						onSubmit={handleAttackRange}
						value={filter.attack}
					/>
					<Line />
					<InputRange
						title={"Experience"}
						onSubmit={handleAttackRange}
						value={filter.exp}
					/>
				</Inner>
			</Container>
			<Blur isOpen={isOpen} onClick={() => setIsOpen(false)} />
		</>
	);
};
