import { quintOut } from "svelte/easing";
import { crossfade } from "svelte/transition";

const [send, receive] = crossfade({
    duration: 750,
    easing: quintOut
});

export { send, receive };