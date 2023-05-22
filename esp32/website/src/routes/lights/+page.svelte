<script lang="ts">
	import ColorPicker from 'svelte-awesome-color-picker';
	let hex: string;
</script>

<h1>Colour Picker</h1>

<div class="background"><div style="background: {hex}" /></div>

<div class="picker">
	<div>
		<ColorPicker
			bind:hex
			isOpen={true}
			isAlpha={false}
			isInput={false}
			isTextInput={false}
			components={{
				pickerWrapper: undefined
			}}
		/>
	</div>
</div>

<div class="pattern">
	<!-- TODO -->
</div>

<style lang="scss">
	.background {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background: white;
		z-index: -1;

		div {
			width: 100%;
			height: 100%;
			opacity: 0.3;
		}
	}

	.picker {
		margin-top: 200px;
		display: flex;
		justify-content: center;
	}
</style>
