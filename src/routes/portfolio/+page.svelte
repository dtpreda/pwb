<script>
    import PictureCarousel from "$lib/components/PictureCarousel.svelte";
    import { send, receive } from '$lib/assets/crossfade.js';
    import image1 from "$lib/assets/pictures/IMG_6281.jpg";
    import image2 from "$lib/assets/pictures/IMG-5841.jpg";

    const pictures = [
        {
            src: image1,
            orientation: "vertical",
            name: "Portrait @清水寺",
            location: "清水寺",
            location_url: "",
            description: "A happy memory at my favourite temple. Wearing a kimono was great, but it really was a challenge for my back at first.",
            author: "Mafalda Vieira",
            year: "2023"
        },
        {
            src: image2,
            orientation: "vertical",
            name: "Kyoto Sailor Moon",
            location: "京都駅",
            location_url: "",
            description: "An amazing night out at Kyoto Station, which features a fun light tunnel.",
            author: "Mafalda Vieira",
            year: "2023"
        }
    ]
</script>

<div class="center center-items flex-column wrapper" in:receive={{key: 'wrapper'}} out:send={{ key: 'wrapper'}}>
    <PictureCarousel {pictures} />
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
