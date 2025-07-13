<template>
    <div class="body">
        <header class="header">
            <ul class="header__inner-list">
                <li class="header-item" v-for="item, index in useHeaderItems()" :key="index" style="cursor: pointer;">
                    <a :class="{ 'button': item.method }" class="header-item__link" @click="item?.method"
                        :href="item?.to" v-html="item.title">
                    </a>
                </li>
            </ul>
        </header>
        <main class="main">
            <aside class="main__aside aside">
                <section class="aside__section aside__section--relative">
                    <img src="/imageover.png" class="aside__img aside__img--first" alt="symb">
                    <img src="/image.png" class="aside_img aside__img--second" alt="symb">
                </section>
                <section class="aside__section aside__section--second">
                    <div class="section-text" v-for="pepper, index in 3" :key="index">PUT SOME FIRE IN YOUR BELLY
                        <img src="/Group.png" alt="pepper" class="section-text__img" />
                    </div>
                </section>
                <section class="aside__section">
                    <img class="aside__img aside__img--third" src="/sauce.jpg" alt="sauce_table">
                </section>
            </aside>
            <aside class="main__aside aside">
                <section class="aside__section">
                    <h1 class="aside__title">
                        THE FIRST HOT
                        <br> SAUCE MADE FOR
                        <br> COFFEE
                    </h1>
                </section>
                <section class="aside__section">
                    <img src="/sauce2.jpg" class="aside__img aside__img--fourth" alt="sauce_hand">
                </section>
            </aside>
        </main>
    </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

.body>* {
    border: #313131 solid 0.5px;
    max-width: 1395px;
    margin: 0 auto;
}

.body>:not(:first-child) {
    border-top: 0;
}

* {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.header {
    padding-inline: 21px;
}

.logo__image {
    width: 199.25px !important;
    height: 63px;
    margin-left: 47px;
    pointer-events: none;
}

.header__inner-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 27px;
}

.header-item__link {
    color: #222222;
    font-size: 14px;
    line-height: 21.6px;
    padding: 15px 50px;
}

.button {
    background-color: #FB4B4D;
    color: white;
    text-wrap: nowrap;
}

.main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 989px;
}

.main> :first-child {
    border-right: #313131 solid 0.5px;
}

.aside__title {
    line-height: 64.51px;
    font-size: 58px;
    text-align: center;
    padding-block: 24px 15px;
}

.main__aside>.aside__section:not(:last-of-type) {
    border-bottom: #313131 solid 0.5px;
}

.aside__section--relative {
    position: relative;
    width: 697px;
    height: 424px;
}

.aside__img--first,
.aside__img--second {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.aside__img {
    margin: 0 auto;
}

.aside__img--first {
    z-index: 10;
    width: 558;
    height: 259;

}

.aside__img--second {
    width: 657px;
    height: 374;
}

.aside__img--third {
    width: 657px;
    height: 436px;
    margin-top: 20px;
}

.aside__img--fourth {
    margin-top: 20px;
    width: 656px;
    height: 705px;
}

.aside__section--second {
    padding-block: 23.5px;
    width: 697px;
    display: flex;
    flex-direction: row;
    gap: 98px;
    overflow: hidden;
    align-items: center;
    white-space: nowrap;
    box-sizing: border-box;
}

.section-text__img {
    margin-left: 29px;
    display: inline-block;
    width: 68px;
    height: 31px;
}

.section-text {
    text-wrap: nowrap;
}

.section-text {
    animation: move 15s linear infinite;
}

@keyframes move {
    from {
        transform: translateX(calc(50vw + 50%));
    }

    to {
        transform: translateX(calc(-50vw + -50%));
    }
}
</style>