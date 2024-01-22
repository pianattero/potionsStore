<template>
    <div class="loader-container">
        <div class="loader"></div>
        <h2>Loading...</h2>
    </div>
</template>

<style scoped lang="scss">
@import '@/styles/_mixins.scss';

    .loader-container {
        @include flex(column, nowrap, center, center);
        margin-top: 50px;
        .loader {
        width: 48px;
        height: 48px;
        display: inline-block;
        position: relative;
        transform: rotate(45deg);
        margin-bottom: 20px;
        }
        .loader::before {
        content: '';  
        box-sizing: border-box;
        width: 24px;
        height: 24px;
        position: absolute;
        left: 0;
        top: -24px;
        animation: animloader 4s ease infinite;
        }
        .loader::after {
        content: '';  
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        width: 24px;
        height: 24px;
        background: rgba(19, 17, 17, 0.85);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        animation: animloader2 2s ease infinite;
        }
    
        @keyframes animloader {
        0% {
            box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
        }
        12% {
            box-shadow: 0 24px black, 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
        }
        25% {
            box-shadow: 0 24px black, 24px 24px black, 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
        }
        37% {
            box-shadow: 0 24px black, 24px 24px black, 24px 48px black, 0px 48px rgba(255, 255, 255, 0);
        }
        50% {
            box-shadow: 0 24px black, 24px 24px black, 24px 48px black, 0px 48px black;
        }
        62% {
            box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px black, 24px 48px black, 0px 48px black;
        }
        75% {
            box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px black, 0px 48px black;
        }
        87% {
            box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px black;
        }
        100% {
            box-shadow: 0 24px rgba(255, 255, 255, 0), 24px 24px rgba(255, 255, 255, 0), 24px 48px rgba(255, 255, 255, 0), 0px 48px rgba(255, 255, 255, 0);
        }
        }
    
        @keyframes animloader2 {
        0% {
            transform: translate(0, 0) rotateX(0) rotateY(0);
        }
        25% {
            transform: translate(100%, 0) rotateX(0) rotateY(180deg);
        }
        50% {
            transform: translate(100%, 100%) rotateX(-180deg) rotateY(180deg);
        }
        75% {
            transform: translate(0, 100%) rotateX(-180deg) rotateY(360deg);
        }
        100% {
            transform: translate(0, 0) rotateX(0) rotateY(360deg);
        }
        }
        
    }
</style>