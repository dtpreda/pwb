<script>
	import { onMount } from "svelte";

    export let text;

    /** @type {HTMLDivElement} */
    let wrapper;
    /** @type {HTMLParagraphElement} */
    let textElement;

    const resize = () => {
        wrapper.style.width = textElement.offsetWidth + "px";
    }

    onMount(() => {
        window.addEventListener('resize', resize);

        resize();

        return () => {
            window.removeEventListener('resize', resize);
        }
    })

</script>

<div bind:this={wrapper} class="wrapper">
    <p bind:this={textElement} class="text">{text}</p>
</div>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .text {
        writing-mode: vertical-lr;
        text-orientation: upright;
        font-size: 40px;
        font-family: 'Noto Serif JP', serif;
        font-weight: 200;
        letter-spacing: .3em;
        margin:0;
        color: #163852;
    }
</style>