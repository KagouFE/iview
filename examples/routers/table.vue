<!--<template>-->
<!--    <div>-->
<!--        <Table tooltip-theme="light" ref="currentRowTable" :columns="columns3" :data="data1" :draggable="true" @on-drag-drop="onDragDrop"></Table>-->
<!--        <Button @click="handleClearCurrentRow">Clear</Button>-->
<!--    </div>-->
<!--</template>-->
<!--<script>-->
<!--    export default {-->
<!--        data () {-->
<!--            return {-->
<!--                columns3: [-->
<!--                    {-->
<!--                        type: 'index',-->
<!--                        width: 60,-->
<!--                        align: 'center',-->
<!--                        indexMethod (row) {-->
<!--                            return row._index;-->
<!--                        }-->
<!--                    },-->
<!--                    {-->
<!--                        title: 'Name',-->
<!--                        key: 'name'-->
<!--                    },-->
<!--                    {-->
<!--                        title: 'Age',-->
<!--                        key: 'age'-->
<!--                    },-->
<!--                    {-->
<!--                        title: 'Address',-->
<!--                        key: 'address',-->
<!--                        tooltip: true-->
<!--                    }-->
<!--                ],-->
<!--                data1: [-->
<!--                    {-->
<!--                        name: 'John Brown',-->
<!--                        age: 18,-->
<!--                        address: '自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，分别指当前行数据，当前列数据，当前行索引，详见示例。自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，分别指当前行数据，当前列数据，当前行索引，详见示例。自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，分别指当前行数据，当前列数据，当前行索引，详见示例。',-->
<!--                        date: '2016-10-03'-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'Jim Green',-->
<!--                        age: 24,-->
<!--                        address: 'London No. 1 Lake Park自定义渲染列，使用 Vue 的 Render 函',-->
<!--                        date: '2016-10-01'-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'Joe Black',-->
<!--                        age: 30,-->
<!--                        address: 'Sydney No. 1 Lake Park',-->
<!--                        date: '2016-10-02'-->
<!--                    },-->
<!--                    {-->
<!--                        name: 'Jon Snow',-->
<!--                        age: 26,-->
<!--                        address: 'Ottawa No. 2 Lake Park',-->
<!--                        date: '2016-10-04'-->
<!--                    }-->
<!--                ]-->
<!--            }-->
<!--        },-->
<!--        methods: {-->
<!--            handleClearCurrentRow () {-->
<!--                this.$refs.currentRowTable.clearCurrentRow();-->
<!--            },-->
<!--            onDragDrop(a,b){-->
<!--                console.log(a,b);-->
<!--                this.data1.splice(b,1,...this.data1.splice(a, 1 , this.data1[b]));-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->
<template>
    <div class="hello" id="content">
        <Table :columns="columns10" :data="data9" id="myTable"></Table>
    </div>
</template>
<script>
export default {
    name: 'HelloWorld',
    components: {},
    data () {
        return {
            columns10: [
                {
                    type: 'selection',
                    width: 60,
                    align: 'center'
                },
                {
                    title: 'Name',
                    key: 'name'
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'Address',
                    key: 'address'
                },
                {
                    type: 'expand',
                    openIcon: 'gy-add',
                    closeIcon: 'gy-reduce',
                    width: 150,
                    // width: 50,
                    render: (h, params) => {
                        return h('div', {
                            props: {
                                row: params.row
                            }
                        });
                    }
                }
            ],
            data9: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    job: 'Data engineer',
                    interest: 'badminton',
                    birthday: '1991-05-14',
                    book: 'Steve Jobs',
                    movie: 'The Prestige',
                    music: 'I Cry',
                    _checked: true
                },
                {
                    name: 'Jim Green',
                    age: 25,
                    address: 'London No. 1 Lake Park',
                    job: 'Data Scientist',
                    interest: 'volleyball',
                    birthday: '1989-03-18',
                    book: 'My Struggle',
                    movie: 'Roman Holiday',
                    music: 'My Heart Will Go On'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    job: 'Data Product Manager',
                    interest: 'tennis',
                    birthday: '1992-01-31',
                    book: 'Win',
                    movie: 'Jobs',
                    music: 'Don’t Cry'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    job: 'Data Analyst',
                    interest: 'snooker',
                    birthday: '1988-7-25',
                    book: 'A Dream in Red Mansions',
                    movie: 'A Chinese Ghost Story',
                    music: 'actor'
                }
            ]
        };
    }
};
</script>

