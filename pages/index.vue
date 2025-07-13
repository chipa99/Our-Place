<script setup lang="ts">
interface ICard {
    img: string;
    title: string;
    subtitle: string;
    description: string;
    colors: string[];
}
interface IFooterLink {
    title: string;
    links: string[];
};

const cards: ICard[] = [{
    img: '/sidebowl.png',
    title: 'side bowls',
    subtitle: 'SET OF 4 - $45',
    description: 'Hand-painted porcelain stackable bowls, designed for plating, eating, and scooping.',
    colors: ['#E09D81', '#CDC7B3', '#595752']
}, {
    img: '/drinkingglass.png',
    title: 'drinking glasses',
    subtitle: 'SET OF 4 - $50',
    description: 'Hand-made and stackable. Made from recycled glass and natural sand. Naturally colored, without dyes.',
    colors: ['#CCBD9E', '#B55900', '#5B653B', '#FFFFFF']
}, {
    img: '/mainplate.png',
    title: 'main plates',
    subtitle: 'SET OF 4 - $50',
    description: 'Hand-painted porcelain plates, stackable and designed for big appetites.',
    colors: ['#E09D81', '#CDC7B3', '#595752']
}, {
    img: '/alwayspan.png',
    title: 'always pan',
    subtitle: '$145',
    description: 'Thoughtfully designed to be the perfect size and shape to do the work of eight pieces of traditional cookware.',
    colors: ['#E09D81', '#748EA1', '#B76D47', '#7D836E', '#C33636', '#CDC7B3', '#595752', '#D3C2CA']
},];



const footerLinks: IFooterLink[] = [
    { title: 'Shop', links: ['Main Plates', 'Side Bowls', 'Drinking Glasses', 'Family Dinner', 'Bundle'] },
    { title: 'Company', links: ['Mission', 'FAQs', 'Contact Us', 'Returns', 'Bulk Orders', 'Careers'] },
    { title: 'Social', links: ['Instagram', 'Twitter'] }
];

const colors = ['#E09D81', '#748EA1', '#B76D47', '#7D836E', '#C33636', '#CDC7B3', '#595752', '#D3C2CA'];

</script>

