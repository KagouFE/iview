<template>
    <span
        tabindex="0"
        :class="wrapClasses"
        @click="toggle"
        @keydown.space="toggle"
    >
        <input type="hidden" :name="name" :value="currentValue">
        <span :class="innerClasses">
            <slot name="open" v-if="currentValue === trueValue"></slot>
            <slot name="close" v-if="currentValue === falseValue"></slot>
        </span>
        <k-modal
            v-model="showModal"
            @on-cancel="cancel"
            @on-ok="ok"
            :title="title"
            :content="content"
            :ok-text="okText"
            :cancel-text="cancelText"
            :width="width"
            :icon="icon"
        >
        </k-modal>
    </span>
</template>
<script>
    import {oneOf} from '../../utils/assist';
    import Emitter from '../../mixins/emitter';
    import KModal from '../k-modal/k-modal.vue';

    const prefixCls = 'ivu-switch';

    export default {
        components: {KModal},
        name: 'KSwitch',
        mixins: [Emitter],
        props: {
            value: {
                type: [String, Number, Boolean],
                default: false
            },
            trueValue: {
                type: [String, Number, Boolean],
                default: true
            },
            falseValue: {
                type: [String, Number, Boolean],
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            size: {
                validator (value) {
                    return oneOf(value, ['large', 'small', 'default', 'big', 'huge']);
                },
                default () {
                    return !this.$IVIEW || this.$IVIEW.size === '' ? 'default' : this.$IVIEW.size;
                }
            },
            name: {
                type: String
            },
            loading: {
                type: Boolean,
                default: false
            },
            confirmed: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
            },
            content: {
                type: String,
                default: 'Are you sure you want to leave? There are unsaved changes. If you leave, your changes will be lost.'
            },
            okText: {
                type: String,
                default: 'ok'
            },
            cancelText: {
                type: String,
                default: 'cancel'
            },
            width: {
                type: Number,
                default: 416
            },
            icon: {
                type: String,
                default: 'alert'
            }
        },
        data () {
            return {
                currentValue: this.value,
                showModal: false,
            };
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-checked`]: this.currentValue === this.trueValue,
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-loading`]: this.loading,
                    }
                ];
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            }
        },
        methods: {
            ok () {
                this.next();
            },
            cancel () {
                this.showModal = false;
            },
            next () {
                const checked = this.currentValue === this.trueValue ? this.falseValue : this.trueValue;

                this.currentValue = checked;
                this.$emit('input', checked);
                this.$emit('on-change', checked);
                this.dispatch('FormItem', 'on-form-change', checked);
                this.showModal = false;
            },
            toggle (event) {
                event.preventDefault();
                if (this.disabled || this.loading) {
                    return false;
                }
                if (this.confirmed) {
                    this.showModal = true;
                } else {
                    this.next();
                }
            }
        },
        watch: {
            value (val) {
                if (val !== this.trueValue && val !== this.falseValue) {
                    throw 'Value should be trueValue or falseValue.';
                }
                this.currentValue = val;
            }
        }
    };
</script>
