<script>
	import TextPortrait from "$lib/components/TextPortrait.svelte";
    import Banner from "$lib/components/Banner.svelte";
    import Triplet from "$lib/components/Triplet.svelte";
    import ActionGroup from "$lib/components/ActionGroup.svelte";
    import portrait from '$lib/assets/IMG-5164.jpg'

    import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
    import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
    import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';
    
    import { pictures } from "$lib/assets/pictures.js";
    import { projects } from "$lib/assets/projects.js";
    import PictureCarousel from "$lib/components/PictureCarousel.svelte";
	import { onMount } from "svelte";
	import { fade, fly, scale, slide } from "svelte/transition";
	import { quintOut } from "svelte/easing";
    
    let state = "main";
    let links = ["https://www.linkedin.com/in/dtpreda/", "https://github.com/dtpreda", "https://www.instagram.com/dtpreda/"];

    function handleMessage(event) {
		state = event.detail.state;
	}
</script>

<div class="center center-items">
    {#if state == "main"}
        <div class="flex center-items" in:fade out:fly={{duration: 1000, easing: quintOut, y:'-5%'}}>
            <div class="banner-left">
                <Banner text="おはよう" />
            </div>
            <div class="flex center-items flex-column limited">
                <h1 class="first-name archivo royal">DAVID</h1>
                <div class="flex center-items center up-triplet">
                    <ActionGroup on:message={handleMessage}/>
                </div>
                <TextPortrait src={portrait} labelText=""/>
                <div class="flex center-items center down-triplet">
                    <Triplet {links}>
                        <FaLinkedin slot="first" />
                        <FaGithubSquare slot="second" />
                        <FaInstagram slot="third" />
                    </Triplet>
                </div>
                <h1 class="last-name archivo royal">PREDA</h1>
            </div>
            <div class="banner-right">
                <Banner text="ございます" />
            </div>
        </div>
    {:else if state == "project"}
        <div class="center center-items flex-column wrapper" in:fade out:fly={{duration: 1000, easing: quintOut, y:'5%'}}>
            <PictureCarousel pictures={projects} on:message={handleMessage}/>
        </div>
    {:else if state == "about"}    
        <p>This is an about page</p>
    {:else if state == "photo"}
    <div class="center center-items flex-column wrapper" in:fade out:fly={{duration: 1000, easing: quintOut, y:'5%'}}>
        <PictureCarousel {pictures} on:message={handleMessage}/>
    </div>
    {/if}
</div>

<style>
    .wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .center {
        display:flex;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    
    .center-items {
        align-items: center;
        justify-content: center;    
    }

    .flex {
        display: flex;
    }
    
    .flex-column {
        flex-direction: column;
    }

    .limited {
        max-width: 400px;
    }

    .first-name, .last-name {
        margin: 0;
    }

    .first-name {
        margin-bottom: 50px;
    }
    
    .last-name {
        margin-top: 50px;
    }

    .archivo {
        font-family: 'Big Shoulders Display', cursive;
        font-size: 3em;
        font-weight: 600;
        letter-spacing: .1em;
    }

    .royal {
        color: #163852;
    }

    .banner-left {
        margin-right: 20px;
    }

    .banner-right {
        margin-left: 20px;
    }

    .up-triplet {
        margin-bottom: 50px;
    }

    .down-triplet {
        margin-top: 50px;
    }
</style>