<template>
    <div class="container">
        <header class="header">
            <section class="header__adding">
                <p class="header__adding-text">SHIPPING AND RETURNS ARE ALWAYS FREE FROM OUR PLACE TO YOURS <img
                        class="header__adding-smile" src="/smile.png" alt="smile"></p>
            </section>
            <nav class="header__nav">
                <div class="header__nav-container links">
                    <a href="" class=" links__link">shop</a>
                    <a href="" class=" links__link">always pan</a>
                </div>
                <div class="header__nav-container links">
                    <a href="#" class=" links__link">
                        <img src="/logo.png" alt="logo">
                    </a>
                </div>
                <div class="header__nav-container links">
                    <a href="" class=" links__link">mission</a>
                    <a href="" class=" links__link">faqs</a>
                    <a href="" class=" links__link links__link--avatar">0</a>
                </div>
            </nav>
        </header>
        <main>
            <section class="hero-section">
                <div class="hero-section__container">
                    <h6 class="hero-section__text--upper">meet the always pan</h6>
                    <h2 class="hero-section__text-main">Your new <br>
                        <span class="hero-section__text-main  hero-section__text-main--span">skillet</span>
                    </h2>
                    <button class="hero-section__button" type="button">shop the always pan</button>
                </div>
                <footer class="hero-section__footer">
                    <p class="hero-section__paragraph">"doing the job of eight traditional cookware <br> pieces"</p>
                    <div class="hero-section__compaines">
                        <img src="/companies/appetit.png" alt="bon-appetit">
                        <img src="/companies/times.png" alt="new-york-times">
                        <img src="/companies/vogue.png" alt="vogue">
                        <img src="/companies/opran.png" alt="the-orpan-magazine">
                    </div>
                </footer>
            </section>
            <section class="info-section">
                <header class="info-section__header">
                    <h1 class="info-section__header-title">Welcome to Our <br> Place</h1>
                    <p class="info-section__header-paragraph">At Our Place, we believe in the power of home-cooking to
                        bring
                        people together. Our <br> collections
                        are
                        new heirlooms from the cultures and places that make up the fabric of the <br> modern
                        multi-ethnic
                        kitchen. We design thoughtfully, source ethically, and produce <br> sustainably because what we
                        make
                        is
                        connected to one another and the earth we share.</p>
                </header>
                <section class="info-section__main">
                    <h2 class="info-section__title">Designed for Everything and Always</h2>
                    <div class="info-section__colors">
                        <span class="info-section__color" :style="`background-color: ` + color + ';'"
                            v-for="color, index in colors" :key="index"> </span>
                    </div>
                    <div class="info-section__pans">
                        <img class="info-section__img" src="/pans.png" alt="pans-separated">
                        <div class="info-section__pan">Modular lid to <br> release & trap steam</div>
                        <div class="info-section__pan">Beechwood spatula & <br> built-in spoon rest</div>
                        <div class="info-section__pan">2 easy-pour <br> spouts</div>
                        <div class="info-section__pan">Nesting steamer basket & <br> colander</div>
                        <div class="info-section__pan">Stay cool handle</div>
                        <div class="info-section__pan">Exclusive, ceramic <br> nonstick made without <br> PFOAs & PTFEs
                        </div>
                    </div>
                </section>
            </section>
            <section class="products-section">
                <h1 class="products-section__title">From curated essentials to <br> limited-run editions.</h1>
                <h3 class="products-section__subtitle">We make products inspired by traditions – and we're <br> starting
                    with
                    one you might be familiar with:
                    Dinner.</h3>
                <footer class="products-section__cards">
                    <div class="products-section__card card" v-for="card, index in cards" :key="index">
                        <div class="card__img-container">
                            <img :src="'/cards' + card.img" :alt="card.title" class="card__img">
                        </div>
                        <div class="card__info">
                            <h5 class="card__title">{{ card.title }}</h5>
                            <h6 class="card__subtitle">{{ card.subtitle }}</h6>
                            <p class="card__description">{{ card.description }}</p>
                        </div>
                        <footer class="card__footer">
                            <span class="card__footer-color" v-for="color, index in card.colors" :key="index"
                                :style="'background-color: ' + color"></span>
                        </footer>
                    </div>
                </footer>
            </section>
            <section class="call-to-action">
                <img src="/actions/action1.jpg" alt="pan with food">
                <div class="call-to-action__center">
                    <h6 class="call-to-action__hashtag">#DirtyDishes</h6>
                    <h2 class="call-to-action__title">A full sink is a sign of a great night. <br> You wash, we'll dry.
                    </h2>
                    <button class="call-to-action_button button">Follow Along</button>
                </div>
                <img src="/actions/action2.jpg" alt="closed pan">
            </section>
        </main>
        <footer class="footer">
            <div class="footer__main">
                <form class="footer__form">
                    <h2 class="footer__title">Keep in touch
                        <img src="/pleasure.png" alt="pleasure" class="footer__img">
                    </h2>
                    <p class="footer__paragraph">Be the first to know about new collections, special events, and
                        what’s going on at Our Place.</p>
                    <div class="footer__input-container">
                        <input class="footer__input" type="email" placeholder="Your email">
                        <button class="footer__submit" type="submit">submit</button>
                    </div>
                </form>
                <aside class="footer__aside">
                    <nav class="footer__navs">
                        <ul class="footer__nav" v-for="(section, i) in footerLinks" :key="i">
                            <li class="footer__nav-title">{{ section.title }}</li>
                            <li class="footer__link" v-for="(item, j) in section.links" :key="j">{{ item }}</li>
                        </ul>
                    </nav>
                    <footer class="footer__aside-footer">
                        <h8 class="footer__aside-title">you're in</h8>
                        <img class="footer__aside-img" src="/flags/usa.png" alt="usa_flag">
                        <img class="footer__aside-img" src="/flags/canada.png" alt="canada_flag">
                    </footer>
                </aside>
            </div>
            <footer class="footer__footer">
                <div class="footer__footer-links">
                    <span class="footer__footer-link">© Our Place 2025</span>
                </div>
                <div class="footer__footer-links">
                    <a href="" class="footer__footer-link">Copyright 2025</a>
                    <a href="" class="footer__footer-link">Privacy</a>
                    <a href="" class="footer__footer-link">Terms</a>
                    <a href="" class="footer__footer-link">Returns</a>
                    <a href="" class="footer__footer-link footer__footer-link--for-disabled">
                        <img class="footer__footer-img" src="/disabled.png" alt="for_disabled">
                    </a>
                </div>
            </footer>
        </footer>
    </div>
</template>

<style lang="scss">
body,
html {
    background-color: #e7e6e6;
}

@mixin textUpper($weight: 400, $size: 12, $line: 22) {
    font-family: Roboto;
    font-weight: $weight;
    font-size: $size + px;
    line-height: $line + px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}

.header {

    &__adding {
        border-radius: 20px 20px 0 0;
        padding-block: 10px;
        background-color: #F0EEDD;
    }

    &__adding-smile {
        display: inline-block;
        padding-bottom: 2px;
        width: 17px;
    }

    &__adding-text {
        color: #670A18;
        @include textUpper;
        text-align: center;
    }

    &__nav {
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 48px;
    }

    &__nav-container {
        display: flex;
        align-items: center;
    }
}

