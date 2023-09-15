<script>
	import TextPortrait from "$lib/components/TextPortrait.svelte";
    import Banner from "$lib/components/Banner.svelte";
    import Triplet from "$lib/components/Triplet.svelte";
    import portrait from '$lib/assets/IMG-5164.jpg'

    import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte'
    import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte'
    import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte'
    import FaCameraRetro from 'svelte-icons/fa/FaCameraRetro.svelte'
    import FaLaptopCode from 'svelte-icons/fa/FaLaptopCode.svelte'
    import FaBookOpen from 'svelte-icons/fa/FaBookOpen.svelte'

    let links = ["https://www.linkedin.com/in/dtpreda/", "https://github.com/dtpreda", "https://www.instagram.com/dtpreda/"];
</script>


<div class="center center-items">
    <div class="banner-left">
        <Banner text="おはよう" />
    </div>
    <div class="flex center-items flex-column limited">
        <h1 class="first-name archivo royal">DAVID</h1>
        <TextPortrait src={portrait} labelText="About"/>
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
        margin-bottom: 100px;
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

    .down-triplet {
        margin-top: 50px;
    }
</style>