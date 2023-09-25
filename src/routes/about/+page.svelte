<script>
    import { send, receive } from '$lib/assets/crossfade.js';
    import FaHome from 'svelte-icons/fa/FaHome.svelte';
    import about from '$lib/assets/pictures/abt.jpg';
	import { base } from '$app/paths';
</script>

<svelte:head>
    <title>David Preda - About</title> 
</svelte:head>

<div class="center-items flex-column central-wrapper wrapper" in:receive={{key: 'wrapper'}} out:send={{ key: 'wrapper'}}>
    <div class="image-wrapper" in:receive={{key: 'image'}} out:send={{ key: 'image'}}>
        <img src={about} alt="" class="image" />
    </div>
    <div class="info">
        <div class="quote-wrapper">
            <h4 class="quote noto">そんな世界を二人で 一生 いや、何章でも<br>生き抜いていこう</h4>
            <h4 class="quote-author noto">スパークル (ラッドウインプス)</h4>
        </div>
        <p class="description noto">Hey there! I am David Preda, a Portuguese/French student based in Porto, Portugal.<br>
            I see myself as a jovial person, always looking for the next goal to achieve.<br>
            On my free time, I enjoy spending time with my fiancée, practising sports (I'm currently fencing) and pursuing hobbies such as photography.<br>
            I aim to one day be free to just pursue those full-time.<br>
            Thanks for stopping by!</p>
    </div>
    <a href="{base}/" class="command-icon" id="pause">
        <FaHome />
    </a>
</div>

<style>
    .wrapper {
        position: absolute;
    }
    
    .center-items {
        align-items: center;
        justify-content: center;    
    }
    
    .flex-column {
        display: flex;
        flex-direction: column;
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
        margin-top: auto;
        margin-bottom: auto;
    }

    .image {
        width: 100%;
        aspect-ratio: 1 / 1 !important;
        object-fit: cover;
    }

    .image-wrapper {
        width: 100%;
        overflow: hidden;
        margin-top: auto;
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

    .info {
        display: flex;
        flex-direction: column;
        justify-content: start;
        width: 100%;
    }

    .info * {
        padding-left: 10px;
        padding-right: 10px;
        color: #163852;
    }

    .description {
        text-align: justify;
        font-size: 15px;
        margin: 0;
    }

    .noto {
        font-family: 'Noto Serif JP', serif;
        font-weight: 200;
    }

    h4 {
        margin-top: 5px;
        margin: 0;
        padding: 0 !important;
    }

    .quote-wrapper {
        display: flex;
        flex-direction: column;
        padding-top: 5px;
        padding-bottom: 5px;
    }

    .quote-author {
        align-self: flex-end;
    }

    .quote {
        font-style: italic;
    }
</style>