.links {

    display: flex;
    gap: 35px;

    &__link {
        @include textUpper(700, 14);
        transition: all 0.3s ease-in-out;

        &--avatar {
            background-color: #C87B5E;
            border-radius: 17.5px;
            width: 35px;
            height: 35px;
            text-align: center;
            padding-block: 6px;
            @include textUpper(700, 13);
            color: white !important;
        }

        &:is(:not(:nth-of-type(6))):hover {
            color: #6E635A;
        }


    }
}

.hero-section {
    &__footer {
        padding-block: 45px;
        background: #F5F1E9;
    }

    &__paragraph {
        color: #35312E;
        @include textUpper(600, 21, 30);
        text-align: center;
        margin-bottom: 40px;
    }

    &__compaines {
        margin: 0 auto;
        display: flex;
        width: 940px;
        gap: 130px;
        height: 29px;
    }

    &__container {
        background-image: url('/public/backmain.jpg');
        background-size: cover;
        height: 605px;
        display: flex;
        flex-direction: column;
        padding: 170px 0 170px 383px;
    }

    &__text {

        &--upper {
            @include textUpper(400, 16, 16);
            margin-bottom: 18px;
        }

        &-main {
            color: #35312E;
            @include textUpper(400, 50, 50);
            text-transform: none !important;
            margin-bottom: 57px;

            &--span {
                text-decoration: underline;
            }
        }
    }

    &__button {
        width: 248px;
        padding: 20px 30px;
        border-radius: 2px;
        @include textUpper(700, 12, 20.4);
        background-color: #D37657;
        color: white;
        transition: 300ms all ease-in-out;

        &:hover {
            cursor: pointer;
            background-color: #a35c45;
        }
    }


}

.info-section {

    // .info-section__header

    &__header {
        background-color: white;
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
        gap: 135px;
        padding: 135px 350px;
    }

    // .info-section__title

    &__header-title {
        @include textUpper(700, 41, 46.2);
        text-transform: none !important;
        text-align: center;
    }

    // .info-section__paragraph

    &__header-paragraph {
        @include textUpper(400, 16, 26);
        text-transform: none !important;
    }

    // .info-section__main

    &__title {
        @include textUpper(400, 35, 48);
        color: #35312E;
        text-transform: none !important;
        padding: 70px 0 52px;
        text-align: center;
    }

    &__main {
        background-color: #FBF6EA;
    }

    // .info-section__colors

    &__colors {
        display: flex;
        gap: 15px;
        padding: 50px 750px;

    }

    // .info-section__color

    &__color {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        transition: all 300ms ease-in-out;

        &:hover {
            cursor: pointer;
            border: #E09D81 solid 3px;
        }
    }

    &__img {
        margin-inline: auto;
        padding-left: 180px;
        width: 772px;
        height: 583px;
    }

    // .info-section__pans

    &__pans {
        position: relative;
        padding-bottom: 140px
    }

    // .info-section__pan

    &__pan {
        @include textUpper(400, 12, 15);
        text-align: center;
        color: #6E6259;
        position: absolute;

        &:nth-of-type(1) {
            top: 90px;
            left: 550px
        }

        &:nth-of-type(2) {
            top: 36px;
            right: 550px
        }

        &:nth-of-type(3) {
            top: 367px;
            left: 667px
        }

        &:nth-of-type(4) {
            top: 300px;
            right: 550px
        }

        &:nth-of-type(5) {
            top: 470px;
            right: 550px
        }

        &:nth-of-type(6) {
            top: 490px;
            left: 580px
        }
    }
}



.products-section {
    background: white;

    &__title {
        @include textUpper(700, 33, 55);
        text-align: center;
        color: #35312E;
        text-transform: none;
        padding-block: 80px 18px;
    }

    &__subtitle {
        @include textUpper(400, 18, 29);
        text-align: center;
        color: #4F463F;
        text-transform: none;
    }

    // .products-section__cards

    &__cards {
        padding: 80px 48px;
        display: grid;
        grid-template-columns: repeat(4, 3fr);
        gap: 60px;
    }

    // .products-section__card
}

