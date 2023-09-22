<script>
    import FaCameraRetro from 'svelte-icons/fa/FaCameraRetro.svelte';
    import FaLaptopCode from 'svelte-icons/fa/FaLaptopCode.svelte';
    import FaBookOpen from 'svelte-icons/fa/FaBookOpen.svelte';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
    
    function dispatchProject() {
        dispatch('message', {
            state: "project"
        });
    }

    function dispatchPortfolio() {
        dispatch('message', {
            state: "photo"
        });
    }

    function dispatchBlog() {
        dispatch('message', {
            state: "blog"
        });
    }
</script>

<div class="wrapper">
    <button class="icon-wrapper" on:click={dispatchProject} style="margin-right:15px;">
        <FaLaptopCode />
    </button>
    <button class="icon-wrapper" on:click={dispatchPortfolio}>
        <FaCameraRetro />
    </button>
    <button class="icon-wrapper" on:click={dispatchBlog} style="margin-left:15px;">
        <FaBookOpen />
    </button>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: row;
        width:70%;
        justify-content: center;
        align-items: center;
    }

    button {
        width: 10%;
        height: auto;
        text-decoration: none;
        color: #163852;
        padding: 0;
        margin:0;
        background: none;
        border: none;
    }

    .icon-wrapper {
        display: flex;
        justify-content: center;
        align-items:end;
    }

    .icon-wrapper:hover {
        cursor: pointer;
    }
</style>