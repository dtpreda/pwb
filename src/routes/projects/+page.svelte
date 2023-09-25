<script>
    import PictureCarousel from "$lib/components/PictureCarousel.svelte";
    import { send, receive } from '$lib/assets/crossfade.js';
    import image1 from '$lib/assets/pictures/pred.jpg';
    import image2 from '$lib/assets/pictures/dyn.jpg';
    import image3 from '$lib/assets/pictures/ind.jpg';
    import image4 from '$lib/assets/pictures/mon.jpg';
    import image5 from '$lib/assets/pictures/llm.jpg';
    import image6 from '$lib/assets/pictures/cat.jpg';
    import image7 from '$lib/assets/pictures/clr.jpg';
    import image8 from '$lib/assets/pictures/sdl.jpg';


    export const projects = [
    {
        src: image1,
        name: "prediCtive",
        location: "Project repository",
        location_url: "https://github.com/dtpreda/prediCtive",
        description: "A generic purpose C++ parser generator, inspired by JavaCC. I wrote this to complement my Compilers course, as we didn't get to write this step of the compiler ourselves.",
        author: "",
        year: "2022"
    },
    {
        src: image2,
        name: "CPD-Dynamo",
        location: "Project repository",
        location_url: "https://github.com/dtpreda/feup-cpd-dynamo",
        description: "A distributed key-value store for a large cluster of computers, written in Java. This was a project for my Distributed Systems course, where we had to implement fault tolerance, replication, consistent hashing and leader election.",
        author: "",
        year: "2022"
    },
    {
        src: image3,
        name: "initial-d",
        location: "Project repository",
        location_url: "https://github.com/dtpreda/initial-d",
        description: "An exploration on how to make self-driving cars drift using Python, TensorFlow and Gymnasium. We discretized a continuous action space and modified reward policies to achieve half-track completion while drifting.",
        author: "",
        year: "2023"
    },
    {
        src: image4,
        name: "asmatic-monopoly",
        location: "Project repository",
        location_url: "https://github.com/dtpreda/asmatic-monopoly",
        description: "A peer to peer agent-based version of the Monopoly board game, written in Java using the JADE framework. Put different strategies to the test and see which one is the best!",
        author: "",
        year: "2023"
    },
    {
        src: image5,
        name: "LLMusic",
        location: "Project repository",
        location_url: "https://github.com/dtpreda/llmusic",
        description: "A LLM-powered playlist generator for Spotify, written in JavaScript. I was into recommender systems at the time, so I decided to create this generator, which just simply takes a mood or vibe as input and outputs a playlist.",
        author: "",
        year: "2023"
    },
    {
        src: image6,
        name: "The Ark Manager",
        location: "Project page",
        location_url: "https://dei.fe.up.pt/lgp/cs02/",
        description: "An animal shelter management software platform, built using the Remix framework (Node.js + PostgreSQL). This was a group project for my Project Management Lab course, where we had the chance to work with a real client and deliver a working product.",
        author: "",
        year: "2023"
    },
    {
        src: image7,
        name: "A 1st grader could never",
        location: "Project repository",
        location_url: "https://github.com/dtpreda/1st-grader-could-never",
        description: "A project for my Computer Vision course, where we explored Self-Supervised Learning through the usage of Colorization as a pretext task for CIFAR-10 classification.",
        author: "",
        year: "2023"
    },
    {
        src: image8,
        name: "SDLE-Pub-Sub",
        location: "Project repository",
        location_url: "https://github.com/dtpreda/feup-sdle-pubsub",
        description: "A distributed pub-sub system, written in Rust. This was a project for my Large Scale Distributed Systems course, where we had to achieve exactly once delivery guarantees for message publication and retrieval.",
        author: "",
        year: "2022"
    }
]
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