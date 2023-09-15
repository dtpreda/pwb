<script>
	import { onMount } from "svelte";

    export let src = "";
    export let labelText = "";
    /** @type {HTMLImageElement} */
    let image;
    /** @type {HTMLParagraphElement} */
    let label;
    /** @type {HTMLDivElement} */
    let labelWrapper;
    
    const resize = () => {
        labelWrapper.style.marginBottom = "-" + (labelWrapper.offsetHeight) + "px";
        labelWrapper.style.top = "-" + (labelWrapper.offsetHeight + (image.offsetHeight / 2 - labelWrapper.offsetHeight / 2)) + "px";
        labelWrapper.style.left = "-" + ((image.offsetWidth / 2) - (labelWrapper.offsetWidth / 2)) + "px";
    }

    onMount(() => {
        window.addEventListener('resize', resize);

        resize();

        return () => {
            window.removeEventListener('resize', resize);
        }
    }) 
    
</script>

<a href="/about" class="wrapper">
    <div class="portrait-wrapper">
        <img bind:this={image} src={src} alt="Portrait" class="portrait">
    </div>
    <div bind:this={labelWrapper} class="label-wrapper">
        <p bind:this={label} class="label">{labelText}</p>
        <div class="label-line">

        </div>
    </div>
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
        -ms-transform:scale(1.5);
        -moz-transform:scale(1.5);
        -webkit-transform:scale(1.5);
        -o-transform:scale(1.5);
    }

    .label-wrapper {
        position:relative;
        display: flex;
        flex-direction: row;
    }
    
    .label {
        margin: 0;
        writing-mode: vertical-lr;
        text-orientation: upright;
        color: #D4E2EF;
        font-size: 30px;
        font-family: 'Noto Serif JP', serif;
        padding: 0;
        padding-left: 5px;
        font-weight: bold;
    }

    .label-line {
        border-left: 2px solid #D4E2EF;
        margin-left: -8px;
    }
</style>