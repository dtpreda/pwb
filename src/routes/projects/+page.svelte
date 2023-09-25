<script>
    import { projects } from "$lib/assets/projects.js";
    import PictureCarousel from "$lib/components/PictureCarousel.svelte";
    import { send, receive } from '$lib/assets/crossfade.js';
</script>

<div class="center center-items flex-column wrapper" in:receive={{key: 'div'}} out:send={{ key: 'div'}}>
    <PictureCarousel pictures={projects} />
</div>

<style>
    .wrapper {
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
    
    .flex-column {
        flex-direction: column;
    }
</style>