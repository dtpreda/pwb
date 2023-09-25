<script>
	import TextPortrait from "$lib/components/TextPortrait.svelte";
    import Banner from "$lib/components/Banner.svelte";
    import Triplet from "$lib/components/Triplet.svelte";
    import ActionGroup from "$lib/components/ActionGroup.svelte";
    import portrait from '$lib/assets/IMG-5164.jpg'

    import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
    import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
    import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';

    import { send, receive } from '$lib/assets/crossfade.js';
    
    let links = ["https://www.linkedin.com/in/dtpreda/", "https://github.com/dtpreda", "https://www.instagram.com/dtpreda/"];
</script>

<div class="flex center-items" in:receive={{key: 'div'}} out:send={{ key: 'div'}}>
    <div class="banner-left">
        <Banner text="おはよう" />
    </div>
    <div class="flex center-items flex-column limited">
        <h1 class="first-name archivo royal">DAVID</h1>
        <div class="flex center-items center up-triplet">
            <ActionGroup />
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

<style>
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