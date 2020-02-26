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
                    {
                        title: 'Наконечники',
                        path: '/boltovie/1/',
                        collapsable: false,
                        children: [
                            ['/boltovie/1/1', 'Наконечники с рядным расположением болтов до 10кВ'],
                            ['/boltovie/1/2', 'Наконечники с V-образным расположением болтов до 10кВ'],
                            ['/boltovie/1/3', 'Наконечники с V-образным расположением болтов до 35кВ (гальваника)'],
                        ]
                    },
                    {
                        title: 'Соединители',
                        path: '/boltovie/2/',
                        collapsable: false,
                        children: [
                            ['/boltovie/2/1', 'Соединители с рядным расположением болтов до 10кВ'],
                            ['/boltovie/2/2', 'Соединители с V-образным расположением болтов до 10кВ'],
                            ['/boltovie/2/3', 'Соединители с V-образным расположением болтов до 35кВ (гальваника)'],
                        ]
                    },
                ]
            },
            {
                title: 'Муфты',
                path: '/mufti/'
            },
            {
                title: 'Термоусадка',
                path: '/termousadka/',
                children: [
                    ['/termousadka/1', 'Уплотнитель кабельных проходов УКПт'],
                    ['/termousadka/2', 'Трубки с клеем ТТс ТТт'],
                    ['/termousadka/3', 'Термоусаживаемая перчатка'],
                    ['/termousadka/4', 'Кожух ремонтный (Ремонтная манжета)'],
                    {
                        title: 'Трубки без клея',
                        path: '/termousadka/1/',
                        collapsable: false,
                        children: [
                            ['/termousadka/1/1', 'Трубка ТУТ'],
                            ['/termousadka/1/2', 'Термоусадочные трубки ТУТнг']
                        ]
                    }
                ]
            },
            {
                title: 'Вводы',
                path: '/vvodi/',
            },
            {
                title: 'Коробки',
                path: '/korobki/',
                children: [
                    {
                        title: 'Со ступенчатыми кабельными вводами (IP 43)',
                        path: '/korobki/1/',
                        collapsable: false,
                        children: [
                            ['/korobki/1/1', 'КЗНА'],
                            ['/korobki/1/2', 'КМ-43']
                        ]
                    },
                    {
                        title: 'С кабельными вводами и заглушками (IP 54, IP 65)',
                        path: '/korobki/2/',
                        collapsable: false,
                        children: [
                            ['/korobki/2/1', 'КЗНС'],
                            ['/korobki/2/2', 'КС'],
                            ['/korobki/2/3', 'КМ-65'],
                            ['/korobki/2/4', 'У614, У615']
                        ]
                    },
                    {
                        title: 'Для металлорукава (IP 54)',
                        path: '/korobki/3/',
                        collapsable: false,
                        children: [
                            ['/korobki/3/1', 'КСМР']
                        ]
                    },
                    {
                        title: 'Для стальных труб (IP 31, IP 54)',
                        path: '/korobki/4/',
                        collapsable: false,
                        children: [
                            ['/korobki/4/1', 'ККМТ (IP 31)'],
                            ['/korobki/4/2', 'КККМА (IP 54)']
                        ]
                    }
                ]
            },
            {
                title: 'Металлорукав',
                path: '/metalorukav/',
                children: [
                    {
                        title: 'Металлорукав в ПВХ изоляции',
                        path: '/metalorukav/1/',
                        collapsable: false,
                        children: [
                            ['/metalorukav/1/1', 'МРПИ'],
                            ['/metalorukav/1/2', 'Шланг ШЭМ'],
                            ['/metalorukav/1/3', 'РЗ-ЦП'],
                            ['/metalorukav/1/4', 'МПГ']
                        ]
                    },
                    {
                        title: 'Металлорукав без ПВХ изоляции',
                        path: '/metalorukav/2/',
                        collapsable: false,
                        children: [
                            ['/metalorukav/2/1', 'РЗ-Ц'],
                            ['/metalorukav/2/2', 'РЗ-ЦХ'],
                            ['/metalorukav/2/3', 'РЗ-ЦА'],
                            ['/metalorukav/2/4', 'РЗ-Н']
                        ]
                    },
                    {
                        title: 'Изделия из металлорукава',
                        path: '/metalorukav/3/',
                        collapsable: false,
                        children: [
                            ['/metalorukav/3/1', 'Гибкие вводы К1080-К1088'],
                            ['/metalorukav/3/2', 'Комплекты ВГ']
                        ]
                    }
                ]
            },
            {
                title: 'Фитинги',
                path: '/fitingi/',
                children: [
                    {
                        title: 'Металлорукав-металлорукав',
                        path: '/fitingi/1/',
                        collapsable: false,
                        children: [
                            ['/fitingi/1/1', 'Муфты соединительные МСМ IP54'],
                            ['/fitingi/1/2', 'Муфты соединительные МСР IP67'],
                        ]
                    },
                    {
                        title: 'Металлорукав-труба',
                        path: '/fitingi/2/',
                        collapsable: false,
                        children: [
                            ['/fitingi/2/1', 'Муфты трубные МТ IP43'],
                            ['/fitingi/2/2', 'Муфты трубные РКв IP54'],
                            ['/fitingi/2/3', 'Адаптеры цанговые АТР IP54'],
                            ['/fitingi/2/4', 'Муфты вводные МВВ IP67'],
                            ['/fitingi/2/5', 'Муфты соединительные МТР IP67']
                        ]
                    },
                    {
                        title: 'Металлорукав-корпус',
                        path: '/fitingi/3/',
                        collapsable: false,
                        children: [
                            ['/fitingi/3/1', 'Муфты вводные РКн IP54'],
                            ['/fitingi/3/2', 'Муфты вводные РКн-90° IP54'],
                            ['/fitingi/3/3', 'Муфты вводные МВН IP54'],
                            ['/fitingi/3/4', 'Муфты вводные МВ IP43'],
                            ['/fitingi/3/5', 'Муфты вводные МВпнг IP40'],
                        ]
                    },
                    {
                        title: 'Труба-корпус',
                        path: '/fitingi/4/',
                        collapsable: false,
                        children: [
                            ['/fitingi/4/1', 'Адаптеры цанговые АТК IP54'],
                            ['/fitingi/4/2', 'Муфты вводные МТК IP67'],
                            ['/fitingi/4/3', 'Патрубки вводные стальные IP65'],
                        ]
                    },
                    {
                        title: 'Труба-труба',
                        path: '/fitingi/5/',
                        collapsable: false,
                        children: [
                            ['/fitingi/5/1', 'Адаптеры цанговые АТТ IP43'],
                            ['/fitingi/5/2', 'Муфты трубные ТР IP43'],
                            ['/fitingi/5/3', 'Муфты соединительные МТТ IP67'],
                            ['/fitingi/5/4', 'Муфты соединительные МТКВ IP67']
                        ]
                    },
                    {
                        title: 'Крепежные изделия для металлорукава и труб',
                        path: '/fitingi/6/',
                        collapsable: false,
                        children: [
                            ['/fitingi/6/1', 'Оконцеватель для металлорукава'],
                            ['/fitingi/6/2', 'Скобы двухлапковые СД'],
                            ['/fitingi/6/3', 'Скобы однолапковые СО'],
                            ['/fitingi/6/4', 'Хомуты U-образные'],
                            ['/fitingi/6/5', 'Втулки трубные'],
                            ['/fitingi/6/6', 'Гайки заземляющие'],
                        ]
                    }
                ]
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