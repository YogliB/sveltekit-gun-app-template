<script lang="ts">
	let clazz = '';

	export { clazz as class };
	export let style = '';
	export let icon: any;
	export let size: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' =
		'medium';

	$: iconData = (icon && icon.icon) || [0, 0, '', [], ''];
	$: sizeClasses = getSizeClasses(size);

	const getSizeClasses = (
		size: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
	) => {
		switch (size) {
			case 'small':
				return 'w-6 h-6';
			case 'medium':
				return 'w-8 h-8';
			case 'large':
				return 'w-12 h-12';
			case 'xlarge':
				return 'w-16 h-16';
			case 'xxlarge':
				return 'w-24 h-24';
			default:
				return 'w-8 h-8';
		}
	};
</script>

<i class={`flex justify-center items-center ${sizeClasses} ${clazz}`} {style}>
	<svg
		aria-hidden="true"
		role="img"
		viewBox={`0 0 ${iconData[0]} ${iconData[1]}`}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d={iconData[4].toString()} />
	</svg>
</i>
