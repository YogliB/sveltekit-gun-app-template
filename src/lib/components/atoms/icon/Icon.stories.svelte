<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Icon from './Icon.svelte';

	import { faCoffee } from '@fortawesome/free-solid-svg-icons';
</script>

<!-- 👇 Creates specific parameters for the story -->
<Meta
	title="Components/Atoms/Icon"
	component={Icon}
	argTypes={{
		size: { options: ['small', 'medium', 'large', 'xlarge', 'xxlarge'] },
		icon: { control: { type: 'object' } },
	}}
/>

<Template let:args>
	<Icon {...args} />
</Template>

<Story
	name="Variant"
	args={{
		size: 'medium',
		icon: faCoffee,
	}}
/>
