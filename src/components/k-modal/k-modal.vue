<template>
    <Modal
        footer-hide
        v-model="newValue"
        :closable="false"
        :width="width">
        <!--<div slot="header">-->
        <!--<Icon type="ios-information-circle"/>-->
        <!--{{title}}-->
        <!--</div>-->
        <div>
            <Icon type="ios-help-circle" size="28" color="#f90"/>
            <span class="ivu-modal-confirm-head-title">{{title}}</span></div>
        <div class="ivu-modal-confirm-body mt8"><p>{{content}}</p></div>
        <k-split transparent/>
        <div align="right">
            <Button @click="cancel">{{cancelText}}</Button>
            <Button @click="ok">{{okText}}</Button>
        </div>
    </Modal>
</template>

<script>
    import KSplit from '../k-split/split.vue';

    export default {
        components: {KSplit},
        name: 'KModal',
        data () {
            return {
                newValue: false,
                isClose: false,
                isOk: false,
            };
        },
        props: {
            value: {
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
            }
        },
        methods: {
            cancel () {
                this.$emit('cancel', this.newValue);
            },
            ok () {
                this.$emit('ok', this.newValue);
            },
            setValue () {
                this.newValue = this.value;
            },
            emit (val) {
                this.$emit('input', val);
            },
        },
        watch: {
            value: {
                handler: 'setValue',
                immediate: true
            },
            newValue: {
                handler: 'emit',
                immediate: true
            }
        }
    }
</script>

<style>
    .ivu-modal-footer {
        border: 0;
    }

    .title {
        display: inline-block;
        vertical-align: middle;
        margin-left: 12px;
        font-size: 16px;
        color: #17233d;
        font-weight: 700;
    }

    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    .content {
        padding-left: 52px;
        font-size: 14px;
        color: #515a6e;
        position: relative;
    }

    .noBorder {
        margin-top: -20px;
    }


</style>