.card {

    // .card__img-container

    &__img-container {
        background-color: #F7F3EB;
        width: 400px;
        height: 360px;
        border-radius: 50%;
        position: relative;
    }

    // .card__img

    &__img {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 373px;


    }

    // .card__info

    &__info {

        padding-block: 15px 30px;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 6px;
    }

    // .card__title

    &__title {
        @include textUpper(400, 14, 24);
        color: #35312E;
        text-align: center;
    }

    // .card__subtitle

    &__subtitle {
        @include textUpper(400, 14, 21);
        color: #6E635A;
        text-align: center;
    }

    // .card__description

    &__description {
        @include textUpper(400, 11, 20);
        color: #6E635A;
        width: 210px;
        text-align: center;
    }

    // .card__footer

    &__footer {
        display: flex;
        flex-direction: row;
        gap: 20px
    }
}


.call-to-action {

    display: grid;
    grid-template-columns: repeat(3, 4fr);

    // .call-to-action__center

    &__center {
        padding-top: 109px;
        background-color: #F5F1E9;
    }

    // .call-to-action__hashtag

    &__hashtag {
        @include textUpper(400, 11, 20.4);
        text-align: center;
        color: #35312E;
        margin-bottom: 33px;
    }

    // .call-to-action__title

    &__title {
        text-align: center;
        @include textUpper(700, 24, 46.08);
        text-transform: none !important;
        color: #35312E;
        margin-bottom: 61px;
    }
}

.call-to-action_button {
    border: #AAA0984A solid 1px;
    border-radius: 4px;
    background-color: white;
    padding: 20px 41px;
    display: block;
    margin: 0 auto;
    @include textUpper(700, 12, 12);
    transition: 300ms all ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: #4642404a;
        color: white;
    }
}

/* .button {}    */

.footer {

    &__main {
        background-color: #6C674D;
        padding: 80px 143px 114px 143px;
        display: grid;
        grid-template-columns: repeat(2, 6fr);
    }

    &__form {
        display: flex;
        flex-direction: column;
    }

    &__title {
        @include textUpper(700, 23, 57.8);
        text-transform: none;
        color: #F5F1E9;
        margin-bottom: 11px
    }

    &__img {
        display: inline-block;
        width: 35px;
    }

    &__paragraph {
        @include textUpper(400, 14, 24);
        text-transform: none;
        color: #FCFAF6;
        margin-bottom: 62px
    }

    &__input {
        position: absolute;
        width: 100%;
        height: 100%;
        outline: none;
        padding-left: 20px;

        &::placeholder {
            color: #00000080;
            @include textUpper(700, 13, 57.8);
            text-transform: none;
        }

        &-container {
            border-radius: 6px;

            position: relative;
            background-color: #FCFAF6;
            width: 347px;
            height: 60px;
            border: 2.5px solid #FCFAF6;
            transition: border-color 150ms ease-in-out;

            &:focus-within {
                border-color: #9e9e9e;
            }
        }
    }

    &__submit {
        position: absolute;
        right: 0;
        padding-inline: 20px;
        height: 100%;
        @include textUpper(700, 12);
        color: #4F463F;
        background-color: #FCFAF6;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;

        &:hover {
            cursor: pointer;
        }
    }

    &__aside {
        margin-left: auto;
        display: flex;
        flex-direction: column;
    }

    // .footer__navs

    &__navs {
        display: grid;
        grid-template-columns: repeat(3, 4fr);
        gap: 25px;
        margin-bottom: 50px;
    }

    // .footer__nav

    &__nav {


        &>*:not(:last-child) {
            margin-bottom: 15px
        }

        &-title {
            @include textUpper(700, 23, 21);
            text-transform: none;
            color: #F5F1E9;

        }
    }

    // .footer__link

    &__link {
        @include textUpper(400, 15, 30.6);
        text-transform: none;
        color: #F5F1E999;
        transition: color 150ms ease-in-out;

        &:hover {
            cursor: pointer;
            color: white;
        }
    }

    // .footer__aside-footer

    &__aside-footer {}

    // .footer__aside-title

    &__aside-title {
        @include textUpper(700, 12, 21);
        color: #F5F1E9;
        display: block;
        margin-bottom: 10px
    }

    // .footer__aside-img

    &__aside-img {
        margin-right: 24px;
        display: inline;

        &:hover {
            cursor: pointer;
        }
    }

    // .footer__footer

    &__footer {
        background-color: #807C62;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 21px 143px;
        padding-right: 195px !important;
    }

    // .footer__footer-links

    &__footer-links {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    // .footer__footer-link

    &__footer-link {
        color: #FCFAF680;
        @include textUpper(400, 14, 27.2);
        text-transform: none;
        transition: color 150ms ease-in-out;

        &--for-disabled {
            background-color: #FCFAF6;
            border-radius: 5px;
            padding-inline: 31px;
            text-align: center;
            display: flex;
            height: 20px;
            align-items: center;
        }

        &:hover {
            color: white
        }
    }

    // .footer__footer-img

    &__footer-img {
        display: inline-flex;
    }
}
</style>