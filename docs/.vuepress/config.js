module.exports = {
    title: 'NZETA',
    themeConfig: {
        sidebar: [
            {
                title: 'Введение',
                path: '/',
            },
            {
                title: 'Наконечники',
                path: '/nakonechniki/',
                sidebarDepth: 0,
                children: [
                    {
                        title: 'Наконечники и соединители под опрессовку',
                        path: '/nakonechniki/1/',
                        collapsable: false,
                        children: [
                            {
                                title: 'Медные наконечники',
                                path: '/nakonechniki/1/1/',
                                collapsable: false,
                                children: [
                                    ['/nakonechniki/1/1/1', 'Т (медные) ГОСТ'],
                                    ['/nakonechniki/1/1/2', 'ТМЛ (медные луженые) ГОСТ'],
                                    ['/nakonechniki/1/1/3', 'JG'],
                                ]
                            },
                            {
                                title: 'Медные гильзы',
                                path: '/nakonechniki/1/2/',
                                collapsable: false,
                                children: [
                                    ['/nakonechniki/1/2/1', 'ГМ (медные)'],
                                    ['/nakonechniki/1/2/2', 'ГМЛ (медные луженые)'],
                                ]
                            },
                            {
                                title: 'Алюминиевые гильзы ГА',
                                path: '/nakonechniki/1/3/'
                            },
                            {
                                title: 'Алюминиевые гильзы ТА',
                                path: '/nakonechniki/1/4/'
                            },
                            {
                                title: 'Медно-алюминиевые наконечники ТАМ',
                                path: '/nakonechniki/1/5/'
                            },
                        ]
                    },
                    {
                        title: 'Наконечники медные под пайку П',
                        path: '/nakonechniki/2/'
                    }
                ]
            },
            {
                title: 'Болтовые',
                path: '/boltovie/',
                children: [
                    '/test/test1'
                ]
            },
            {
                title: 'Муфты',
                path: '/mufti/'
            },
            {
                title: 'Термоусадка',
                path: '/termousadka/'
            },
            {
                title: 'Вводы',
                path: '/vvodi/'
            },
            {
                title: 'Коробки',
                path: '/korobki/'
            },
            {
                title: 'Металлорукав',
                path: '/metalorukav/'
            },
            {
                title: 'Фитинги',
                path: '/fitingi/'
            },
            {
                title: 'Сжимы',
                path: '/szimi/'
            },
            {
                title: 'Бирки',
                path: '/birki/',
            },
            {
                title: 'Заземление',
                path: '/zazemlenie/'
            }
        ]
    }
}