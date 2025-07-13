<script setup>
// onMounted(() => {
//     const { $LocomotiveScroll } = useNuxtApp()
//     const scroll = new $LocomotiveScroll({
//         el: document.querySelector('[data-scroll-container]'),
//         smooth: true,
//     })
//     console.log(scroll)
// })

const containerRef = ref(null)
const slides = ref([{
    image: 'https://i.pinimg.com/736x/fc/6a/f2/fc6af2b553c1ded7f5aabf236e3ed031.jpg',
    name: 'Andy Bernard',
    quote: 'There are two things <br>I am passionate about: <br> recycling and revenge.'
}, {
    image: 'https://i.pinimg.com/736x/ec/9e/b2/ec9eb235827c9f7b595d547f898e622a.jpg',
    name: 'Ryan Howard',
    quote: 'I hooked up with <br/> her on February 13th.'
}, {
    image: 'https://i.pinimg.com/736x/81/1f/a2/811fa2db0280a7191ca8cb9d62a37b5c.jpg',
    // https://i.pinimg.com/originals/9d/46/18/9d4618c35d4ec359c48e7af124792ce7.gif
    name: 'Dwight Schrute',
    quote: 'And I did not become <br/> a Lackawanna County volunteer <br/> sheriff’s deputy to make friends.'
}, {
    image: 'https://i.pinimg.com/736x/19/c8/49/19c84919e4ba4bbebff27e287f5a5e7d.jpg',
    name: 'Michael Scott',
    quote: 'No, I’m not going to tell them <br/> about the downsizing. <br/> If a patient has cancer, <br/> you don’t tell them.'
}, {
    image: 'https://i.pinimg.com/736x/fa/c1/f1/fac1f171a624171df0790bd6b2db18c7.jpg',
    // https://i.pinimg.com/736x/68/07/20/680720432c3be1442b9247f2e8e46986.jpg
    // https://i.pinimg.com/736x/ac/6d/20/ac6d2041602b08ee036c8ac702acead5.jpg
    name: 'Jim & Pam',
    quote: 'That`s weird to have sex in the office. That`s where you work, right?  '
}, {
    image: 'https://i.pinimg.com/736x/45/8b/dc/458bdcc1a2d167094e7d9bf3111f0cc6.jpg',
    name: 'Kevin Malone',
    quote: 'Sometimes i feel like everyone <br/> i work with is an idiot. <br/> And by sometimes i mean all times.'
}]);
const swiper = useSwiper(containerRef, {
    effect: 'cards',
    loop: true,
    autoplay: {
        delay: 1000,
    },
    slidesPerView: 3
})



</script>


<template>
    <div data-scroll-container class="bg-tertiary-600 ">
        <div data-scroll-section>
            <HeaderComp />
            <HeroSection />
        </div>
        <div data-scroll-section class="h-[130vh] py-96">
            <SlideFirst />
        </div>
        <div data-scroll-section data-scroll-orientation="horizontal" class="" data-scroll data-scroll-speed="0.6">
            <h1 class="font-display text-7xl text-center mb-20">Here's our team:</h1>
            <div class="w-[1400px] mx-auto grid grid-cols-3 gap-10">
                <div class="flex flex-col bg-tertiary-400/40  rounded-xl pb-10 " v-for="character, index in slides"
                    :key="index">
                    <img :src="character.image" class="object-cover object-top  rounded-t-xl h-[300px]"
                        alt="character-photo" loading="lazy">
                    <h4 class="text-5xl text-center font-semibold font-display my-8 " v-html="character.name">
                    </h4>
                    <q class="text-2xl text-center font-display" v-html="character.quote"></q>
                </div>
            </div>
        </div>
        <div class="h-[100vh] mt-40" data-scroll-section>
            <video width="1000" height="500" controls class="mb-2  mx-auto rounded-4xl" autoplay="true" preload="none">
                <source src="/video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <h1 class="text-end text-xl w-[1000px] mx-auto">Watch more on <NuxtLink to="https://officeserial.ru"
                    class="font-bold">OfficeSerial
                </NuxtLink>
            </h1>
        </div>

    </div>

</template>


<style>
/* width */
::-webkit-scrollbar {
    width: 10px;
    background: transparent !important;
}

/* Track */


/* Handle */
::-webkit-scrollbar-thumb {
    background: #f1f1f1 !important;
    border-radius: 100px;
}

html {
    scrollbar-color: transparent;
}
</style>


<!-- <style lagn="css">
.swiper-button-prev,
.swiper-button-next {
    background-color: (#f4f3ee, 10%);
    backdrop-filter: blur(40px);
}

.swiper-button-prev {
    left: -400px !important;
}

.swiper-button-next {
    right: -60px !important;
}

.swiper-wrapper {
    width: 1200px !important;
}
</style> -->
