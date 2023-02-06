<template>
    <button type="submit">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>

    @import '@/assets/styles.scss';
    button{
        height: 4rem;
        width: 100%;
        background-color: $bgColor;
        color: white;
        border-radius: .7rem;
        border: none;
        font-size: 2rem;
        font-weight: bold;
    }
    button:hover{
        color: $bgColor;
        background-color: transparent;
        border: 1px solid $bgColor;
        transition: .5s ease-in-out;
    }
</style>