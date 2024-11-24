import { component$ } from "@builder.io/qwik";
import { Hello } from "~/components/hello/hello";

export default component$(() => {
	return (
		<div>
			<Hello />
			<p>You tried a route that doesn't exist.</p>
		</div>
	);
});
