import { component$ } from "@builder.io/qwik";
export type HelloProps = {
	name?: string;
};
export const Hello = component$<HelloProps>((props) => {
	return props.name ? <p>Hello, {props.name}!</p> : <p>Hello!</p>;
});
