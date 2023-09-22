<script>
    import { pictures } from "$lib/assets/pictures.js";
	import { onMount } from "svelte";
    import FaChevronLeft from 'svelte-icons/fa/FaChevronLeft.svelte';
    import FaChevronRight from 'svelte-icons/fa/FaChevronRight.svelte';

    /** @type {HTMLDivElement} */
    let imageContainer;

    let currentIndex = 0;

    let images;

    onMount (() => {
        images = Array.prototype.slice.call(imageContainer.children);
        while (imageContainer.firstChild) {
            imageContainer.removeChild(imageContainer.firstChild);
        }

        console.log(images)

        imageContainer.appendChild(images[0]);
    });
</script>

<div class="center center-items flex-column wrapper">
    <div class="flex center-items flex-column central-wrapper">
        <div bind:this={imageContainer} class="image-container">
            {#each pictures as picture}
                <div class="image-info-bundle">
                    <div class="image-wrapper">
                        <img src={"/src/lib/assets/pictures/" + picture.src} alt="" class={"image " + picture.orientation} />
                    </div>
                    <p class="authorship noto">© {picture.author} {picture.year}, All Rights Reserved.</p>
                    <div class="info">
                        <h1 class="title noto">{picture.name}</h1>
                        {#if picture.location_url != ""}
                        <a href={picture.location_url} target="_blank"><h4 class="location-text noto">@{picture.location}</h4></a>
                        {:else}
                        <h4 class="location-text noto">@{picture.location}</h4>
                        {/if}
                        <p class="description noto">{picture.description}</p>
                    </div>
                </div>
            {/each}
        </div>
        <div class="command-wrapper" id="previous">
            <div class="command-icon">
                <FaChevronLeft />
            </div>
            <div class="command-icon" id="next">
                <FaChevronRight />
            </div>
        </div>
    </div>
</div>

<style>
    .wrapper {
        width: 100%;
        height: 100%;
    }

    .image-container {
        display: flex;
        flex-direction: row;
        overflow: hidden;
        position:relative;
    }

    .image-info-bundle {
        min-width: 100%;
        position: relative;
    }

    .central-wrapper * {
        margin: 0;
    }

    #next {
        margin-left: 1em;
    }

    #previous {
        margin-right: 1em;
    }

    .command-wrapper {
        display: flex;
        flex-direction: row;
        width: 70%;
        justify-content: center;
        align-items: center;
        margin-top: auto !important;
    }

    .command-icon {
        width: 2em;
        font-weight: 100;
        font-size: 10px;
    }
    
    .image {
        width: 100%;
        aspect-ratio: 1 / 1 !important;
        object-fit: cover;
    }

    .info {
        display: flex;
        flex-direction: column;
        justify-content: start;
    }

    .info *, .authorship {
        padding-left: 10px;
        padding-right: 10px;
    }

    .description {
        text-align: justify;
    }

    .authorship {
        font-size: 10px;
        text-align: center;
    }

    .noto {
        font-family: 'Noto Serif JP', serif;
        font-weight: 200;
    }

    .location-text {
        margin-top: -5px;
    }

    .image-wrapper {
        width: 100%;
        overflow: hidden;
    }

    .central-wrapper {
        width: 80%;
        max-width: 400px;
        margin-top: 5em;
        margin-bottom: 5em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    .center {
        display:flex;
        margin-left: auto;
        margin-right: auto;
    }
    
    .center-items {
        align-items: center;    
    }

    .flex {
        display: flex;
    }
    
    .flex-column {
        flex-direction: column;
    }

</style>