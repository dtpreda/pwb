<script>
    import FaCameraRetro from 'svelte-icons/fa/FaCameraRetro.svelte';
    import FaLaptopCode from 'svelte-icons/fa/FaLaptopCode.svelte';
    import FaInfoCircle from 'svelte-icons/fa/FaInfoCircle.svelte'
    import { base } from '$app/paths';
</script>

<div class="wrapper">
    <a href="{base}/projects" class="icon-wrapper" style="margin-right:15px;">
        <FaLaptopCode />
    </a>
    <a href="{base}/about" class="icon-wrapper">
        <FaInfoCircle />
    </a>
    <a href="{base}/portfolio" class="icon-wrapper" style="margin-left:15px;">
        <FaCameraRetro />
    </a>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: row;
        width:70%;
        justify-content: center;
        align-items: center;
    }

    a {
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