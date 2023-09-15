<script>
	import { onMount } from "svelte";

    export let src = "";
    export let labelText = "";
    /** @type {HTMLImageElement} */
    let image;
    /** @type {HTMLParagraphElement} */
    let label;

    onMount(() => {
        label.style.marginBottom = "-" + (label.offsetHeight) + "px";
        label.style.top = "-" + (label.offsetHeight) + "px";
        label.style.left = "-" + ((image.offsetWidth / 2) - (label.offsetWidth / 2)) + "px";
    }) 
    
</script>

<a href="/about" class="wrapper">
    <div class="portrait-wrapper">
        <img bind:this={image} src={src} alt="Portrait" class="portrait">
    </div>
    <p bind:this={label} class="label">{labelText}</p>
</a>

<style>
    a {
        text-decoration: none;
    }

    .wrapper {
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .portrait-wrapper {
        display:inline-block;
        overflow: hidden;
        width: 80%; /* Allow the image to scale proportionally */
        max-width: 400px; /* Set an additional maximum width of 400px */
        margin: 0;
        padding: 0;
    }

    .portrait {
        width: 100%; /* Allow the image to scale proportionally */
        max-width: 400px; /* Set an additional maximum width of 400px */
        height: 100%;
        object-fit: cover;
        transform: scale(1.5);
    }

    .label {
        margin: 0;
        position:relative;
        writing-mode: vertical-lr;
        text-orientation: upright;
        color: #D4E2EF;
        font-size: 30px;
        font-family: 'Noto Serif JP', serif;
        padding: 0;
        padding-bottom: 5px;
    }
</style>