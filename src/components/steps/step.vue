<template>
    <div :class="wrapClasses" :style="styles">
        <div :class="[prefixCls + '-tail']"><i></i></div>
        <div :class="[prefixCls + '-head']" :style="bgStyles">
            <div :class="[prefixCls + '-head-inner']" v-if="!svgIcon">
                <span v-if="!icon && currentStatus != 'finish' && currentStatus != 'error'">{{ stepNumber }}</span>
                <span v-else :class="iconClasses"></span>
            </div>
            <div :class="[prefixCls + '-svg-inner']" v-else>
                <svg-icon :type="svgClasses"></svg-icon>
            </div>
        </div>
        <div :class="[prefixCls + '-main']">
            <div :class="[prefixCls + '-title']" :style="bgStyles">
                <slot name="title">{{ title }}</slot>
            </div>
            <div v-if="content || $slots.default" :class="[prefixCls + '-content']">
                <slot>{{ content }}</slot>
            </div>
        </div>
    </div>
</template>
<script>
    import Emitter from '../../mixins/emitter';
    import {oneOf} from '../../utils/assist';

    const prefixCls = 'ivu-steps';
    const iconPrefixCls = 'ivu-icon';

    export default {
        name: 'Step',
        mixins: [Emitter],
        props: {
            status: {
                validator (value) {
                    return oneOf(value, ['wait', 'process', 'finish', 'error']);
                },
            },
            title: {
                type: String,
                default: ''
            },
            content: {
                type: String
            },
            icon: {
                type: String,
                default: null
            },
            svgIcon: {
                type: String
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                stepNumber: '',
                nextError: false,
                total: 1,
                currentStatus: '',
                col: null// add by fen 用于多行展示
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}-item`,
                    `${prefixCls}-status-${this.currentStatus}`,
                    {
                        [`${prefixCls}-custom`]: !!this.icon,
                        [`${prefixCls}-next-error`]: this.nextError
                    }
                ];
            },
            iconClasses () {
                let icon = '';

                if (this.icon) {
                    icon = this.icon;
                } else {
                    if (this.currentStatus == 'finish') {
                        icon = 'ios-checkmark';
                    } else if (this.currentStatus == 'error') {
                        icon = 'ios-close';
                    }
                }

                return [
                    `${prefixCls}-icon`,
                    `${iconPrefixCls}`,
                    {
                        [`${iconPrefixCls}-${icon}`]: icon != ''
                    }
                ];
            },
            svgClasses () {
                // add by wan
                let svg = '';
                if (this.svgIcon) {
                    svg = this.svgIcon;
                    if (this.currentStatus != 'wait') {
                        svg = this.svgIcon + '-complete';
                    }
                }
                return svg;
            },
            styles () {
                // add by fen 用于多行展示
                let ret = {};
                if (this.col === null) {
                    ret = {
                        width: `${1 / this.total * 100}%`
                    };
                } else {
                    ret = {
                        width: `${1 / this.col * 100}%`
                    };
                }
                return ret;
            },
            steps () {
                let parent = this.$parent;
                while (parent.$options.name !== 'Steps') {
                    parent = parent.$parent;
                }
                return parent;
            },
            bgStyles () {
                return {
                    background: this.steps.background
                };
            }
        },
        watch: {
            status (val) {
                this.currentStatus = val;
                if (this.currentStatus == 'error') {
                    this.$parent.setNextError();
                }
            }
        },
        created () {
            this.currentStatus = this.status;
        },
        mounted () {
            this.dispatch('Steps', 'append');
        },
        beforeDestroy () {
            this.dispatch('Steps', 'remove');
        }
    };
</script>
