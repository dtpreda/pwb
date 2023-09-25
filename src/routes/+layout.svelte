<div class="center center-items" id="super-wrapper">
    <slot />
</div>

<svelte:head>
    <title>David Preda</title> 
</svelte:head>


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
</style>