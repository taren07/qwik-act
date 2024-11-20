import { component$ } from "@builder.io/qwik";
import { useLoader } from "~/routes/user/layout";
import { Hello } from "~/components/hello/hello";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
	const id = useLoader();
	const loc = useLocation();

	return (
		<>
			<Hello name={id.value} />
			<Hello name={loc.params.id} />
		</>
	);
});
