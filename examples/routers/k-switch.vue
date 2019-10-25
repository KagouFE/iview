<template>
    <div>
        1212
        <k-switch
            size="huge"
            :title="titleText"
            :content="content"
            :ok-text="okText"
            :cancel-text="cancelText"
            :width="450"
            icon="alert"
            :confirmed="true"
            :disableModal="true"
            @confirm="console2"
        >
            <span slot="open">toBeConfirmed</span>
            <span slot="close">confirmed</span>
        </k-switch>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        titleText: 'titleText',
        content: 'content',
        okText: 'okText',
        titleText2: 'titleText2',
        content2: 'content2',
        okText2: 'okText2',
        cancelText: 'cancelText',
      }
    },
    methods: {
      console2(){
        this.agreeDialog = true
        console.log('2311')
      }
    }
  }
</script>
