<script>
	export let links;
</script>

<div class="wrapper">
    {#if links.length == 3}
        <a href={links[0]} target="_blank" style="margin-right:10px;">
            <slot name="first" class="icon" />
        </a>
        <a href={links[1]} target="_blank">
            <slot name="second" class="icon" />
        </a>
        <a href={links[2]} target="_blank" style="margin-left:10px;">
            <slot name="third" class="icon" />
        </a>
    {/if}
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
    }
</style>