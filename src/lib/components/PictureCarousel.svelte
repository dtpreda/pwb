<script>
    export let pictures;
    import FaChevronLeft from 'svelte-icons/fa/FaChevronLeft.svelte';
    import FaChevronRight from 'svelte-icons/fa/FaChevronRight.svelte';
    import FaHome from 'svelte-icons/fa/FaHome.svelte';
    import Carousel from 'svelte-carousel';
    import { base } from "$app/paths";

    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

    let carousel;
    function goToPrevPage() {
        carousel.goToPrev({ animated: true })
    }
    function goToNextPage() {
        carousel.goToNext({ animated: true })
    }

    function getImageUrl(name) {
        return new URL("/src/lib/assets/pictures/" + name, import.meta.url).href
    }
</script>

<div class="flex center-items flex-column central-wrapper">
    <Carousel class="image-container" arrows={false} dots={false} bind:this={carousel}>
        {#each pictures as picture}
            <div class="image-info-bundle">
                <div class="image-wrapper">
                    <img src={getImageUrl(picture.src)} alt="" class="image" />
                </div>
                {#if picture.author != ""}
                    <p class="authorship noto">© {picture.author} {picture.year}, All Rights Reserved.</p>
                {/if}
                <div class="info">
                    <h1 class="title noto">{picture.name}</h1>
                    {#if picture.location_url != ""}
                    <a href={picture.location_url} target="_blank"><h4 class="location-text noto">{picture.location}</h4></a>
                    {:else}
                    <h4 class="location-text noto">{picture.location}</h4>
                    {/if}
                    <p class="description noto">{picture.description}</p>
                </div>
            </div>
        {/each}
    </Carousel>
    <div class="command-wrapper">
        <button class="command-icon" id="previous" on:click={goToPrevPage}>
            <FaChevronLeft />
        </button>
        <a href="{base}/" class="command-icon" id="home">
            <FaHome />
        </a>
        <button class="command-icon" id="next" on:click={goToNextPage}>
            <FaChevronRight />
        </button>
    </div>
</div>

<style>
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
        background: none;
        margin: 0;
        padding: 0;
        border: none;
        color: #163852;
    }

    .command-icon:hover {
        cursor:pointer;
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
        color: #163852;
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

    .title {
        line-height: 1.2;
    }

    .location-text {
        margin-top: 5px;
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
    
    .center-items {
        align-items: center;    
    }

    .flex {
        display: flex;
    }
    
    .flex-column {
        flex-direction: column;
    }

    a {
        padding: 0 !important;
    }

</style>