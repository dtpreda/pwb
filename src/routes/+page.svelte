<script>
	import TextPortrait from "$lib/components/TextPortrait.svelte";
    import portrait from '$lib/assets/IMG_6281.jpg'
</script>


<div class="center">
    <h1 class="first-name archivo royal">DAVID</h1>
    <TextPortrait src={portrait} labelText="About"/>
    <h1 class="last-name archivo royal">PREDA</h1>
</div>

<style>
    .center {
        display:flex;
        height: 100%;
        margin-left: auto;
        align-items: center;
        justify-content: center;
        flex-direction: column;
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
</style>