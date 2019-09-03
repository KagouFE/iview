<template>
    <svg :class="svgClass" :style="styles" aria-hidden="true" v-on="$listeners">
        <use :xlink:href="iconName"/>
    </svg>
</template>

<script>
    export default {
        name: 'SvgIcon',
        props: {
            type: {
                type: String,
                required: true
            },
            size: [Number, String],
            className: {
                type: String,
                default: ''
            }
        },
        computed: {
            iconName () {
                return `#icon-${this.type}`
            },
            svgClass () {
                if (this.className) {
                    return 'svg-icon ' + this.className
                } else {
                    return 'svg-icon'
                }
            },
            styles () {
                let style = {};

                if (this.size) {
                    style['width'] = `${this.size}px`;
                    style['height'] = `${this.size}px`;
                }

                return style;
            }
        }
    }
</script>

<style scoped>
    .svg-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
