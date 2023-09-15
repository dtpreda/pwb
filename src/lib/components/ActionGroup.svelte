<script>
    import FaCameraRetro from 'svelte-icons/fa/FaCameraRetro.svelte'
    import FaLaptopCode from 'svelte-icons/fa/FaLaptopCode.svelte'
    import FaBookOpen from 'svelte-icons/fa/FaBookOpen.svelte'
</script>

<div class="wrapper">
    <div class="icon-wrapper" style="margin-right:15px;">
        <FaLaptopCode />
    </div>
    <div class="icon-wrapper">
        <FaCameraRetro />
    </div>
    <div class="icon-wrapper" style="margin-left:15px;">
        <FaBookOpen />
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: row;
        width:70%;
        justify-content: center;
        align-items: center;
    }

    div {
        width: 10%;
        height: auto;
        text-decoration: none;
        color: #163852;
    }

    .icon-wrapper {
        display: flex;
        justify-content: center;
        align-items:end;
    }
</style>